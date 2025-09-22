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
      
      {/* Enhanced Hero Section - Emotional Design */}
      <div className="bg-gradient-to-r from-electric-indigo/5 via-quantum-pink/5 to-ion-green/5 px-4 py-6">
        <div className="max-w-md mx-auto text-center">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-electric-indigo/20 to-quantum-pink/20 flex items-center justify-center mx-auto mb-4 relative">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-electric-indigo to-quantum-pink animate-pulse" />
            {isScanning && (
              <div className="absolute inset-0 border-4 border-electric-indigo/30 rounded-full animate-ping" />
            )}
          </div>
          <h1 className="text-xl font-bold bg-gradient-to-r from-electric-indigo to-quantum-pink bg-clip-text text-transparent mb-2" data-testid="text-scanning-title">
            {isScanning ? 'Scanning Quantum Field...' : 'Nearby Quantum Devices'}
          </h1>
          <p className="text-sm text-muted-foreground" data-testid="text-device-count">
            {nearbyDevices.length} Qubi{nearbyDevices.length !== 1 ? 's' : ''} detected • Tap to connect
          </p>
        </div>
      </div>
      
      <div className="p-4 pb-20 max-w-md mx-auto">
        {/* Enhanced Scan Controls */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-lg font-semibold text-foreground">Active Scan</h2>
              <p className="text-xs text-muted-foreground">
                {isScanning ? 'Searching quantum signatures...' : 'Ready to discover devices'}
              </p>
            </div>
            <Button 
              variant="outline" 
              className="h-12 px-6 hover-elevate active-elevate-2"
              disabled={isScanning}
              onClick={handleScanAgain}
              data-testid="button-scan-again"
            >
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-electric-indigo/20 to-quantum-pink/20 flex items-center justify-center">
                  <RefreshCw className={`h-3 w-3 ${isScanning ? 'animate-spin' : ''}`} />
                </div>
                <span className="text-sm font-medium">
                  {isScanning ? 'Scanning...' : 'Refresh'}
                </span>
              </div>
            </Button>
          </div>
          
          {/* Enhanced Info Card */}
          <Card className="hover-elevate transition-all duration-200 border-l-4 border-l-electric-indigo">
            <CardContent className="p-4">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-electric-indigo/20 to-quantum-pink/20 flex items-center justify-center mt-1">
                  <div className="w-4 h-4 rounded bg-gradient-to-br from-electric-indigo to-quantum-pink" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium mb-1">Entanglement Detection</p>
                  <p className="text-xs text-muted-foreground">
                    Entangled Qubis appear grouped together with quantum correlation indicators.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Enhanced Device List */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-foreground">Available Devices</h3>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent ml-4" />
          </div>
        </div>
        
        <div className="space-y-6">
          {nearbyDevices.map((device, index) => (
            <div key={device.id} className="relative">
              {/* Connection indicator line for entangled devices */}
              {device.isEntangled && index < nearbyDevices.length - 1 && (
                <div className="absolute left-6 top-20 w-0.5 h-6 bg-gradient-to-b from-quantum-pink to-electric-indigo opacity-60 z-0" />
              )}
              
              <div className="relative z-10">
                <DeviceScanCard
                  key={device.id}
                  id={device.id}
                  name={device.name}
                  version={device.version}
                  batteryLevel={device.batteryLevel}
                  signalStrength={device.signalStrength}
                  isEntangled={device.isEntangled}
                />
              </div>
            </div>
          ))}
          
          {/* Scan completion indicator */}
          {!isScanning && nearbyDevices.length > 0 && (
            <div className="text-center py-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-ion-green/20 to-electric-indigo/20 flex items-center justify-center mx-auto mb-3">
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-ion-green to-electric-indigo animate-pulse" />
              </div>
              <p className="text-sm font-medium text-ion-green mb-1">Scan Complete</p>
              <p className="text-xs text-muted-foreground">
                All nearby Qubi devices have been discovered
              </p>
            </div>
          )}
          
          {/* Empty state */}
          {!isScanning && nearbyDevices.length === 0 && (
            <div className="text-center py-12">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-muted/20 to-muted/10 flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 rounded-full border-2 border-dashed border-muted-foreground/30" />
              </div>
              <p className="text-lg font-semibold text-muted-foreground mb-2">No Devices Found</p>
              <p className="text-sm text-muted-foreground mb-4">
                Make sure your Qubi devices are powered on and within range
              </p>
              <Button 
                variant="outline" 
                onClick={handleScanAgain}
                className="hover-elevate active-elevate-2"
              >
                <RefreshCw className="h-4 w-4 mr-2" />
                Try Again
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}