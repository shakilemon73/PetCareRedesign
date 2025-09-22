import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Lock, MoreHorizontal, ChevronRight } from 'lucide-react';

interface LearningModuleProps {
  id: string;
  title: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  progress: number;
  skinsUnlocked: number;
  totalSkins: number;
  isLocked: boolean;
  onStart?: (moduleId: string) => void;
}

const levelColors = {
  'Beginner': 'bg-ion-green text-white',
  'Intermediate': 'bg-helio-yellow text-rich-black',
  'Advanced': 'bg-quantum-pink text-white'
};

const levelGradients = {
  'Beginner': 'from-ion-green/20 to-sky-blue/20',
  'Intermediate': 'from-helio-yellow/20 to-ember-orange/20',
  'Advanced': 'from-quantum-pink/20 to-electric-indigo/20'
};

export default function LearningModule({
  id,
  title,
  level,
  progress,
  skinsUnlocked,
  totalSkins,
  isLocked,
  onStart = (moduleId) => console.log(`Start module ${moduleId}`)
}: LearningModuleProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleStart = () => {
    if (!isLocked) {
      onStart(id);
    }
  };

  return (
    <Card className={`w-full mb-4 overflow-hidden ${isLocked ? 'opacity-60' : ''}`}>
      <CardContent className="p-0">
        {/* Module Header */}
        <div className={`bg-gradient-to-br ${levelGradients[level]} p-4`}>
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <Badge className={levelColors[level]}>
                  {level}
                </Badge>
                {isLocked && (
                  <Badge variant="outline" className="bg-background/50">
                    <Lock className="h-3 w-3 mr-1" />
                    Locked
                  </Badge>
                )}
              </div>
              
              <h3 className="font-semibold text-lg mb-2" data-testid={`text-module-${id}`}>
                {title}
              </h3>
              
              {!isLocked && (
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">{progress}% progress</span>
                    <span className="text-muted-foreground">
                      {skinsUnlocked} of {totalSkins} skins unlocked
                    </span>
                  </div>
                  <Progress value={progress} className="h-2" />
                </div>
              )}
            </div>
            
            <div className="flex items-center space-x-1">
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-8 w-8"
                data-testid={`button-module-more-${id}`}
              >
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
        
        {/* Module Actions */}
        <div className="p-4">
          <Button 
            className="w-full justify-between"
            variant={isLocked ? "outline" : "default"}
            disabled={isLocked}
            onClick={handleStart}
            data-testid={`button-start-module-${id}`}
          >
            <span>
              {isLocked ? 'Complete previous modules to unlock' : 
               progress === 0 ? 'Start Learning' : 
               progress === 100 ? 'Review Module' : 'Continue Learning'}
            </span>
            {!isLocked && <ChevronRight className="h-4 w-4" />}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}