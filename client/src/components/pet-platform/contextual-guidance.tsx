import { useState, useEffect } from "react";
import { 
  MessageCircle, 
  Calendar, 
  Heart, 
  Lightbulb,
  X,
  ArrowRight,
  Clock,
  Star,
  CheckCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface Suggestion {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  action: () => void;
  priority: 'high' | 'medium' | 'low';
  category: string;
}

interface ContextualGuidanceProps {
  onOpenChat: () => void;
  onOpenBooking: () => void;
  onOpenTrial: () => void;
}

export default function ContextualGuidance({ 
  onOpenChat, 
  onOpenBooking, 
  onOpenTrial 
}: ContextualGuidanceProps) {
  const [currentSuggestions, setCurrentSuggestions] = useState<Suggestion[]>([]);
  const [dismissedSuggestions, setDismissedSuggestions] = useState<string[]>([]);
  const [isVisible, setIsVisible] = useState(false);

  const allSuggestions: Suggestion[] = [
    {
      id: 'welcome-chat',
      title: 'Meet Dr. Paw AI',
      description: 'Get instant answers about your pet\'s health and behavior',
      icon: MessageCircle,
      action: onOpenChat,
      priority: 'high',
      category: 'onboarding'
    },
    {
      id: 'book-first-appointment',
      title: 'Book Your First Visit',
      description: 'Schedule a discounted wellness check with a local vet',
      icon: Calendar,
      action: onOpenBooking,
      priority: 'high',
      category: 'onboarding'
    },
    {
      id: 'health-tracking',
      title: 'Start Health Tracking',
      description: 'Monitor your pet\'s wellness with AI-powered insights',
      icon: Heart,
      action: onOpenTrial,
      priority: 'medium',
      category: 'health'
    },
    {
      id: 'emergency-preparation',
      title: 'Prepare for Emergencies',
      description: 'Learn what to do if your pet needs urgent care',
      icon: MessageCircle,
      action: onOpenChat,
      priority: 'medium',
      category: 'safety'
    }
  ];

  useEffect(() => {
    // Simulate contextual logic - in reality this would be based on user data
    const getContextualSuggestions = () => {
      const isNewUser = !localStorage.getItem('hasUsedFeatures');
      const timeOfDay = new Date().getHours();
      const dayOfWeek = new Date().getDay();

      let suggestions: Suggestion[] = [];

      if (isNewUser) {
        suggestions = allSuggestions.filter(s => s.category === 'onboarding');
      } else {
        // Peak vet hours (morning and evening)
        if ((timeOfDay >= 8 && timeOfDay <= 10) || (timeOfDay >= 17 && timeOfDay <= 19)) {
          suggestions.push(allSuggestions.find(s => s.id === 'book-first-appointment')!);
        }
        
        // Weekend health focus
        if (dayOfWeek === 0 || dayOfWeek === 6) {
          suggestions.push(allSuggestions.find(s => s.id === 'health-tracking')!);
        }

        // Add general chat suggestion
        suggestions.push(allSuggestions.find(s => s.id === 'welcome-chat')!);
      }

      return suggestions
        .filter(s => s && !dismissedSuggestions.includes(s.id))
        .slice(0, 2); // Show max 2 suggestions
    };

    const contextualSuggestions = getContextualSuggestions();
    setCurrentSuggestions(contextualSuggestions);
    
    if (contextualSuggestions.length > 0) {
      setTimeout(() => setIsVisible(true), 2000); // Show after 2 seconds
    }
  }, [dismissedSuggestions]);

  const dismissSuggestion = (id: string) => {
    setDismissedSuggestions(prev => [...prev, id]);
    setCurrentSuggestions(prev => prev.filter(s => s.id !== id));
  };

  const handleSuggestionClick = (suggestion: Suggestion) => {
    suggestion.action();
    localStorage.setItem('hasUsedFeatures', 'true');
    dismissSuggestion(suggestion.id);
  };

  if (!isVisible || currentSuggestions.length === 0) return null;

  return (
    <div className="fixed bottom-24 left-6 z-30 max-w-sm">
      <div className="space-y-3 animate-in slide-in-from-left-2 duration-500">
        {currentSuggestions.map((suggestion, index) => (
          <Card 
            key={suggestion.id}
            className="border-0 shadow-xl bg-white dark:bg-gray-800 hover:shadow-2xl transition-all duration-200 cursor-pointer group"
            style={{ animationDelay: `${index * 200}ms` }}
            data-testid={`contextual-suggestion-${suggestion.id}`}
          >
            <CardContent className="p-4">
              <div className="flex items-start space-x-3">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${
                  suggestion.priority === 'high' 
                    ? 'bg-primary-100 dark:bg-primary-900/30' 
                    : 'bg-gray-100 dark:bg-gray-700'
                }`}>
                  <suggestion.icon className={`w-5 h-5 ${
                    suggestion.priority === 'high' 
                      ? 'text-primary-600 dark:text-primary-400' 
                      : 'text-gray-600 dark:text-gray-300'
                  }`} />
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between">
                    <div className="flex-1 pr-2">
                      <h4 className="font-semibold text-sm text-gray-900 dark:text-gray-100 mb-1">
                        {suggestion.title}
                      </h4>
                      <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                        {suggestion.description}
                      </p>
                    </div>
                    
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        dismissSuggestion(suggestion.id);
                      }}
                      className="w-6 h-6 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center justify-center transition-colors flex-shrink-0"
                      aria-label="Dismiss suggestion"
                    >
                      <X className="w-3 h-3 text-gray-400" />
                    </button>
                  </div>
                  
                  <Button
                    onClick={() => handleSuggestionClick(suggestion)}
                    size="sm"
                    className="mt-3 w-full text-xs bg-primary-600 hover:bg-primary-700 text-white group-hover:bg-primary-700"
                  >
                    <Lightbulb className="w-3 h-3 mr-1" />
                    Try Now
                    <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-0.5 transition-transform" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}