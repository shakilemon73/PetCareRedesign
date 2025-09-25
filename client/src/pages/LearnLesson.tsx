import { useState, useEffect } from 'react';
import { useRoute, Link, useLocation } from 'wouter';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { ArrowLeft, ChevronLeft, ChevronRight, CheckCircle, Circle, Play, Award, BookOpen, Zap } from 'lucide-react';

interface LessonContent {
  id: string;
  title: string;
  description: string;
  content: {
    type: 'text' | 'experiment' | 'interactive';
    data: any;
  }[];
  previousLesson?: {
    id: string;
    title: string;
  };
  nextLesson?: {
    id: string;
    title: string;
  };
}

const mockLessonData: Record<string, Record<string, LessonContent>> = {
  'quantum-laws': {
    'measurement': {
      id: 'measurement',
      title: 'Shake it!',
      description: 'Discover the laws of a single qubit through interactive experimentation',
      content: [
        {
          type: 'text',
          data: {
            text: 'Imagine you are a scientist presented with a strange sphere called Qubi.\n\nSomething is hidden inside: a mysterious dot that you can\'t see just by looking. You want to find out where the dot is, but there\'s only one way to get information: **shake the sphere**.'
          }
        },
        {
          type: 'experiment',
          data: {
            title: 'Experiment 1: Shake to find the dot!',
            instruction: 'Shake the Qubi hard in a straight line by jabbing it in one line until you feel a vibration. It should travel in a straight line as you\'re shaking -- no twisting or arc-ing it!',
            options: [
              { id: 'vibration', text: 'I felt a vibration!' },
              { id: 'no-vibration', text: 'I didn\'t feel a vibration' }
            ]
          }
        }
      ],
      nextLesson: {
        id: 'discovery-1',
        title: 'Discovery # 1'
      }
    }
  }
};

