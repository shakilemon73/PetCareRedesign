import { useState } from 'react';
import { useLocation, useRoute, Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import LessonItem from '@/components/LessonItem';

// Mock data for chapter lessons - this should come from API/storage in real app
const mockChapterData = {
  'quantum-laws': {
    title: 'Quantum Fundamentals',
    description: 'Discover the laws of quantum yourself.',
    lessons: [
      {
        id: 'measurement',
        title: 'Measurement',
        description: 'Discover the laws of a single qubit',
        progress: 100,
        isLocked: false,
        isUnlock: false,
        level: undefined
      },
      {
        id: 'entanglement',
        title: 'Entanglement',
        description: 'Discover what entanglement means',
        progress: 26,
        isLocked: false,
        isUnlock: false,
        level: undefined
      },
      {
        id: 'rainbow-visualizer',
        title: 'Unlock the rainbow visualizer',
        description: 'Special visualization tool for quantum states',
        progress: 100,
        isLocked: false,
        isUnlock: true,
        level: undefined
      },
      {
        id: 'rotations-entanglement',
        title: 'Rotations in entanglement',
        description: 'Advanced quantum state manipulation',
        progress: 0,
        isLocked: true,
        isUnlock: false,
        level: 'Intermediate' as const
      },
      {
        id: 'measurements-entanglement',
        title: 'Measurements in entanglement',
        description: 'Complex measurement scenarios',
        progress: 0,
        isLocked: true,
        isUnlock: false,
        level: 'Advanced' as const
      }
    ]
  },
  'quantum-algorithms': {
    title: 'Quantum Algorithms',
    description: 'Learn the first quantum algorithms and their applications.',
    lessons: [
      {
        id: 'deutsch-jozsa',
        title: 'Deutsch-Jozsa Algorithm',
        description: 'Your first quantum advantage',
        progress: 0,
        isLocked: true,
        isUnlock: false,
        level: undefined
      },
      {
        id: 'grovers-algorithm',
        title: "Grover's Search",
        description: 'Quadratic speedup for search problems',
        progress: 0,
        isLocked: true,
        isUnlock: false,
        level: undefined
      }
    ]
  },
  'bit-commitment': {
    title: 'Quantum Cryptography',
    description: 'Advanced quantum security protocols.',
    lessons: [
      {
        id: 'bb84-protocol',
        title: 'BB84 Protocol',
        description: 'Quantum key distribution fundamentals',
        progress: 0,
        isLocked: true,
        isUnlock: false,
        level: undefined
      },
      {
        id: 'quantum-commitment',
        title: 'Quantum Bit Commitment',
        description: 'Cryptographic commitment schemes',
        progress: 0,
        isLocked: true,
        isUnlock: false,
        level: undefined
      }
    ]
  }
};

export default function LearnChapter() {
  const [location] = useLocation();
  const [match, params] = useRoute('/learn/:chapterId');
  
  const chapterId = params?.chapterId || '';
  const chapterData = mockChapterData[chapterId as keyof typeof mockChapterData];
  
  const [completedLessons, setCompletedLessons] = useState<string[]>([]);

  const handleLessonClick = (lessonId: string) => {
    console.log(`Navigate to lesson: ${lessonId}`);
    // In a real app, this would navigate to the lesson page
    // For now, just simulate completion for demo purposes
    if (!completedLessons.includes(lessonId)) {
      setCompletedLessons([...completedLessons, lessonId]);
    }
  };

  const handleBegin = () => {
    const firstUnlockedLesson = chapterData?.lessons.find(lesson => !lesson.isLocked);
    if (firstUnlockedLesson) {
      handleLessonClick(firstUnlockedLesson.id);
    }
  };

  const allLessonsCompleted = chapterData?.lessons.filter(l => !l.isLocked).every(lesson => 
    lesson.progress === 100 || completedLessons.includes(lesson.id)
  ) || false;

  if (!chapterData) {
    return (
      <div className="min-h-screen bg-background p-4">
        <div className="max-w-md mx-auto">
          <Link href="/learn" className="inline-flex items-center space-x-2 text-sm text-muted-foreground mb-4">
            <ArrowLeft className="h-4 w-4" />
            <span>All chapters</span>
          </Link>
          <div className="text-center py-16">
            <p className="text-lg text-muted-foreground">Chapter not found</p>
            <Button asChild className="mt-4">
              <Link href="/learn">Back to Learning</Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header with back button */}
      <div className="p-4 pb-0">
        <div className="max-w-md mx-auto">
          <Link 
            href="/learn" 
            className="inline-flex items-center space-x-2 text-sm text-muted-foreground mb-6 hover:text-foreground transition-colors"
            data-testid="button-back-chapters"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>All chapters</span>
          </Link>
        </div>
      </div>

      {/* Chapter Hero */}
      <div className="bg-gradient-to-r from-electric-indigo/5 via-quantum-pink/5 to-ion-green/5 px-4 py-6 mb-6">
        <div className="max-w-md mx-auto text-center">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-electric-indigo/20 to-quantum-pink/20 flex items-center justify-center mx-auto mb-4">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-electric-indigo to-quantum-pink animate-pulse" />
          </div>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-electric-indigo to-quantum-pink bg-clip-text text-transparent mb-3" data-testid="text-chapter-title">
            {chapterData.title}
          </h1>
          <p className="text-base text-muted-foreground mb-6" data-testid="text-chapter-description">
            {chapterData.description}
          </p>
          <Button 
            onClick={handleBegin}
            className="bg-gradient-to-r from-electric-indigo to-quantum-pink hover:from-electric-indigo/90 hover:to-quantum-pink/90 text-white px-8"
            data-testid="button-begin-chapter"
          >
            Begin!
          </Button>
        </div>
      </div>

      {/* Lessons List */}
      <div className="p-4 pb-20 max-w-md mx-auto">
        <div className="space-y-4">
          {chapterData.lessons.map((lesson) => (
            <LessonItem
              key={lesson.id}
              id={lesson.id}
              title={lesson.title}
              description={lesson.description}
              progress={lesson.progress}
              isLocked={lesson.isLocked}
              isUnlock={lesson.isUnlock}
              level={lesson.level}
              onClick={handleLessonClick}
            />
          ))}
        </div>

        {/* Done Button */}
        {allLessonsCompleted && (
          <div className="mt-8 text-center">
            <Button 
              asChild
              className="bg-ion-green hover:bg-ion-green/90 text-white px-8"
              data-testid="button-chapter-done"
            >
              <Link href="/learn">Done!</Link>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}