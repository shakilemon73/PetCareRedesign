import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import MobileHeader from '@/components/MobileHeader';
import { Calendar, Clock, Cpu, ChevronRight } from 'lucide-react';

//todo: remove mock functionality - replace with real execution history
const mockExecutionHistory = [
  {
    id: 'exec-001',
    quantumComputer: 'IBM Hanoi',
    qubits: 32,
    date: '2024-01-15',
    time: '14:30',
    status: 'completed',
    circuitGates: 8,
    executionTime: '2.3s'
  },
  {
    id: 'exec-002', 
    quantumComputer: 'IBM Lagos',
    qubits: 16,
    date: '2024-01-14',
    time: '09:15',
    status: 'completed',
    circuitGates: 5,
    executionTime: '1.8s'
  },
  {
    id: 'exec-003',
    quantumComputer: 'IBM Hanoi',
    qubits: 32,
    date: '2024-01-13',
    time: '16:45',
    status: 'failed',
    circuitGates: 12,
    executionTime: null
  },
  {
    id: 'exec-004',
    quantumComputer: 'IBM Kolkata', 
    qubits: 27,
    date: '2024-01-12',
    time: '11:20',
    status: 'completed',
    circuitGates: 6,
    executionTime: '3.1s'
  }
];

const statusColors = {
  completed: 'bg-ion-green text-white',
  failed: 'bg-quantum-pink text-white',
  pending: 'bg-helio-yellow text-rich-black'
};

export default function History() {
  const handleBack = () => {
    window.history.back();
  };

  const handleViewExecution = (executionId: string) => {
    window.location.href = `/execution/${executionId}`;
  };

  return (
    <div className="min-h-screen bg-background">
      <MobileHeader 
        title="Execution History" 
        showBack={true}
        onBack={handleBack}
      />
      
      <div className="p-4 pb-20 max-w-md mx-auto">
        <div className="mb-4">
          <p className="text-sm text-muted-foreground">
            See all your quantum computer runs
          </p>
        </div>
        
        <div className="space-y-4">
          {mockExecutionHistory.map((execution) => (
            <Card 
              key={execution.id} 
              className="hover-elevate cursor-pointer"
              onClick={() => handleViewExecution(execution.id)}
            >
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <Cpu className="h-4 w-4 text-muted-foreground" />
                    <h3 className="font-semibold" data-testid={`text-execution-${execution.id}`}>
                      {execution.quantumComputer}
                    </h3>
                    <Badge variant="outline">
                      {execution.qubits} qubits
                    </Badge>
                  </div>
                  
                  <Badge className={statusColors[execution.status as keyof typeof statusColors]}>
                    {execution.status}
                  </Badge>
                </div>
                
                <div className="grid grid-cols-2 gap-4 text-sm text-muted-foreground mb-3">
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-3 w-3" />
                    <span>{execution.date}</span>
                  </div>
                  
                  <div className="flex items-center space-x-1">
                    <Clock className="h-3 w-3" />
                    <span>{execution.time}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="text-sm">
                    <span className="text-muted-foreground">Gates: </span>
                    <span className="font-medium">{execution.circuitGates}</span>
                    {execution.executionTime && (
                      <>
                        <span className="text-muted-foreground ml-3">Time: </span>
                        <span className="font-medium">{execution.executionTime}</span>
                      </>
                    )}
                  </div>
                  
                  <ChevronRight className="h-4 w-4 text-muted-foreground" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}