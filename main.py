from flask import Flask
from flask_socketio import SocketIO, send

app  = Flask(__name__)
app.config['SECRET_KEY'] = 'anyoldsecret'
socketio = SocketIO(app, cors_allowed_origins='*')


@socketio.on('message')
def messageHandler(msg):
    print('Message ' + msg)
    send(msg, broadcast=True) # this is important!



if __name__ == '__main__':
    socketio.run(app)


