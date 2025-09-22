import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Info, MoreHorizontal, Battery, ChevronDown } from 'lucide-react';

interface QubiDeviceProps {
  name: string;
  version: string;
  batteryLevel: number;
  isConnected: boolean;
  onGateClick?: (gate: string) => void;
  onInfoClick?: () => void;
  onMoreClick?: () => void;
}

const quantumGates = [
  { id: 'x', label: 'X', color: 'bg-quantum-pink' },
  { id: 'y', label: 'Y', color: 'bg-helio-yellow' },
  { id: 'z', label: 'Z', color: 'bg-sky-blue' },
  { id: 't', label: 'T', color: 'bg-ion-green' },
  { id: 'h', label: 'H', color: 'bg-electric-indigo' },
  { id: 'cnot', label: 'CNOT', color: 'bg-ember-orange' },
];

export default function QubiDevice({ 
  name, 
  version, 
  batteryLevel, 
  isConnected,
  onGateClick = (gate) => console.log(`${gate} gate triggered`),
  onInfoClick = () => console.log('Info clicked'),
  onMoreClick = () => console.log('More options clicked')
}: QubiDeviceProps) {
  const [selectedGate, setSelectedGate] = useState<string | null>(null);
  const [isExpanded, setIsExpanded] = useState(true);

  const handleGateClick = (gateId: string) => {
    setSelectedGate(gateId);
    onGateClick(gateId);
  };

  const getBatteryColor = () => {
    if (batteryLevel > 70) return 'text-ion-green';
    if (batteryLevel > 30) return 'text-helio-yellow';
    return 'text-quantum-pink';
  };

  return (
    <Card className="w-full mb-4 overflow-hidden">
      <CardContent className="p-4">
        {/* Device Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            {/* Device Icon */}
            <div className={`w-12 h-12 rounded-full ${isConnected ? 'bg-gradient-to-br from-electric-indigo to-ion-green' : 'bg-muted'} flex items-center justify-center`}>
              <div className="w-6 h-6 bg-white rounded-full opacity-90" />
            </div>
            
            {/* Device Info */}
            <div>
              <h3 className="font-semibold text-lg" data-testid={`text-device-${name.toLowerCase().replace(' ', '-')}`}>
                {name}
              </h3>
              <p className="text-sm text-muted-foreground">{version}</p>
            </div>
          </div>
          
          {/* Actions */}
          <div className="flex items-center space-x-2">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={onInfoClick}
              data-testid="button-device-info"
            >
              <Info className="h-4 w-4" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={onMoreClick}
              data-testid="button-device-more"
            >
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Battery Status */}
        <div className="flex items-center space-x-2 mb-4">
          <Battery className={`h-4 w-4 ${getBatteryColor()}`} />
          <span className={`text-sm font-medium ${getBatteryColor()}`}>
            {batteryLevel}% battery
          </span>
          {!isConnected && (
            <Badge variant="outline" className="ml-2">Disconnected</Badge>
          )}
        </div>

        {/* Quantum Gates */}
        {isConnected && (
          <div>
            <Button
              variant="ghost"
              className="w-full justify-between mb-3 h-8"
              onClick={() => setIsExpanded(!isExpanded)}
              data-testid="button-gates-toggle"
            >
              <span className="text-sm font-medium">Quantum Gates</span>
              <ChevronDown className={`h-4 w-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
            </Button>
            
            {isExpanded && (
              <div className="grid grid-cols-3 gap-2">
                {quantumGates.map((gate) => (
                  <Button
                    key={gate.id}
                    variant={selectedGate === gate.id ? 'default' : 'outline'}
                    className={`h-12 text-sm font-semibold ${
                      selectedGate === gate.id 
                        ? `${gate.color} text-white hover:opacity-90` 
                        : 'hover-elevate'
                    }`}
                    onClick={() => handleGateClick(gate.id)}
                    data-testid={`button-gate-${gate.id}`}
                  >
                    {gate.label}
                  </Button>
                ))}
                
                {/* Measure Button */}
                <Button
                  variant={selectedGate === 'measure' ? 'default' : 'outline'}
                  className={`col-span-3 h-12 text-sm font-semibold ${
                    selectedGate === 'measure'
                      ? 'bg-gradient-to-r from-electric-indigo to-quantum-pink text-white'
                      : 'hover-elevate'
                  }`}
                  onClick={() => handleGateClick('measure')}
                  data-testid="button-gate-measure"
                >
                  Measure
                </Button>
              </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}