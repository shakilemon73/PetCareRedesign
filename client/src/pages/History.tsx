import { useLocation } from 'wouter';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import MobileHeader from '@/components/MobileHeader';
import { Calendar, Clock, Cpu, ChevronRight, Check, X, Timer } from 'lucide-react';

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
  const [, setLocation] = useLocation();
  
  const handleBack = () => {
    setLocation('/');
  };

  const handleViewExecution = (executionId: string) => {
    setLocation(`/execution/${executionId}`);
  };

  return (
    <div className="min-h-screen bg-background">
      <MobileHeader 
        title="Execution History" 
        showBack={true}
        onBack={handleBack}
      />
      
      {/* Enhanced Overview - Emotional Design */}
      <div className="bg-gradient-to-r from-electric-indigo/5 via-quantum-pink/5 to-ion-green/5 px-4 py-6">
        <div className="max-w-md mx-auto text-center">
          <h1 className="text-xl font-bold bg-gradient-to-r from-electric-indigo to-quantum-pink bg-clip-text text-transparent mb-2">
            Quantum Journey
          </h1>
          <p className="text-sm text-muted-foreground">
            Your complete execution history • {mockExecutionHistory.length} runs
          </p>
        </div>
      </div>
      
      <div className="p-4 pb-20 max-w-md mx-auto">
        {/* Enhanced Scannability */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold text-foreground">Recent Executions</h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent ml-4" />
        </div>
        
        <div className="space-y-4">
          {mockExecutionHistory.map((execution, index) => (
            <Card 
              key={execution.id} 
              className="hover-elevate active-elevate-2 cursor-pointer transition-all duration-200 border-l-4"
              style={{ borderLeftColor: execution.status === 'completed' ? 'hsl(var(--ion-green))' : execution.status === 'failed' ? 'hsl(var(--quantum-pink))' : 'hsl(var(--helio-yellow))' }}
              onClick={() => handleViewExecution(execution.id)}
              data-testid={`card-execution-${execution.id}`}
            >
              <CardContent className="p-5">
                {/* Header with clear visual hierarchy */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-electric-indigo/10 to-quantum-pink/10 flex items-center justify-center">
                      <Cpu className="h-5 w-5 text-electric-indigo" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg" data-testid={`text-execution-${execution.id}`}>
                        {execution.quantumComputer}
                      </h3>
                      <div className="flex items-center space-x-2 mt-1">
                        <Badge variant="outline" className="text-xs">
                          {execution.qubits} qubits
                        </Badge>
                        <span className="text-xs text-muted-foreground">#{String(index + 1).padStart(3, '0')}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col items-end space-y-2">
                    <Badge className={statusColors[execution.status as keyof typeof statusColors]}>
                      <div className="flex items-center space-x-1">
                        {execution.status === 'completed' ? (
                          <><Check className="h-3 w-3" /><span>Success</span></>
                        ) : execution.status === 'failed' ? (
                          <><X className="h-3 w-3" /><span>Failed</span></>
                        ) : (
                          <><Timer className="h-3 w-3" /><span>Pending</span></>
                        )}
                      </div>
                    </Badge>
                    <ChevronRight className="h-4 w-4 text-muted-foreground opacity-60" />
                  </div>
                </div>
                
                {/* Enhanced metadata display */}
                <div className="grid grid-cols-2 gap-6 mb-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 rounded bg-gradient-to-br from-electric-indigo/20 to-quantum-pink/20 flex items-center justify-center">
                      <Calendar className="h-3 w-3" />
                    </div>
                    <div>
                      <span className="text-xs text-muted-foreground block">Date</span>
                      <span className="text-sm font-medium">{execution.date}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 rounded bg-gradient-to-br from-ion-green/20 to-electric-indigo/20 flex items-center justify-center">
                      <Clock className="h-3 w-3" />
                    </div>
                    <div>
                      <span className="text-xs text-muted-foreground block">Time</span>
                      <span className="text-sm font-medium">{execution.time}</span>
                    </div>
                  </div>
                </div>
                
                {/* Performance metrics */}
                <div className="bg-muted/30 rounded-lg p-3">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-4">
                      <div>
                        <span className="text-muted-foreground">Gates: </span>
                        <span className="font-semibold text-electric-indigo">{execution.circuitGates}</span>
                      </div>
                      {execution.executionTime && (
                        <div>
                          <span className="text-muted-foreground">Runtime: </span>
                          <span className="font-semibold text-ion-green">{execution.executionTime}</span>
                        </div>
                      )}
                    </div>
                    <div className="text-xs text-muted-foreground font-mono">
                      {execution.id.toUpperCase()}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
          
          {/* No more data indicator */}
          <div className="text-center py-8">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-muted/30 to-muted/10 flex items-center justify-center mx-auto mb-3">
              <div className="w-6 h-6 rounded-full bg-gradient-to-br from-electric-indigo/20 to-quantum-pink/20" />
            </div>
            <p className="text-sm text-muted-foreground">
              You've reached the end of your quantum journey log
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}