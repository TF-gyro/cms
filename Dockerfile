# ------------------------------
# 1. Builder stage
# ------------------------------
FROM node:20 AS builder

# Set working directory
WORKDIR /app

# Copy package files first (to leverage Docker cache)
COPY package*.json ./

# Install dependencies
RUN npm install -g npm@latest && npm install

# Copy the rest of the source code
COPY . .

# Build the Ember app
RUN npm run build


# ------------------------------
# 2. Final runtime stage
# ------------------------------
FROM ghcr.io/tf-gyro/tribe:latest

# set php configuration values
WORKDIR /var/www

## junction
COPY --from=builder "/app/dist" "/var/www/junction"

COPY sync-dist.php .

EXPOSE 80
EXPOSE 81

COPY scripts/docker-entrypoint.sh /usr/local/bin/docker-entrypoint.sh
RUN chmod +x /usr/local/bin/docker-entrypoint.sh

CMD ["/usr/local/bin/docker-entrypoint.sh"]
