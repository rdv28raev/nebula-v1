# Nebula Mobile

Le futur est avec nous

## How to Run the Server

### Prerequisites
- Node.js must be installed on your system

### Starting the Server

1. Open a terminal and navigate to the project directory:
```bash
cd /Users/rasandre/Projects/Feb-1-2026
```

2. Start the Node.js server:
```bash
node server.js
```

3. You should see:
```
Server running at http://localhost:3001/
Press Ctrl+C to stop the server
```

4. Open your browser and go to:
- Main page: http://localhost:3001/
- Signup: http://localhost:3001/signup.html
- Login: http://localhost:3001/login.html

### Stopping the Server

**Method 1: If server is running in terminal**
- Press `Ctrl+C` in the terminal window where the server is running

**Method 2: Kill the process manually**
```bash
lsof -ti:3001 | xargs kill
```

## Project Structure

```
.
├── server.js           # Node.js server
├── index.html          # Main page
├── login.html          # Login page
├── login.js            # Login functionality
├── signup.html         # Signup page
├── signup.js           # Signup functionality
├── script.js           # Main JavaScript
├── img/                # Images directory
└── html/               # Product pages
```

## GitHub Pages Deployment

This project is configured to automatically deploy to GitHub Pages using GitHub Actions.

### Setup GitHub Pages

1. Go to your repository on GitHub
2. Navigate to **Settings** > **Pages**
3. Under "Build and deployment":
   - Source: Select **GitHub Actions**
4. Save the settings

### Workflows

**Build Workflow** (`.github/workflows/build.yml`)
- Triggers on pull requests and feature branch pushes
- Validates project structure
- Tests that the local server starts correctly
- Does NOT deploy

**Deploy Workflow** (`.github/workflows/deploy.yml`)
- Triggers when code is merged to `main` branch
- Automatically deploys to GitHub Pages
- Site will be available at: `https://<username>.github.io/<repository-name>/`

### Development Workflow

1. Create a feature branch: `git checkout -b feature/my-feature`
2. Make your changes
3. Push and create a pull request
4. GitHub Actions will run build validation
5. After PR approval, merge to main
6. Deployment to GitHub Pages happens automatically

## Notes

- The server runs on port 3001
- User data is stored in browser's localStorage
- All pages must be accessed through http://localhost:3001/ for localStorage to work properly (not file://)
- The `.nojekyll` file prevents GitHub Pages from ignoring certain files
