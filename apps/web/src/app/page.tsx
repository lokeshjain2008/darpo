import { formatCurrency, formatDate } from 'shared/src/utils';

export default function Home() {
  const amount = 1234.56;
  const today = new Date();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">Darpo - Hotel Management</h1>
        
        <div className="p-4 bg-gray-100 rounded-lg">
          <h2 className="text-xl font-semibold">Testing Shared Utils</h2>
          <p>Formatted Currency: {formatCurrency(amount)}</p>
          <p>Formatted Date: {formatDate(today)}</p>
        </div>
      </div>
    </main>
  );
}