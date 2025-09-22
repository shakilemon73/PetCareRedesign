import { useState } from 'react';
import { useLocation } from 'wouter';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import MobileHeader from '@/components/MobileHeader';
import { Cpu, Zap, Clock, CheckCircle, ChevronDown } from 'lucide-react';

//todo: remove mock functionality - replace with real quantum computer data
const mockQuantumComputers = [
  {
    id: 'ibm-hanoi',
    name: 'IBM Hanoi',
    qubits: 32,
    status: 'online',
    provider: 'IBM Quantum',
    queueTime: '< 1 min',
    accuracy: 99.2,
    isSelected: true
  },
  {
    id: 'ibm-lagos',
    name: 'IBM Lagos', 
    qubits: 16,
    status: 'online',
    provider: 'IBM Quantum',
    queueTime: '2 mins',
    accuracy: 98.8,
    isSelected: false
  },
  {
    id: 'ibm-kolkata',
    name: 'IBM Kolkata',
    qubits: 27,
    status: 'maintenance',
    provider: 'IBM Quantum', 
    queueTime: 'Offline',
    accuracy: 99.1,
    isSelected: false
  },
  {
    id: 'rigetti-aspen',
    name: 'Rigetti Aspen-M-3',
    qubits: 80,
    status: 'online',
    provider: 'Rigetti',
    queueTime: '5 mins',
    accuracy: 97.5,
    isSelected: false
  }
];

const statusColors = {
  online: 'bg-ion-green text-white',
  maintenance: 'bg-helio-yellow text-rich-black',
  offline: 'bg-muted text-muted-foreground'
};

