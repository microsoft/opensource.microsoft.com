# Use the official Node.js image as the base image
FROM node:22-alpine as build

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Next.js application
RUN npm run build

# Use the official Nginx image as the base image for the production build
FROM nginx:alpine

# Copy the built application from the build stage to the Nginx HTML directory
COPY --from=build /app/out /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
