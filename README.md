# 🧠 Meta-Optimized Hybrid Reasoning Framework  
**by Ryan Oates**  
**License: Dual — AGPLv3 + Peer Production License (PPL)**  
**Contact: ryan_oates@my.cuesta.edu**

---

## ✨ Purpose

This framework is part of an interdisciplinary vision to combine **symbolic rigor**, **neural adaptability**, and **cognitive-aligned reasoning**. It reflects years of integrated work at the intersection of computer science, biopsychology, and meta-epistemology.

It is not just software. It is a **cognitive architecture**, and its use is **ethically bounded**.

---

## 🔐 Licensing Model

This repository is licensed under a **hybrid model** to balance openness, reciprocity, and authorship protection.

### 1. For Commons-Aligned Users (students, researchers, cooperatives)
Use it under the **Peer Production License (PPL)**. You can:
- Study, adapt, and share it freely
- Use it in academic or nonprofit research
- Collaborate openly within the digital commons

### 2. For Public Use and Transparency
The AGPLv3 license guarantees:
- Network-based deployments must share modifications
- Derivatives must remain open source
- Attribution is mandatory

### 3. For Commercial or Extractive Use
You **must not use this work** if you are a:
- For-profit AI company
- Venture-backed foundation
- Closed-source platform
...unless you **negotiate a commercial license** directly.

---

## 📚 Attribution

This framework originated in:

> *Meta-Optimization in Hybrid Theorem Proving: Cognitive-Constrained Reasoning Framework*, Ryan Oates (2025)

DOI: [Insert Zenodo/ArXiv link here]  
Git commit hash of original release: `a17c3f9...`  
This project’s cognitive-theoretic roots come from studies in:
- Flow state modeling
- Symbolic logic systems
- Jungian epistemological structures

---

## 🤝 Community Contributor Agreement

If you are a student, educator, or aligned research group and want to contribute:
1. Fork this repo
2. Acknowledge the author and original framework
3. Use the “Contributors.md” file to describe your adaptation
4. Optional: Sign and return the [Community Contributor Agreement (CCA)](link) to join the federated research network

---

## 🚫 What You May Not Do

- Integrate this system into closed-source LLM deployments
- Resell it or offer derivative products without explicit approval
- Strip author tags or alter authorship metadata

---

## 📬 Contact

Want to collaborate, cite properly, or license commercially?  
Reach out: **ryan_oates@my.cuesta.edu**
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