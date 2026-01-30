QinCard — Personal Portfolio

A modern, production-ready personal portfolio website built with Next.js, TypeScript, and Tailwind CSS, deployed as a static site on a VPS with Nginx.

Designed to present professional experience, projects, and technical skills clearly for software engineering roles.

🔗 Live Site

👉 https://www.qincard.com

✨ Features

⚡ Next.js (App Router) with static export

🎨 Tailwind CSS v4 for clean, responsive styling

🧩 Modular, readable React components

🌙 Dark, dashboard-inspired UI

🧠 Scroll-aware navigation (section highlighting)

📄 Resume download support

🚀 Deployed on VPS with Nginx (no server runtime required)

🛠 Tech Stack

Frontend

Next.js

React

TypeScript

Tailwind CSS

Build & Tooling

Node.js

PostCSS

Static site export (output: "export")

Infrastructure

Ubuntu VPS (Hostinger)

Nginx

GitHub (SSH auth)

📁 Project Structure
qincard-world/
├── src/
│   └── app/
│       ├── page.tsx        # Main homepage
│       ├── layout.tsx      # Root layout
│       └── globals.css     # Tailwind + custom styles
├── public/
│   ├── avatar.jpg
│   └── resume.pdf
├── tailwind.config.ts
├── postcss.config.mjs
├── deploy.sh
└── README.md

🚀 Local Development
npm install
npm run dev


Then open:

http://localhost:3000

🏗 Build (Static Export)
npm run build


This generates a fully static site in the out/ directory.

📦 Deployment

The site is deployed manually using a shell script and Nginx.

./deploy.sh