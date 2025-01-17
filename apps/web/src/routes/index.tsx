import { createBrowserRouter } from 'react-router-dom';
import { LoginPage } from '@/features/auth/routes/Login';
import { DashboardPage } from '@/features/dashboard/routes/Dashboard';
import { AuthGuard } from '@/features/auth/components/AuthGuard';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <LoginPage />
  },
  {
    path: '/dashboard',
    element: (
      <AuthGuard>
        <DashboardPage />
      </AuthGuard>
    )
  }
]);
