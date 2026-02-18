# Troubleshooting Notes

## Issue 1: ALB Target Unhealthy
Cause: Backend port not allowed in security group  
Fix: Allowed port 5000 from ALB security group

## Issue 2: 503 Service Unavailable
Cause: Backend application not running  
Fix: Started application using PM2

## Issue 3: Database Connection Error
Cause: Incorrect database name  
Fix: Created hospital database in RDS

## Issue 4: Data not saving
Cause: Backend API not inserting into database  
Fix: Added INSERT query in server.js

## Issue 5: Frontend API errors
Cause: CORS issue  
Fix: Enabled CORS in backend
