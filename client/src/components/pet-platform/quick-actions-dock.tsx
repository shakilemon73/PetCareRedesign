import { useState } from "react";
import { 
  MessageCircle, 
  Calendar, 
  Heart, 
  Plus, 
  Phone, 
  HelpCircle,
  ChevronUp,
  Zap,
  Clock,
  Star,
  Shield
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface QuickAction {
  id: string;
  icon: React.ComponentType<any>;
  label: string;
  description: string;
  color: string;
  primary?: boolean;
  urgent?: boolean;
}

interface QuickActionsDockProps {
  onOpenChat: () => void;
  onOpenBooking: () => void;
  onOpenTrial: () => void;
}

export default function QuickActionsDock({ onOpenChat, onOpenBooking, onOpenTrial }: QuickActionsDockProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const quickActions: QuickAction[] = [
    {
      id: "emergency",
      icon: Phone,
      label: "Emergency",
      description: "Get immediate emergency help",
      color: "red",
      urgent: true,
    },
    {
      id: "chat",
      icon: MessageCircle,
      label: "Ask Dr. Paw",
      description: "Get instant AI assistance",
      color: "blue",
      primary: true,
    },
    {
      id: "appointment",
      icon: Calendar,
      label: "Book Visit",
      description: "Schedule with a vet",
      color: "green",
      primary: true,
    },
    {
      id: "health",
      icon: Heart,
      label: "Health Check",
      description: "Track your pet's wellness",
      color: "purple",
    },
    {
      id: "help",
      icon: HelpCircle,
      label: "Get Help",
      description: "Support & tutorials",
      color: "gray",
    },
  ];

  const primaryActions = quickActions.filter(action => action.primary);
  const allActions = quickActions;

  const handleActionClick = (actionId: string) => {
    switch (actionId) {
      case "chat":
        onOpenChat();
        break;
      case "appointment":
        onOpenBooking();
        break;
      case "emergency":
        // Open emergency flow
        window.open('tel:+1-800-VET-HELP');
        break;
      case "health":
        // Navigate to health tracking
        onOpenTrial();
        break;
      case "help":
        // Open help center
        onOpenChat();
        break;
    }
    setIsExpanded(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <div className="flex flex-col items-end space-y-3">
        {/* Expanded Actions */}
        {isExpanded && (
          <div className="space-y-2 animate-in slide-in-from-bottom-2 duration-300">
            {allActions.slice(2).reverse().map((action) => (
              <Card 
                key={action.id} 
                className={`border-0 shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer ${
                  action.urgent 
                    ? 'bg-red-500 hover:bg-red-600 text-white' 
                    : 'bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700'
                }`}
                onClick={() => handleActionClick(action.id)}
                data-testid={`quick-action-${action.id}`}
              >
                <CardContent className="p-3 flex items-center space-x-3 min-w-[200px]">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                    action.urgent 
                      ? 'bg-white/20' 
                      : `bg-${action.color}-100 dark:bg-${action.color}-900/30`
                  }`}>
                    <action.icon className={`w-5 h-5 ${
                      action.urgent 
                        ? 'text-white' 
                        : `text-${action.color}-600 dark:text-${action.color}-400`
                    }`} />
                  </div>
                  <div className="flex-1">
                    <div className={`font-semibold text-sm ${
                      action.urgent ? 'text-white' : 'text-gray-900 dark:text-gray-100'
                    }`}>
                      {action.label}
                    </div>
                    <div className={`text-xs ${
                      action.urgent ? 'text-red-100' : 'text-gray-500 dark:text-gray-400'
                    }`}>
                      {action.description}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Primary Actions */}
        <div className="flex space-x-2">
          {primaryActions.map((action) => (
            <Button
              key={action.id}
              onClick={() => handleActionClick(action.id)}
              className={`w-14 h-14 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200 ${
                action.color === 'blue' 
                  ? 'bg-blue-500 hover:bg-blue-600' 
                  : 'bg-green-500 hover:bg-green-600'
              } text-white border-0`}
              data-testid={`quick-action-primary-${action.id}`}
            >
              <action.icon className="w-6 h-6" />
            </Button>
          ))}
        </div>

        {/* Expand/Collapse Button */}
        <Button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-14 h-14 rounded-2xl bg-gray-900 dark:bg-gray-700 hover:bg-gray-800 dark:hover:bg-gray-600 text-white shadow-lg hover:shadow-xl transition-all duration-200 border-0"
          data-testid="quick-actions-toggle"
        >
          <ChevronUp className={`w-6 h-6 transition-transform duration-200 ${
            isExpanded ? 'rotate-180' : ''
          }`} />
        </Button>
      </div>
    </div>
  );
}