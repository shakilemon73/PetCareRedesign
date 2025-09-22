import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ChevronRight, History, Play } from 'lucide-react';

interface QuantumExecutionCardProps {
  lastShake?: string;
  quantumComputer?: string;
  qubits?: number;
  hasPendingCircuit?: boolean;
  onReadReport?: () => void;
  onSkipToStory?: () => void;
  onViewHistory?: () => void;
  onNextShake?: () => void;
}

export default function QuantumExecutionCard({
  lastShake = "IBM Hanoi",
  quantumComputer = "IBM Hanoi",
  qubits = 32,
  hasPendingCircuit = true,
  onReadReport = () => window.location.href = '/execution/exec-001',
  onSkipToStory = () => window.location.href = '/execution/exec-001',
  onViewHistory = () => window.location.href = '/history',
  onNextShake = () => window.location.href = '/quantum-computers'
}: QuantumExecutionCardProps) {
  return (
    <div className="space-y-4">
      {/* Last Execution */}
      <Card className="overflow-hidden">
        <CardContent className="p-4">
          <div className="mb-3">
            <h3 className="font-semibold text-lg mb-1">Last shake - {lastShake}</h3>
            <p className="text-sm text-muted-foreground">Quantum circuit executed successfully</p>
          </div>
          
          <div className="grid grid-cols-2 gap-2">
            <Button 
              variant="outline" 
              className="justify-between h-12"
              onClick={onReadReport}
              data-testid="button-read-report"
            >
              <span>Read the report</span>
              <ChevronRight className="h-4 w-4" />
            </Button>
            
            <Button 
              variant="outline" 
              className="justify-between h-12"
              onClick={onSkipToStory}
              data-testid="button-skip-story"
            >
              <span>Skip to the story</span>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
      
      {/* Pending Circuit */}
      {hasPendingCircuit && (
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-3">
              <div>
                <h3 className="font-semibold text-lg">Pending circuit</h3>
                <p className="text-sm text-muted-foreground">Ready for quantum execution</p>
              </div>
              
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={onViewHistory}
                data-testid="button-view-history"
              >
                <History className="h-5 w-5" />
              </Button>
            </div>
            
            {/* Circuit Visualization */}
            <div className="bg-gradient-to-r from-electric-indigo/10 via-quantum-pink/10 to-ion-green/10 rounded-lg p-4 mb-3">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-electric-indigo" />
                <div className="flex-1 h-1 bg-gradient-to-r from-electric-indigo to-quantum-pink rounded" />
                <div className="w-3 h-3 rounded-full bg-quantum-pink" />
                <div className="flex-1 h-1 bg-gradient-to-r from-quantum-pink to-ion-green rounded" />
                <div className="w-3 h-3 rounded-full bg-ion-green" />
              </div>
            </div>
            
            <Button 
              className="w-full bg-gradient-to-r from-electric-indigo to-quantum-pink hover:opacity-90"
              onClick={onNextShake}
              data-testid="button-next-shake"
            >
              <Play className="h-4 w-4 mr-2" />
              Next shake - {quantumComputer} ({qubits} qubits)
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
}