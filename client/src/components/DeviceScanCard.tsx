import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Battery, MoreHorizontal, Wifi } from 'lucide-react';

interface DeviceScanCardProps {
  id: string;
  name: string;
  version: string;
  batteryLevel: number;
  signalStrength: number;
  isEntangled?: boolean;
  onConnect?: (deviceId: string) => void;
  onMoreOptions?: (deviceId: string) => void;
}

export default function DeviceScanCard({
  id,
  name,
  version,
  batteryLevel,
  signalStrength,
  isEntangled = false,
  onConnect = (deviceId) => console.log(`Connect to ${deviceId}`),
  onMoreOptions = (deviceId) => console.log(`More options for ${deviceId}`)
}: DeviceScanCardProps) {
  const [isConnecting, setIsConnecting] = useState(false);

  const handleConnect = async () => {
    setIsConnecting(true);
    onConnect(id);
    
    // Simulate connection process
    setTimeout(() => {
      setIsConnecting(false);
    }, 2000);
  };

  const getBatteryColor = () => {
    if (batteryLevel > 70) return 'text-ion-green';
    if (batteryLevel > 30) return 'text-helio-yellow';
    return 'text-quantum-pink';
  };

  const getSignalStrength = () => {
    if (signalStrength > 80) return 'text-ion-green';
    if (signalStrength > 50) return 'text-helio-yellow';
    return 'text-quantum-pink';
  };

  return (
    <Card className="w-full mb-4 hover-elevate">
      <CardContent className="p-4">
        <div className="flex items-center justify-between">
          {/* Device Info */}
          <div className="flex items-center space-x-3 flex-1">
            {/* Device Icon with Signal Indicator */}
            <div className="relative">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-electric-indigo to-ion-green flex items-center justify-center">
                <div className="w-6 h-6 bg-white rounded-full opacity-90" />
              </div>
              
              {/* Signal Strength Indicator */}
              <div className="absolute -bottom-1 -right-1">
                <div className={`w-5 h-5 rounded-full bg-background border-2 border-border flex items-center justify-center`}>
                  <Wifi className={`h-3 w-3 ${getSignalStrength()}`} />
                </div>
              </div>
            </div>
            
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-1">
                <h3 className="font-semibold" data-testid={`text-scan-device-${id}`}>
                  {name}
                </h3>
                {isEntangled && (
                  <Badge variant="outline" className="text-xs bg-electric-indigo/10 text-electric-indigo">
                    Entangled
                  </Badge>
                )}
              </div>
              
              <p className="text-sm text-muted-foreground mb-2">
                {version}
              </p>
              
              {/* Battery and Signal Status */}
              <div className="flex items-center space-x-4 text-xs">
                <div className="flex items-center space-x-1">
                  <Battery className={`h-3 w-3 ${getBatteryColor()}`} />
                  <span className={getBatteryColor()}>
                    {batteryLevel}%
                  </span>
                </div>
                
                <div className="flex items-center space-x-1">
                  <Wifi className={`h-3 w-3 ${getSignalStrength()}`} />
                  <span className={getSignalStrength()}>
                    {signalStrength}%
                  </span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Actions */}
          <div className="flex items-center space-x-2">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => onMoreOptions(id)}
              data-testid={`button-scan-more-${id}`}
            >
              <MoreHorizontal className="h-4 w-4" />
            </Button>
            
            <Button 
              variant="default"
              size="sm"
              disabled={isConnecting}
              onClick={handleConnect}
              data-testid={`button-connect-${id}`}
              className="bg-gradient-to-r from-electric-indigo to-quantum-pink hover:opacity-90"
            >
              {isConnecting ? 'Connecting...' : 'Connect'}
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}