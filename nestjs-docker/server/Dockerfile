# Description: Dockerfile for the server
# Use the node image
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
RUN yarn build


# THIS IS A DIFFERENT APP
# Use the node image    
FROM node:20.14.0

# Set the working directory
WORKDIR /app    

# Copy the package.json file to the working directory and install the dependencies
COPY package.json .

# Install the dependencies and copy the build files and have the production dependencies only
RUN yarn install --only=production

# Copy the build files to the working directory
COPY --from=build /app/dist ./dist

# Run the application
CMD yarn start:prod
