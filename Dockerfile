FROM node:10-alpine
RUN mkdir /app
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
EXPOSE 3000
CMD ["yarn", "build"]
CMD ["yarn", "global add server"]
CMD ["server", "-s build"]
CMD ["npm", "start"]