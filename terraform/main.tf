
module "vpc" {
    source = "./modules/vpc"
}

module "ec2" {
    source = "./modules/ec2"
    ec2_subnet = module.vpc.public_subnet_1_id
    sg_id = module.vpc.security_group_id
}