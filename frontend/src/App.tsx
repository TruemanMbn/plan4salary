import { useState } from 'react'
import Sidebar from './components/layout/Sidebar'
import Dashboard from './pages/Dashboard'

function App() {
  const [activePage, setActivePage] = useState('Dashboard')

  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar
        activePage={activePage}
        onPageChange={setActivePage}
      />

      <main className="min-w-0 flex-1">
        <header className="flex h-20 items-center justify-between border-b border-slate-200 bg-white px-6 lg:px-10">
          <div>
            <p className="text-sm text-slate-500">My finances</p>
            <p className="font-semibold text-slate-900">
              {activePage}
            </p>
          </div>

          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 font-semibold text-emerald-700">
            TM
          </div>
        </header>

        <div className="p-6 lg:p-10">
          {activePage === 'Dashboard' ? (
            <Dashboard />
          ) : (
            <div className="rounded-2xl border border-slate-200 bg-white p-10 text-center">
              <h2 className="text-2xl font-bold text-slate-900">
                {activePage}
              </h2>

              <p className="mt-2 text-slate-500">
                This section will be built next.
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}

export default App