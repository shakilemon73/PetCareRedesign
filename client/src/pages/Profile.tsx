import MobileHeader from '@/components/MobileHeader';
import UserProfile from '@/components/UserProfile';

export default function Profile() {
  return (
    <div className="min-h-screen bg-background">
      <MobileHeader title="Your profile" />
      
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