# Description: Dockerfile for the node image
FROM node:20.14.0 as build

# Set the working directory
WORKDIR /app

# Copy the package.json and yarn.lock file to the working directory and install the dependencies
COPY package.json .
COPY yarn.lock .

# Install the dependencies
RUN yarn install

# Copy the source code to the working directory
COPY . .

# Build the application
CMD yarn start