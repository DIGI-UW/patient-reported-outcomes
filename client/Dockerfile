# Build Stage
FROM node:18-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Production Stage
FROM nginx:stable-alpine AS production

# Copy the React app into the NGINX HTML directory
COPY --from=build /app/build /usr/share/nginx/html/outcomes

# Copy the custom entrypoint script
COPY nginx-entrypoint.sh /docker-entrypoint.d/

# Make the script executable
RUN chmod +x /docker-entrypoint.d/nginx-entrypoint.sh

EXPOSE 80

# Use the custom entrypoint
CMD ["/docker-entrypoint.d/nginx-entrypoint.sh"]
