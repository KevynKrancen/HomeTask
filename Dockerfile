# Use the official Node.js image as the base image
FROM node:18

# Set the working directory inside the container change the path to your local path
WORKDIR /Users/kevynkrancenblum/Desktop/TaskZestSecurity/

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install the Node.js dependencies
RUN npm install

# Copy the rest of the application to the working directory
COPY . .

# Expose the port the app runs on
EXPOSE 3000

# Command to run the application
CMD ["node", "server.js"]