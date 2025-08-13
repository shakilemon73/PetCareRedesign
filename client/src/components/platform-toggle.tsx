import { usePlatform } from "@/hooks/use-platform";

export default function PlatformToggle() {
  const { currentPlatform, setPlatform } = usePlatform();

  return (
    <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
      <div className="bg-white rounded-full p-1 shadow-lg border">
        <div className="flex space-x-1">
          <button
            data-testid="button-pet-platform"
            onClick={() => setPlatform('pet')}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              currentPlatform === 'pet'
                ? 'bg-primary-500 text-white'
                : 'text-gray-600 hover:text-gray-800'
            }`}
          >
            <i className="fas fa-heart mr-2"></i>Pet Parents
          </button>
          <button
            data-testid="button-vet-platform"
            onClick={() => setPlatform('vet')}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              currentPlatform === 'vet'
                ? 'bg-primary-500 text-white'
                : 'text-gray-600 hover:text-gray-800'
            }`}
          >
            <i className="fas fa-stethoscope mr-2"></i>Veterinarians
          </button>
        </div>
      </div>
    </div>
  );
}
