import { useState, useEffect } from "react";
import { Calendar, Clock, User, Mail, Phone, Heart, FileText, CheckCircle, ArrowRight, X } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { insertAppointmentSchema } from "@shared/schema";
import { z } from "zod";

const appointmentSchema = insertAppointmentSchema.extend({
  appointmentDate: z.date(),
  appointmentTime: z.string(),
}).extend({
  petAge: z.string().optional(),
  petBreed: z.string().optional(),
  ownerPhone: z.string().optional(),
  symptoms: z.string().optional(),
  notes: z.string().optional(),
});

type AppointmentFormData = z.infer<typeof appointmentSchema>;

interface AppointmentBookingProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AppointmentBooking({ isOpen, onClose }: AppointmentBookingProps) {
  const [step, setStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const form = useForm<AppointmentFormData>({
    resolver: zodResolver(appointmentSchema),
    defaultValues: {
      petName: "",
      petAge: "",
      petBreed: "",
      ownerName: "",
      ownerEmail: "",
      ownerPhone: "",
      appointmentType: "wellness" as const,
      symptoms: "",
      notes: "",
    },
  });

  // Get available time slots for selected date
  const { data: slotsData, isLoading: slotsLoading } = useQuery({
    queryKey: ['/api/appointments/slots', selectedDate?.toISOString().split('T')[0]],
    enabled: !!selectedDate,
  });

  const availableSlots: string[] = (slotsData as { availableSlots?: string[] })?.availableSlots || [];

  const appointmentMutation = useMutation({
    mutationFn: async (data: AppointmentFormData) => {
      const appointmentDateTime = new Date(selectedDate!);
      const [hours, minutes] = selectedTime.split(':');
      appointmentDateTime.setHours(parseInt(hours), parseInt(minutes));

      const response = await fetch('/api/appointments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...data,
          appointmentDate: appointmentDateTime.toISOString(),
        }),
      });
      
      if (!response.ok) {
        throw new Error('Failed to create appointment');
      }
      
      return response.json();
    },
    onSuccess: () => {
      setIsSubmitted(true);
      setStep(4);
      queryClient.invalidateQueries({ queryKey: ['/api/appointments'] });
      toast({
        title: "Appointment Booked!",
        description: "Your appointment has been successfully scheduled.",
      });
    },
    onError: () => {
      toast({
        title: "Booking Failed",
        description: "Failed to book appointment. Please try again.",
        variant: "destructive",
      });
    }
  });

  const onSubmit = (data: AppointmentFormData) => {
    if (!selectedDate || !selectedTime) {
      toast({
        title: "Missing Information",
        description: "Please select a date and time for your appointment.",
        variant: "destructive",
      });
      return;
    }
    appointmentMutation.mutate(data);
  };

  const handleDateSelect = (date: Date | undefined) => {
    setSelectedDate(date);
    setSelectedTime("");
    if (date) {
      setStep(2);
    }
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
    setStep(3);
  };

  const handleClose = () => {
    setStep(1);
    setSelectedDate(undefined);
    setSelectedTime("");
    setIsSubmitted(false);
    form.reset();
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-background border border-border rounded-3xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-background border-b border-border rounded-t-3xl z-10">
          <div className="flex items-center justify-between p-6">
            <div>
              <h2 className="text-2xl font-bold text-foreground">Book Appointment</h2>
              <p className="text-muted-foreground">Schedule a visit with our veterinary team</p>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleClose}
              className="rounded-full"
              data-testid="button-close-booking"
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
                  {stepNum === 4 && isSubmitted ? (
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

          {/* Step 1: Select Date */}
          {step === 1 && (
            <Card className="border-0 shadow-none">
              <CardHeader className="text-center">
                <CardTitle className="flex items-center justify-center gap-2">
                  <Calendar className="w-5 h-5 text-primary-500" />
                  Select Appointment Date
                </CardTitle>
                <CardDescription>
                  Choose your preferred date for the appointment
                </CardDescription>
              </CardHeader>
              <CardContent className="flex justify-center">
                <CalendarComponent
                  mode="single"
                  selected={selectedDate}
                  onSelect={handleDateSelect}
                  disabled={(date) =>
                    date < new Date() || date.getDay() === 0 || date.getDay() === 6
                  }
                  className="rounded-2xl border"
                  data-testid="calendar-date-picker"
                />
              </CardContent>
            </Card>
          )}

          {/* Step 2: Select Time */}
          {step === 2 && selectedDate && (
            <Card className="border-0 shadow-none">
              <CardHeader className="text-center">
                <CardTitle className="flex items-center justify-center gap-2">
                  <Clock className="w-5 h-5 text-primary-500" />
                  Select Time
                </CardTitle>
                <CardDescription>
                  Available slots for {selectedDate.toLocaleDateString()}
                </CardDescription>
              </CardHeader>
              <CardContent>
                {slotsLoading ? (
                  <div className="flex justify-center p-8">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-500"></div>
                  </div>
                ) : availableSlots.length === 0 ? (
                  <div className="text-center py-8">
                    <p className="text-muted-foreground">No available slots for this date</p>
                    <Button
                      variant="outline"
                      onClick={() => setStep(1)}
                      className="mt-4"
                      data-testid="button-back-to-date"
                    >
                      Choose Different Date
                    </Button>
                  </div>
                ) : (
                  <div className="grid grid-cols-3 gap-3 max-w-md mx-auto">
                    {availableSlots.map((time) => (
                      <Button
                        key={time}
                        variant={selectedTime === time ? "default" : "outline"}
                        onClick={() => handleTimeSelect(time)}
                        className="p-4 text-center"
                        data-testid={`button-time-${time}`}
                      >
                        {time}
                      </Button>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          )}

          {/* Step 3: Appointment Details */}
          {step === 3 && (
            <Card className="border-0 shadow-none">
              <CardHeader className="text-center">
                <CardTitle className="flex items-center justify-center gap-2">
                  <Heart className="w-5 h-5 text-primary-500" />
                  Appointment Details
                </CardTitle>
                <CardDescription>
                  {selectedDate?.toLocaleDateString()} at {selectedTime}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      {/* Pet Information */}
                      <div className="space-y-4">
                        <h3 className="font-semibold text-lg flex items-center gap-2">
                          <Heart className="w-4 h-4" />
                          Pet Information
                        </h3>
                        
                        <FormField
                          control={form.control}
                          name="petName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Pet Name *</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="Enter pet's name"
                                  {...field}
                                  data-testid="input-pet-name"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="petAge"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Pet Age</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="e.g., 3 years, 8 months"
                                  {...field}
                                  data-testid="input-pet-age"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="petBreed"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Breed</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="e.g., Golden Retriever, Mixed"
                                  {...field}
                                  data-testid="input-pet-breed"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      {/* Owner Information */}
                      <div className="space-y-4">
                        <h3 className="font-semibold text-lg flex items-center gap-2">
                          <User className="w-4 h-4" />
                          Your Information
                        </h3>
                        
                        <FormField
                          control={form.control}
                          name="ownerName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Full Name *</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="Enter your full name"
                                  {...field}
                                  data-testid="input-owner-name"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="ownerEmail"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email *</FormLabel>
                              <FormControl>
                                <Input
                                  type="email"
                                  placeholder="your.email@example.com"
                                  {...field}
                                  data-testid="input-owner-email"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="ownerPhone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Phone Number</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="(555) 123-4567"
                                  {...field}
                                  data-testid="input-owner-phone"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>

                    {/* Appointment Type */}
                    <FormField
                      control={form.control}
                      name="appointmentType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Appointment Type *</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger data-testid="select-appointment-type">
                                <SelectValue placeholder="Select appointment type" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="wellness">Wellness Check</SelectItem>
                              <SelectItem value="urgent">Urgent Care</SelectItem>
                              <SelectItem value="follow-up">Follow-up Visit</SelectItem>
                              <SelectItem value="emergency">Emergency</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Symptoms */}
                    <FormField
                      control={form.control}
                      name="symptoms"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Symptoms or Concerns</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Describe any symptoms or concerns you have about your pet..."
                              className="min-h-[100px]"
                              {...field}
                              data-testid="textarea-symptoms"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Additional Notes */}
                    <FormField
                      control={form.control}
                      name="notes"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Additional Notes</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Any other information you'd like to share..."
                              className="min-h-[80px]"
                              {...field}
                              data-testid="textarea-notes"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="flex justify-between pt-4">
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => setStep(2)}
                        data-testid="button-back-to-time"
                      >
                        Back
                      </Button>
                      <Button
                        type="submit"
                        disabled={appointmentMutation.isPending}
                        className="px-8"
                        data-testid="button-book-appointment"
                      >
                        {appointmentMutation.isPending ? (
                          "Booking..."
                        ) : (
                          <>
                            Book Appointment
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </>
                        )}
                      </Button>
                    </div>
                  </form>
                </Form>
              </CardContent>
            </Card>
          )}

          {/* Step 4: Confirmation */}
          {step === 4 && isSubmitted && (
            <Card className="border-0 shadow-none">
              <CardContent className="text-center py-12">
                <div className="w-16 h-16 bg-success-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  Appointment Confirmed!
                </h3>
                <p className="text-muted-foreground mb-6">
                  Your appointment has been successfully scheduled for{" "}
                  <span className="font-semibold">
                    {selectedDate?.toLocaleDateString()} at {selectedTime}
                  </span>
                </p>
                <div className="bg-muted/50 rounded-2xl p-6 mb-6 max-w-md mx-auto">
                  <p className="text-sm text-muted-foreground mb-2">
                    We'll send a confirmation email with appointment details and preparation instructions.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    If you need to reschedule, please call us at least 24 hours in advance.
                  </p>
                </div>
                <Button
                  onClick={handleClose}
                  className="px-8"
                  data-testid="button-close-confirmation"
                >
                  Close
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}