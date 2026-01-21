🧠 AWS Portfolio Deployment – Failures, Fixes, and Hard Rules

This document records real production errors faced during deployment and the exact lessons learned, so they are not repeated.

This project uses:

AWS EC2 (Amazon Linux 2023)

Docker + Nginx

Certbot (Let’s Encrypt)

Ansible

GitHub Actions

Terraform

1️⃣ ERROR: Docker container exits immediately (Exited 1)
Symptom
docker ps -a
portfolio-nginx   Exited (1)

Root Cause

Nginx was started with SSL configuration before certificates existed.

ssl_certificate /etc/letsencrypt/live/.../fullchain.pem;


Files did not exist → nginx crashed → port 80 never opened.

Fix

Never start nginx with SSL config before certbot runs.

Rule

SSL nginx config must be applied only after certificates exist

2️⃣ ERROR: Certbot webroot fails with “connection refused”
Symptom
Detail: Fetching http://domain/.well-known/acme-challenge/...: Connection refused

Root Cause

Nothing was listening on port 80 at the time of validation:

nginx container was not running

or it crashed immediately

Fix

Start HTTP-only nginx first, verify manually, then run certbot.

Rule

Webroot validation REQUIRES a running HTTP server
Certbot does NOT start one for you

3️⃣ ERROR: Port 80 already allocated (docker-proxy)
Symptom
Bind for 0.0.0.0:80 failed: port is already allocated


But:

docker ps
# empty

Root Cause

Stale docker-proxy processes after forced container removals.

Fix

Restart Docker daemon to clean network state.

sudo systemctl restart docker

Rule

Docker daemon restart is a recovery step, not normal workflow

4️⃣ ERROR: Assuming “nothing is running” without checking ports
Symptom

Repeated failures even after “cleaning” containers.

Root Cause

Ports are global resources. Containers being gone does NOT mean ports are free.

Fix

Always verify:

sudo ss -lntp | grep :80

Rule

Never run Ansible if port 80 is not free or clearly owned

5️⃣ ERROR: Baking nginx.conf into Docker image
Symptom

Image rebuild required for config changes

SSL paths broke image startup

Environment-specific logic inside image

Root Cause

Confusing build-time vs run-time responsibilities.

Fix

Keep image generic. Mount nginx config at runtime via Ansible.

Rule

Docker image must be environment-agnostic
Config belongs to Ansible, not Dockerfile

6️⃣ ERROR: Using one nginx.conf for both HTTP and HTTPS
Symptom

nginx crashes during initial deployment

certbot never succeeds

Root Cause

Single config referenced SSL files that didn’t exist yet.

Fix

Use two configs:

nginx-http.conf

nginx-https.conf

Rule

HTTP phase and HTTPS phase must be separate

7️⃣ ERROR: Running certbot before verifying HTTP manually
Symptom

Certbot repeatedly failed with no obvious reason.

Root Cause

Skipped manual verification.

Fix

Always test in browser first:

http://domain

Rule

If HTTP does not work in browser, SSL will NEVER work

8️⃣ ERROR: Restarting Docker for every change
Symptom

Belief that Docker restart is part of deployment.

Root Cause

Confusing recovery actions with normal workflow.

Fix

Use docker_container recreate: yes for normal updates.

Rule

Docker restart = emergency cleanup
Ansible recreate = normal deployment

9️⃣ FINAL CORRECT DEPLOYMENT ORDER (NON-NEGOTIABLE)

CI builds generic HTTP-only image

Start nginx container on port 80

Verify HTTP manually

Run certbot (webroot)

Apply HTTPS config

Restart container with 443

Verify HTTPS

Rule

HTTP → SSL → HTTPS
Any other order WILL FAIL

10️⃣ Mental Model to Remember

Docker builds binaries, not environments
Ansible manages state, not guesses
Certbot needs a live web server
Ports are global, containers are not
Restarting Docker means something went wrong earlier


#Architechture


graph TD
    subgraph "Local Development"
        A[React Code] --> B[Git Push]
    end

    subgraph "GitHub Actions (CI/CD)"
        B --> C{Trigger Workflow}
        C --> D[Docker Multi-stage Build<br/>(React build inside Docker)]
        D --> E[Push Image to Docker Hub]
    end

    subgraph "AWS Infrastructure (Terraform - One Time)"
        T[VPC / Subnet / SG] --> I[EC2 Instance]
    end

    subgraph "Configuration & Deployment (Ansible)"
        E --> J[Install Docker & Nginx]
        I --> J
        J --> K[Run Container on HTTP]
        K --> M[SSL Setup via Certbot]
        M --> N[Restart Nginx with HTTPS]
    end

    N --> L((Live Portfolio Website))

    style L fill:#f9f,stroke:#333,stroke-width:4px
    style T fill:#FF9900,color:white

