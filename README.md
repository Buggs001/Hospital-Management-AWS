# AWS 3-Tier Hospital Network Deployment

## Cloud Network Architecture Project (Network Engineer Focus)

This project demonstrates a secure 3-tier architecture deployed on AWS with a strong focus on network design, security, and traffic flow.

The application allows users to book hospital appointments through a static website hosted on Amazon S3. User requests are routed through an Application Load Balancer to a backend running on a private EC2 instance. Appointment data is stored securely in Amazon RDS.

This project highlights practical cloud networking concepts such as VPC design, public/private subnet architecture, NAT configuration, Bastion access, and secure database connectivity.

---

## Architecture

![Architecture Diagram](architecture/architecture-aws.png)

---

## AWS Services Used

- Amazon VPC (10.0.0.0/16)
- Public and Private Subnets
- Internet Gateway (IGW)
- NAT Gateway
- Route Tables
- Security Groups
- Bastion Host
- Amazon S3 (Static Website Hosting)
- Application Load Balancer (ALB)
- Amazon EC2 (Node.js Backend)
- Amazon RDS (MySQL)
- PM2 (Process management)

---

## Network Design

### Public Subnets
- Application Load Balancer
- Bastion Host
- Internet access through Internet Gateway

### Private Subnets
- Backend EC2 instance
- Amazon RDS database
- No public IP addresses assigned

### Routing Configuration

Public Route Table  
0.0.0.0/0 → Internet Gateway

Private Route Table  
0.0.0.0/0 → NAT Gateway

This allows private instances to access the internet securely without being exposed publicly.

---

## Traffic Flow

User Flow:
User Browser → S3 Static Website → ALB → Private EC2 → Amazon RDS

Admin Access:
Admin Laptop → Bastion Host → Private EC2 (SSH)

---

## Security Implementation

- Backend deployed in private subnet (no direct internet access)
- RDS accessible only from application server security group
- Bastion host used for secure administrative access
- Security groups configured with least-privilege rules
- ALB health checks enabled for application availability
- CORS configured for S3 to backend communication

---

## Application Features

- Hospital appointment booking form
- REST API backend
- Appointment data stored in Amazon RDS
- Backend process managed using PM2
- Health endpoint for load balancer monitoring

---

## API Endpoints

GET /health  
Health check for load balancer

GET /api/doctors  
Fetch doctor list

POST /api/appointments  
Store appointment data in RDS

---

## Skills Demonstrated

Cloud Networking:
- VPC design and subnet planning
- Public and private architecture
- NAT Gateway configuration
- Bastion host setup
- Route table configuration
- Security group design

Load Balancing:
- Application Load Balancer setup
- Target groups and health checks

Cloud Infrastructure:
- S3 static website hosting
- Private EC2 deployment
- Amazon RDS setup and connectivity

Troubleshooting:
- Resolved ALB unhealthy targets
- Fixed security group connectivity issues
- Validated backend health checks
- Performed end-to-end traffic testing

---

## Project Purpose

This project was built to demonstrate practical cloud networking, infrastructure deployment, and troubleshooting skills for Network Engineer and Cloud Network roles.

---

## Architecture Summary

Secure 3-tier design with:
- Isolated private application and database layers
- Controlled administrative access using Bastion
- Load-balanced application tier
- Secure outbound internet access using NAT
- Verified end-to-end user traffic flow
