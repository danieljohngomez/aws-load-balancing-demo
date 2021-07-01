#!/bin/bash

curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.32.1/install.sh | bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
nvm install 12

cat <<EOF >> /home/ec2-user/.bashrc
export NVM_DIR="/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
EOF

sudo yum update -y
sudo yum install git -y

git clone https://github.com/danieljohngomez/aws-load-balancing-demo
cd aws-load-balancing-demo
npm i
npm start
