import { Button } from '@/components/ui/button';
import { useAuth } from '../hooks/useAuth';

export function GoogleSignIn() {
  const { signInWithGoogle } = useAuth();

  return (
    <Button 
      onClick={signInWithGoogle}
      variant="outline"
      className="w-full"
    >
      Sign in with Google
    </Button>
  );
}