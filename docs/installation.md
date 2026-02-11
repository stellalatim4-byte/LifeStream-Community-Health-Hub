# Installation Guide

Comprehensive installation instructions for LifeStream Community Health Hub across different environments.

## Table of Contents

1. [System Requirements](#system-requirements)
2. [Local Development Setup](#local-development-setup)
3. [Docker Installation](#docker-installation)
4. [Cloud Deployment](#cloud-deployment)
5. [Troubleshooting](#troubleshooting)

## System Requirements

### Minimum Requirements
- **CPU**: 2 cores (4 cores recommended)
- **RAM**: 4GB (8GB recommended)
- **Storage**: 10GB free space
- **OS**: Linux, macOS, or Windows

### Software Requirements
- **Python**: 3.8+
- **Node.js**: 14.0+
- **PostgreSQL**: 12+
- **Git**: 2.0+

## Local Development Setup

### Step 1: Install System Dependencies

#### On macOS (using Homebrew)
```bash
brew install python@3.10
brew install node
brew install postgresql
brew install git
```

#### On Ubuntu/Debian
```bash
sudo apt update
sudo apt install python3.10 python3.10-venv
sudo apt install nodejs npm
sudo apt install postgresql postgresql-contrib
sudo apt install git
```

#### On Windows
- Download and install [Python 3.10](https://www.python.org/downloads/)
- Download and install [Node.js](https://nodejs.org/)
- Download and install [PostgreSQL](https://www.postgresql.org/download/windows/)
- Download and install [Git](https://git-scm.com/download/win)

### Step 2: Clone the Repository

```bash
git clone https://github.com/stellalatim4-byte/LifeStream-Community-Health-Hub.git
cd LifeStream-Community-Health-Hub
```

### Step 3: Set Up Python Environment

```bash
# Create virtual environment
python -m venv venv

# Activate virtual environment
# On macOS/Linux:
source venv/bin/activate

# On Windows:
venv\Scripts\activate

# Upgrade pip
pip install --upgrade pip

# Install dependencies
pip install -r requirements.txt
```

### Step 4: Configure Database

```bash
# Start PostgreSQL service
# macOS: brew services start postgresql
# Linux: sudo service postgresql start
# Windows: Services app -> PostgreSQL

# Create database and user
createdb lifestream_db
createuser lifestream_user -P  # Enter password when prompted

# Configure database permissions (as superuser)
psql -U postgres
# Then run:
ALTER ROLE lifestream_user SUPERUSER;
GRANT ALL PRIVILEGES ON DATABASE lifestream_db TO lifestream_user;
\q
```

### Step 5: Set Up Environment Variables

Create `.env` file in project root:

```bash
# Database
DATABASE_URL=postgresql://lifestream_user:password@localhost:5432/lifestream_db
DB_ENGINE=django.db.backends.postgresql
DB_NAME=lifestream_db
DB_USER=lifestream_user
DB_PASSWORD=your_password
DB_HOST=localhost
DB_PORT=5432

# Django
DEBUG=True
SECRET_KEY=your-very-secret-key-change-in-production
ALLOWED_HOSTS=localhost,127.0.0.1,*.local
ENVIRONMENT=development

# Security
CSRF_TRUSTED_ORIGINS=http://localhost:3000,http://localhost:8000

# Email (optional for development)
EMAIL_BACKEND=django.core.mail.backends.console.EmailBackend

# API Configuration
API_URL=http://localhost:8000
API_PORT=8000

# Frontend
REACT_APP_API_URL=http://localhost:8000/api
REACT_APP_ENVIRONMENT=development
```

### Step 6: Run Migrations

```bash
python manage.py migrate
python manage.py migrate --run-syncdb
```

### Step 7: Create Superuser

```bash
python manage.py createsuperuser
# Follow the prompts to create an admin account
```

### Step 8: Collect Static Files

```bash
python manage.py collectstatic --noinput
```

### Step 9: Install Frontend Dependencies

```bash
cd frontend
npm install
cd ..
```

### Step 10: Start Development Servers

#### Terminal 1 - Backend
```bash
# Ensure virtual environment is activated
source venv/bin/activate  # macOS/Linux
# or
venv\Scripts\activate  # Windows

python manage.py runserver
```

#### Terminal 2 - Frontend
```bash
cd frontend
npm start
```

Backend: `http://localhost:8000`
Frontend: `http://localhost:3000`

## Docker Installation

### Prerequisites
- [Docker](https://www.docker.com/get-started)
- [Docker Compose](https://docs.docker.com/compose/install/)

### Docker Setup

```bash
# Clone repository
git clone https://github.com/stellalatim4-byte/LifeStream-Community-Health-Hub.git
cd LifeStream-Community-Health-Hub

# Create .env file
cp .env.example .env

# Build containers
docker-compose build

# Run containers
docker-compose up

# In another terminal, run migrations
docker-compose exec web python manage.py migrate

# Create superuser
docker-compose exec web python manage.py createsuperuser

# Collect static files
docker-compose exec web python manage.py collectstatic --noinput
```

Access the application:
- Frontend: `http://localhost:3000`
- Backend API: `http://localhost:8000`
- Admin Panel: `http://localhost:8000/admin`

## Cloud Deployment

### Heroku Deployment

```bash
# Install Heroku CLI
# https://devcenter.heroku.com/articles/heroku-cli

# Login to Heroku
heroku login

# Create Heroku app
heroku create your-app-name

# Add PostgreSQL addon
heroku addons:create heroku-postgresql:hobby-dev

# Set environment variables
heroku config:set DEBUG=False
heroku config:set SECRET_KEY=your-production-secret-key

# Deploy
git push heroku main

# Run migrations
heroku run python manage.py migrate

# Create superuser
heroku run python manage.py createsuperuser
```

### AWS Deployment

See [Deployment Guide](deployment.md) for detailed AWS setup instructions.

## Verification

To verify installation is successful:

1. **Backend Health Check**
   ```bash
   curl http://localhost:8000/api/health/
   ```

2. **Database Connection**
   ```bash
   python manage.py dbshell
   # Should connect without errors
   ```

3. **Frontend Build**
   ```bash
   cd frontend
   npm run build
   ```

## Troubleshooting

### Port Already in Use

```bash
# Find process using port 8000
lsof -i :8000  # macOS/Linux
netstat -ano | findstr :8000  # Windows

# Kill process
kill -9 <PID>  # macOS/Linux
taskkill /PID <PID> /F  # Windows
```

### Database Connection Issues

```bash
# Check PostgreSQL is running
psql --version

# Test database connection
psql -U lifestream_user -d lifestream_db -h localhost

# Reset database (development only)
python manage.py flush --no-input
python manage.py migrate
```

### Module Not Found

```bash
# Ensure virtual environment is activated
# Reinstall dependencies
pip install --force-reinstall -r requirements.txt
```

## Next Steps

- Follow [Getting Started](getting-started.md)
- Read [User Guide](user-guide.md)
- Check [Development Guide](development.md)

---

**Installation Complete!** 🎉
