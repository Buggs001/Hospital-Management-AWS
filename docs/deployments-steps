# Deployment Steps

## 1. VPC Setup
- Created custom VPC (10.0.0.0/16)
- Created public and private subnets across Availability Zones
- Attached Internet Gateway

## 2. Networking Configuration
- Public route table: 0.0.0.0/0 → Internet Gateway
- Private route table: 0.0.0.0/0 → NAT Gateway

## 3. Bastion Host
- Launched Bastion in public subnet
- Allowed SSH access from my IP
- Used Bastion to access private EC2

## 4. Backend Deployment
- Launched EC2 in private subnet
- Installed Node.js and dependencies
- Used PM2 to run application

## 5. Load Balancer
- Created Application Load Balancer
- Configured target group on port 5000
- Added health check endpoint /health

## 6. Frontend Deployment
- Uploaded static files to S3
- Enabled static website hosting
- Configured frontend to call ALB endpoint

## 7. Database Setup
- Created Amazon RDS (MySQL) in private subnet
- Allowed access only from application server security group
- Created hospital database and appointments table

## 8. Testing
- Verified ALB health status
- Tested appointment submission
- Confirmed data storage in RDS
