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
      
      {/* Hero Status Section - Emotional Design */}
      <div className="bg-gradient-to-r from-electric-indigo/5 via-quantum-pink/5 to-ion-green/5 px-4 py-6">
        <div className="max-w-md mx-auto text-center">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-ion-green/20 to-electric-indigo/20 flex items-center justify-center mx-auto mb-4">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-ion-green to-electric-indigo animate-pulse" />
          </div>
          <h1 
            className="text-xl font-bold bg-gradient-to-r from-electric-indigo to-quantum-pink bg-clip-text text-transparent mb-2"
            data-testid="text-execution-title"
          >
            Execution Complete
          </h1>
          <p className="text-sm text-muted-foreground" data-testid="text-execution-summary">
            {mockExecutionData.quantumComputer} • {mockExecutionData.shots} shots • {mockExecutionData.fidelity}% fidelity
          </p>
        </div>
      </div>
      
      <div className="p-4 pb-20 max-w-md mx-auto space-y-8">
        {/* Enhanced Execution Metrics - Better Data Visualization */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <Card className="hover-elevate transition-all duration-200">
            <CardContent className="p-4 text-center">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-electric-indigo/20 to-quantum-pink/20 flex items-center justify-center mx-auto mb-3">
                <Cpu className="h-6 w-6 text-electric-indigo" />
              </div>
              <div className="text-2xl font-bold text-electric-indigo mb-1" data-testid="metric-qubits">{mockExecutionData.qubits}</div>
              <div className="text-xs text-muted-foreground">Quantum Bits</div>
            </CardContent>
          </Card>
          
          <Card className="hover-elevate transition-all duration-200">
            <CardContent className="p-4 text-center">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-ion-green/20 to-electric-indigo/20 flex items-center justify-center mx-auto mb-3">
                <Clock className="h-6 w-6 text-ion-green" />
              </div>
              <div className="text-2xl font-bold text-ion-green mb-1" data-testid="metric-runtime">{mockExecutionData.executionTime}</div>
              <div className="text-xs text-muted-foreground">Runtime</div>
            </CardContent>
          </Card>
        </div>
        
        <div className="grid grid-cols-2 gap-4 mb-8">
          <Card className="hover-elevate transition-all duration-200">
            <CardContent className="p-4 text-center">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-quantum-pink/20 to-ember-orange/20 flex items-center justify-center mx-auto mb-3">
                <Zap className="h-6 w-6 text-quantum-pink" />
              </div>
              <div className="text-2xl font-bold text-quantum-pink mb-1">{mockExecutionData.shots}</div>
              <div className="text-xs text-muted-foreground">Total Shots</div>
            </CardContent>
          </Card>
          
          <Card className="hover-elevate transition-all duration-200">
            <CardContent className="p-4 text-center">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-helio-yellow/20 to-ember-orange/20 flex items-center justify-center mx-auto mb-3">
                <div className="text-lg font-bold text-helio-yellow">✓</div>
              </div>
              <div className="text-2xl font-bold text-helio-yellow mb-1">{mockExecutionData.fidelity}%</div>
              <div className="text-xs text-muted-foreground">Fidelity</div>
            </CardContent>
          </Card>
        </div>

        {/* Enhanced Circuit Visualization - Better Visual Hierarchy */}
        <Card className="hover-elevate transition-all duration-200">
          <CardHeader>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-electric-indigo/10 to-quantum-pink/10 flex items-center justify-center">
                <div className="w-5 h-5 rounded bg-gradient-to-br from-electric-indigo to-quantum-pink" />
              </div>
              <div>
                <CardTitle className="text-base">Quantum Circuit</CardTitle>
                <p className="text-xs text-muted-foreground">Gate sequence and qubit states</p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="bg-gradient-to-br from-electric-indigo/5 via-quantum-pink/5 to-ion-green/5 rounded-xl p-6 border-2 border-dashed border-electric-indigo/20">
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-electric-indigo/20 to-quantum-pink/20 flex items-center justify-center">
                    <span className="text-xs font-mono font-bold">q0</span>
                  </div>
                  <div className="flex-1 h-2 bg-gradient-to-r from-electric-indigo/30 to-quantum-pink/30 rounded-full relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-electric-indigo to-quantum-pink rounded-full animate-pulse opacity-60" />
                  </div>
                  <div className="w-10 h-10 rounded-lg bg-electric-indigo flex items-center justify-center shadow-lg">
                    <span className="text-sm font-bold text-white">H</span>
                  </div>
                  <div className="flex-1 h-2 bg-gradient-to-r from-quantum-pink/30 to-ion-green/30 rounded-full" />
                  <div className="w-6 h-6 rounded-full bg-ion-green shadow-lg animate-pulse" />
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-quantum-pink/20 to-ember-orange/20 flex items-center justify-center">
                    <span className="text-xs font-mono font-bold">q1</span>
                  </div>
                  <div className="flex-1 h-2 bg-gradient-to-r from-electric-indigo/30 to-quantum-pink/30 rounded-full" />
                  <div className="w-10 h-10 rounded-lg bg-quantum-pink flex items-center justify-center shadow-lg">
                    <span className="text-sm font-bold text-white">X</span>
                  </div>
                  <div className="flex-1 h-2 bg-gradient-to-r from-quantum-pink/30 to-ion-green/30 rounded-full" />
                  <div className="w-6 h-6 rounded-full bg-ion-green shadow-lg animate-pulse" />
                </div>
              </div>
            </div>
            
            <div className="flex items-center justify-between mt-6 p-3 bg-muted/30 rounded-lg">
              <div className="text-sm">
                <span className="text-muted-foreground">Circuit Depth:</span>
                <span className="ml-2 font-semibold text-electric-indigo">{mockExecutionData.circuitDepth} gates</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 rounded-full bg-electric-indigo animate-pulse" />
                <div className="w-2 h-2 rounded-full bg-quantum-pink animate-pulse" style={{ animationDelay: '0.2s' }} />
                <div className="w-2 h-2 rounded-full bg-ion-green animate-pulse" style={{ animationDelay: '0.4s' }} />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Enhanced Results Visualization - Better Data Understanding */}
        <Card className="hover-elevate transition-all duration-200">
          <CardHeader>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-ion-green/10 to-electric-indigo/10 flex items-center justify-center">
                <BarChart3 className="h-5 w-5 text-ion-green" />
              </div>
              <div>
                <CardTitle className="text-base">Measurement Results</CardTitle>
                <p className="text-xs text-muted-foreground">Quantum state distribution</p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {/* Total shots indicator */}
              <div className="text-center p-4 bg-gradient-to-r from-electric-indigo/5 to-quantum-pink/5 rounded-lg">
                <div className="text-2xl font-bold bg-gradient-to-r from-electric-indigo to-quantum-pink bg-clip-text text-transparent">
                  {Object.values(mockExecutionData.results).reduce((a, b) => a + b, 0)}
                </div>
                <div className="text-xs text-muted-foreground">Total Measurements</div>
              </div>
              
              {/* Enhanced bar chart */}
              <div className="space-y-4">
                {resultEntries.map(([state, count], index) => {
                  const percentage = (count / maxCount) * 100;
                  const probability = (count / Object.values(mockExecutionData.results).reduce((a, b) => a + b, 0)) * 100;
                  
                  return (
                    <div key={state} className="group">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-electric-indigo/20 to-quantum-pink/20 flex items-center justify-center">
                            <span className="font-mono text-sm font-bold text-electric-indigo">|{state}⟩</span>
                          </div>
                          <div>
                            <div className="text-sm font-semibold">{count} shots</div>
                            <div className="text-xs text-muted-foreground">{probability.toFixed(1)}% probability</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-bold text-electric-indigo">{count}</div>
                        </div>
                      </div>
                      
                      <div className="relative h-8 bg-muted/30 rounded-lg overflow-hidden">
                        <div 
                          className="h-full rounded-lg transition-all duration-1000 ease-out"
                          style={{ 
                            width: `${percentage}%`,
                            background: `linear-gradient(135deg, hsl(var(--electric-indigo)) 0%, hsl(var(--quantum-pink)) ${50 + index * 10}%, hsl(var(--ion-green)) 100%)`,
                            animationDelay: `${index * 200}ms`
                          }}
                        />
                        
                        {/* Animated particles */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          {Array.from({ length: Math.min(count / 50, 6) }).map((_, i) => (
                            <div 
                              key={i}
                              className="w-1 h-1 bg-white rounded-full animate-pulse opacity-60"
                              style={{ animationDelay: `${i * 300}ms` }}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              
              {/* Summary statistics */}
              <div className="grid grid-cols-2 gap-4 mt-6 p-4 bg-muted/20 rounded-lg">
                <div className="text-center">
                  <div className="text-sm font-semibold text-electric-indigo">
                    {Math.max(...Object.values(mockExecutionData.results))}
                  </div>
                  <div className="text-xs text-muted-foreground">Peak Count</div>
                </div>
                <div className="text-center">
                  <div className="text-sm font-semibold text-quantum-pink">
                    {(Object.values(mockExecutionData.results).reduce((a, b) => a + b, 0) / Object.values(mockExecutionData.results).length).toFixed(0)}
                  </div>
                  <div className="text-xs text-muted-foreground">Average</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Enhanced Action Buttons - Clear Affordances */}
        <div className="grid grid-cols-2 gap-4">
          <Button 
            variant="outline" 
            className="h-14 flex-col space-y-2 hover-elevate active-elevate-2"
            onClick={handleDownloadReport}
            data-testid="button-download-report"
          >
            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-electric-indigo/20 to-quantum-pink/20 flex items-center justify-center">
              <Download className="h-3 w-3" />
            </div>
            <span className="text-xs font-medium">Download</span>
          </Button>
          
          <Button 
            variant="outline" 
            className="h-14 flex-col space-y-2 hover-elevate active-elevate-2"
            onClick={handleShare}
            data-testid="button-share-results"
          >
            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-ion-green/20 to-electric-indigo/20 flex items-center justify-center">
              <Share className="h-3 w-3" />
            </div>
            <span className="text-xs font-medium">Share</span>
          </Button>
        </div>
      </div>
    </div>
  );
}