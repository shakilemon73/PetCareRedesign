import { useState, useEffect } from 'react';
import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import MobileNavigation from "@/components/MobileNavigation";

// Import all pages
import Dashboard from "@/pages/Dashboard";
import DeviceScanning from "@/pages/DeviceScanning";
import Learning from "@/pages/Learning";
import LearnChapter from "@/pages/LearnChapter";
import LearnLesson from "@/pages/LearnLesson";
import Profile from "@/pages/Profile";
import Themes from "@/pages/Themes";
import Settings from "@/pages/Settings";
import History from "@/pages/History";
import ExecutionDetails from "@/pages/ExecutionDetails";
import QuantumComputers from "@/pages/QuantumComputers";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Dashboard} />
      <Route path="/scan" component={DeviceScanning} />
      <Route path="/learn" component={Learning} />
      <Route path="/learn/:chapterId/:lessonId" component={LearnLesson} />
      <Route path="/learn/:chapterId" component={LearnChapter} />
      <Route path="/profile" component={Profile} />
      <Route path="/themes" component={Themes} />
      <Route path="/settings" component={Settings} />
      <Route path="/history" component={History} />
      <Route path="/execution/:id" component={ExecutionDetails} />
      <Route path="/quantum-computers" component={QuantumComputers} />
      <Route component={NotFound} />
    </Switch>
  );
}

function AppContent() {
  const [location] = useLocation();
  const [currentTab, setCurrentTab] = useState('qubis');

  // Update current tab based on current route
  useEffect(() => {
    if (location === '/' || location.startsWith('/scan') || location.startsWith('/settings') || location.startsWith('/history') || location.startsWith('/execution') || location.startsWith('/quantum-computers')) {
      setCurrentTab('qubis');
    } else if (location.startsWith('/learn')) {
      setCurrentTab('learn');
    } else if (location.startsWith('/profile') || location.startsWith('/themes')) {
      setCurrentTab('profile');
    }
  }, [location]);

  // Show navigation on main tabs only
  const showNavigation = !location.includes('/settings') && 
                         !location.includes('/history') && 
                         !location.includes('/execution') && 
                         !location.includes('/scan') &&
                         !location.includes('/themes') &&
                         !location.includes('/quantum-computers') &&
                         !location.includes('/learn/');

  return (
    <div className="min-h-screen bg-background relative">
      <Router />
      {showNavigation && (
        <MobileNavigation currentTab={currentTab} onTabChange={() => {}} />
      )}
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <AppContent />
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
