interface SidebarProps {
  activePage: string
  onPageChange: (page: string) => void
}

const navigation = [
  { name: 'Dashboard', icon: '⌂' },
  { name: 'Salary Plan', icon: '▣' },
  { name: 'Expenses', icon: '↕' },
  { name: 'Budgets', icon: '◫' },
  { name: 'Reports', icon: '▥' },
]

function Sidebar({ activePage, onPageChange }: SidebarProps) {
  return (
    <aside className="hidden w-64 shrink-0 border-r border-slate-200 bg-white lg:flex lg:flex-col">
      <div className="flex h-20 items-center border-b border-slate-100 px-6">
        <div>
          <h1 className="text-xl font-bold tracking-tight text-slate-900">
            Plan<span className="text-emerald-600">4</span>Salary
          </h1>
          <p className="text-xs text-slate-500">Take control of your money</p>
        </div>
      </div>

      <nav className="flex-1 space-y-1 p-4">
        {navigation.map((item) => {
          const isActive = activePage === item.name

          return (
            <button
              key={item.name}
              onClick={() => onPageChange(item.name)}
              className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-sm font-medium transition ${
                isActive
                  ? 'bg-emerald-50 text-emerald-700'
                  : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
              }`}
            >
              <span className="text-lg">{item.icon}</span>
              {item.name}
            </button>
          )
        })}
      </nav>

      <div className="border-t border-slate-100 p-4">
        <button className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-slate-600 hover:bg-slate-50">
          <span>⚙</span>
          Settings
        </button>
      </div>
    </aside>
  )
}

export default Sidebar