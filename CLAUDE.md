# CLAUDE.md - Development Guide

## Environment Setup
```bash
# Project requires Java 17 (current system has Java 23)
# Install and configure a Java 17 version:
# On macOS with Homebrew:
brew install openjdk@17
# Set JAVA_HOME to point to Java 17
export JAVA_HOME=/path/to/java-17

# Update Gradle wrapper if needed
./gradlew wrapper --gradle-version=8.5
```

## Build/Test/Lint Commands
```bash
# Build backend
./gradlew build

# Run backend application
./gradlew bootRun

# Run all backend tests
./gradlew test

# Run specific backend test
./gradlew test --tests "com.rcct.anthropic.rcct.model.ThoughtNodeTest"

# Clean build and start fresh
./gradlew clean build

# Frontend commands (in rcct-react directory)
cd rcct-react
npm install
npm start
npm test
npm test -- ThoughtTree.test.tsx
npm run build

# Docker deployment
docker-compose up -d
docker-compose up -d --build  # Rebuild and start
docker-compose down
```

## Code Style Guidelines

### Java
- Classes: PascalCase (ThoughtNode)
- Methods/Variables: camelCase (processThought, nodeData)
- Packages: lowercase (com.rcct.anthropic.rcct.model)
- Use explicit imports, not wildcards
- Strong typing with appropriate collections
- Use Lombok annotations (@Data, @NoArgsConstructor) to reduce boilerplate
- JPA annotations for entity mapping (@Entity, @Id, @GeneratedValue)
- Spring Boot 3.x uses Jakarta EE instead of Java EE packages
- JUnit 5 for testing with explicit assertions
- Use @Transactional for service methods that modify data

### TypeScript/React
- Components: PascalCase (ThoughtTree)
- Functions/Variables: camelCase (handleNodeClick)
- Interfaces: PascalCase with descriptive names
- Define types in dedicated files (types/index.ts)
- Functional components with React hooks
- CSS classes use kebab-case
- Components organized by feature in src/components