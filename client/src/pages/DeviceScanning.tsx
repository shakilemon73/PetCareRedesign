import { useState } from 'react';
import { useLocation } from 'wouter';
import MobileHeader from '@/components/MobileHeader';
import DeviceScanCard from '@/components/DeviceScanCard';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { RefreshCw } from 'lucide-react';

//todo: remove mock functionality - replace with real device scanning
const mockNearbyDevices = [
  {
    id: 'qubi-v1-scan-001',
    name: 'Qubi v1',
    version: '1.2.3',
    batteryLevel: 90,
    signalStrength: 85
  },
  {
    id: 'qubi-v2-scan-002',
    name: 'Qubi v2',
    version: '2.1.0',
    batteryLevel: 20,
    signalStrength: 65,
    isEntangled: true
  },
  {
    id: 'qubi-v1-scan-003',
    name: 'Qubi v1',
    version: '1.2.3',
    batteryLevel: 55,
    signalStrength: 45
  }
];

export default function DeviceScanning() {
  const [nearbyDevices, setNearbyDevices] = useState(mockNearbyDevices);
  const [isScanning, setIsScanning] = useState(false);
  const [, setLocation] = useLocation();

  const handleBack = () => {
    setLocation('/');
  };

  const handleScanAgain = async () => {
    setIsScanning(true);
    
    // Simulate scanning process
    setTimeout(() => {
      setIsScanning(false);
      // Could update nearbyDevices here
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-background">
      <MobileHeader 
        title="Connected Qubis" 
        showBack={true}
        onBack={handleBack}
      />
      
      <div className="p-4 pb-20 max-w-md mx-auto">
        {/* Scan Header */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">Nearby Qubis</h2>
            <Button 
              variant="outline" 
              size="sm"
              disabled={isScanning}
              onClick={handleScanAgain}
              data-testid="button-scan-again"
            >
              <RefreshCw className={`h-4 w-4 mr-2 ${isScanning ? 'animate-spin' : ''}`} />
              {isScanning ? 'Scanning...' : 'Scan again'}
            </Button>
          </div>
          
          <Card className="bg-gradient-to-r from-electric-indigo/10 to-quantum-pink/10">
            <CardContent className="p-4">
              <p className="text-sm text-muted-foreground">
                Qubis might be grouped together if they are already entangled.
              </p>
            </CardContent>
          </Card>
        </div>
        
        {/* Nearby Devices */}
        <div className="space-y-4">
          {nearbyDevices.map((device) => (
            <DeviceScanCard
              key={device.id}
              id={device.id}
              name={device.name}
              version={device.version}
              batteryLevel={device.batteryLevel}
              signalStrength={device.signalStrength}
              isEntangled={device.isEntangled}
            />
          ))}
        </div>
      </div>
    </div>
  );
}