export default function QuantumComputers() {
  const [computers, setComputers] = useState(mockQuantumComputers);
  const [selectedComputer, setSelectedComputer] = useState('ibm-hanoi');
  const [, setLocation] = useLocation();

  const handleBack = () => {
    setLocation('/');
  };

  const handleSelectComputer = (computerId: string) => {
    setComputers(prev => prev.map(comp => ({
      ...comp,
      isSelected: comp.id === computerId
    })));
    setSelectedComputer(computerId);
  };

  const handleStartExecution = () => {
    console.log(`Start execution on ${selectedComputer}`);
    // Navigate back to dashboard with selected computer
    setLocation('/');
  };

  return (
    <div className="min-h-screen bg-background">
      <MobileHeader 
        title="Quantum Computers" 
        showBack={true}
        onBack={handleBack}
      />
      
      {/* Enhanced Hero Section - Emotional Design */}
      <div className="bg-gradient-to-r from-electric-indigo/5 via-quantum-pink/5 to-ion-green/5 px-4 py-6">
        <div className="max-w-md mx-auto text-center">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-electric-indigo/20 to-quantum-pink/20 flex items-center justify-center mx-auto mb-4">
            <Cpu className="h-8 w-8 text-electric-indigo animate-pulse" />
          </div>
          <h1 className="text-xl font-bold bg-gradient-to-r from-electric-indigo to-quantum-pink bg-clip-text text-transparent mb-2" data-testid="text-computers-title">
            Quantum Computing Network
          </h1>
          <p className="text-sm text-muted-foreground" data-testid="text-computers-subtitle">
            Select from {computers.filter(c => c.status === 'online').length} available processors • Real-time queue status
          </p>
        </div>
      </div>
      
      <div className="p-4 pb-20 max-w-md mx-auto">
        {/* Enhanced Computer Selection */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-foreground">Available Processors</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent ml-4" />
          </div>
        </div>
        
        <div className="space-y-6 mb-8">
          {computers.map((computer, index) => (
            <Card 
              key={computer.id} 
              className={`cursor-pointer transition-all duration-300 border-l-4 ${
                computer.isSelected 
                  ? 'ring-2 ring-electric-indigo bg-electric-indigo/5 border-l-electric-indigo shadow-lg scale-[1.02]' 
                  : computer.status === 'online' 
                    ? 'hover-elevate active-elevate-2 border-l-ion-green hover:border-l-electric-indigo' 
                    : 'border-l-muted opacity-75 cursor-not-allowed'
              }`}
              onClick={() => computer.status === 'online' && handleSelectComputer(computer.id)}
              data-testid={`card-computer-${computer.id}`}
            >
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-electric-indigo/10 to-quantum-pink/10 flex items-center justify-center relative">
                      <Cpu className="h-6 w-6 text-electric-indigo" />
                      {computer.isSelected && (
                        <div className="absolute -top-1 -right-1 w-4 h-4 bg-ion-green rounded-full border-2 border-background flex items-center justify-center">
                          <CheckCircle className="h-2 w-2 text-white" />
                        </div>
                      )}
                    </div>
                    <div>
                      <CardTitle className="text-lg font-semibold" data-testid={`text-computer-${computer.id}`}>
                        {computer.name}
                      </CardTitle>
                      <p className="text-sm text-muted-foreground">{computer.provider}</p>
                      <div className="flex items-center space-x-2 mt-1">
                        <Badge className={statusColors[computer.status as keyof typeof statusColors]}>
                          <div className="flex items-center space-x-1">
                            <div className={`w-2 h-2 rounded-full ${
                              computer.status === 'online' ? 'bg-white animate-pulse' : 
                              computer.status === 'maintenance' ? 'bg-rich-black' : 'bg-muted-foreground'
                            }`} />
                            <span className="capitalize">{computer.status}</span>
                          </div>
                        </Badge>
                        <span className="text-xs text-muted-foreground font-mono">#{String(index + 1).padStart(2, '0')}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="pt-2">
                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div className="text-center">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-electric-indigo/20 to-quantum-pink/20 flex items-center justify-center mx-auto mb-2">
                      <Cpu className="h-4 w-4 text-electric-indigo" />
                    </div>
                    <div className="text-lg font-bold text-electric-indigo" data-testid={`metric-qubits-${computer.id}`}>{computer.qubits}</div>
                    <div className="text-xs text-muted-foreground">Qubits</div>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-ion-green/20 to-electric-indigo/20 flex items-center justify-center mx-auto mb-2">
                      <Clock className="h-4 w-4 text-ion-green" />
                    </div>
                    <div className={`text-lg font-bold ${
                      computer.queueTime.includes('min') ? 'text-ion-green' : 
                      computer.queueTime === 'Offline' ? 'text-muted-foreground' : 'text-helio-yellow'
                    }`} data-testid={`metric-queue-${computer.id}`}>
                      {computer.queueTime}
                    </div>
                    <div className="text-xs text-muted-foreground">Queue</div>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-quantum-pink/20 to-ember-orange/20 flex items-center justify-center mx-auto mb-2">
                      <Zap className="h-4 w-4 text-quantum-pink" />
                    </div>
                    <div className="text-lg font-bold text-quantum-pink" data-testid={`metric-accuracy-${computer.id}`}>{computer.accuracy}%</div>
                    <div className="text-xs text-muted-foreground">Accuracy</div>
                  </div>
                </div>
                
                {/* Performance indicator */}
                <div className="bg-muted/20 rounded-lg p-3 mt-3">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-2">
                      <div className={`w-2 h-2 rounded-full ${
                        computer.accuracy > 99 ? 'bg-ion-green' :
                        computer.accuracy > 98 ? 'bg-helio-yellow' : 'bg-quantum-pink'
                      }`} />
                      <span className="text-muted-foreground">
                        {computer.accuracy > 99 ? 'Excellent' :
                         computer.accuracy > 98 ? 'Very Good' : 'Good'} Performance
                      </span>
                    </div>
                    <div className="text-xs text-muted-foreground font-mono">
                      {computer.id.toUpperCase()}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Enhanced Execute Button */}
        <div className="sticky bottom-6">
          <div className="bg-background/80 backdrop-blur-sm rounded-2xl p-4 border border-border/50">
            <div className="text-center mb-4">
              <p className="text-sm text-muted-foreground mb-1">
                Ready to execute on
              </p>
              <p className="font-semibold text-electric-indigo">
                {computers.find(c => c.isSelected)?.name}
              </p>
            </div>
            <Button 
              className="w-full h-16 bg-gradient-to-r from-electric-indigo to-quantum-pink hover:opacity-90 text-white shadow-lg"
              onClick={handleStartExecution}
              data-testid="button-start-execution"
            >
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                  <Zap className="h-4 w-4" />
                </div>
                <div className="flex-1 text-left">
                  <div className="text-lg font-bold">Start Quantum Execution</div>
                  <div className="text-xs opacity-90">
                    {computers.find(c => c.isSelected)?.qubits} qubits • {computers.find(c => c.isSelected)?.queueTime} queue
                  </div>
                </div>
                <ChevronDown className="h-5 w-5" />
              </div>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}