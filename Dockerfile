#Stage 1 - Build the Angular App
FROM node:latest as build
WORKDIR /app

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
# Caddy is just an easy smooth web server alternative
FROM caddy:latest

WORKDIR /app

# arbritrary non http port to forward for flexibility
# there is nothing wrong with leaving it at default 80
EXPOSE 80
COPY Caddyfile /etc/caddy/Caddyfile

# load file path for static assets into caddy
COPY --from=build /app/dist/personal-website /usr/share/caddy