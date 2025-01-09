# Next.js Chat application task

This project is a **Next.js application** developed as part of Chat application task. The application showcases modern web development best practices, utilizing React, Next.js, and other relevant tools to create a dynamic, performant, and scalable web experience.

## 🔗 Live Demo
Check out the live demo of the project: [Live Demo](https://1mfbbfefhi63lxht.vercel.app/)

---

## 📋 Features

- **Server-Side Rendering (SSR):** Optimized page rendering for improved SEO and faster load times.
- **Responsive Design:** Fully responsive layout to provide a seamless experience across devices.
- **Dynamic Routing:** Implements Next.js dynamic routing for flexibility and modularity.
- **Modern UI/UX:** Clean and intuitive interface following industry best practices.
- **Efficient State Management:** Uses React's state management for enhanced interactivity.
- **Deployment Ready:** Hosted on **Vercel** for smooth and reliable access.

---

## 🚀 Tech Stack

- **Framework:** [Next.js](https://nextjs.org/)
- **Language:** JavaScript (with support for ES6+)
- **Styling:** CSS Modules / Tailwind CSS (depending on your styling solution)
- **Hosting:** [Vercel](https://vercel.com/)
- **Version Control:** Git and GitHub

---

## 📦 Installation and Setup

Follow these steps to set up and run the project locally:

### Prerequisites

- **Node.js**: Make sure you have Node.js installed on your system. You can download it from [Node.js official website](https://nodejs.org/).
- **Git**: Ensure Git is installed for version control. You can download it from [Git official website](https://git-scm.com/).

### Steps to Set Up the Project Locally

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   Navigate to the project directory:
2. **Install project dependencies: Install the required Node.js packages by running**:
   ```bash
   npm install
3. **Run the development server: Start the local development server by running**:
   ```bash
    npm run dev

  
### What’s Added:
- A **"Prerequisites"** section to ensure users have Node.js and Git installed.
- Step-by-step **installation and setup instructions**, including how to configure environment variables.
- Details on how to build the app for production.

Let me know if there's anything else you'd like to add or clarify! 😊

## 📂 Project Structure

The project is organized as follows:

```plaintext
.
├── components/          # Reusable UI components
│   ├── Header.js        # Header component
│   ├── Footer.js        # Footer component
│   └── [Other components]
│
├── pages/               # Next.js pages (routes)
│   ├── index.js         # Homepage
│   ├── about.js         # About page (example)
│   ├── api/             # API routes (serverless functions)
│   │   └── hello.js     # Example API route
│   └── [Dynamic routes] # e.g., [id].js for dynamic routing
│
├── public/              # Publicly accessible assets
│   ├── images/          # Images and icons
│   ├── favicon.ico      # Favicon
│   └── [Other static files]
│
├── styles/              # Styling files
│   ├── globals.css      # Global CSS styles
│   ├── Home.module.css  # Scoped styles for the Home page
│   └── [Other CSS/SCSS files]
│
├── utils/               # Utility functions
│   └── [Utility files]
│
├── .env                 # Environment variables (not included in the repo)
├── .gitignore           # Files and directories to ignore in Git
