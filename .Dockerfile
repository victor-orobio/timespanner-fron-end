# Stage 1: Compile and Build angular app
FROM node:lts-alpine3.14 as build

# Set the working directory
WORKDIR /usr/local/app
# Add the source code to app
COPY ./ /usr/local/app/
# Install all the dependencies
RUN npm install
# Generate the build of the application
RUN npm run build

# Stage 2: Serve app with nginx

FROM nginx:latest
# Copy the build output to replace the default nginx contents.
COPY --from=build /usr/local/app/dist/TimeSpanner /usr/share/nginx/html
# Expose port 80
EXPOSE 80
