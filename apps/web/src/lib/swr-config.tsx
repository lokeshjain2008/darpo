import { SWRConfig } from 'swr';

export function SwrProvider({ children }: { children: React.ReactNode }) {
  return (
    <SWRConfig
      value={{
        revalidateOnFocus: false,
        errorRetryCount: 2,
      }}
    >
      {children}
    </SWRConfig>
  );
}