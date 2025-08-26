import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { z } from "zod";
import { 
  User, 
  Mail, 
  Phone, 
  Heart, 
  PawPrint, 
  CheckCircle, 
  ArrowRight, 
  X, 
  Star,
  Calendar,
  MessageCircle,
  Shield,
  Sparkles,
  Gift
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const trialSignUpSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().optional(),
  petName: z.string().min(1, "Pet name is required"),
  petType: z.enum(["dog", "cat", "bird", "rabbit", "other"]),
  petAge: z.string().optional(),
  goals: z.array(z.string()).min(1, "Please select at least one goal"),
  hearAbout: z.string().optional(),
});

type TrialSignUpFormData = z.infer<typeof trialSignUpSchema>;

interface TrialSignupFlowProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function TrialSignupFlow({ isOpen, onClose }: TrialSignupFlowProps) {
  const [step, setStep] = useState(1);
  const [isCompleted, setIsCompleted] = useState(false);
  const { toast } = useToast();

  const form = useForm<TrialSignUpFormData>({
    resolver: zodResolver(trialSignUpSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      petName: "",
      petType: "dog",
      petAge: "",
      goals: [],
      hearAbout: "",
    },
  });

  const goals = [
    { id: "health-tracking", label: "Health Tracking", icon: Heart },
    { id: "vet-appointments", label: "Easy Vet Appointments", icon: Calendar },
    { id: "ai-assistance", label: "24/7 AI Support", icon: MessageCircle },
    { id: "save-money", label: "Save on Vet Bills", icon: Gift },
    { id: "medication-reminders", label: "Medication Reminders", icon: Shield },
    { id: "emergency-care", label: "Emergency Care Access", icon: Star },
  ];

