# KidChat

Under development

# Dans Dev Setup
OS: Ubuntu 18.04 (WSL2) \
IDE: VS Code \
Node version: 15.5.1 \
Python version: 3.8.0

# Installing Node.js
```
curl -sL https://deb.nodesource.com/setup_15.x | sudo -E bash - \
sudo apt-get install -y nodejs
```

Then in your project folder:
```
npm install express --save
npm install nodemon --global
npm install nodemon --save-dev
```

# To configure nat to WSL2 (Example)
To Add:     netsh interface portproxy add v4tov4 listenport=4000 listenaddress=0.0.0.0 connectport=4000 connectaddress=172.24.144.1\
To remove:  netsh interface portproxy delete v4tov4 listenport=4000 listenaddress=0.0.0.0
