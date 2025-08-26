import { 
  type User, 
  type InsertUser, 
  type WaitlistEntry, 
  type InsertWaitlistEntry,
  type AiChatSession,
  type InsertChatSession,
  type Appointment,
  type InsertAppointment
} from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createWaitlistEntry(entry: InsertWaitlistEntry): Promise<WaitlistEntry>;
  getWaitlistStats(): Promise<{ total: number; petParents: number; veterinarians: number }>;
  createChatSession(session: InsertChatSession): Promise<AiChatSession>;
  getChatSession(id: string): Promise<AiChatSession | undefined>;
  createAppointment(appointment: InsertAppointment): Promise<Appointment>;
  getAppointments(): Promise<Appointment[]>;
  getAppointment(id: string): Promise<Appointment | undefined>;
  updateAppointmentStatus(id: string, status: string): Promise<Appointment | undefined>;
  getAvailableTimeSlots(date: string): Promise<string[]>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private waitlistEntries: Map<string, WaitlistEntry>;
  private chatSessions: Map<string, AiChatSession>;
  private appointments: Map<string, Appointment>;

  constructor() {
    this.users = new Map();
    this.waitlistEntries = new Map();
    this.chatSessions = new Map();
    this.appointments = new Map();
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { 
      ...insertUser, 
      id,
      userType: insertUser.userType || 'pet_parent',
      createdAt: new Date()
    };
    this.users.set(id, user);
    return user;
  }

  async createWaitlistEntry(insertEntry: InsertWaitlistEntry): Promise<WaitlistEntry> {
    const id = randomUUID();
    const entry: WaitlistEntry = {
      ...insertEntry,
      id,
      practiceType: insertEntry.practiceType || null,
      message: insertEntry.message || null,
      createdAt: new Date()
    };
    this.waitlistEntries.set(id, entry);
    return entry;
  }

  async getWaitlistStats(): Promise<{ total: number; petParents: number; veterinarians: number }> {
    const entries = Array.from(this.waitlistEntries.values());
    const total = entries.length;
    const petParents = entries.filter(e => e.userType === 'pet_parent').length;
    const veterinarians = entries.filter(e => e.userType === 'veterinarian').length;
    
    return { total, petParents, veterinarians };
  }

  async createChatSession(insertSession: InsertChatSession): Promise<AiChatSession> {
    const id = randomUUID();
    const session: AiChatSession = {
      ...insertSession,
      id,
      userId: insertSession.userId || null,
      sessionData: insertSession.sessionData || null,
      isActive: true,
      createdAt: new Date()
    };
    this.chatSessions.set(id, session);
    return session;
  }

  async getChatSession(id: string): Promise<AiChatSession | undefined> {
    return this.chatSessions.get(id);
  }

  async createAppointment(insertAppointment: InsertAppointment): Promise<Appointment> {
    const id = randomUUID();
    const appointment: Appointment = {
      ...insertAppointment,
      id,
      petAge: insertAppointment.petAge || null,
      petBreed: insertAppointment.petBreed || null,
      ownerPhone: insertAppointment.ownerPhone || null,
      symptoms: insertAppointment.symptoms || null,
      notes: insertAppointment.notes || null,
      status: "scheduled",
      veterinarianId: null,
      createdAt: new Date()
    };
    this.appointments.set(id, appointment);
    return appointment;
  }

  async getAppointments(): Promise<Appointment[]> {
    return Array.from(this.appointments.values());
  }

  async getAppointment(id: string): Promise<Appointment | undefined> {
    return this.appointments.get(id);
  }

  async updateAppointmentStatus(id: string, status: string): Promise<Appointment | undefined> {
    const appointment = this.appointments.get(id);
    if (appointment) {
      const updatedAppointment = { ...appointment, status };
      this.appointments.set(id, updatedAppointment);
      return updatedAppointment;
    }
    return undefined;
  }

  async getAvailableTimeSlots(date: string): Promise<string[]> {
    // Get existing appointments for the date
    const appointmentsForDate = Array.from(this.appointments.values())
      .filter(apt => apt.appointmentDate.toDateString() === new Date(date).toDateString());
    
    // Generate available slots (9 AM to 5 PM, every hour)
    const allSlots = [
      "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00"
    ];
    
    // Remove booked slots
    const bookedSlots = appointmentsForDate.map(apt => 
      apt.appointmentDate.toTimeString().slice(0, 5)
    );
    
    return allSlots.filter(slot => !bookedSlots.includes(slot));
  }
}

export const storage = new MemStorage();
