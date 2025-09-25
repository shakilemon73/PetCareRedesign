# Qubi Mobile App

## Overview

Qubi is a mobile-first quantum computing education application that bridges the gap between physical quantum devices and interactive learning. The app allows users to connect with physical Qubi devices (quantum hardware simulators), execute quantum circuits, and learn quantum computing concepts through hands-on experimentation. Built as a Progressive Web App using React, TypeScript, and modern UI components, Qubi emphasizes educational accessibility and emotional design principles to make quantum computing approachable for learners of all levels.

The application combines device management, quantum circuit execution, educational modules, and personalization features into a cohesive mobile learning platform designed around the metaphor of "shaking" physical devices to discover quantum properties.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Technology Stack**: React 18 with TypeScript, built using Vite for fast development and optimized production builds. The application uses Wouter for client-side routing, providing a lightweight alternative to React Router that's well-suited for mobile applications.

**Component Library**: Built on Radix UI primitives with shadcn/ui components, providing accessible, customizable UI components. The design system follows a mobile-first approach with Tailwind CSS for styling, implementing a custom color palette inspired by quantum physics themes (electric-indigo, ion-green, sky-blue, quantum-pink, helio-yellow, ember-orange).

**State Management**: Uses TanStack Query (React Query) for server state management, API caching, and synchronization. Local component state is managed with React hooks, with no global state management library needed due to the app's focused scope.

**Design Philosophy**: Implements Don Norman's design principles (discoverability, feedback, constraints, mapping), Steve Krug's usability principles (clarity, scannability), and Luke Wroblewski's mobile-first approach. The UI emphasizes emotional design with gradient backgrounds, smooth animations, and clear visual hierarchy.

### Backend Architecture

**Server Framework**: Express.js with TypeScript, providing a RESTful API structure. The server uses a modular approach with separate route handlers and storage interfaces for maintainability.

**Development Environment**: Includes hot module replacement (HMR) through Vite integration in development mode, with proper error handling and request logging middleware.

**Storage Interface**: Implements an abstract storage interface (IStorage) with an in-memory implementation for development. The interface is designed to be easily swappable with database implementations, supporting user management and quantum execution history.

**API Design**: RESTful endpoints prefixed with `/api`, following standard HTTP conventions. The server includes comprehensive error handling and request/response logging for debugging.

### Data Storage Solutions

**Database Setup**: Configured for PostgreSQL using Drizzle ORM for type-safe database operations. The schema includes user management with username/password authentication.

**Migration System**: Uses Drizzle Kit for database migrations, with configuration supporting both development and production environments through environment variables.

**Data Models**: Simple user schema with UUID primary keys, extensible for quantum execution history, device connections, and learning progress tracking.

### Authentication and Authorization

**User Management**: Basic username/password authentication system with user creation and retrieval capabilities. The system is designed to be extended with session management and more sophisticated authentication methods.

**Session Handling**: Configured for cookie-based sessions with PostgreSQL session storage through connect-pg-simple, providing secure session persistence.

### External Dependencies

**UI Components**: Extensive use of Radix UI primitives for accessible component foundations, including dialogs, dropdowns, navigation menus, and form controls.

**Styling System**: Tailwind CSS with custom configuration for the quantum-themed color palette, responsive design utilities, and mobile-optimized spacing scales.

**Charts and Visualization**: Recharts integration for quantum execution result visualization, particularly for displaying quantum measurement outcomes and circuit performance metrics.

**Mobile Optimization**: Custom hooks for mobile detection, touch-friendly component sizing (minimum 44px touch targets), and responsive design patterns optimized for mobile-first usage.

**Development Tools**: Comprehensive TypeScript configuration with path mapping for clean imports, ESLint integration, and Replit-specific development tooling for the cloud development environment.