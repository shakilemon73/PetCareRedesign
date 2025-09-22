import { useState } from 'react';
import { useLocation } from 'wouter';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Switch } from '@/components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
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
      
      <div className="p-4 pb-20 max-w-md mx-auto space-y-6">
        {/* Device Status */}
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-electric-indigo to-ion-green flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-full opacity-90" />
              </div>
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-quantum-pink to-ember-orange flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-full opacity-90" />
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Saved changes will apply to two connected qubis
            </p>
            <Button 
              className="w-full bg-gradient-to-r from-electric-indigo to-quantum-pink hover:opacity-90"
              disabled={isSaving}
              onClick={handleSave}
              data-testid="button-save-settings"
            >
              {isSaving ? 'Saving...' : 'Save changes'}
            </Button>
          </CardContent>
        </Card>

        {/* Measurement Rounding */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Measurement "rounding"</CardTitle>
            <p className="text-sm text-muted-foreground">
              Does the qubi auto-adjust your shake to the nearest axis?
            </p>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">
                {measurementRounding ? 'Major and half-axes' : 'Disabled'}
              </span>
              <Switch 
                checked={measurementRounding}
                onCheckedChange={setMeasurementRounding}
                data-testid="switch-measurement-rounding"
              />
            </div>
          </CardContent>
        </Card>

        {/* Brightness */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Brightness</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Level</span>
                <span className="text-sm text-muted-foreground">{brightness[0]}%</span>
              </div>
              <Slider
                value={brightness}
                onValueChange={setBrightness}
                max={100}
                step={1}
                className="w-full"
                data-testid="slider-brightness"
              />
            </div>
          </CardContent>
        </Card>

        {/* Screensaver */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Screensaver</CardTitle>
          </CardHeader>
          <CardContent>
            <Select value={screensaver} onValueChange={setScreensaver}>
              <SelectTrigger data-testid="select-screensaver">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="singlet precession">singlet precession</SelectItem>
                <SelectItem value="quantum dots">quantum dots</SelectItem>
                <SelectItem value="wave function">wave function</SelectItem>
                <SelectItem value="entanglement">entanglement</SelectItem>
              </SelectContent>
            </Select>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}