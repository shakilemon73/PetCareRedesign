import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Lock } from 'lucide-react';

interface ThemeCardProps {
  id: string;
  name: string;
  description: string;
  colors: string[];
  isUnlocked: boolean;
  isActive?: boolean;
  onApply?: (themeId: string) => void;
}

export default function ThemeCard({
  id,
  name,
  description,
  colors,
  isUnlocked,
  isActive = false,
  onApply = (themeId) => console.log(`Apply theme ${themeId}`)
}: ThemeCardProps) {
  const [isApplying, setIsApplying] = useState(false);

  const handleApply = async () => {
    if (!isUnlocked) return;
    
    setIsApplying(true);
    onApply(id);
    
    // Simulate async operation
    setTimeout(() => {
      setIsApplying(false);
    }, 1000);
  };

  return (
    <Card className={`w-full mb-4 ${isActive ? 'ring-2 ring-electric-indigo' : ''}`}>
      <CardContent className="p-4">
        {/* Theme Preview */}
        <div className="relative mb-4">
          <div className="flex h-20 rounded-lg overflow-hidden">
            {colors.map((color, index) => (
              <div 
                key={index}
                className="flex-1"
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
          
          {/* Lock Overlay */}
          {!isUnlocked && (
            <div className="absolute inset-0 bg-black/50 rounded-lg flex items-center justify-center">
              <Lock className="h-6 w-6 text-white" />
            </div>
          )}
          
          {/* Active Badge */}
          {isActive && (
            <Badge className="absolute top-2 right-2 bg-electric-indigo text-white">
              Active
            </Badge>
          )}
        </div>
        
        {/* Theme Info */}
        <div className="mb-4">
          <h3 className="font-semibold text-lg mb-1" data-testid={`text-theme-${id}`}>
            {name}
          </h3>
          <p className="text-sm text-muted-foreground">
            {description}
          </p>
        </div>
        
        {/* Apply Button */}
        <Button 
          className="w-full"
          variant={isActive ? "outline" : "default"}
          disabled={!isUnlocked || isApplying}
          onClick={handleApply}
          data-testid={`button-apply-theme-${id}`}
        >
          {isApplying ? (
            "Applying..."
          ) : isActive ? (
            "Currently Active"
          ) : !isUnlocked ? (
            "Locked"
          ) : (
            "Apply Theme"
          )}
        </Button>
      </CardContent>
    </Card>
  );
}