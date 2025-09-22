import { useLocation, useRoute } from 'wouter';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import MobileHeader from '@/components/MobileHeader';
import { Download, Share, BarChart3, Cpu, Clock, Zap } from 'lucide-react';

//todo: remove mock functionality - replace with real execution data
const mockExecutionData = {
  id: 'exec-001',
  quantumComputer: 'IBM Hanoi',
  qubits: 32,
  status: 'completed',
  date: '2024-01-15',
  time: '14:30',
  executionTime: '2.3s',
  shots: 1024,
  success: true,
  results: {
    '00': 256,
    '01': 243, 
    '10': 267,
    '11': 258
  },
  fidelity: 98.7,
  circuitDepth: 8
};

export default function ExecutionDetails() {
  const [, setLocation] = useLocation();
  const [match, params] = useRoute('/execution/:id');
  const executionId = params?.id || 'exec-001';
  
  const handleBack = () => {
    setLocation('/history');
  };

  const handleDownloadReport = () => {
    console.log('Download execution report');
  };

  const handleShare = () => {
    console.log('Share execution results');
  };

  const resultEntries = Object.entries(mockExecutionData.results);
  const maxCount = Math.max(...Object.values(mockExecutionData.results));

  return (
    <div className="min-h-screen bg-background">
      <MobileHeader 
        title="Execution Report" 
        showBack={true}
        onBack={handleBack}
      />
      
      <div className="p-4 pb-20 max-w-md mx-auto space-y-6">
        {/* Execution Overview */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg">{mockExecutionData.quantumComputer}</CardTitle>
              <Badge className="bg-ion-green text-white">
                {mockExecutionData.status}
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-2">
                <Cpu className="h-4 w-4 text-muted-foreground" />
                <div>
                  <p className="text-sm font-medium">{mockExecutionData.qubits} Qubits</p>
                  <p className="text-xs text-muted-foreground">Quantum processor</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-muted-foreground" />
                <div>
                  <p className="text-sm font-medium">{mockExecutionData.executionTime}</p>
                  <p className="text-xs text-muted-foreground">Execution time</p>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-medium">{mockExecutionData.shots}</p>
                <p className="text-xs text-muted-foreground">Total shots</p>
              </div>
              
              <div>
                <p className="text-sm font-medium">{mockExecutionData.fidelity}%</p>
                <p className="text-xs text-muted-foreground">Fidelity</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Circuit Visualization */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Quantum Circuit</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-gradient-to-r from-electric-indigo/10 via-quantum-pink/10 to-ion-green/10 rounded-lg p-6">
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <span className="text-xs font-mono">q0</span>
                  <div className="flex-1 h-1 bg-gradient-to-r from-electric-indigo to-quantum-pink rounded" />
                  <div className="w-6 h-6 rounded bg-electric-indigo flex items-center justify-center">
                    <span className="text-xs font-bold text-white">H</span>
                  </div>
                  <div className="flex-1 h-1 bg-gradient-to-r from-quantum-pink to-ion-green rounded" />
                  <div className="w-3 h-3 rounded-full bg-ion-green" />
                </div>
                
                <div className="flex items-center space-x-2">
                  <span className="text-xs font-mono">q1</span>
                  <div className="flex-1 h-1 bg-gradient-to-r from-electric-indigo to-quantum-pink rounded" />
                  <div className="w-6 h-6 rounded bg-quantum-pink flex items-center justify-center">
                    <span className="text-xs font-bold text-white">X</span>
                  </div>
                  <div className="flex-1 h-1 bg-gradient-to-r from-quantum-pink to-ion-green rounded" />
                  <div className="w-3 h-3 rounded-full bg-ion-green" />
                </div>
              </div>
            </div>
            
            <div className="mt-3 text-sm text-muted-foreground">
              Circuit depth: {mockExecutionData.circuitDepth} gates
            </div>
          </CardContent>
        </Card>

        {/* Results */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base flex items-center space-x-2">
              <BarChart3 className="h-4 w-4" />
              <span>Measurement Results</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {resultEntries.map(([state, count]) => (
                <div key={state} className="flex items-center space-x-3">
                  <span className="font-mono text-sm w-8">{state}</span>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <div 
                        className="h-6 bg-gradient-to-r from-electric-indigo to-quantum-pink rounded"
                        style={{ width: `${(count / maxCount) * 100}%` }}
                      />
                    </div>
                  </div>
                  <span className="text-sm font-medium w-12 text-right">{count}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Actions */}
        <div className="grid grid-cols-2 gap-3">
          <Button 
            variant="outline" 
            onClick={handleDownloadReport}
            data-testid="button-download-report"
          >
            <Download className="h-4 w-4 mr-2" />
            Download
          </Button>
          
          <Button 
            variant="outline" 
            onClick={handleShare}
            data-testid="button-share-results"
          >
            <Share className="h-4 w-4 mr-2" />
            Share
          </Button>
        </div>
      </div>
    </div>
  );
}