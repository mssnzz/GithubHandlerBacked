
# GitHub Repository System Project Setup

Welcome to the GitHub Repository System project! This guide will walk you through the steps required to set up the project on your local machine.

## Prerequisites

- Git
- Node.js
- NestJS CLI (You can install it using `npm install -g @nestjs/cli`)

## Installation

1. **Clone the Repository**  
   Start by cloning the repository from GitHub.
   ```bash
   git clone https://github.com/mssnzz/RepoBackend.git
   ```

2. **Navigate to the Project Directory**  
   Once the repository is cloned, navigate into the directory.
   ```bash
   cd RepoBackend
   ```

3. **Install Dependencies**  
   Install the necessary project dependencies using npm.
   ```bash
   npm install
   ```
### GitHub Token Setup

To make the GitHub controller function correctly, you'll need to provide your `GITHUB_TOKEN`.

1. Locate the `.env` file in the root directory of the project.
2. Add your GitHub token next to the `GITHUB_TOKEN` variable.

```
GITHUB_TOKEN=your_github_token_here
```

Make sure not to commit your `.env` file with your token for security reasons.
## Running the Project

To run the project, you can use the NestJS CLI:

```bash
nest start
```

Or if you can use npm:

```bash
npm run start
```

---

