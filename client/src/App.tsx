import { useState } from 'react';
import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import MobileNavigation from "@/components/MobileNavigation";

// Import pages
import Dashboard from "@/pages/Dashboard";
import DeviceScanning from "@/pages/DeviceScanning";
import Learning from "@/pages/Learning";
import Profile from "@/pages/Profile";
import Themes from "@/pages/Themes";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Dashboard} />
      <Route path="/scan" component={DeviceScanning} />
      <Route path="/learn" component={Learning} />
      <Route path="/profile" component={Profile} />
      <Route path="/themes" component={Themes} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const [currentTab, setCurrentTab] = useState('qubis');

  const handleTabChange = (tabId: string) => {
    setCurrentTab(tabId);
    
    // Navigate to the appropriate route
    switch(tabId) {
      case 'qubis':
        window.location.href = '/';
        break;
      case 'learn':
        window.location.href = '/learn';
        break;
      case 'profile':
        window.location.href = '/profile';
        break;
    }
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="min-h-screen bg-background relative pb-20">
          <Router />
          <MobileNavigation currentTab={currentTab} onTabChange={handleTabChange} />
        </div>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
