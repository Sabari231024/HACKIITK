import React, { useState } from 'react';
import { AlertTriangle, Search, Shield, ExternalLink } from 'lucide-react';

const ThreatExtractor = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [threats, setThreats] = useState([
    {
      id: 1,
      title: 'Ransomware Attack Pattern',
      severity: 'high',
      source: 'MITRE ATT&CK',
      description: 'New variant of ransomware targeting healthcare institutions',
      timestamp: '2024-03-15',
      indicators: ['*.malicious-domain.com', 'suspicious-process.exe']
    },
    {
      id: 2,
      title: 'Zero-day Vulnerability',
      severity: 'critical',
      source: 'CVE Database',
      description: 'Critical vulnerability in widely used networking protocol',
      timestamp: '2024-03-14',
      indicators: ['CVE-2024-1234', 'TCP Port 445']
    }
  ]);

  const handleSearch = (e) => {
    e.preventDefault();
    // Simulated search functionality
    if (searchQuery.trim()) {
      const newThreat = {
        id: threats.length + 1,
        title: `New Threat: ${searchQuery}`,
        severity: Math.random() > 0.5 ? 'high' : 'medium',
        source: 'Threat Intelligence Feed',
        description: 'Newly identified threat pattern requiring immediate attention',
        timestamp: new Date().toISOString().split('T')[0],
        indicators: ['New malicious pattern detected']
      };
      setThreats([newThreat, ...threats]);
      setSearchQuery('');
    }
  };

  const getSeverityColor = (severity) => {
    switch (severity) {
      case 'critical': return 'text-red-600 bg-red-100';
      case 'high': return 'text-orange-600 bg-orange-100';
      case 'medium': return 'text-yellow-600 bg-yellow-100';
      default: return 'text-blue-600 bg-blue-100';
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-8">Threat Intelligence Extractor</h1>

      <form onSubmit={handleSearch} className="mb-8">
        <div className="flex gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for threats, vulnerabilities, or indicators..."
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors flex items-center gap-2"
          >
            <Search className="w-5 h-5" />
            Extract
          </button>
        </div>
      </form>

      <div className="space-y-6">
        {threats.map((threat) => (
          <div key={threat.id} className="bg-white rounded-lg shadow p-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-xl font-semibold flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-red-500" />
                  {threat.title}
                </h3>
                <div className="flex items-center gap-3 mt-2">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getSeverityColor(threat.severity)}`}>
                    {threat.severity.toUpperCase()}
                  </span>
                  <span className="text-sm text-gray-500">Source: {threat.source}</span>
                  <span className="text-sm text-gray-500">Date: {threat.timestamp}</span>
                </div>
              </div>
              <button className="text-blue-500 hover:text-blue-600 flex items-center gap-1">
                <ExternalLink className="w-4 h-4" />
                Details
              </button>
            </div>

            <p className="text-gray-700 mb-4">{threat.description}</p>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium mb-2 flex items-center gap-2">
                <Shield className="w-4 h-4 text-blue-500" />
                Indicators of Compromise
              </h4>
              <ul className="list-disc list-inside space-y-1 text-gray-600">
                {threat.indicators.map((indicator, index) => (
                  <li key={index}>{indicator}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ThreatExtractor;