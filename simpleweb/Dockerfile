# Specify base image
FROM node:alpine

# To add working directory for our project in the container
WORKDIR /usr/app
 
# To copy package.json from local directory to container
COPY ./package.json ./

# Install dependencies
RUN npm install

# Copy the project files from local dir to container
COPY ./ ./

# Specify default command
CMD ["npm", "start"]