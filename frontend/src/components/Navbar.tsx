import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Shield, LayoutDashboard, MessageSquare, FileUp, LogOut } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path ? 'bg-blue-700' : '';
  };

  return (
    <nav className="bg-gray-900 text-white h-screen w-64 fixed left-0 top-0 p-4">
      <div className="flex items-center gap-2 mb-8">
        <Shield className="w-8 h-8 text-blue-500" />
        <span className="text-xl font-bold">CyberGuard</span>
      </div>
      
      <div className="space-y-2">
        <Link to="/" className={`flex items-center gap-2 p-2 rounded hover:bg-blue-700 transition-colors ${isActive('/')}`}>
          <Shield className="w-5 h-5" />
          <span>Home</span>
        </Link>
        <Link to="/dashboard" className={`flex items-center gap-2 p-2 rounded hover:bg-blue-700 transition-colors ${isActive('/dashboard')}`}>
          <LayoutDashboard className="w-5 h-5" />
          <span>Dashboard</span>
        </Link>
        <Link to="/chat" className={`flex items-center gap-2 p-2 rounded hover:bg-blue-700 transition-colors ${isActive('/chat')}`}>
          <MessageSquare className="w-5 h-5" />
          <span>Security Chat</span>
        </Link>
        <Link to="/pdf-analyzer" className={`flex items-center gap-2 p-2 rounded hover:bg-blue-700 transition-colors ${isActive('/pdf-analyzer')}`}>
          <FileUp className="w-5 h-5" />
          <span>PDF Analyzer</span>
        </Link>
      </div>
      
      <div className="absolute bottom-4 w-full left-0 px-4">
        <button className="flex items-center gap-2 p-2 w-full text-gray-400 hover:text-white hover:bg-red-600 rounded transition-colors">
          <LogOut className="w-5 h-5" />
          <span>Logout</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;