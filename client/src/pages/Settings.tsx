import { useState } from 'react';
import { useLocation } from 'wouter';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Switch } from '@/components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Waves, Circle, Link, Zap } from 'lucide-react';
import MobileHeader from '@/components/MobileHeader';

export default function Settings() {
  const [brightness, setBrightness] = useState([27]);
  const [measurementRounding, setMeasurementRounding] = useState(true);
  const [screensaver, setScreensaver] = useState('singlet precession');
  const [isSaving, setIsSaving] = useState(false);
  const [, setLocation] = useLocation();

  const handleBack = () => {
    setLocation('/');
  };

  const handleSave = async () => {
    setIsSaving(true);
    // Simulate save operation
    setTimeout(() => {
      setIsSaving(false);
      console.log('Settings saved successfully');
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-background">
      <MobileHeader 
        title="Your Settings" 
        showBack={true}
        onBack={handleBack}
      />
      
      <div className="p-4 pb-20 max-w-md mx-auto">
        {/* Status Overview - Enhanced Visual Hierarchy */}
        <div className="bg-gradient-to-r from-electric-indigo/5 via-quantum-pink/5 to-ion-green/5 rounded-2xl p-6 mb-8">
          <div className="text-center">
            <div className="flex justify-center items-center space-x-4 mb-4">
              <div className="relative">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-electric-indigo to-ion-green flex items-center justify-center">
                  <div className="w-6 h-6 bg-white rounded-full opacity-90" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-ion-green rounded-full border-2 border-background" />
              </div>
              <div className="w-6 h-px bg-gradient-to-r from-electric-indigo to-quantum-pink" />
              <div className="relative">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-quantum-pink to-ember-orange flex items-center justify-center">
                  <div className="w-6 h-6 bg-white rounded-full opacity-90" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-ion-green rounded-full border-2 border-background" />
              </div>
            </div>
            <h3 className="font-semibold text-lg mb-2">2 Devices Connected</h3>
            <p className="text-sm text-muted-foreground mb-6">
              Changes will sync to all connected Qubis
            </p>
          </div>
        </div>
        
        <div className="space-y-6">

          {/* Measurement Rounding - Enhanced Affordances */}
          <Card className="hover-elevate transition-all duration-200">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-electric-indigo/10 to-quantum-pink/10 flex items-center justify-center">
                  <div className="w-5 h-5 rounded bg-gradient-to-br from-electric-indigo to-quantum-pink" />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-base">Smart Measurement</CardTitle>
                  <p className="text-xs text-muted-foreground">
                    Auto-adjust shakes to nearest quantum axis
                  </p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-sm font-medium">
                    {measurementRounding ? 'Enabled' : 'Disabled'}
                  </span>
                  <p className="text-xs text-muted-foreground">
                    {measurementRounding ? 'Major and half-axes correction' : 'Raw measurements only'}
                  </p>
                </div>
                <Switch 
                  checked={measurementRounding}
                  onCheckedChange={setMeasurementRounding}
                  data-testid="switch-measurement-rounding"
                />
              </div>
            </CardContent>
          </Card>

          {/* Brightness - Enhanced Feedback */}
          <Card className="hover-elevate transition-all duration-200">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-helio-yellow/10 to-ember-orange/10 flex items-center justify-center">
                  <div className="w-5 h-5 rounded bg-gradient-to-br from-helio-yellow to-ember-orange" />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-base">Display Brightness</CardTitle>
                  <p className="text-xs text-muted-foreground">
                    Adjust quantum state visualization intensity
                  </p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 rounded bg-muted opacity-50" />
                    <span className="text-xs text-muted-foreground">Dim</span>
                  </div>
                  <div className="font-mono text-lg font-semibold bg-gradient-to-r from-electric-indigo to-quantum-pink bg-clip-text text-transparent">
                    {brightness[0]}%
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs text-muted-foreground">Bright</span>
                    <div className="w-4 h-4 rounded bg-gradient-to-br from-helio-yellow to-ember-orange" />
                  </div>
                </div>
                <Slider
                  value={brightness}
                  onValueChange={setBrightness}
                  max={100}
                  step={1}
                  className="w-full"
                  data-testid="slider-brightness"
                />
                <div className="text-center">
                  <div className="inline-flex items-center space-x-2 text-xs text-muted-foreground">
                    <div 
                      className="w-3 h-3 rounded-full bg-gradient-to-br from-electric-indigo to-quantum-pink"
                      style={{ opacity: brightness[0] / 100 }}
                    />
                    <span>Preview intensity</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Screensaver - Clear Visual Cues */}
          <Card className="hover-elevate transition-all duration-200">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-ion-green/10 to-electric-indigo/10 flex items-center justify-center">
                  <div className="w-5 h-5 rounded bg-gradient-to-br from-ion-green to-electric-indigo animate-pulse" />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-base">Idle Animation</CardTitle>
                  <p className="text-xs text-muted-foreground">
                    Quantum visualization during rest state
                  </p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Select value={screensaver} onValueChange={setScreensaver}>
                <SelectTrigger data-testid="select-screensaver" className="h-12">
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 rounded bg-gradient-to-br from-electric-indigo to-quantum-pink opacity-60" />
                    <SelectValue />
                  </div>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="singlet precession">
                    <div className="flex items-center space-x-2">
                      <Zap className="h-3 w-3" />
                      <span>Singlet Precession</span>
                    </div>
                  </SelectItem>
                  <SelectItem value="quantum dots">
                    <div className="flex items-center space-x-2">
                      <Circle className="h-3 w-3" />
                      <span>Quantum Dots</span>
                    </div>
                  </SelectItem>
                  <SelectItem value="wave function">
                    <div className="flex items-center space-x-2">
                      <Waves className="h-3 w-3" />
                      <span>Wave Function</span>
                    </div>
                  </SelectItem>
                  <SelectItem value="entanglement">
                    <div className="flex items-center space-x-2">
                      <Link className="h-3 w-3" />
                      <span>Entanglement</span>
                    </div>
                  </SelectItem>
                </SelectContent>
              </Select>
            </CardContent>
          </Card>
        </div>
        
        {/* Save Actions - Enhanced Affordances */}
        <div className="sticky bottom-6 mt-8">
          <div className="bg-background/80 backdrop-blur-sm rounded-2xl p-4 border border-border/50">
            <Button 
              className="w-full h-14 bg-gradient-to-r from-electric-indigo to-quantum-pink hover:opacity-90 text-lg font-semibold"
              disabled={isSaving}
              onClick={handleSave}
              data-testid="button-save-settings"
            >
              {isSaving ? (
                <div className="flex items-center space-x-2">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  <span>Syncing to devices...</span>
                </div>
              ) : (
                <div className="flex items-center space-x-2">
                  <span>💾</span>
                  <span>Save All Changes</span>
                </div>
              )}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}