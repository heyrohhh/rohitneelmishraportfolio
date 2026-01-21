output "public_subnet_1_id" {
  value = aws_subnet.public_subnet_1.id
}

output "security_group_id" {
  value = aws_security_group.web_seg.id
}