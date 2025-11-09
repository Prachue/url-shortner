# 🔗 URL Shortener (BitLinks Clone)

A modern, minimal, and high-performance **URL Shortener Web Application** built with **Next.js 14** and **Tailwind CSS**, inspired by popular tools like **Bitly**.

This project allows users to **convert long URLs into short, shareable links** with clean UI, responsive design, and scalable architecture — deployed seamlessly on **Vercel**.

---

## 🚀 Overview

The **URL Shortener** project simplifies sharing long URLs by generating unique short links that redirect to the original destination.  
It showcases strong skills in **frontend development**, **Next.js routing**, **environment configuration**, and **user-friendly interface design**.

You can customize and extend it for authentication, analytics tracking, and database integration to make it production-ready.

---

## ✨ Key Features

- 🔗 **Instant URL shortening** with client-side validation  
- 🧠 **Built with Next.js 14 App Router** for performance and modularity  
- 🎨 **Responsive UI** powered by **Tailwind CSS**  
- ⚡ **Real-time updates** — shorten URLs without page reload  
- 🧩 **Custom short code support** (future enhancement)  
- 🌍 **Deployed on Vercel** for scalability and global availability  
- 🔒 **Environment variable setup** for secure API usage  
- 🧱 **Clean and well-structured codebase** — easy to extend and maintain  

---

## 🧱 Project Structure

URL_SHORTNER/
│
├── bitlinks/ # Core Next.js application
│ ├── app/ # Next.js App Router pages and layouts
│ ├── components/ # Reusable UI components
│ ├── public/ # Static assets and favicon
│ ├── styles/ # Tailwind global styles
│ ├── .env.local # Environment variables (ignored by Git)
│ ├── next.config.mjs # Next.js configuration
│ ├── package.json # Project dependencies
│ └── README.md
│
├── .gitignore # Ignored files list
├── package-lock.json
└── LICENSE

yaml
Copy code

---

## ⚙️ Tech Stack

| Category | Technology |
|-----------|-------------|
| **Framework** | [Next.js 14](https://nextjs.org) |
| **Language** | JavaScript / JSX |
| **Styling** | [Tailwind CSS](https://tailwindcss.com) |
| **Deployment** | [Vercel](https://vercel.com) |
| **Version Control** | Git & GitHub |

---

## 🧩 Installation & Setup

Follow these steps to set up and run the project locally:

### 1️⃣ Clone the repository
```bash
git clone https://github.com/Prachue/URL-SHORTNER.git
cd URL-SHORTNER/bitlinks
2️⃣ Install dependencies
bash
Copy code
npm install
# or
yarn install
3️⃣ Start the development server
bash
Copy code
npm run dev
4️⃣ Open in browser
Visit 👉 http://localhost:3000

🔐 Environment Configuration
Create a .env.local file in the bitlinks/ directory.

Example:

ini
Copy code
NEXT_PUBLIC_BASE_URL=http://localhost:3000
API_KEY=your_api_key_here
💡 These variables ensure API credentials and configurations remain secure and customizable across environments.

🧠 Learning Outcomes
This project demonstrates:

Proficiency in Next.js 14 App Router architecture

Implementing dynamic routing and API integration

Building a responsive Tailwind-based UI

Secure handling of environment variables (.env.local)

Deployment using Vercel and GitHub integration

Understanding frontend performance optimization

🚀 Deployment
Easily deploy using Vercel in 3 steps:

Push your repository to GitHub.

Go to Vercel Dashboard.

Import your repository and click Deploy.

Vercel automatically configures Next.js for optimized hosting.

🧩 Future Enhancements
🧑‍💻 Add user authentication with NextAuth.js

📊 Implement analytics to track link clicks and performance

🔐 Integrate with MongoDB or Firebase for storing short links

🧱 Add QR code generation for each short link

🎨 Introduce customizable themes (light/dark mode)


🤝 Contributing
Contributions are welcome!
If you’d like to improve this project:

Fork the repository

Create a branch: git checkout -b feature/new-feature

Commit your changes: git commit -m "Added new feature"

Push and open a Pull Request
