# Central de erros 
(Squad-3 - Python Women Loadsmart)

 Neste projeto vamos implementar um sistema para centralizar registros de erros de aplicações.

A arquitetura do projeto é formada por:
- Back-End Restfull API
- Front-End


## Requisitos

Você precisará de python 3.6 (ou superior), do gerenciador de pacotes pip, postgres.

Para os testes de autenticação recomendamos a extensão "Modify headers" do Chrome.
 
Postgres : No  terminal linux - sudo apt install postgresql-server-dev-all

O recomendado é você utilizar um [ambiente virtual]. Para isto, execute os comandos como no exemplo abaixo:

    pip3 install virtualenv
    virtualenv venv -p python3
    source venv/bin/activate 
    pip install -r requirements.txt

    python manage.py makemigrations
    python manage.py migrate
    python manage.py runserver



Ao terminar o desafio, você pode sair do ambiente criado com o comando `deactivate`


## Documentação 

http://127.0.0.1:8000/doc/

Acessar http://editor.swagger.io/ e colar o conteúdo do doc

Imagem
![](https:  /challenge.png)
