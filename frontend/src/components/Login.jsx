import { X, Mail, Lock, User } from "lucide-react";
import { useState } from "react";

export default function Login({ isSignUp, isOpen, closeSidebar }) {
  const [isRegister, setIsRegister] = useState(isSignUp);

  return (
    <div
      className={`fixed top-0 right-0 z-20 w-full max-w-md h-full bg-gradient-to-br from-teal-50 to-white shadow-2xl rounded-l-lg transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } transition-transform duration-500 ease-in-out p-8 flex flex-col md:w-96 sm:w-full`}
    >
      <button
        onClick={closeSidebar}
        className="absolute top-6 right-6 text-gray-600 hover:text-gray-900 transition-colors duration-200"
      >
        <X size={24} className="hover:scale-110 transition-transform duration-200" />
      </button>

      <h2 className="text-4xl font-bold mb-8 mt-12 text-center text-teal-900">
        {isRegister ? "Register" : "Login"}
      </h2>

      <form className="flex flex-col gap-5" action="http://localhost:5000/api/auth/login" method="post">
        {isRegister && (
          <div className="flex items-center border border-gray-300 rounded-lg p-3 focus-within:ring-2 focus-within:ring-teal-400 focus-within:border-transparent transition-all duration-200">
            <User className="text-gray-500 mr-2" size={20} />
            <input
              type="text"
              placeholder="Full Name"
              className="w-full focus:outline-none bg-transparent"
              name="name"
            />
          </div>
        )}
        <div className="flex items-center border border-gray-300 rounded-lg p-3 focus-within:ring-2 focus-within:ring-teal-400 focus-within:border-transparent transition-all duration-200">
          <Mail className="text-gray-500 mr-2" size={20} />
          <input
            type="email"
            placeholder="Email"
            className="w-full focus:outline-none bg-transparent"
            name="email"
          />
        </div>
        <div className="flex items-center border border-gray-300 rounded-lg p-3 focus-within:ring-2 focus-within:ring-teal-400 focus-within:border-transparent transition-all duration-200">
          <Lock className="text-gray-500 mr-2" size={20} />
          <input
            type="password"
            placeholder="Password"
            className="w-full focus:outline-none bg-transparent"
            name="password"
          />
        </div>
        <button className="bg-teal-700 hover:bg-teal-600 text-white py-3 rounded-lg font-semibold transition-all duration-200 hover:scale-105 transform">
          {isRegister ? "Register" : "Login"}
        </button>
      </form>

      <div className="mt-6 text-center">
        <p className="text-gray-600">
          {isRegister ? "Already have an account?" : "Don't have an account?"}
        </p>
        <button
          onClick={() => setIsRegister(!isRegister)}
          className="text-teal-700 hover:text-teal-800 hover:underline font-semibold transition-all duration-200"
        >
          {isRegister ? "Login" : "Register"}
        </button>
      </div>
    </div>
  );
}
