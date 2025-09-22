import MobileNavigation from '../MobileNavigation';

export default function MobileNavigationExample() {
  return (
    <div className="h-screen bg-background relative">
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-4">Page Content</h2>
        <p className="text-muted-foreground">This is where the main content would go.</p>
      </div>
      <MobileNavigation currentTab="qubis" />
    </div>
  );
}