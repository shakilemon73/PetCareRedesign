import { useState } from "react";
import { 
  MessageCircle, 
  Calendar, 
  Heart, 
  Phone,
  ChevronRight,
  ArrowLeft,
  CheckCircle,
  AlertTriangle,
  Clock,
  X
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface TaskFlow {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  color: string;
  urgency: 'high' | 'medium' | 'low';
  steps: TaskStep[];
}

interface TaskStep {
  id: string;
  title: string;
  description: string;
  action: string;
  timeEstimate: string;
}

interface TaskFlowWizardProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenChat: () => void;
  onOpenBooking: () => void;
  onOpenTrial: () => void;
}

export default function TaskFlowWizard({ 
  isOpen, 
  onClose, 
  onOpenChat, 
  onOpenBooking, 
  onOpenTrial 
}: TaskFlowWizardProps) {
  const [currentFlow, setCurrentFlow] = useState<string | null>(null);
  const [currentStep, setCurrentStep] = useState(0);

  const taskFlows: TaskFlow[] = [
    {
      id: 'sick-pet',
      title: 'My Pet Seems Sick',
      description: 'Get immediate help for concerning symptoms',
      icon: AlertTriangle,
      color: 'red',
      urgency: 'high',
      steps: [
        {
          id: 'assess-symptoms',
          title: 'Assess Symptoms',
          description: 'Chat with Dr. Paw AI to evaluate your pet\'s condition',
          action: 'chat',
          timeEstimate: '2-3 min'
        },
        {
          id: 'determine-urgency',
          title: 'Determine Urgency',
          description: 'Get AI guidance on whether this needs immediate attention',
          action: 'chat',
          timeEstimate: '1 min'
        },
        {
          id: 'book-visit',
          title: 'Book Urgent Visit',
          description: 'Schedule same-day or emergency appointment if needed',
          action: 'booking',
          timeEstimate: '60 sec'
        }
      ]
    },
    {
      id: 'routine-care',
      title: 'Schedule Routine Care',
      description: 'Book wellness visits and preventive care',
      icon: Calendar,
      color: 'green',
      urgency: 'medium',
      steps: [
        {
          id: 'choose-care-type',
          title: 'Choose Care Type',
          description: 'Select wellness exam, vaccinations, or dental cleaning',
          action: 'booking',
          timeEstimate: '30 sec'
        },
        {
          id: 'find-vet',
          title: 'Find Available Vets',
          description: 'See discounted rates from nearby clinics',
          action: 'booking',
          timeEstimate: '1 min'
        },
        {
          id: 'confirm-appointment',
          title: 'Confirm Appointment',
          description: 'Complete booking with preferred date and time',
          action: 'booking',
          timeEstimate: '30 sec'
        }
      ]
    },
    {
      id: 'health-question',
      title: 'I Have Questions',
      description: 'Get answers about pet health and behavior',
      icon: MessageCircle,
      color: 'blue',
      urgency: 'low',
      steps: [
        {
          id: 'ask-question',
          title: 'Ask Your Question',
          description: 'Chat with Dr. Paw AI about any health concerns',
          action: 'chat',
          timeEstimate: '1-2 min'
        },
        {
          id: 'get-resources',
          title: 'Get Resources',
          description: 'Receive helpful tips and care recommendations',
          action: 'chat',
          timeEstimate: '1 min'
        },
        {
          id: 'follow-up',
          title: 'Schedule Follow-up',
          description: 'Book a visit if additional care is needed',
          action: 'booking',
          timeEstimate: '60 sec'
        }
      ]
    },
    {
      id: 'new-pet',
      title: 'New Pet Parent',
      description: 'Get started with your new furry family member',
      icon: Heart,
      color: 'purple',
      urgency: 'medium',
      steps: [
        {
          id: 'setup-profile',
          title: 'Create Pet Profile',
          description: 'Set up health tracking and get personalized care',
          action: 'trial',
          timeEstimate: '2-3 min'
        },
        {
          id: 'first-wellness',
          title: 'First Wellness Visit',
          description: 'Schedule initial health check and vaccinations',
          action: 'booking',
          timeEstimate: '60 sec'
        },
        {
          id: 'ongoing-care',
          title: 'Plan Ongoing Care',
          description: 'Set up reminders and preventive care schedule',
          action: 'trial',
          timeEstimate: '1 min'
        }
      ]
    }
  ];

  const handleFlowSelect = (flowId: string) => {
    setCurrentFlow(flowId);
    setCurrentStep(0);
  };

  const handleStepAction = (action: string) => {
    switch (action) {
      case 'chat':
        onOpenChat();
        break;
      case 'booking':
        onOpenBooking();
        break;
      case 'trial':
        onOpenTrial();
        break;
    }
    onClose();
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    } else {
      setCurrentFlow(null);
    }
  };

  const handleNext = () => {
    const flow = taskFlows.find(f => f.id === currentFlow);
    if (flow && currentStep < flow.steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  if (!isOpen) return null;

  const selectedFlow = taskFlows.find(f => f.id === currentFlow);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-background border border-border rounded-3xl shadow-2xl w-full max-w-2xl max-h-[80vh] overflow-y-auto">
        <div className="sticky top-0 bg-background border-b border-border rounded-t-3xl z-10">
          <div className="flex items-center justify-between p-6">
            <div className="flex items-center gap-3">
              {currentFlow && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleBack}
                  className="rounded-full"
                  data-testid="button-task-flow-back"
                >
                  <ArrowLeft className="w-4 h-4" />
                </Button>
              )}
              <div>
                <h2 className="text-xl font-bold text-foreground">
                  {selectedFlow ? selectedFlow.title : 'How Can We Help?'}
                </h2>
                <p className="text-sm text-muted-foreground">
                  {selectedFlow 
                    ? `Step ${currentStep + 1} of ${selectedFlow.steps.length}` 
                    : 'Choose what you need help with'
                  }
                </p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="rounded-full"
              data-testid="button-close-task-flow"
            >
              <X className="w-5 h-5" />
            </Button>
          </div>
        </div>

        <div className="p-6">
          {!currentFlow ? (
            // Flow Selection
            <div className="space-y-4">
              <div className="text-center mb-6">
                <p className="text-muted-foreground">
                  Tell us what you need and we'll guide you through the process
                </p>
              </div>
              
              {taskFlows.map((flow) => (
                <Card 
                  key={flow.id}
                  className={`cursor-pointer hover:shadow-lg transition-all duration-200 border-l-4 ${
                    flow.urgency === 'high' ? 'border-l-red-500' :
                    flow.urgency === 'medium' ? 'border-l-yellow-500' :
                    'border-l-blue-500'
                  }`}
                  onClick={() => handleFlowSelect(flow.id)}
                  data-testid={`task-flow-${flow.id}`}
                >
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                          flow.color === 'red' ? 'bg-red-100 dark:bg-red-900/30' :
                          flow.color === 'green' ? 'bg-green-100 dark:bg-green-900/30' :
                          flow.color === 'blue' ? 'bg-blue-100 dark:bg-blue-900/30' :
                          'bg-purple-100 dark:bg-purple-900/30'
                        }`}>
                          <flow.icon className={`w-6 h-6 ${
                            flow.color === 'red' ? 'text-red-600' :
                            flow.color === 'green' ? 'text-green-600' :
                            flow.color === 'blue' ? 'text-blue-600' :
                            'text-purple-600'
                          }`} />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground">{flow.title}</h3>
                          <p className="text-sm text-muted-foreground">{flow.description}</p>
                          <div className="flex items-center gap-2 mt-2">
                            <Clock className="w-3 h-3 text-muted-foreground" />
                            <span className="text-xs text-muted-foreground">
                              {flow.steps.length} steps
                            </span>
                            {flow.urgency === 'high' && (
                              <span className="px-2 py-0.5 rounded-full text-xs bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300">
                                Urgent
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                      <ChevronRight className="w-5 h-5 text-muted-foreground" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            // Step View
            selectedFlow && (
              <Card className="border-0 shadow-none">
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 mx-auto rounded-2xl flex items-center justify-center mb-4 ${
                    selectedFlow.color === 'red' ? 'bg-red-100 dark:bg-red-900/30' :
                    selectedFlow.color === 'green' ? 'bg-green-100 dark:bg-green-900/30' :
                    selectedFlow.color === 'blue' ? 'bg-blue-100 dark:bg-blue-900/30' :
                    'bg-purple-100 dark:bg-purple-900/30'
                  }`}>
                    <selectedFlow.icon className={`w-8 h-8 ${
                      selectedFlow.color === 'red' ? 'text-red-600' :
                      selectedFlow.color === 'green' ? 'text-green-600' :
                      selectedFlow.color === 'blue' ? 'text-blue-600' :
                      'text-purple-600'
                    }`} />
                  </div>
                  <CardTitle>{selectedFlow.steps[currentStep].title}</CardTitle>
                  <CardDescription>{selectedFlow.steps[currentStep].description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center space-y-6">
                    <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      <span>Estimated time: {selectedFlow.steps[currentStep].timeEstimate}</span>
                    </div>

                    <Button
                      onClick={() => handleStepAction(selectedFlow.steps[currentStep].action)}
                      className="px-8 py-3 text-lg"
                      data-testid={`task-flow-action-${selectedFlow.steps[currentStep].action}`}
                    >
                      {selectedFlow.steps[currentStep].action === 'chat' && <MessageCircle className="w-5 h-5 mr-2" />}
                      {selectedFlow.steps[currentStep].action === 'booking' && <Calendar className="w-5 h-5 mr-2" />}
                      {selectedFlow.steps[currentStep].action === 'trial' && <Heart className="w-5 h-5 mr-2" />}
                      
                      {selectedFlow.steps[currentStep].action === 'chat' && 'Start Chat'}
                      {selectedFlow.steps[currentStep].action === 'booking' && 'Book Appointment'}
                      {selectedFlow.steps[currentStep].action === 'trial' && 'Start Setup'}
                    </Button>

                    {/* Step Progress */}
                    <div className="flex justify-center space-x-2">
                      {selectedFlow.steps.map((_, index) => (
                        <div
                          key={index}
                          className={`w-2 h-2 rounded-full ${
                            index === currentStep
                              ? 'bg-primary-500'
                              : index < currentStep
                              ? 'bg-success-500'
                              : 'bg-muted'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          )}
        </div>
      </div>
    </div>
  );
}