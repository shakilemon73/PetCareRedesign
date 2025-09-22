import QuantumExecutionCard from '../QuantumExecutionCard';

export default function QuantumExecutionCardExample() {
  return (
    <div className="space-y-4 p-4">
      <QuantumExecutionCard
        lastShake="IBM Hanoi"
        quantumComputer="IBM Hanoi"
        qubits={32}
        hasPendingCircuit={true}
      />
    </div>
  );
}