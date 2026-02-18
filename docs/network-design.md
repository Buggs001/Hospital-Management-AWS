# Network Design

## VPC CIDR
10.0.0.0/16

## Public Subnets
- Application Load Balancer
- Bastion Host

## Private Subnets
- Backend EC2
- Amazon RDS

## Internet Access
- Public resources via Internet Gateway
- Private resources use NAT Gateway for outbound access

## Security Groups

### ALB
- Allow HTTP (80) from internet

### Bastion
- Allow SSH (22) from my IP

### Application Server
- Allow port 5000 from ALB
- Allow SSH from Bastion

### RDS
- Allow MySQL (3306) only from Application Server
