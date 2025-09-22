import MobileHeader from '../MobileHeader';

export default function MobileHeaderExample() {
  return (
    <div className="space-y-4">
      <MobileHeader 
        title="Your Qubis" 
        showAdd={true} 
        showSettings={true} 
      />
      <MobileHeader 
        title="Connected Qubis" 
        showBack={true} 
      />
      <MobileHeader 
        title="Nearby Qubis" 
        showBack={true} 
        showScan={true} 
      />
    </div>
  );
}