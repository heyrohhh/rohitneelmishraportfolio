
variable "ec2_ami" {
    type = string
    default = "ami-07ff62358b87c7116"
}

variable "ec2_instance_type" {
    type = string
    default = "t3.micro"
}

variable "ec2_subnet" {
    type = string
}

variable "sg_id" {
    type = string
}

variable "key_name" {
    type = string
    default = "Portfolio_key"
}
