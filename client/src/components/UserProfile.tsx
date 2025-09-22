import { useLocation } from 'wouter';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { ChevronRight, History, Settings, Info } from 'lucide-react';

interface ProfileMenuItem {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  onClick?: () => void;
}

interface UserProfileProps {
  name: string;
  email: string;
  avatarUrl?: string;
  themesUnlocked: number;
  totalThemes: number;
  themePreviewColors?: string[];
  onThemeCollection?: () => void;
  onMenuItemClick?: (itemId: string) => void;
}

const profileMenuItems: ProfileMenuItem[] = [
  {
    id: 'execution-history',
    title: 'Execution history',
    subtitle: 'See all your quantum computer runs.',
    icon: <History className="h-5 w-5" />
  },
  {
    id: 'settings',
    title: 'Default Qubi settings',
    subtitle: 'Adjust everything.',
    icon: <Settings className="h-5 w-5" />
  },
  {
    id: 'about',
    title: 'About Qubi',
    subtitle: 'Learn about how Qubi came to be.',
    icon: <Info className="h-5 w-5" />
  },
  {
    id: 'learn-more',
    title: 'Learn more quantum',
    subtitle: 'Learning resources, events, and communities at qolour.io.',
    icon: <Info className="h-5 w-5" />
  }
];

export default function UserProfile({
  name,
  email,
  avatarUrl,
  themesUnlocked,
  totalThemes,
  themePreviewColors = ['#6931F4', '#1B9CFC', '#2ADBB9', '#F3CF25'],
  onThemeCollection,
  onMenuItemClick
}: UserProfileProps) {
  const [, setLocation] = useLocation();
  
  const handleThemeCollection = onThemeCollection || (() => setLocation('/themes'));
  const handleMenuItemClick = onMenuItemClick || ((itemId) => {
    switch(itemId) {
      case 'execution-history':
        setLocation('/history');
        break;
      case 'settings':
        setLocation('/settings');
        break;
      case 'about':
        console.log('Navigate to Qolour website');
        break;
      case 'learn-more':
        console.log('Navigate to Qolour learning resources');
        break;
    }
  });
  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  return (
    <div className="space-y-6">
      {/* Profile Header */}
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center space-x-4">
            <Avatar className="w-16 h-16">
              {avatarUrl && <AvatarImage src={avatarUrl} alt={name} />}
              <AvatarFallback className="bg-gradient-to-br from-electric-indigo to-ion-green text-white text-xl font-semibold">
                {getInitials(name)}
              </AvatarFallback>
            </Avatar>
            
            <div className="flex-1">
              <h2 className="font-semibold text-xl mb-1" data-testid="text-user-name">
                {name}
              </h2>
              <p className="text-muted-foreground" data-testid="text-user-email">
                {email}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
      
      {/* Theme Collection */}
      <Card className="hover-elevate cursor-pointer" onClick={onThemeCollection}>
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <h3 className="font-semibold">Your theme collection</h3>
                <Badge variant="outline">
                  {themesUnlocked}/{totalThemes}
                </Badge>
              </div>
              
              {/* Theme Preview */}
              <div className="flex space-x-1">
                {themePreviewColors.slice(0, 4).map((color, index) => (
                  <div
                    key={index}
                    className="w-6 h-6 rounded-full border-2 border-background"
                    style={{ backgroundColor: color }}
                  />
                ))}
                {themePreviewColors.length > 4 && (
                  <div className="w-6 h-6 rounded-full bg-muted border-2 border-background flex items-center justify-center">
                    <span className="text-xs font-medium">+{themePreviewColors.length - 4}</span>
                  </div>
                )}
              </div>
            </div>
            
            <ChevronRight className="h-5 w-5 text-muted-foreground" />
          </div>
        </CardContent>
      </Card>
      
      {/* Menu Items */}
      <div className="space-y-2">
        {profileMenuItems.map((item) => (
          <Card 
            key={item.id} 
            className="hover-elevate cursor-pointer"
            onClick={() => onMenuItemClick(item.id)}
          >
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="text-muted-foreground">
                    {item.icon}
                  </div>
                  
                  <div>
                    <h3 className="font-semibold mb-1" data-testid={`text-menu-${item.id}`}>
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
                
                <ChevronRight className="h-5 w-5 text-muted-foreground" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}