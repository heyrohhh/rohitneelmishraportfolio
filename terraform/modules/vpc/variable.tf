#variables

variable "vpc_cidr" {
     type = string
     default = "10.0.0.0/16"
}

variable "vpc_name" {
    type = string
    default = "Portfolio-project"
}

variable "vpc_dns_hostnames" {
    type = bool
    default = true
}

variable "vpc_dns_support" {
    type = bool
    default = true
}

variable "vpc_subnet_1" {
    type = string
    default = "10.0.1.0/24"
}

variable "vpc_subnet_2" {
    type = string
    default = "10.0.2.0/24"
}

variable "vpc_availablity_zone" {
    type = list(string)
    default = ["us-east-1a", "us-east-1b", "us-east-1c"]
}

variable "vpc_sg_name" {
    type = string
    default = "allow_web_traffic"
}

