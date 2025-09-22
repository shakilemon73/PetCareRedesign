import MobileHeader from '@/components/MobileHeader';
import UserProfile from '@/components/UserProfile';

export default function Profile() {
  return (
    <div className="min-h-screen bg-background">
      <MobileHeader title="Your profile" />
      
      {/* Enhanced Hero Section - Emotional Design */}
      <div className="bg-gradient-to-r from-electric-indigo/5 via-quantum-pink/5 to-ion-green/5 px-4 py-6">
        <div className="max-w-md mx-auto text-center">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-electric-indigo/20 to-quantum-pink/20 flex items-center justify-center mx-auto mb-4">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-electric-indigo to-quantum-pink" />
          </div>
          <h1 className="text-xl font-bold bg-gradient-to-r from-electric-indigo to-quantum-pink bg-clip-text text-transparent mb-2" data-testid="text-profile-title">
            Quantum Profile
          </h1>
          <p className="text-sm text-muted-foreground">
            Your quantum computing journey • Personalized experience
          </p>
        </div>
      </div>
      
      <div className="p-4 pb-20 max-w-md mx-auto">
        <UserProfile
          name="Bucky Ozdemir"
          email="bucky@qolour.io"
          themesUnlocked={10}
          totalThemes={20}
          themePreviewColors={['#6931F4', '#1B9CFC', '#2ADBB9', '#F3CF25', '#ED3781', '#F46A1E']}
        />
      </div>
    </div>
  );
}