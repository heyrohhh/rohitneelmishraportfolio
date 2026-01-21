#instance

resource "aws_instance" "portfolio_server" {
    ami = var.ec2_ami
    instance_type = var.ec2_instance_type 
    subnet_id = var.ec2_subnet
    vpc_security_group_ids = [var.sg_id]
    key_name = var.key_name
    root_block_device {
                volume_size = 20
                volume_type = "gp3"
    } 

}

output "instance_public_ip" {
    value = aws_instance.portfolio_server.public_ip
}