from flask import Flask, render_template, request
import utils

from db import get_db, close_db

app = Flask(__name__)


@app.route('/')
def Home():
    return render_template('Home.html')

@app.route('/registro', methods = ('GET','POST'))
def registro():

    error = None
    db = get_db()
    
    if request.method == 'POST':
        userName = request.form['user']
        password = request.form['password']
        email = request.form['userMail']
        error = []


        if not utils.isUsernameValid(userName):
            error.append('El nombre de usuario debe incluir caracteres alfanumericos y/o tambien puede incluir: . , - _')
            
        if not utils.isPasswordValid(password):
            error.append('La contraseña debe contener al menos una mayuscula, una minuscula y minimo 8 caracteres de longitud')
            

        if not utils.isEmailValid(email):
            error.append('Correo no valido.')

        db.execute("insert into Usuario(userName, email, password) values(?, ?, ?)",
        (userName, email, password))
        
        db.commit()

        close_db()

        return render_template('CreateC.html', errorMessages=error)    


    return render_template('createC.html')


@app.route('/login')
def login():

    error = None
    db = get_db()

    close_db()
    return render_template('Login.html')


