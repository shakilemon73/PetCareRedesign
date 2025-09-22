import DeviceScanCard from '../DeviceScanCard';

export default function DeviceScanCardExample() {
  return (
    <div className="space-y-4 p-4">
      <DeviceScanCard
        id="qubi-v1-001"
        name="Qubi v1"
        version="1.2.3"
        batteryLevel={90}
        signalStrength={85}
      />
      <DeviceScanCard
        id="qubi-v2-002"
        name="Qubi v2"
        version="2.1.0"
        batteryLevel={20}
        signalStrength={65}
        isEntangled={true}
      />
      <DeviceScanCard
        id="qubi-v1-003"
        name="Qubi v1"
        version="1.2.3"
        batteryLevel={55}
        signalStrength={45}
      />
    </div>
  );
}