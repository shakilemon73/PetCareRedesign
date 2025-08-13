import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertWaitlistSchema, insertChatSessionSchema } from "@shared/schema";
import { zodResolver } from "@hookform/resolvers/zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Waitlist endpoints
  app.post("/api/waitlist", async (req, res) => {
    try {
      const validatedData = insertWaitlistSchema.parse(req.body);
      const entry = await storage.createWaitlistEntry(validatedData);
      res.json({ success: true, entry });
    } catch (error) {
      res.status(400).json({ 
        success: false, 
        error: error instanceof Error ? error.message : "Invalid data" 
      });
    }
  });

  app.get("/api/waitlist/stats", async (req, res) => {
    try {
      const stats = await storage.getWaitlistStats();
      res.json(stats);
    } catch (error) {
      res.status(500).json({ 
        error: error instanceof Error ? error.message : "Failed to get stats" 
      });
    }
  });

  // AI Chat session endpoints
  app.post("/api/chat/session", async (req, res) => {
    try {
      const validatedData = insertChatSessionSchema.parse(req.body);
      const session = await storage.createChatSession(validatedData);
      res.json({ success: true, session });
    } catch (error) {
      res.status(400).json({ 
        success: false, 
        error: error instanceof Error ? error.message : "Invalid session data" 
      });
    }
  });

  app.get("/api/chat/session/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const session = await storage.getChatSession(id);
      if (!session) {
        return res.status(404).json({ error: "Session not found" });
      }
      res.json(session);
    } catch (error) {
      res.status(500).json({ 
        error: error instanceof Error ? error.message : "Failed to get session" 
      });
    }
  });

  // Mock AI response endpoint
  app.post("/api/ai/chat", async (req, res) => {
    try {
      const { message, sessionId } = req.body;
      
      // Simple mock AI responses based on keywords
      let response = "I understand your concern. Let me help you with that.";
      
      if (message.toLowerCase().includes("limp")) {
        response = "I understand your concern about limping. Let me ask a few questions to help assess the situation:\n\n1. When did you first notice the limping?\n2. Is your pet putting any weight on the affected limb?\n3. Any visible swelling or cuts?";
      } else if (message.toLowerCase().includes("emergency")) {
        response = "This sounds like it could be urgent. Based on what you're describing, I recommend contacting an emergency veterinary clinic immediately. Would you like me to help you find the nearest emergency clinic?";
      } else if (message.toLowerCase().includes("appointment")) {
        response = "I can help you schedule an appointment. Let me check our available slots with nearby veterinarians. What type of visit do you need - wellness check, specific concern, or follow-up?";
      }

      res.json({ 
        success: true, 
        response,
        timestamp: new Date().toISOString()
      });
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        error: error instanceof Error ? error.message : "AI response failed" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
