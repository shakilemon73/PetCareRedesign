import { useLocation } from 'wouter';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Lock, MoreVertical, LockOpen } from 'lucide-react';

interface LessonItemProps {
  id: string;
  title: string;
  description: string;
  progress: number;
  isLocked: boolean;
  isUnlock?: boolean; // For special unlock rewards
  level?: 'Beginner' | 'Intermediate' | 'Advanced';
  chapterId?: string; // Chapter ID for navigation
  onClick?: (lessonId: string) => void;
}

const levelColors = {
  'Beginner': 'bg-ion-green text-white',
  'Intermediate': 'bg-helio-yellow text-rich-black',
  'Advanced': 'bg-quantum-pink text-white'
};

export default function LessonItem({
  id,
  title,
  description,
  progress,
  isLocked,
  isUnlock = false,
  level,
  chapterId,
  onClick = (lessonId) => console.log(`Open lesson ${lessonId}`)
}: LessonItemProps) {
  const [, setLocation] = useLocation();

  const handleClick = () => {
    if (!isLocked) {
      // If chapterId is provided, navigate to the lesson page
      if (chapterId) {
        setLocation(`/learn/${chapterId}/${id}`);
      }
      onClick(id);
    }
  };

  return (
    <Card 
      className={`w-full mb-4 overflow-hidden cursor-pointer transition-all hover:shadow-md ${isLocked ? 'opacity-60' : ''} ${isUnlock ? 'border-ion-green/30 bg-gradient-to-r from-ion-green/5 to-transparent' : ''}`}
      onClick={handleClick}
    >
      <CardContent className="p-4">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center space-x-2 mb-1">
              <h3 className="font-semibold text-lg" data-testid={`text-lesson-${id}`}>
                {title}
              </h3>
              {isLocked && (
                <Lock className="h-4 w-4 text-muted-foreground" />
              )}
              {isUnlock && !isLocked && (
                <LockOpen className="h-4 w-4 text-ion-green" />
              )}
            </div>
            
            {!isLocked && !isUnlock && (
              <div className="mb-2">
                <span className="text-sm font-medium text-foreground">
                  {progress}% progress
                </span>
              </div>
            )}
            
            {isLocked && (
              <Badge variant="outline" className="mb-2">
                <Lock className="h-3 w-3 mr-1" />
                Locked
              </Badge>
            )}
            
            {isUnlock && !isLocked && (
              <Badge className="bg-ion-green text-white mb-2">
                <LockOpen className="h-3 w-3 mr-1" />
                Unlocked
              </Badge>
            )}
            
            {level && (
              <Badge className={`${levelColors[level]} mb-2`}>
                {level}
              </Badge>
            )}
            
            <p className="text-sm text-muted-foreground mb-3" data-testid={`text-lesson-desc-${id}`}>
              {description}
            </p>
            
            {!isLocked && !isUnlock && progress > 0 && (
              <Progress value={progress} className="h-2" />
            )}
          </div>
          
          <div className="flex items-center space-x-1">
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-8 w-8"
              onClick={(e) => {
                e.stopPropagation();
                console.log(`More options for ${id}`);
              }}
              data-testid={`button-lesson-more-${id}`}
            >
              <MoreVertical className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}