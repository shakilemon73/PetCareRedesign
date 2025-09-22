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
      
      <div className="p-4 pb-20 max-w-md mx-auto">
        <div className="mb-6">
          <p className="text-sm text-muted-foreground">
            Choose a quantum computer for your next execution
          </p>
        </div>
        
        <div className="space-y-4 mb-6">
          {computers.map((computer) => (
            <Card 
              key={computer.id} 
              className={`cursor-pointer transition-all ${
                computer.isSelected 
                  ? 'ring-2 ring-electric-indigo bg-electric-indigo/5' 
                  : 'hover-elevate'
              }`}
              onClick={() => computer.status === 'online' && handleSelectComputer(computer.id)}
              data-testid={`card-computer-${computer.id}`}
            >
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-base" data-testid={`text-computer-${computer.id}`}>
                      {computer.name}
                    </CardTitle>
                    <p className="text-sm text-muted-foreground">{computer.provider}</p>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Badge className={statusColors[computer.status as keyof typeof statusColors]}>
                      {computer.status}
                    </Badge>
                    {computer.isSelected && (
                      <CheckCircle className="h-5 w-5 text-electric-indigo" />
                    )}
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div className="flex items-center space-x-1">
                    <Cpu className="h-3 w-3 text-muted-foreground" />
                    <span className="font-medium">{computer.qubits}</span>
                    <span className="text-muted-foreground">qubits</span>
                  </div>
                  
                  <div className="flex items-center space-x-1">
                    <Clock className="h-3 w-3 text-muted-foreground" />
                    <span className="font-medium">{computer.queueTime}</span>
                  </div>
                  
                  <div className="flex items-center space-x-1">
                    <Zap className="h-3 w-3 text-muted-foreground" />
                    <span className="font-medium">{computer.accuracy}%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Execute Button */}
        <div className="sticky bottom-6">
          <Button 
            className="w-full h-14 bg-gradient-to-r from-electric-indigo to-quantum-pink hover:opacity-90"
            onClick={handleStartExecution}
            data-testid="button-start-execution"
          >
            <span className="text-lg font-semibold">
              Execute on {computers.find(c => c.isSelected)?.name}
            </span>
            <ChevronDown className="h-5 w-5 ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
}