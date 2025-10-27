# Nextjs-dasbhoard
# 🧭 Next.js Dashboard — TypeScript, Tailwind CSS, JWT Auth

This is a responsive, interactive dashboard web application built with **Next.js**, **TypeScript**, and **Tailwind CSS**.  
The dashboard visualizes user and post data fetched from the JSONPlaceholder API, includes authentication with JWT, and is deployed on **Vercel**.

---

## 🚀 Features

✅ API Integration (Users + Posts from [jsonplaceholder.typicode.com](https://jsonplaceholder.typicode.com))  
✅ Dashboard with search, filtering, pagination  
✅ Dynamic Routing for user details  
✅ Editable form with validation  
✅ JWT Authentication (Mock Login)  
✅ Dark mode toggle with local storage persistence  
✅ Deployed on Vercel (serverless hosting)  

---

## 🧱 Tech Stack

- **Next.js 14**
- **TypeScript**
- **Tailwind CSS**
- **React Hook Form + Yup** (validation)
- **JWT Authentication**
- **Vercel Deployment**

---

## 🗂️ Project Structure
nextjs-dashboard/ │ ├── app/ │   ├── layout.tsx │   ├── page.tsx │   └── users/[id]/page.tsx │ ├── components/ │   ├── Header.tsx │   ├── Sidebar.tsx │   ├── UserTable.tsx │   ├── Pagination.tsx │   └── SearchBar.tsx │ ├── styles/ │   └── globals.css │ ├── package.json ├── tailwind.config.js ├── tsconfig.json ├── next.config.js └── README.md
Installation (if using PC or local dev)

```bash
# Clone repo
git clone https://github.com/YOUR_USERNAME/nextjs-dashboard.git
cd nextjs-dashboard

# Install dependencies
npm install

# Run development server
npm run dev

Open your browser → http://localhost:3000


---

🔐 Login Credentials

Username: testuser
Password: testpass


---

🧩 API Used

Users: https://jsonplaceholder.typicode.com/users

Posts: https://jsonplaceholder.typicode.com/posts
