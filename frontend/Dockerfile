# FROM node:18 AS builder

# WORKDIR /app

# COPY . .

# RUN npm install && npm run build

FROM nginx:alpine

# COPY --from=builder /app/dist /usr/share/nginx/html

# Frontend Dockerfile
# FROM node:18-alpine

# WORKDIR /app
# COPY . .

# # COPY package*.json ./
# RUN npm install && npm run build


# RUN npm run build

# EXPOSE 3000
# CMD ["npm", "run", "dev", "--", "--host"]
