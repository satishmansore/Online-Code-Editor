# Build the React app using Node.js
FROM node:18 as build

# Set working directory for the build step
WORKDIR /app

# Copy package.json and package-lock.json to install frontend dependencies
COPY package*.json ./

# Install dependencies for the frontend
RUN npm install

# Copy all files for building the frontend
COPY . .

# Build the React app for production
RUN npm run build

# Serve the built files using Nginx
FROM nginx:alpine

# Copy the build files from the build container to the nginx container
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80 for serving the app
EXPOSE 80
