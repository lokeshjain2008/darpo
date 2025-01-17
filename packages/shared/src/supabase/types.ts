export type Profile = {
  id: string;
  full_name: string | null;
  phone_number: string | null;
  is_phone_verified: boolean;
  updated_at: string;
  created_at: string;
}

export type Database = {
  public: {
    Tables: {
      profiles: {
        Row: Profile;
        Insert: Omit<Profile, 'created_at' | 'updated_at'>;
        Update: Partial<Omit<Profile, 'id' | 'created_at' | 'updated_at'>>;
      };
    };
  };
}