  const trialMutation = useMutation({
    mutationFn: async (data: TrialSignUpFormData) => {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          userType: 'pet_parent',
          message: `Pet: ${data.petName} (${data.petType}). Goals: ${data.goals.join(', ')}`,
        }),
      });
      
      if (!response.ok) {
        throw new Error('Failed to start trial');
      }
      
      return response.json();
    },
    onSuccess: () => {
      setIsCompleted(true);
      setStep(4);
      toast({
        title: "Welcome to Crest! 🎉",
        description: "Your free trial is now active. Check your email for next steps.",
      });
    },
    onError: () => {
      toast({
        title: "Sign-up Failed",
        description: "Failed to start trial. Please try again.",
        variant: "destructive",
      });
    }
  });

  const onSubmit = (data: TrialSignUpFormData) => {
    trialMutation.mutate(data);
  };

  const handleGoalToggle = (goalId: string) => {
    const currentGoals = form.getValues('goals');
    if (currentGoals.includes(goalId)) {
      form.setValue('goals', currentGoals.filter(g => g !== goalId));
    } else {
      form.setValue('goals', [...currentGoals, goalId]);
    }
  };

  const handleClose = () => {
    setStep(1);
    setIsCompleted(false);
    form.reset();
    onClose();
  };

  const canProceedToStep2 = () => {
    const values = form.getValues();
    return values.name && values.email && values.petName;
  };

  const canProceedToStep3 = () => {
    const values = form.getValues();
    return values.goals && values.goals.length > 0;
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-background border border-border rounded-3xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-background border-b border-border rounded-t-3xl z-10">
          <div className="flex items-center justify-between p-6">
            <div>
              <h2 className="text-2xl font-bold text-foreground">Start Your Free Trial</h2>
              <p className="text-muted-foreground">No credit card required • 30 days free</p>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleClose}
              className="rounded-full"
              data-testid="button-close-trial-signup"
            >
              <X className="w-5 h-5" />
            </Button>
          </div>
        </div>

        <div className="p-6">
          {/* Step Indicator */}
          <div className="flex items-center justify-center mb-8">
            {[1, 2, 3, 4].map((stepNum) => (
              <div key={stepNum} className="flex items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                    step >= stepNum
                      ? 'bg-primary-500 text-white'
                      : 'bg-muted text-muted-foreground'
                  }`}
                >
                  {stepNum === 4 && isCompleted ? (
                    <CheckCircle className="w-5 h-5" />
                  ) : (
                    stepNum
                  )}
                </div>
                {stepNum < 4 && (
                  <div
                    className={`w-16 h-1 mx-2 ${
                      step > stepNum ? 'bg-primary-500' : 'bg-muted'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              {/* Step 1: Basic Information */}
              {step === 1 && (
                <Card className="border-0 shadow-none">
                  <CardHeader className="text-center">
                    <CardTitle className="flex items-center justify-center gap-2">
                      <User className="w-5 h-5 text-primary-500" />
                      Let's Get Started!
                    </CardTitle>
                    <CardDescription>
                      Tell us about you and your pet
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <h3 className="font-semibold text-lg">Your Information</h3>
                        
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Full Name *</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="Your full name"
                                  {...field}
                                  data-testid="input-user-name"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email Address *</FormLabel>
                              <FormControl>
                                <Input
                                  type="email"
                                  placeholder="your.email@example.com"
                                  {...field}
                                  data-testid="input-user-email"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Phone (Optional)</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="(555) 123-4567"
                                  {...field}
                                  data-testid="input-user-phone"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <div className="space-y-4">
                        <h3 className="font-semibold text-lg flex items-center gap-2">
                          <PawPrint className="w-4 h-4" />
                          Pet Information
                        </h3>
                        
                        <FormField
                          control={form.control}
                          name="petName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Pet's Name *</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="Your pet's name"
                                  {...field}
                                  data-testid="input-pet-name-trial"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="petType"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Pet Type</FormLabel>
                              <div className="grid grid-cols-3 gap-2">
                                {[
                                  { value: "dog", label: "Dog" },
                                  { value: "cat", label: "Cat" },
                                  { value: "bird", label: "Bird" },
                                  { value: "rabbit", label: "Rabbit" },
                                  { value: "other", label: "Other" },
                                ].map((type) => (
                                  <Button
                                    key={type.value}
                                    type="button"
                                    variant={field.value === type.value ? "default" : "outline"}
                                    onClick={() => field.onChange(type.value)}
                                    className="text-sm"
                                    data-testid={`button-pet-type-${type.value}`}
                                  >
                                    {type.label}
                                  </Button>
                                ))}
                              </div>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="petAge"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Pet's Age (Optional)</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="e.g., 3 years, 8 months"
                                  {...field}
                                  data-testid="input-pet-age-trial"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>

                    <div className="flex justify-end pt-4">
                      <Button
                        type="button"
                        onClick={() => setStep(2)}
                        disabled={!canProceedToStep2()}
                        className="px-8"
                        data-testid="button-next-step-1"
                      >
                        Next Step
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Step 2: Goals Selection */}
              {step === 2 && (
                <Card className="border-0 shadow-none">
                  <CardHeader className="text-center">
                    <CardTitle className="flex items-center justify-center gap-2">
                      <Star className="w-5 h-5 text-primary-500" />
                      What's Most Important to You?
                    </CardTitle>
                    <CardDescription>
                      Select your top priorities for {form.getValues('petName')}'s care
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {goals.map((goal) => {
                        const isSelected = form.watch('goals')?.includes(goal.id);
                        return (
                          <button
                            key={goal.id}
                            type="button"
                            onClick={() => handleGoalToggle(goal.id)}
                            className={`p-4 rounded-2xl border-2 transition-all duration-200 text-left hover:scale-105 ${
                              isSelected
                                ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/20'
                                : 'border-border hover:border-primary-300'
                            }`}
                            data-testid={`button-goal-${goal.id}`}
                          >
                            <div className="flex items-center gap-3 mb-2">
                              <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                                isSelected 
                                  ? 'bg-primary-500 text-white' 
                                  : 'bg-muted text-muted-foreground'
                              }`}>
                                <goal.icon className="w-4 h-4" />
                              </div>
                              <span className="font-semibold text-foreground">{goal.label}</span>
                              {isSelected && (
                                <CheckCircle className="w-5 h-5 text-primary-500 ml-auto" />
                              )}
                            </div>
                          </button>
                        );
                      })}
                    </div>

                    <div className="flex justify-between pt-6">
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => setStep(1)}
                        data-testid="button-back-step-2"
                      >
                        Back
                      </Button>
                      <Button
                        type="button"
                        onClick={() => setStep(3)}
                        disabled={!canProceedToStep3()}
                        className="px-8"
                        data-testid="button-next-step-2"
                      >
                        Continue
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Step 3: Additional Information */}
              {step === 3 && (
                <Card className="border-0 shadow-none">
                  <CardHeader className="text-center">
                    <CardTitle className="flex items-center justify-center gap-2">
                      <Sparkles className="w-5 h-5 text-primary-500" />
                      Almost Done!
                    </CardTitle>
                    <CardDescription>
                      Help us personalize your experience
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <FormField
                      control={form.control}
                      name="hearAbout"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>How did you hear about us? (Optional)</FormLabel>
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                            {[
                              "Google Search",
                              "Social Media",
                              "Friend/Family",
                              "Veterinarian",
                              "Online Ad",
                              "News Article",
                              "App Store",
                              "Other",
                            ].map((source) => (
                              <Button
                                key={source}
                                type="button"
                                variant={field.value === source ? "default" : "outline"}
                                onClick={() => field.onChange(source)}
                                className="text-sm"
                                data-testid={`button-source-${source.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                              >
                                {source}
                              </Button>
                            ))}
                          </div>
                        </FormItem>
                      )}
                    />

                    <div className="bg-muted/50 rounded-2xl p-6">
                      <h3 className="font-semibold mb-4 flex items-center gap-2">
                        <Gift className="w-5 h-5 text-primary-500" />
                        Your Free Trial Includes:
                      </h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-success-500" />
                          <span className="text-sm">30-day full access</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-success-500" />
                          <span className="text-sm">24/7 Dr. Paw AI</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-success-500" />
                          <span className="text-sm">Unlimited appointments</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-success-500" />
                          <span className="text-sm">Cancel anytime</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-between pt-4">
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => setStep(2)}
                        data-testid="button-back-step-3"
                      >
                        Back
                      </Button>
                      <Button
                        type="submit"
                        disabled={trialMutation.isPending}
                        className="px-8 bg-gradient-to-r from-primary-600 to-purple-600 text-white"
                        data-testid="button-start-trial"
                      >
                        {trialMutation.isPending ? (
                          "Starting Trial..."
                        ) : (
                          <>
                            Start My Free Trial
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </>
                        )}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Step 4: Success & Onboarding */}
              {step === 4 && isCompleted && (
                <Card className="border-0 shadow-none">
                  <CardContent className="text-center py-12">
                    <div className="w-20 h-20 bg-gradient-to-r from-success-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-foreground mb-4">
                      Welcome to Crest! 🎉
                    </h3>
                    <p className="text-lg text-muted-foreground mb-8">
                      Your free trial is now active. We've sent you a welcome email with everything you need to get started.
                    </p>

                    <div className="grid md:grid-cols-3 gap-6 mb-8 max-w-2xl mx-auto">
                      <div className="text-center space-y-3">
                        <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-2xl flex items-center justify-center mx-auto">
                          <MessageCircle className="w-6 h-6 text-primary-600" />
                        </div>
                        <h4 className="font-semibold">Chat with Dr. Paw</h4>
                        <p className="text-sm text-muted-foreground">Get instant answers about {form.getValues('petName')}'s health</p>
                      </div>
                      <div className="text-center space-y-3">
                        <div className="w-12 h-12 bg-success-100 dark:bg-success-900/30 rounded-2xl flex items-center justify-center mx-auto">
                          <Calendar className="w-6 h-6 text-success-600" />
                        </div>
                        <h4 className="font-semibold">Book Appointment</h4>
                        <p className="text-sm text-muted-foreground">Schedule your first discounted vet visit</p>
                      </div>
                      <div className="text-center space-y-3">
                        <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-2xl flex items-center justify-center mx-auto">
                          <Heart className="w-6 h-6 text-purple-600" />
                        </div>
                        <h4 className="font-semibold">Health Tracking</h4>
                        <p className="text-sm text-muted-foreground">Start monitoring {form.getValues('petName')}'s wellness</p>
                      </div>
                    </div>

                    <Button
                      onClick={handleClose}
                      className="px-8 bg-gradient-to-r from-primary-600 to-purple-600 text-white"
                      data-testid="button-get-started"
                    >
                      Get Started Now
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              )}
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}