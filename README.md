# KidChat

Under development

Using this branch to explore some ideas with Flask's SocketIO as it could be
a good fit for this solution.

[flask-socketIO](https://flask-socketio.readthedocs.io/en/latest/)

*To use:*
- activate virtualenv
- `pip install -r requirements.txt`
- navigate to the index.html file in the browser and type some messages


main.py runs the serverside process. The clientside is handled by some JS that
instansiates a socket object that connects to the server process.
