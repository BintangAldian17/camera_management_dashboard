# Camera Management Dashboard

A web-based dashboard for monitoring camera systems, built with React, TypeScript, and Vite.

## 🌐 Deployment

Access the live application here: [Camera Management Dashboard](https://camera-management-dashboard-kha4.vercel.app/)

---

## 📂 Project Structure

```
camera_management_dashboard/
├── src/
│   ├── components/       # Reusable UI components
│   │   ├── atoms/        # Smallest building blocks (e.g., Button, Input)
│   │   ├── molecules/    # Combination of atoms (e.g., InputField, GraphCard)
│   │   ├── organisms/    # Complex components (e.g., SideBar, LoginForm)
│   │   ├── templates/    # Page layouts (e.g., DashboardLayout, LoginLayout)
│   │   └── pages/        # Page-level components
│   ├── context/          # React Context for global state (e.g., SidebarContext)
│   ├── lib/              # Utility functions, hooks, and API services
│   ├── routes/           # Application routes
│   ├── types/            # TypeScript type definitions
│   ├── assets/           # Static assets (e.g., images, icons)
│   └── index.css         # Global styles
├── public/               # Static files
├── .gitignore            # Files and directories to ignore in Git
├── package.json          # Project dependencies and scripts
├── tsconfig.json         # TypeScript configuration
├── vite.config.ts        # Vite configuration
└── README.md             # Project documentation
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)

### Steps to Run Locally

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-repo/camera-management-dashboard.git
   cd camera-management-dashboard
   ```

2. **Install dependencies**:
   ```bash
   yarn install
   ```
3. \*\*Environment Variables
   ```bash
   VITE_API_URL=<API URL>

   ```
4. **Start the development server**:

   ```bash
   yarn run dev
   ```

5. **Open in browser**:
   Navigate to [http://localhost:5173](http://localhost:5173).

---

## 🛠️ Tech Stack

- **Frontend**: React, TypeScript
- **State Management**: React Context
- **Routing**: TanStack Router
- **Data Fetching**: TanStack React Query
- **Styling**: Tailwind CSS
- **Charts**: Recharts
- **HTTP Client**: Axios
- **Build Tool**: Vite

---

## 📜 Scripts

- `yarn dev`: Start the development server.
- `yarn build`: Build the project for production.
- `yarn preview`: Preview the production build.
- `yarn lint`: Run ESLint to check for code issues.

---

## 📦 Deployment

This project is deployed on **Vercel**. Visit the live application here:  
[https://camera-management-dashboard-kha4.vercel.app/](https://camera-management-dashboard-kha4.vercel.app/)
