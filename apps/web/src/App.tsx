import { Routes, Route } from 'react-router-dom'
import { formatCurrency, formatDate } from 'shared/utils'

function App() {
  const amount = 1234.56
  const today = new Date()

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="container mx-auto px-4 py-8">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold">Darpo - Hotel Management</h1>
          
          <div className="p-4 bg-white rounded-lg shadow">
            <h2 className="text-xl font-semibold">Testing Shared Utils</h2>
            <p>Formatted Currency: {formatCurrency(amount)}</p>
            <p>Formatted Date: {formatDate(today)}</p>
          </div>
        </div>

        <Routes>
          {/* Add routes here */}
        </Routes>
      </main>
    </div>
  )
}

export default App