import React from 'react';
import { Shield, AlertTriangle, Activity, Users, Server, Clock } from 'lucide-react';

const Dashboard = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-8">Security Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <div className="bg-green-100 p-6 rounded-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-green-600 font-semibold">System Status</p>
              <h3 className="text-2xl font-bold">Protected</h3>
            </div>
            <Shield className="w-8 h-8 text-green-500" />
          </div>
        </div>

        <div className="bg-yellow-100 p-6 rounded-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-yellow-600 font-semibold">Active Threats</p>
              <h3 className="text-2xl font-bold">3 Detected</h3>
            </div>
            <AlertTriangle className="w-8 h-8 text-yellow-500" />
          </div>
        </div>

        <div className="bg-blue-100 p-6 rounded-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-600 font-semibold">Network Activity</p>
              <h3 className="text-2xl font-bold">Normal</h3>
            </div>
            <Activity className="w-8 h-8 text-blue-500" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Users className="w-5 h-5" />
            Active Users
          </h3>
          <div className="space-y-4">
            {['John Doe', 'Jane Smith', 'Mike Johnson'].map((user) => (
              <div key={user} className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>{user}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Clock className="w-5 h-5" />
            Recent Activities
          </h3>
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-sm">
              <span className="text-gray-500">10:45 AM</span>
              <span>New login detected from 192.168.1.105</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <span className="text-gray-500">10:30 AM</span>
              <span>Firewall rules updated</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <span className="text-gray-500">10:15 AM</span>
              <span>System scan completed</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;