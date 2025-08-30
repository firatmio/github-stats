# GitHub Stats in TypeScript

![TypeScript](https://img.shields.io/badge/Language-TypeScript-blue.svg)  ![License](https://img.shields.io/badge/License-MIT-green.svg)

---

## Overview

A modern **GitHub statistics viewer** built with TypeScript, React, and Vite.
Displays interactive GitHub profile stats for any user, including commits, repos, languages, streaks, and trophies.

---

## Features

* Visualize GitHub stats in a clean UI
* Show top languages, commits, followers, and PRs
* GitHub streak tracking
* GitHub trophies display
* Ready for README or frontend integration

---

## Technologies Used

* **Frontend:** React, TypeScript, Vite
* **Code Quality:** ESLint
* **Data Fetching:** GitHub API
* **Styling:** CSS / Tailwind optional

---

## Getting Started

### Prerequisites

* Node.js (v18+ recommended)
* npm or yarn

---

### Installation & Running

1. Clone the repository:

```bash
git clone https://github.com/firatmio/github-stats.git
cd github-stats
```

2. Install dependencies:

```bash
npm install
```

3. Run in development mode:

```bash
npm run dev
```

4. Build & run in production:

```bash
npm run build
npm start
```

---

## Project Structure

```
github-stats/
├── src/
│   ├── main.tsx          # Entry point
│   ├── App.tsx           # Main component
│   ├── components/       # UI components
│   ├── services/         # GitHub API services
├── package.json          # Project metadata
├── tsconfig.json         # TypeScript config
├── vite.config.ts        # Vite config
├── LICENSE               # MIT License
└── README.md             # Project documentation
```

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
