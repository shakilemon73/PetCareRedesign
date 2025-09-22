import { Button } from '@/components/ui/button';
import { ArrowLeft, Settings, Plus, Scan } from 'lucide-react';

interface MobileHeaderProps {
  title: string;
  showBack?: boolean;
  showSettings?: boolean;
  showAdd?: boolean;
  showScan?: boolean;
  onBack?: () => void;
  onSettings?: () => void;
  onAdd?: () => void;
  onScan?: () => void;
}

export default function MobileHeader({
  title,
  showBack = false,
  showSettings = false,
  showAdd = false,
  showScan = false,
  onBack = () => console.log('Back clicked'),
  onSettings = () => console.log('Settings clicked'),
  onAdd = () => console.log('Add clicked'),
  onScan = () => console.log('Scan clicked')
}: MobileHeaderProps) {
  return (
    <div className="sticky top-0 z-50 bg-card/95 backdrop-blur border-b border-border">
      <div className="flex items-center justify-between p-4 max-w-md mx-auto">
        {/* Left Side */}
        <div className="flex items-center space-x-2">
          {showBack && (
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={onBack}
              data-testid="button-header-back"
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
          )}
        </div>
        
        {/* Center Title */}
        <h1 className="font-semibold text-lg text-center flex-1" data-testid="text-header-title">
          {title}
        </h1>
        
        {/* Right Side */}
        <div className="flex items-center space-x-2">
          {showScan && (
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={onScan}
              data-testid="button-header-scan"
            >
              <Scan className="h-5 w-5" />
            </Button>
          )}
          
          {showAdd && (
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={onAdd}
              data-testid="button-header-add"
            >
              <Plus className="h-5 w-5" />
            </Button>
          )}
          
          {showSettings && (
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={onSettings}
              data-testid="button-header-settings"
            >
              <Settings className="h-5 w-5" />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}