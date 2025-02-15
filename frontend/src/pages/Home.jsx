import React from 'react';
import { Shield, Lock, AlertTriangle, Search } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Welcome to VULNEX
          </h1>
          <p className="text-xl text-gray-600">
            Advanced Vulnerability Analysis and Threat Intelligence Platform
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Shield className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Real-time Monitoring</h3>
            <p className="text-gray-600">
              Advanced threat detection and system monitoring with instant alerts
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Lock className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Secure Communication</h3>
            <p className="text-gray-600">
              End-to-end encrypted team communication for sensitive discussions
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Search className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Threat Intelligence</h3>
            <p className="text-gray-600">
              Extract and analyze threat reports from multiple sources
            </p>
          </div>
        </div>

        <div className="mt-16 bg-red-50 border border-red-200 rounded-lg p-6">
          <div className="flex items-center gap-3 mb-4">
            <AlertTriangle className="w-6 h-6 text-red-500" />
            <h3 className="text-xl font-semibold text-red-700">Threat Alert Center</h3>
          </div>
          <p className="text-red-600">
            Real-time monitoring and analysis of emerging cybersecurity threats
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;