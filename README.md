# 3D Portfolio

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Vercel-blue?style=for-the-badge)](https://portfolio-alpha-kohl-zskf5ep2eq.vercel.app)
[![GitHub](https://img.shields.io/badge/GitHub-Abhishek371222-black?style=for-the-badge&logo=github)](https://github.com/Abhishek371222/3D-Portfolio)
[![React](https://img.shields.io/badge/React-18-blue?style=for-the-badge&logo=react)](https://reactjs.org)
[![Three.js](https://img.shields.io/badge/Three.js-r148-black?style=for-the-badge&logo=three.js)](https://threejs.org)

A modern, high-performance single-page 3D portfolio built with React, Three.js, and TypeScript. Showcase your projects and skills with stunning 3D visualizations and smooth interactions.

## 🌐 Live Demo

**[View Live Portfolio →](https://portfolio-alpha-kohl-zskf5ep2eq.vercel.app)**

Experience the 3D portfolio in action. Click around, explore the interactive elements, and enjoy the smooth animations!

## 🚀 Features

- **3D Graphics**: Interactive 3D scenes powered by Three.js and React Three Fiber
- **Modern UI**: Beautiful, responsive components built with Radix UI and Tailwind CSS
- **Type-Safe**: Full TypeScript support for robust development
- **Fast Performance**: Optimized with Vite for rapid development and production builds
- **Full-Stack**: Integrated Node.js/Express backend with database support via Drizzle ORM
- **Responsive Design**: Mobile-friendly interface that works on all devices

## 🛠️ Tech Stack

### Frontend
- **React** - UI framework
- **Three.js** - 3D graphics library
- **React Three Fiber** - React renderer for Three.js
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Radix UI** - Accessible component primitives
- **TypeScript** - Type-safe JavaScript

### Backend
- **Node.js** - JavaScript runtime
- **Express** - Web framework
- **Drizzle ORM** - Type-safe database ORM
- **PostgreSQL** - Database (configured via Drizzle)

## 📋 Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Git

## 🎯 Quick Start

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Abhishek371222/3D-Portfolio.git
   cd 3D-Portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

### Development

Run both the frontend and backend in development mode:

**Terminal 1 - Frontend (Vite dev server on port 5000):**
```bash
npm run dev:client
```

**Terminal 2 - Backend (Express server):**
```bash
npm run dev
```

Then open your browser and navigate to `http://localhost:5000`

### Building for Production

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Start the production server**
   ```bash
   npm run start
   ```

## 📦 Available Scripts

- `npm run dev:client` - Start Vite dev server on port 5000
- `npm run dev` - Start Express server in development mode
- `npm run build` - Build client and server for production
- `npm run start` - Run production build
- `npm run check` - Run TypeScript type checking
- `npm run db:push` - Push database schema changes (Drizzle)

## 📁 Project Structure

```
3D-Portfolio/
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/    # React components
│   │   │   ├── canvas/    # 3D canvas components
│   │   │   ├── sections/  # Page sections
│   │   │   └── ui/        # UI components
│   │   ├── hooks/         # Custom React hooks
│   │   ├── lib/           # Utilities and helpers
│   │   ├── pages/         # Page components
│   │   ├── App.tsx        # Main App component
│   │   └── main.tsx       # Entry point
│   └── index.html         # HTML template
├── server/                # Express backend
│   ├── index.ts          # Server entry point
│   ├── routes.ts         # API routes
│   ├── static.ts         # Static file serving
│   ├── vite.ts           # Vite dev middleware
│   └── storage.ts        # Database/storage logic
├── shared/                # Shared code (types, schemas)
│   └── schema.ts         # Database schema
├── script/                # Build scripts
├── vite.config.ts        # Vite configuration
├── tsconfig.json         # TypeScript configuration
└── package.json          # Project dependencies
```

## 🎨 Sections

The portfolio includes the following sections:

- **Hero** - Eye-catching introduction with 3D elements
- **About** - Personal information and background
- **Skills** - Showcase of technical skills
- **Experience** - Work experience and timeline
- **Education** - Educational background
- **Projects** - Showcase of portfolio projects
- **Contact** - Contact form and information

## 🔧 Configuration

### Database Setup

To set up the database with Drizzle ORM:

```bash
npm run db:push
```

This will apply database schema changes defined in `shared/schema.ts`.

### Environment Variables

Create a `.env` file in the root directory with necessary environment variables (if required by your backend).

## 🚀 Deployment

The project is configured to be deployed on platforms like Replit. Key deployment features:

- Automatic build and start scripts
- Environment variable configuration
- Optimized production builds

## 📝 License

MIT License - feel free to use this project for personal or commercial purposes.

## 👨‍💻 Author

**Abhishek** - [GitHub Profile](https://github.com/Abhishek371222)

## 🤝 Contributing

Feel free to fork this project and submit pull requests for any improvements.

## 📞 Contact

- Email: abhishekaj371@gmail.com
- GitHub: [@Abhishek371222](https://github.com/Abhishek371222)

---

**Built with ❤️ using modern web technologies**
