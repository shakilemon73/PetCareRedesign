import QubiDevice from '../QubiDevice';

export default function QubiDeviceExample() {
  return (
    <div className="space-y-4 p-4">
      <QubiDevice 
        name="Qubi v1" 
        version="1.2.3" 
        batteryLevel={90} 
        isConnected={true} 
      />
      <QubiDevice 
        name="Qubi v2" 
        version="2.1.0" 
        batteryLevel={25} 
        isConnected={false} 
      />
    </div>
  );
}