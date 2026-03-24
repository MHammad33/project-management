# Use the official Node.js image as the base image
FROM node:22

# Goes to the app directory (think of it like cd /app)
WORKDIR /app

# Copy the package.json and package-lock.json files to the working directory
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Set Port Environment Variable
ENV PORT=3000

# Expose the port so our computer can access it
EXPOSE 3000

# Run the application
CMD ["npm", "start"]