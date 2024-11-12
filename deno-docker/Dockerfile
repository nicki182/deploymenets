# Base image
FROM denoland/deno:latest

# Set the working directory
WORKDIR /app

# Copy the source code to the working directory
COPY . .

# Run the application
CMD ["run", "--allow-net", "main.ts"]