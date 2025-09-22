import { useState } from 'react';
import { useLocation } from 'wouter';
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
  const [, setLocation] = useLocation();

  const handleAddDevice = () => {
    setLocation('/scan');
  };

  const handleSettings = () => {
    setLocation('/settings');
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
      
      {/* Hero Welcome Section - Emotional Design & Discoverability */}
      <div className="bg-gradient-to-r from-electric-indigo/5 via-quantum-pink/5 to-ion-green/5 px-4 py-6">
        <div className="max-w-md mx-auto">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-electric-indigo to-quantum-pink bg-clip-text text-transparent mb-2">
            Welcome back!
          </h1>
          <p className="text-muted-foreground text-sm">
            {devices.length} device{devices.length !== 1 ? 's' : ''} ready for quantum computing
          </p>
        </div>
      </div>
      
      <div className="p-4 pb-20 max-w-md mx-auto">
        {/* Connected Devices - Enhanced Scannability */}
        <div className="space-y-6 mb-8">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-foreground">Connected Devices</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent ml-4" />
          </div>
          
          <div className="space-y-4">
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
        </div>
        
        {/* Quantum Execution - Enhanced Visual Hierarchy */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-foreground">Recent Activity</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent ml-4" />
          </div>
          
          <QuantumExecutionCard />
        </div>
        
        {/* Quick Actions - Clear Affordances */}
        <div className="mt-8 p-6 rounded-2xl bg-gradient-to-br from-muted/30 to-muted/10 border border-border/50">
          <h3 className="text-base font-semibold mb-4 text-center">Quick Actions</h3>
          <div className="grid grid-cols-2 gap-4">
            <Button 
              variant="outline" 
              className="h-14 flex-col space-y-2 hover-elevate active-elevate-2"
              onClick={handleAddDevice}
              data-testid="button-quick-scan-device"
            >
              <div className="w-6 h-6 rounded-full bg-gradient-to-br from-electric-indigo to-ion-green" />
              <span className="text-xs font-medium">Add Device</span>
            </Button>
            
            <Button 
              variant="outline" 
              className="h-14 flex-col space-y-2 hover-elevate active-elevate-2"
              onClick={() => setLocation('/quantum-computers')}
              data-testid="button-quick-quantum-computers"
            >
              <div className="w-6 h-6 rounded-full bg-gradient-to-br from-quantum-pink to-ember-orange" />
              <span className="text-xs font-medium">Run Circuit</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}