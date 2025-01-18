import useSWR from 'swr';
import { supabase } from '@/lib/supabase';
import { useCallback } from 'react';

const fetchUser = async () => {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return null;

  const { data: profile } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', user.id)
    .single();

  return profile;
};

export function useAuth() {
  const { data: user, error, mutate } = useSWR('auth-user', fetchUser);

  const signInWithGoogle = useCallback(async () => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: `${window.location.origin}/auth/callback`
        }
      });
      if (error) throw error;
    } catch (error) {
      console.error('Error signing in:', error);
      throw error;
    }
  }, []);

  const signOut = useCallback(async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      await mutate(null);
    } catch (error) {
      console.error('Error signing out:', error);
      throw error;
    }
  }, [mutate]);

  return {
    user,
    error,
    isLoading: !error && !user,
    signInWithGoogle,
    signOut
  };
}