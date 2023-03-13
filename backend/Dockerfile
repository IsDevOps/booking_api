FROM node:alpine3.16
WORKDIR /backend
COPY . /backend
RUN npm install
EXPOSE 5000
CMD [ "npm", "run", "dev" ]