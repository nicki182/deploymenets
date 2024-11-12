# Description: Dockerfile for the node image
FROM node:20.14.0 as build

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json file to the working directory and install the dependencies
COPY package*.json .

# Install the dependencies
RUN npm install

# Copy the source code to the working directory
COPY . .

# Build the application
RUN npm run build 

#  Define nginx image
FROM nginx:latest

# Copy the nginx configuration file to the nginx directory
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf

# Copy the build files to the nginx directory
COPY --from=build /app/build /usr/share/nginx/html