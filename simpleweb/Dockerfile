# Specify base image
FROM node:alpine

# To add working directory for our project in the container
WORKDIR /usr/app
 
# To copy files from local directory to container
COPY ./ ./

# Install dependencies
RUN npm install

# Specify default command
CMD ["npm", "start"]