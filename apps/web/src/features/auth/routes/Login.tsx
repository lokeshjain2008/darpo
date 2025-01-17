import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { GoogleSignIn } from '../components/GoogleSignIn';

export function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold">Welcome to Darpo</CardTitle>
          <CardDescription>
            Hotel Management System
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <GoogleSignIn />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
