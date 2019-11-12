# Log management tool
Squad-3 - Python Women Loadsmart

This is  log management tool to unify your logs and  monitoring them.
It's useful to detect and respond to performance issues.

On modern projects, it is  common the use of architectures based on services or microservices. 
In these complex environments, errors can happen in different layers of an application 
(backend, frontend, mobile, and desktop) even in distinct services. 

Therefore, developers need to be able to centralize all the errors registers in one place, 
by doing this they can monitor, make more precise decisions about those errors and 
categorize errors by priority or frequency. 


The project architecture consists of:
- Backend Restfull API 
- Front End (React)


## Requirements

You must have python 3.6 (ou superior), pip, postgres.

We recommend use a virtual env:

    pip3 install virtualenv
    virtualenv venv -p python3
    source venv/bin/activate 
    pip3 install -r requirements.txt

    python manage.py makemigrations
    python manage.py migrate
    python manage.py runserver


open : http://localhost:8000/



## Provide inicial data

python manage.py loaddata db.json

## Security 
    - Protected endpoints
    - Authentication by using JWT (backend)
    - Host header validation to prevent Cross Site Scripting attacks
    - Protected routes (React)



## API Documentation 

The Restfull API provided in this project is fully documented. 
To do this we've used 'django-rest-swagger' package.



http://127.0.0.1:8000/doc/ 
(UI documentation using swagger - must be loged to acess the complete documentation)

![teste](https://github.com/codenation-dev/squad-3-ad-python-women-loadsmart-1/blob/master/4.png)




## FRONTEND 
You must have node
install reduxDevtool extension for Chrome

To run:
    cd frontend
    npm install
    npm start

open : http://localhost:3000/


![](https://github.com/codenation-dev/squad-3-ad-python-women-loadsmart-1/blob/master/6.png)
![](https://github.com/codenation-dev/squad-3-ad-python-women-loadsmart-1/blob/master/7.png)


![](https://github.com/codenation-dev/squad-3-ad-python-women-loadsmart-1/blob/master/1.png)

![](https://github.com/codenation-dev/squad-3-ad-python-women-loadsmart-1/blob/master/2.png)
