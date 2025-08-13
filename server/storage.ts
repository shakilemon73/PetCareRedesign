import { 
  type User, 
  type InsertUser, 
  type WaitlistEntry, 
  type InsertWaitlistEntry,
  type AiChatSession,
  type InsertChatSession
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
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private waitlistEntries: Map<string, WaitlistEntry>;
  private chatSessions: Map<string, AiChatSession>;

  constructor() {
    this.users = new Map();
    this.waitlistEntries = new Map();
    this.chatSessions = new Map();
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
}

export const storage = new MemStorage();
