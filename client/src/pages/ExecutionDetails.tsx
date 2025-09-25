import { useLocation, useRoute } from 'wouter';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import MobileHeader from '@/components/MobileHeader';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from 'recharts';

//todo: remove mock functionality - replace with real execution data
const mockExecutionData = {
  id: 'exec-001',
  quantumComputer: 'IBM Hanoi',
  qubits: 32,
  status: 'completed',
  totalTime: '9.43s',
  pendingTime: '8s',
  executionTime: '1s',
  perShotTime: '.001s',
  shots: 1000,
  success: true,
  results: {
    '00': 256,
    '01': 243, 
    '10': 267,
    '11': 258
  },
  circuitDepth: 5,
  architecture: 'Superconducting; osprey architecture; 32 qubits'
};

export default function ExecutionDetails() {
  const [, setLocation] = useLocation();
  const [match, params] = useRoute('/execution/:id');
  const executionId = params?.id || 'exec-001';
  
  const handleBack = () => {
    setLocation('/history');
  };

  const handleSeeStory = () => {
    console.log('Navigate to run story');
  };

  const handleQuantumComputerLink = () => {
    window.open('https://quantum.cloud.ibm.com/computers?system=ibm_torino', '_blank');
  };

  // Prepare chart data
  const chartData = Object.entries(mockExecutionData.results).map(([state, count]) => ({
    state: `|${state}⟩`,
    count: count,
    percentage: ((count / mockExecutionData.shots) * 100).toFixed(1)
  }));

  return (
    <div className="min-h-screen bg-background">
      <MobileHeader 
        title="Your run" 
        showBack={true}
        onBack={handleBack}
      />
      
      {/* Hero Image Section */}
      <div className="p-4">
        <div className="max-w-md mx-auto">
          <div className="w-full h-32 bg-gradient-to-br from-electric-indigo/10 via-quantum-pink/10 to-ion-green/10 rounded-lg flex items-center justify-center mb-6">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-electric-indigo to-quantum-pink animate-pulse" />
          </div>
        </div>
      </div>
      
      <div className="p-4 pb-20 max-w-md mx-auto space-y-6">
        {/* Quantum Computer Section */}
        <Card className="hover-elevate transition-all duration-200">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-bold text-electric-indigo mb-1">{mockExecutionData.quantumComputer}</h3>
                <p className="text-sm text-muted-foreground">{mockExecutionData.architecture}</p>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleQuantumComputerLink}
                className="h-8 w-8 p-0"
              >
                <ExternalLink className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* See Story Link */}
        <Button
          variant="outline"
          className="w-full justify-between h-12"
          onClick={handleSeeStory}
        >
          <span>See the story of this run</span>
          <ArrowRight className="h-4 w-4" />
        </Button>

        {/* Timing Section */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Timing</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="text-center">
                <div className="text-lg font-bold text-electric-indigo">Total time: {mockExecutionData.totalTime}</div>
              </div>
              
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-sm font-semibold">{mockExecutionData.pendingTime}</div>
                  <div className="text-xs text-muted-foreground">Pending time</div>
                </div>
                <div>
                  <div className="text-sm font-semibold">{mockExecutionData.executionTime}</div>
                  <div className="text-xs text-muted-foreground">Execution time</div>
                </div>
                <div>
                  <div className="text-sm font-semibold">{mockExecutionData.perShotTime}</div>
                  <div className="text-xs text-muted-foreground">Per shot</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Circuit Section */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Circuit</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="text-center">
                <div className="text-lg font-bold text-quantum-pink">Depth {mockExecutionData.circuitDepth}</div>
              </div>
              
              {/* Simple circuit visualization */}
              <div className="bg-gradient-to-r from-electric-indigo/5 to-quantum-pink/5 rounded-lg p-6">
                <div className="flex items-center justify-center space-x-4">
                  <div className="w-3 h-3 rounded-full bg-electric-indigo" />
                  <div className="flex-1 h-0.5 bg-gradient-to-r from-electric-indigo to-quantum-pink" />
                  <div className="w-8 h-8 rounded-lg bg-quantum-pink flex items-center justify-center">
                    <span className="text-xs font-bold text-white">H</span>
                  </div>
                  <div className="flex-1 h-0.5 bg-gradient-to-r from-quantum-pink to-ion-green" />
                  <div className="w-3 h-3 rounded-full bg-ion-green" />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Results Section */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Results</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-electric-indigo">{mockExecutionData.shots}</div>
              </div>
              
              {/* Results Chart - Matching Webflow Design */}
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <ResponsiveContainer width="100%" height={160}>
                  <BarChart data={chartData} margin={{ top: 10, right: 10, left: 10, bottom: 10 }}>
                    <XAxis 
                      dataKey="state" 
                      tick={{ fontSize: 10, fill: '#666' }}
                      tickLine={false}
                      axisLine={false}
                    />
                    <YAxis hide />
                    <Bar 
                      dataKey="count" 
                      fill="#4F46E5"
                      radius={[2, 2, 0, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}