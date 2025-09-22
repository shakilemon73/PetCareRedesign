import { useState } from 'react';
import MobileHeader from '@/components/MobileHeader';
import QubiDevice from '@/components/QubiDevice';
import QuantumExecutionCard from '@/components/QuantumExecutionCard';
import { Button } from '@/components/ui/button';

//todo: remove mock functionality - replace with real device data
const mockDevices = [
  {
    id: 'qubi-v1-001',
    name: 'Qubi v1',
    version: '1.2.3',
    batteryLevel: 90,
    isConnected: true
  },
  {
    id: 'qubi-v2-001', 
    name: 'Qubi v1',
    version: '1.2.3',
    batteryLevel: 45,
    isConnected: true
  }
];

export default function Dashboard() {
  const [devices] = useState(mockDevices);

  const handleAddDevice = () => {
    window.location.href = '/scan';
  };

  const handleSettings = () => {
    window.location.href = '/settings';
  };

  return (
    <div className="min-h-screen bg-background">
      <MobileHeader 
        title="Your Qubis" 
        showAdd={true} 
        showSettings={true}
        onAdd={handleAddDevice}
        onSettings={handleSettings}
      />
      
      <div className="p-4 pb-20 max-w-md mx-auto">
        {/* Connected Devices */}
        <div className="space-y-4 mb-6">
          {devices.map((device) => (
            <QubiDevice
              key={device.id}
              name={device.name}
              version={device.version}
              batteryLevel={device.batteryLevel}
              isConnected={device.isConnected}
            />
          ))}
        </div>
        
        {/* Quantum Execution */}
        <QuantumExecutionCard />
      </div>
    </div>
  );
}