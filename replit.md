# Overview

This is a next-generation pet care platform called "Crest" that combines AI-powered veterinary assistance, dynamic pricing, and seamless appointment booking. The platform serves two primary user types: pet parents and veterinarians, with a focus on making pet healthcare accessible, affordable, and stress-free. The application features a modern React frontend with a dual-platform design, Express.js backend with REST APIs, and PostgreSQL database with Drizzle ORM for data management.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **React 18** with TypeScript for the main UI framework
- **Vite** as the build tool and development server
- **Tailwind CSS** with custom design system for styling
- **shadcn/ui** components for consistent UI elements
- **Wouter** for client-side routing
- **TanStack Query** for server state management
- **Zustand** for local state management (platform switching)
- **Mobile-first responsive design** that scales gracefully to desktop

## Backend Architecture  
- **Express.js** server with TypeScript
- **REST API** endpoints for waitlist management and AI chat sessions
- **Memory storage** implementation with interface for future database integration
- **Middleware** for request logging and error handling
- **CORS and security** headers for production deployment

## Database Design
- **PostgreSQL** as the primary database
- **Drizzle ORM** for type-safe database operations and schema management
- **Neon Database** serverless PostgreSQL hosting
- **Three main entities**: users, waitlist entries, and AI chat sessions
- **UUID primary keys** for all tables
- **Zod schemas** for runtime validation

## Authentication & Authorization
- Currently using basic session-based structure
- HIPAA-compliant architecture prepared
- User type differentiation (pet_parent vs veterinarian)
- Secure session management with PostgreSQL session store

## AI Integration
- AI-powered veterinary assistant ("Dr. Paw")
- Chat session management for AI interactions
- Emergency triage and guidance capabilities
- 24/7 availability for pet health questions

## Dynamic Pricing System
- Real-time pricing comparison display
- Savings calculation up to 80% off traditional vet costs
- Partner clinic integration for appointment booking
- Transparent cost structure with no membership fees

## Platform Duality
- Dual-platform design serving both pet parents and veterinarians
- Platform toggle component for seamless switching
- Separate navigation, hero sections, and feature sets
- Shared components for common functionality (trust indicators, footer)

## UI/UX Design Principles
- Gen-Z friendly tone with modern, lighthearted voice
- Trust-centric visual cues and reassurance messaging
- Mobile-first approach with fluid desktop scaling
- High-contrast design with accessibility considerations
- Comprehensive component library using Radix UI primitives

# External Dependencies

## Database & Infrastructure
- **Neon Database** - Serverless PostgreSQL hosting
- **Drizzle Kit** - Database migrations and schema management

## Frontend Libraries
- **Radix UI** - Accessible UI component primitives
- **Lucide React** - Icon system
- **React Hook Form** - Form handling and validation
- **Date-fns** - Date manipulation utilities
- **Embla Carousel** - Carousel/slider functionality

## Development Tools
- **TypeScript** - Type safety across the entire stack
- **ESBuild** - Fast JavaScript bundling for production
- **PostCSS** - CSS processing with Tailwind
- **Replit** - Development environment and deployment platform

## Validation & Schemas
- **Zod** - Runtime type validation
- **Drizzle-Zod** - Integration between Drizzle ORM and Zod schemas

## External APIs (Planned)
- AI/ML services for veterinary assistance
- Payment processing for appointment booking
- SMS/Email notifications for appointment reminders
- Geolocation services for finding nearby clinics