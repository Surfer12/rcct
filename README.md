# RCCT - Recursive Chain-of-Thought Application

This project implements a Recursive Chain-of-Thought (RCCT) processing model with a React frontend and Spring Boot backend.

## Docker Deployment

The application is containerized using Docker, making it easy to deploy in any environment.

### Prerequisites

- [Docker](https://www.docker.com/get-started) (version 20.10.0 or later)
- [Docker Compose](https://docs.docker.com/compose/install/) (version 2.0.0 or later)

### Quick Start

To build and run the entire application stack:

```bash
# Clone the repository (if you haven't already)
git clone <repository-url>
cd rcct

# Start the application with Docker Compose
docker-compose up -d
```

This will:
1. Build the Spring Boot backend
2. Build the React frontend
3. Start both services in containers
4. Configure networking between them

### Access the Application

Once running, you can access the application at:

- Frontend: http://localhost
- Backend API: http://localhost:8080
- Backend Health Check: http://localhost:8080/actuator/health

### Docker Compose Commands

```bash
# Build and start containers in detached mode
docker-compose up -d

# View container logs
docker-compose logs -f

# View logs for a specific service
docker-compose logs -f rcct-backend

# Stop containers without removing them
docker-compose stop

# Stop and remove containers
docker-compose down

# Rebuild and restart containers
docker-compose up -d --build
```

## Project Structure

- `/app` - Spring Boot backend
- `/rcct-react` - React frontend
- `Dockerfile` - Backend Docker configuration
- `rcct-react/Dockerfile` - Frontend Docker configuration
- `docker-compose.yml` - Multi-container configuration

## Manual Development Setup

### Backend (Spring Boot)

```bash
# Navigate to the project directory
cd rcct

# Build the application
./gradlew build

# Run the application
./gradlew bootRun
```

### Frontend (React)

```bash
# Navigate to the React project directory
cd rcct-react

# Install dependencies
npm install

# Start the development server
npm start
```

## License

[License Information]