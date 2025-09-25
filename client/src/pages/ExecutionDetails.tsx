import { useLocation, useRoute } from 'wouter';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import MobileHeader from '@/components/MobileHeader';
import { ExternalLink, ArrowRight, Zap, Clock, Activity } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Cell } from 'recharts';
import { useState, useEffect } from 'react';

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

  // Animation and interaction states
  const [isLoaded, setIsLoaded] = useState(false);
  const [hoveredBar, setHoveredBar] = useState<string | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Prepare chart data with colors
  const chartData = Object.entries(mockExecutionData.results).map(([state, count], index) => ({
    state: `|${state}⟩`,
    count: count,
    percentage: ((count / mockExecutionData.shots) * 100).toFixed(1),
    color: [
      '#6366F1', // Indigo
      '#EC4899', // Pink  
      '#10B981', // Emerald
      '#F59E0B'  // Amber
    ][index]
  }));

  return (
    <div className="min-h-screen bg-background">
      <MobileHeader 
        title="Your run" 
        showBack={true}
        onBack={handleBack}
      />
      
      {/* Hero Section - Enhanced with animations */}
      <div className="p-4">
        <div className="max-w-md mx-auto">
          <div className={`w-full h-40 bg-gradient-to-br from-electric-indigo/20 via-quantum-pink/20 to-ion-green/20 rounded-2xl flex items-center justify-center mb-6 shadow-lg relative overflow-hidden transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            {/* Animated background particles */}
            <div className="absolute inset-0">
              <div className="absolute top-4 left-4 w-2 h-2 bg-electric-indigo rounded-full animate-ping" />
              <div className="absolute top-8 right-6 w-1 h-1 bg-quantum-pink rounded-full animate-ping" style={{ animationDelay: '0.5s' }} />
              <div className="absolute bottom-6 left-8 w-1.5 h-1.5 bg-ion-green rounded-full animate-ping" style={{ animationDelay: '1s' }} />
            </div>
            {/* Central quantum orb with enhanced animation */}
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-electric-indigo via-quantum-pink to-ion-green relative">
              <div className="absolute inset-1 rounded-full bg-gradient-to-br from-electric-indigo/80 via-quantum-pink/80 to-ion-green/80 animate-spin-slow" />
              <div className="absolute inset-2 rounded-full bg-gradient-to-br from-white/20 to-transparent backdrop-blur-sm" />
              <div className="absolute inset-4 rounded-full bg-white/40 animate-pulse" />
            </div>
          </div>
        </div>
      </div>
      
      <div className="p-4 pb-20 max-w-md mx-auto space-y-6">
        {/* Quantum Computer Section - Enhanced */}
        <Card className={`group hover:shadow-xl hover:scale-[1.02] transition-all duration-300 border-0 bg-gradient-to-br from-white via-electric-indigo/5 to-quantum-pink/5 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '200ms' }}>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Activity className="h-5 w-5 text-electric-indigo animate-pulse" />
                  <h3 className="text-xl font-bold bg-gradient-to-r from-electric-indigo to-quantum-pink bg-clip-text text-transparent">
                    {mockExecutionData.quantumComputer}
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{mockExecutionData.architecture}</p>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleQuantumComputerLink}
                className="h-10 w-10 p-0 hover:bg-electric-indigo/10 hover:scale-110 transition-all duration-200 rounded-full"
              >
                <ExternalLink className="h-5 w-5 text-electric-indigo" />
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* See Story Link - Enhanced */}
        <Button
          variant="outline"
          className={`w-full justify-between h-14 group hover:shadow-lg hover:bg-gradient-to-r hover:from-electric-indigo/5 hover:to-quantum-pink/5 border-2 hover:border-electric-indigo/30 transition-all duration-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          style={{ transitionDelay: '400ms' }}
          onClick={handleSeeStory}
        >
          <span className="font-semibold">See the story of this run</span>
          <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
        </Button>

        {/* Timing Section - Enhanced */}
        <Card className={`hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white via-ion-green/5 to-electric-indigo/5 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '600ms' }}>
          <CardHeader>
            <div className="flex items-center space-x-2">
              <Clock className="h-5 w-5 text-ion-green animate-pulse" />
              <CardTitle className="text-lg font-bold bg-gradient-to-r from-ion-green to-electric-indigo bg-clip-text text-transparent">Timing</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="text-center p-4 bg-gradient-to-r from-ion-green/10 to-electric-indigo/10 rounded-xl">
                <div className="text-2xl font-bold text-electric-indigo mb-1">Total time: {mockExecutionData.totalTime}</div>
                <div className="w-16 h-1 bg-gradient-to-r from-ion-green to-electric-indigo rounded-full mx-auto animate-pulse" />
              </div>
              
              <div className="grid grid-cols-3 gap-3">
                <div className="text-center p-3 bg-muted/20 rounded-lg hover:bg-muted/30 transition-colors duration-200">
                  <div className="text-lg font-bold text-ion-green">{mockExecutionData.pendingTime}</div>
                  <div className="text-xs text-muted-foreground font-medium">Pending time</div>
                </div>
                <div className="text-center p-3 bg-muted/20 rounded-lg hover:bg-muted/30 transition-colors duration-200">
                  <div className="text-lg font-bold text-electric-indigo">{mockExecutionData.executionTime}</div>
                  <div className="text-xs text-muted-foreground font-medium">Execution time</div>
                </div>
                <div className="text-center p-3 bg-muted/20 rounded-lg hover:bg-muted/30 transition-colors duration-200">
                  <div className="text-lg font-bold text-quantum-pink">{mockExecutionData.perShotTime}</div>
                  <div className="text-xs text-muted-foreground font-medium">Per shot</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Circuit Section - Enhanced */}
        <Card className={`hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white via-quantum-pink/5 to-ion-green/5 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '800ms' }}>
          <CardHeader>
            <div className="flex items-center space-x-2">
              <Zap className="h-5 w-5 text-quantum-pink animate-pulse" />
              <CardTitle className="text-lg font-bold bg-gradient-to-r from-quantum-pink to-ion-green bg-clip-text text-transparent">Circuit</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="text-center p-4 bg-gradient-to-r from-quantum-pink/10 to-ion-green/10 rounded-xl">
                <div className="text-2xl font-bold text-quantum-pink mb-2">Depth {mockExecutionData.circuitDepth}</div>
                <div className="w-12 h-1 bg-gradient-to-r from-quantum-pink to-ion-green rounded-full mx-auto animate-pulse" />
              </div>
              
              {/* Enhanced circuit visualization */}
              <div className="bg-gradient-to-r from-electric-indigo/5 via-quantum-pink/5 to-ion-green/5 rounded-xl p-6 border border-quantum-pink/20">
                <div className="flex items-center justify-center space-x-4">
                  <div className="w-4 h-4 rounded-full bg-electric-indigo shadow-lg animate-pulse" />
                  <div className="flex-1 h-1 bg-gradient-to-r from-electric-indigo to-quantum-pink rounded-full relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-electric-indigo to-quantum-pink animate-pulse" />
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-quantum-pink to-quantum-pink/80 flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-200">
                    <span className="text-sm font-bold text-white">H</span>
                  </div>
                  <div className="flex-1 h-1 bg-gradient-to-r from-quantum-pink to-ion-green rounded-full relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-quantum-pink to-ion-green animate-pulse" style={{ animationDelay: '0.5s' }} />
                  </div>
                  <div className="w-4 h-4 rounded-full bg-ion-green shadow-lg animate-pulse" style={{ animationDelay: '1s' }} />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Results Section - Enhanced Interactive */}
        <Card className={`hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white via-electric-indigo/5 to-quantum-pink/5 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '1000ms' }}>
          <CardHeader>
            <div className="flex items-center space-x-2">
              <Activity className="h-5 w-5 text-electric-indigo animate-pulse" />
              <CardTitle className="text-lg font-bold bg-gradient-to-r from-electric-indigo to-quantum-pink bg-clip-text text-transparent">Results</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="text-center p-4 bg-gradient-to-r from-electric-indigo/10 to-quantum-pink/10 rounded-xl">
                <div className="text-4xl font-bold bg-gradient-to-r from-electric-indigo to-quantum-pink bg-clip-text text-transparent mb-2">
                  {mockExecutionData.shots}
                </div>
                <div className="text-sm text-muted-foreground font-medium">Total Measurements</div>
                <div className="w-20 h-1 bg-gradient-to-r from-electric-indigo to-quantum-pink rounded-full mx-auto mt-2 animate-pulse" />
              </div>
              
              {/* Enhanced Interactive Chart */}
              <div className="bg-white rounded-xl p-6 border-2 border-gray-100 shadow-inner hover:shadow-lg transition-shadow duration-300">
                <ResponsiveContainer width="100%" height={180}>
                  <BarChart 
                    data={chartData} 
                    margin={{ top: 20, right: 20, left: 20, bottom: 20 }}
                    onMouseMove={(e) => {
                      if (e && e.activeLabel) {
                        setHoveredBar(e.activeLabel);
                      }
                    }}
                    onMouseLeave={() => setHoveredBar(null)}
                  >
                    <XAxis 
                      dataKey="state" 
                      tick={{ fontSize: 12, fill: '#4B5563', fontWeight: 600 }}
                      tickLine={false}
                      axisLine={false}
                    />
                    <YAxis hide />
                    <Bar 
                      dataKey="count" 
                      radius={[6, 6, 0, 0]}
                      stroke="none"
                    >
                      {chartData.map((entry, index) => (
                        <Cell 
                          key={`cell-${index}`} 
                          fill={hoveredBar === entry.state ? entry.color : `${entry.color}CC`}
                          style={{
                            filter: hoveredBar === entry.state ? 'drop-shadow(0 4px 8px rgba(0,0,0,0.2))' : 'none',
                            transition: 'all 0.2s ease'
                          }}
                        />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
                
                {/* Interactive Data Points */}
                <div className="grid grid-cols-2 gap-3 mt-4">
                  {chartData.map((item, index) => (
                    <div 
                      key={item.state} 
                      className={`p-3 rounded-lg transition-all duration-200 cursor-pointer ${
                        hoveredBar === item.state 
                          ? 'bg-gradient-to-r scale-105 shadow-lg' 
                          : 'bg-muted/20 hover:bg-muted/30'
                      }`}
                      style={{
                        backgroundImage: hoveredBar === item.state 
                          ? `linear-gradient(135deg, ${item.color}15, ${item.color}25)` 
                          : undefined
                      }}
                      onMouseEnter={() => setHoveredBar(item.state)}
                      onMouseLeave={() => setHoveredBar(null)}
                    >
                      <div className="text-center">
                        <div className="text-sm font-mono font-bold" style={{ color: item.color }}>
                          {item.state}
                        </div>
                        <div className="text-xl font-bold text-gray-800">{item.count}</div>
                        <div className="text-xs text-muted-foreground font-medium">{item.percentage}%</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}