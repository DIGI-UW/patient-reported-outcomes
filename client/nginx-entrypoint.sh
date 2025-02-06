#!/bin/sh
# Set environment variables dynamically in the JavaScript bundle served by nginx
envsubst '${REACT_APP_API_URL}' < /usr/share/nginx/html/outcomes/index.html > /usr/share/nginx/html/outcomes/index.html.tmp && mv /usr/share/nginx/html/outcomes/index.html.tmp /usr/share/nginx/html/outcomes/index.html

# Start nginx in the foreground
exec nginx -g 'daemon off;'
