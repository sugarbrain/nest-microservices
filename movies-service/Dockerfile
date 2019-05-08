# stage 2
FROM node:alpine
WORKDIR /app
COPY . /app
RUN npm install -g typescript
RUN npm install
EXPOSE 3000
CMD ["npm", "run", "start:dev"]
