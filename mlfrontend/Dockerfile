FROM node:11

# set up angular cli
RUN npm install -g @angular/cli@7.0.5

WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
# create watch files
CMD ng serve --host 0.0.0.0 --disable-host-check --proxy-config proxy.conf.dev.json
EXPOSE 4200
