# Use the official Node.js image as the base image
FROM node:18

# Set Node Env to "production" to enable Production features
ENV NODE_ENV=production

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json and install dependencies
COPY package*.json ./
RUN npm ci

# Copy the rest of the project files
COPY . .

EXPOSE 3030

# Define the entry point for the container
CMD ["npm", "start"]
