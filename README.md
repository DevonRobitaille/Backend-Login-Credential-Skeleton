# Backend-Login-Credential-Skeleton

## Steps to launch application

### Step 1
Go into the Login Example directory and run *$: npm install* from the command line

### Step 2
Initialize all of the appropriate values inside the .env file

### Step 3
Initialize a database in sql as per the settings you created in the config file found inside *Login Example\config*
This means create a database such as db_dev, and adding that name to *Login Example\config*

### Step 4
Go into the Login Example directory and run *$: npm run dev* from the command line

### Step 5
Run the *setupDatabase.sql* script to initialize the permissions and users table.
The password for Admin is: Admin_Pass
The password for Test is: Test_Pass

### Step 6
Your application should now be ready to accept requests for login at: /auth <post request>
  
  Format:
  
  `{
  
    "username": <Email or Username>,
    
    "password": <password of the account>
    
  }`
  
Your application should now be ready to accept requests to logout at: /logout <get request>
  
Your application should now be ready to accept requests to create new users at: /create <post request>
  
  Format:
  
  `{
  
    "username": <username>,
    
    "password": <password>,
    
    "first_name": <first name of the user>,
    
    "last_name": <last name of the user>,
    
    "email": <email of the user>,
    
    "permission_id": <permission id of the user (optional, can be 1 for Admin, or 2 for user)>
    
  }`
