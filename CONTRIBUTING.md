# Contributing Guide

Thank you for considering contributing to the PVP.FUN project! We welcome community participation, and below are guidelines for contributing.

## How to Contribute

1. **Fork this repository**: Fork this repository to your own GitHub account.

2. **Clone the repository**:
   ```bash
   git clone https://github.com/YOUR-USERNAME/PvpFunWeb3.git
   cd PvpFunWeb3
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```

4. **Create a branch**:
   ```bash
   git checkout -b feature/your-feature-name
   ```

5. **Make changes**: Make your code changes, ensuring you follow the project's code style.

6. **Run tests**:
   ```bash
   npm run lint
   npm run test
   ```

7. **Commit your changes**:
   ```bash
   git commit -m "Add feature: your feature description"
   ```

8. **Push to GitHub**:
   ```bash
   git push origin feature/your-feature-name
   ```

9. **Create a Pull Request**: Create a Pull Request from your branch to the main repository's main branch.

## Code Style

- Use TypeScript for type checking
- Follow ESLint configuration rules
- Use Prettier for code formatting
- Use functional components and Hooks for React components
- Use Tailwind CSS for style management

## Commit Message Guidelines

Commit messages should follow this format:

```
<type>: <description>

[optional detailed description]
```

Types include:
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Changes that don't affect code meaning (whitespace, formatting, etc.)
- `refactor`: Code changes that neither fix bugs nor add features
- `perf`: Code changes that improve performance
- `test`: Adding or modifying tests
- `chore`: Changes to build process or auxiliary tools

## Reporting Bugs

If you find a bug, please create a new issue in GitHub Issues, and provide:

- A brief description of the problem
- Steps to reproduce
- Expected behavior
- Actual behavior
- Environment information (browser, OS, etc.)
- Possible solution (if any)

## Feature Requests

If you want a new feature, please create a feature request in GitHub Issues, describing:

- The feature you want
- Why this feature would be valuable to the project
- Implementation suggestions (if any)

Thank you for your contribution! 