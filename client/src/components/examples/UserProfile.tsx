import UserProfile from '../UserProfile';

export default function UserProfileExample() {
  return (
    <div className="p-4">
      <UserProfile
        name="Bucky Ozdemir"
        email="bucky@qolour.io"
        themesUnlocked={10}
        totalThemes={20}
        themePreviewColors={['#6931F4', '#1B9CFC', '#2ADBB9', '#F3CF25', '#ED3781', '#F46A1E']}
      />
    </div>
  );
}