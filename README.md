# Central de erros 
(Squad-3 - Python Women Loadsmart)

In this project is a aplication to register error logs.

The project architecture consists of:
- Backend Restfull API
- Front End (React)


## Requirements

You must have python 3.6 (ou superior), pip, postgres.

For Authentication Tests we recomend the extension "Modify headers" (Chrome).
 
Postgres : Open your linux terminal - sudo apt install postgresql-server-dev-all

We recommend use a virtual env:

    pip3 install virtualenv
    virtualenv venv -p python3
    source venv/bin/activate 
    pip3 install -r requirements.txt

    python manage.py makemigrations
    python manage.py migrate
    python manage.py runserver
    
## Frontend (folder front end)
 install reduxDevtool extension for Chrome
 npm start

## Documentation 

http://127.0.0.1:8000/doc/ 
(UI documentation using swagger - must be loged to acess the complete documentation)

http://127.0.0.1:8000/openapi

Acess http://editor.swagger.io/ and past the content.

!![](https://github.com/codenation-dev/squad-3-ad-python-women-loadsmart-1/blob/master/documentation.png)
