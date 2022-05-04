FROM node:17

# Working directory
WORKDIR /usr/src/app

# Copy Package.json files
COPY package*.json ./
COPY tsconfig*.json ./

# Install dependencies
RUN npm install

# Copy Source Files
COPY . .

# Build
RUN npm run build

# Exposehte API Port
EXPOSE 5000

# Run the app
CMD ["node", "build/server.js"]