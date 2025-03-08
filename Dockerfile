FROM gradle:8.7-jdk17 AS build

# Set working directory
WORKDIR /app

# Copy Gradle files
COPY build.gradle settings.gradle ./
COPY app/build.gradle ./app/

# Copy source code
COPY app/src ./app/src

# Build the application
RUN gradle build --no-daemon

# Runtime environment
FROM eclipse-temurin:21-jre-alpine

# Set working directory
WORKDIR /app

# Copy built JAR file from build stage
COPY --from=build /app/app/build/libs/*.jar app.jar

# Expose port
EXPOSE 8080

# Start the application
ENTRYPOINT ["java", "-jar", "app.jar"]