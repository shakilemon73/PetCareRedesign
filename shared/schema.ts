import { sql } from "drizzle-orm";
import { pgTable, text, varchar, timestamp, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  email: text("email").notNull().unique(),
  password: text("password").notNull(),
  userType: text("user_type").notNull().default("pet_parent"), // 'pet_parent' or 'veterinarian'
  createdAt: timestamp("created_at").defaultNow(),
});

export const waitlistEntries = pgTable("waitlist_entries", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  email: text("email").notNull(),
  userType: text("user_type").notNull(), // 'pet_parent' or 'veterinarian'
  practiceType: text("practice_type"), // For veterinarians
  message: text("message"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const aiChatSessions = pgTable("ai_chat_sessions", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  userId: varchar("user_id"),
  sessionData: text("session_data"), // JSON string
  isActive: boolean("is_active").default(true),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  email: true,
  password: true,
  userType: true,
});

export const insertWaitlistSchema = createInsertSchema(waitlistEntries).pick({
  email: true,
  userType: true,
  practiceType: true,
  message: true,
});

export const insertChatSessionSchema = createInsertSchema(aiChatSessions).pick({
  userId: true,
  sessionData: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type InsertWaitlistEntry = z.infer<typeof insertWaitlistSchema>;
export type WaitlistEntry = typeof waitlistEntries.$inferSelect;
export type InsertChatSession = z.infer<typeof insertChatSessionSchema>;
export type AiChatSession = typeof aiChatSessions.$inferSelect;
