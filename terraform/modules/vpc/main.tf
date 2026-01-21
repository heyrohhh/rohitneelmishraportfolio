# creating vpc

resource "aws_vpc" "main_vpc" {
    cidr_block = var.vpc_cidr
    instance_tenancy = "default"
    enable_dns_hostnames = var.vpc_dns_hostnames
    enable_dns_support = var.vpc_dns_support

    tags = {
        Name = var.vpc_name
    }
}

#creating internet Gateway
resource "aws_internet_gateway" "igw" {
    vpc_id = aws_vpc.main_vpc.id

    tags = {
        Name = "${var.vpc_name}-igw"
    }
}

resource "aws_subnet" "public_subnet_1" {
    vpc_id = aws_vpc.main_vpc.id
    cidr_block = var.vpc_subnet_1
    availability_zone = var.vpc_availablity_zone[0]
    map_public_ip_on_launch = true
    tags = {
        Name = "${var.vpc_name}-Public_subnet_1"
    }
}

resource "aws_subnet" "public_subnet_2" {
    vpc_id = aws_vpc.main_vpc.id
    cidr_block = var.vpc_subnet_2
    availability_zone = var.vpc_availablity_zone[1]
    map_public_ip_on_launch = true

    tags = {
        Name = "${var.vpc_name}-Public_subnet_2"
    }
}

#creating route table & root association

resource "aws_route_table" "public_rt" {
    vpc_id = aws_vpc.main_vpc.id
  
    route {
             cidr_block = "0.0.0.0/0"
             gateway_id = aws_internet_gateway.igw.id
    }
}

resource "aws_route_table_association" "a" {
     subnet_id = aws_subnet.public_subnet_1.id
     route_table_id = aws_route_table.public_rt.id
}


#security group

resource "aws_security_group" "web_seg" {
    name =  var.vpc_sg_name
    description = "Allow ssh, http, https traffic"
    vpc_id = aws_vpc.main_vpc.id

   ingress {
     description = "ssh"
     from_port = 22
     to_port = 22
     protocol = "tcp"
     cidr_blocks = ["0.0.0.0/0"]
   }

   ingress {
       description = "http"
       from_port = 80
       to_port = 80
       protocol = "tcp"
       cidr_blocks = ["0.0.0.0/0"]
   }

   ingress {
       description = "https"
       from_port = 443
       to_port = 443
       protocol = "tcp"
       cidr_blocks = ["0.0.0.0/0"]
   }

    egress {
        from_port = 0
        to_port = 0
        protocol = "-1"
        cidr_blocks = ["0.0.0.0/0"]
    }
}

