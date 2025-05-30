# Game Demo Application 🎮

A beautiful React-based game demonstration featuring a modern tic-tac-toe implementation built with React Router.

## 🎯 Game Features

- **Interactive Tic-Tac-Toe**: Classic game with modern UI using emoji pieces (❌ and ⭕)
- **Move History**: Travel back in time to any previous move
- **Winner Detection**: Automatic game state detection with celebration display
- **Beautiful Design**: Purple gradient theme with smooth animations and hover effects
- **Responsive Layout**: Works perfectly on desktop and mobile devices

## 🛠️ Technical Features

- 🚀 Server-side rendering with React Router
- ⚡️ Hot Module Replacement (HMR) for fast development
- 📦 Asset bundling and optimization
- 🔄 Data loading and mutations
- 🔒 TypeScript by default for type safety
- 🎨 TailwindCSS with custom game styling
- 📖 [React Router docs](https://reactrouter.com/)

## 📱 Application Pages

- **Home** (`/`): Welcome page with feature overview and navigation
- **Game** (`/game`): Interactive tic-tac-toe game with full functionality
- **About** (`/about`): Project information, technology stack, and contact details

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager

### Installation

Install the dependencies:

```bash
npm install
```

### Development

Start the development server with HMR:

```bash
npm run dev
```

Your application will be available at `http://localhost:5173`.

## 🎮 How to Play

1. Navigate to the **Game** page from the main menu
2. Click any square on the 3x3 grid to make your move
3. Players alternate between X (❌) and O (⭕)
4. First to get 3 in a row (horizontal, vertical, or diagonal) wins!
5. Use the move history buttons to travel back to any previous game state
6. Click "Go to game start" to reset the board

## Building for Production

Create a production build:

```bash
npm run build
```

## Deployment

### Docker Deployment

To build and run using Docker:

```bash
docker build -t my-app .

# Run the container
docker run -p 3000:3000 my-app
```

The containerized application can be deployed to any platform that supports Docker, including:

- AWS ECS
- Google Cloud Run
- Azure Container Apps
- Digital Ocean App Platform
- Fly.io
- Railway

### DIY Deployment

If you're familiar with deploying Node applications, the built-in app server is production-ready.

Make sure to deploy the output of `npm run build`

```
├── package.json
├── package-lock.json (or pnpm-lock.yaml, or bun.lockb)
├── build/
│   ├── client/    # Static assets
│   └── server/    # Server-side code
```

## Styling

This template comes with [Tailwind CSS](https://tailwindcss.com/) already configured for a simple default starting experience. You can use whatever CSS framework you prefer.

---

## 🎨 Design Philosophy

This application demonstrates modern React development practices including:
- **Component Composition**: Reusable UI components with clean separation of concerns
- **Immutable State**: Proper state management following React best practices
- **Accessible Design**: Clean, intuitive interface with visual feedback
- **Responsive Layout**: Mobile-first design that scales beautifully

## 🤝 Contributing

This project serves as a learning demonstration. Feel free to:
- Open issues for bugs or feature requests
- Submit pull requests with improvements
- Use this code as a reference for your own projects

Built with ❤️ using React Router and modern web technologies.
