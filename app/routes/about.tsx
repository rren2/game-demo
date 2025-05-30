import type { Route } from "./+types/about";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "About - Game Demo" },
    { name: "description", content: "Learn more about our game demo application" },
  ];
}

export default function About() {
  return (
    <div className="min-h-screen py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
            About Our Game Demo
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full"></div>
        </div>
          <div className="grid md:grid-cols-1 gap-8">
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center mr-4">
                <span className="text-white text-xl font-bold">🎯</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-800">Our Mission</h2>
            </div>
            <p className="text-gray-600 leading-relaxed mb-4">
              Welcome to our game demo application! Our mission is to create engaging and innovative
              gaming experiences that challenge and entertain players of all skill levels.
            </p>
            <p className="text-gray-600 leading-relaxed">
              This demo showcases our vision for interactive gameplay and modern web development
              practices using React and React Router.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-500 rounded-lg flex items-center justify-center mr-4">
                <span className="text-white text-xl font-bold">🎮</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-800">Tic-Tac-Toe Game</h2>
            </div>
            <p className="text-gray-600 leading-relaxed mb-4">
              Our interactive Tic-Tac-Toe game is built following the official React tutorial, 
              featuring a modern and beautiful design with enhanced user experience.
            </p>
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Game Features:</h3>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                  Interactive 3x3 game board with hover effects
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                  Visual game pieces using emoji (❌ for X, ⭕ for O)
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                  Winner detection with celebration display
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                  Complete move history with time travel feature
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                  Beautiful gradient styling and smooth animations
                </li>
              </ul>
            </div>
            <div className="flex gap-4">
              <a 
                href="/game" 
                className="px-6 py-3 bg-gradient-to-r from-red-600 to-pink-600 text-white rounded-lg hover:from-red-700 hover:to-pink-700 transition-all duration-200 transform hover:scale-105 shadow-lg font-medium"
              >
                Play Now
              </a>
            </div>
          </div>          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg flex items-center justify-center mr-4">
                <span className="text-white text-xl font-bold">⚡</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-800">Technology Stack</h2>
            </div>
            <p className="text-gray-600 leading-relaxed mb-4">
              Our application is built with cutting-edge technologies and follows React best practices:
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              <div className="flex items-center p-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                <span className="text-gray-700 font-medium">React 19 with Hooks</span>
              </div>
              <div className="flex items-center p-3 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg">
                <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                <span className="text-gray-700 font-medium">React Router v7</span>
              </div>
              <div className="flex items-center p-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                <span className="text-gray-700 font-medium">Tailwind CSS</span>
              </div>
              <div className="flex items-center p-3 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg">
                <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></div>
                <span className="text-gray-700 font-medium">TypeScript</span>
              </div>
              <div className="flex items-center p-3 bg-gradient-to-r from-red-50 to-pink-50 rounded-lg">
                <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                <span className="text-gray-700 font-medium">Vite Build Tool</span>
              </div>
            </div>
            <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Game Implementation:</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                The Tic-Tac-Toe game follows the official React tutorial architecture with useState hooks 
                for state management, immutable state updates, and component composition. We've enhanced 
                it with modern CSS styling, smooth animations, and emoji-based visual elements.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-rose-500 rounded-lg flex items-center justify-center mr-4">
                <span className="text-white text-xl font-bold">💬</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-800">Contact Us</h2>
            </div>
            <p className="text-gray-600 leading-relaxed mb-6">
              We'd love to hear your feedback! Please reach out to us with any questions,
              suggestions, or comments about our game demo.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-200 transform hover:scale-105 shadow-lg">
                Send Feedback
              </button>
              <button className="px-6 py-3 border-2 border-purple-600 text-purple-600 rounded-lg hover:bg-purple-600 hover:text-white transition-all duration-200 transform hover:scale-105">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
