#Stage 1 - Build the Angular App
FROM node:latest as build
WORKDIR /app

ARG BUILD_ENV

COPY package*.json ./
RUN npm install

COPY . .

RUN if [ "$BUILD_ENV" = "dev" ]; then \
    npm run buildDev; \
    elif [ "$BUILD_ENV" = "production" ]; then \
    npm run build; \
    fi 

#Stage 2 - Consume build artifacts and run app
# SSL termination will happen on the host machine or cloud env
FROM nginx:alpine

WORKDIR /app

EXPOSE 80

# Replace the default Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy the built Angular app from Stage 1
COPY --from=build /app/dist/personal-website /usr/share/nginx/html

# run nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]