export default function LearnLesson() {
  const [match, params] = useRoute('/learn/:chapterId/:lessonId');
  const [, setLocation] = useLocation();
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [lessonProgress, setLessonProgress] = useState(0);

  const { chapterId, lessonId } = params || {};
  const lesson = chapterId && lessonId ? mockLessonData[chapterId]?.[lessonId] : null;

  useEffect(() => {
    // Calculate lesson progress based on interactions
    if (selectedOption) {
      setLessonProgress(75);
    }
  }, [selectedOption]);

  if (!match || !lesson) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <div className="text-center max-w-md">
          <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
            <BookOpen className="h-8 w-8 text-muted-foreground" />
          </div>
          <h2 className="text-2xl font-semibold mb-3">Lesson not found</h2>
          <p className="text-muted-foreground mb-6">This lesson might have been moved or doesn't exist yet.</p>
          <Link href="/learn">
            <Button>Return to Learning</Button>
          </Link>
        </div>
      </div>
    );
  }

  const handleBack = () => {
    setLocation(`/learn/${chapterId}`);
  };

  const handleOptionSelect = (optionId: string) => {
    setSelectedOption(optionId);
  };

  const handleNext = () => {
    if (lesson.nextLesson) {
      setLocation(`/learn/${chapterId}/${lesson.nextLesson.id}`);
    }
  };

  const renderContent = (content: LessonContent['content'][0]) => {
    switch (content.type) {
      case 'text':
        return (
          <div className="prose prose-lg max-w-none">
            {content.data.text.split('\n\n').map((paragraph: string, index: number) => (
              <p key={index} className="mb-6 text-foreground/90 leading-relaxed text-lg font-light">
                {paragraph.includes('**') ? (
                  paragraph.split('**').map((part, partIndex) => 
                    partIndex % 2 === 1 ? 
                      <strong key={partIndex} className="font-semibold text-foreground bg-primary/10 px-1 rounded">{part}</strong> : 
                      part
                  )
                ) : (
                  paragraph
                )}
              </p>
            ))}
          </div>
        );

      case 'experiment':
        return (
          <Card className="border-2 border-dashed border-primary/30 bg-gradient-to-br from-primary/5 via-background to-secondary/10 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl mb-4">
                  <Zap className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-foreground" data-testid="text-experiment-title">
                  {content.data.title}
                </h3>
                <div className="w-16 h-1 bg-gradient-to-r from-primary/50 to-primary/20 rounded-full mx-auto"></div>
              </div>
              
              <div className="bg-muted/50 rounded-2xl p-6 mb-8 border border-muted">
                <p className="text-foreground/80 leading-relaxed text-center text-lg">
                  {content.data.instruction}
                </p>
              </div>
              
              <div className="space-y-4">
                <p className="text-sm font-medium text-muted-foreground text-center mb-6 flex items-center justify-center gap-2">
                  <Circle className="h-3 w-3" />
                  Choose your experience
                  <Circle className="h-3 w-3" />
                </p>
                {content.data.options.map((option: any, index: number) => (
                  <Button
                    key={option.id}
                    variant={selectedOption === option.id ? "default" : "outline"}
                    className={`w-full text-left justify-start p-6 h-auto text-base transition-all duration-300 ${ 
                      selectedOption === option.id 
                        ? 'border-primary shadow-lg scale-[1.02] bg-primary text-primary-foreground' 
                        : 'hover:border-primary/50 hover:bg-primary/5 hover:scale-[1.01]'
                    }`}
                    onClick={() => handleOptionSelect(option.id)}
                    data-testid={`button-option-${option.id}`}
                  >
                    <div className="flex items-center space-x-4">
                      <div className={`flex items-center justify-center w-10 h-10 rounded-full transition-all ${ 
                        selectedOption === option.id 
                          ? 'bg-primary-foreground/20 text-primary-foreground' 
                          : 'bg-muted text-muted-foreground'
                      }`}>
                        <span className="text-sm font-bold">{index + 1}</span>
                      </div>
                      <div className="flex-1">
                        <span className="font-medium block">{option.text}</span>
                      </div>
                      {selectedOption === option.id && (
                        <CheckCircle className="h-5 w-5 flex-shrink-0" />
                      )}
                    </div>
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Simplified Sticky Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b">
        <div className="max-w-4xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Button
                variant="ghost"
                size="sm"
                onClick={handleBack}
                className="h-9 w-9 p-0"
                data-testid="button-back-chapter"
              >
                <ArrowLeft className="h-4 w-4" />
              </Button>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <BookOpen className="h-4 w-4" />
                <Link 
                  href={`/learn/${chapterId}`}
                  className="hover:text-foreground transition-colors font-medium"
                  data-testid="link-back-chapter"
                >
                  Back to Chapter
                </Link>
              </div>
            </div>
            
            {lessonProgress > 0 && (
              <Badge className="bg-green-100 text-green-800 border-green-200 dark:bg-green-900 dark:text-green-100 dark:border-green-700">
                {lessonProgress}% Complete
              </Badge>
            )}
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/8 via-background to-secondary/8 py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary rounded-full px-4 py-2 text-sm font-medium mb-6 border border-primary/20">
            <Play className="h-4 w-4" />
            <span>Interactive Lesson</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent" data-testid="text-lesson-title">
            {lesson.title}
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed" data-testid="text-lesson-description">
            {lesson.description}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="space-y-12">
          {lesson.content.map((content, index) => (
            <section key={index} className="scroll-mt-20">
              {renderContent(content)}
            </section>
          ))}
        </div>

        {/* Progress Achievement Section */}
        {selectedOption && (
          <section className="mt-16 p-8 bg-gradient-to-br from-green-50 via-emerald-50 to-green-50 dark:from-green-950/30 dark:via-emerald-950/30 dark:to-green-950/30 rounded-3xl border border-green-200 dark:border-green-800/50 shadow-lg">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 dark:bg-green-900/50 rounded-2xl mb-6">
                <Award className="h-8 w-8 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-2xl font-bold text-green-900 dark:text-green-100 mb-3">
                Excellent Work!
              </h3>
              <p className="text-green-700 dark:text-green-300 mb-6 text-lg">
                You've successfully completed this experiment. Ready for the next challenge?
              </p>
              <div className="max-w-sm mx-auto">
                <div className="flex justify-between text-sm text-green-600 dark:text-green-400 mb-2">
                  <span>Lesson Progress</span>
                  <span className="font-semibold">{lessonProgress}%</span>
                </div>
                <Progress value={lessonProgress} className="h-3 bg-green-200 dark:bg-green-900" />
              </div>
            </div>
          </section>
        )}
      </main>

      {/* Enhanced Bottom Navigation */}
      <footer className="sticky bottom-0 border-t bg-background/95 backdrop-blur-md shadow-lg">
        <div className="max-w-4xl mx-auto p-6">
          {/* Progress Indicator */}
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-primary shadow-sm"></div>
              <span className="text-sm text-primary font-medium">Current Lesson</span>
            </div>
            <div className="flex-1 max-w-32 h-2 bg-muted rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-primary to-primary/60 rounded-full transition-all duration-500" style={{ width: '60%' }}></div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-muted"></div>
              <span className="text-sm text-muted-foreground">Next</span>
            </div>
          </div>
          
          {/* Navigation Buttons */}
          <div className="flex items-center justify-between gap-4">
            <Button 
              variant="ghost" 
              disabled 
              className="flex items-center space-x-3 text-muted-foreground min-w-0"
              data-testid="button-previous-lesson"
            >
              <ChevronLeft className="h-5 w-5 flex-shrink-0" />
              <div className="text-left min-w-0">
                <div className="text-xs opacity-75">Previous</div>
                <div className="text-sm font-medium truncate">None</div>
              </div>
            </Button>

            <Button 
              size="lg"
              onClick={handleNext}
              disabled={!lesson.nextLesson || !selectedOption}
              className={`flex items-center space-x-3 px-8 py-4 min-w-0 transition-all duration-200 ${
                selectedOption 
                  ? 'bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl' 
                  : 'opacity-50'
              }`}
              data-testid="button-next-lesson"
            >
              <div className="text-right min-w-0">
                <div className="text-xs opacity-90">Continue to</div>
                <div className="text-base font-semibold truncate">{lesson.nextLesson?.title || 'Complete'}</div>
              </div>
              <ChevronRight className="h-6 w-6 flex-shrink-0" />
            </Button>
          </div>
          
          {!selectedOption && (
            <div className="text-center mt-4 p-3 bg-amber-50 dark:bg-amber-950/20 rounded-xl border border-amber-200 dark:border-amber-800/30">
              <p className="text-sm text-amber-700 dark:text-amber-300">
                ⚡ Complete the experiment above to unlock the next lesson
              </p>
            </div>
          )}
        </div>
      </footer>
    </div>
  );
}