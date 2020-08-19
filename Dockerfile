
FROM node:lts-alpine

# Create app directory
RUN mkdir -p /usr/src/app
# Workdir
WORKDIR /usr/src/app

# Set npm registry to inner
RUN npm config set registry http://192.168.117.182:4873
# Installing pm2 global
RUN npm install pm2 -g
# Copy package.json & package-lock.json
COPY package*.json /usr/src/app/
# Installing dependencies (use npm ci)
RUN npm ci

# Copying source files
COPY . /usr/src/app

# Building app
RUN npm run build
# Expose service port
EXPOSE 3000

# Running the app
#CMD ["pm2-runtime","--name","KedeMobileSite","-i","0","server.js"]
CMD ["pm2-runtime","ecosystem.config.js","--env","production"]
