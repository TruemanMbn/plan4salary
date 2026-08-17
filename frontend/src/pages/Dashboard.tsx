const summaryCards = [
  {
    title: 'Monthly Salary',
    value: 'R25,000',
    description: 'Your planned income',
  },
  {
    title: 'Planned Budget',
    value: 'R20,000',
    description: '80% of salary allocated',
  },
  {
    title: 'Spent',
    value: 'R12,450',
    description: '49.8% of salary spent',
  },
  {
    title: 'Remaining',
    value: 'R12,550',
    description: 'Available this month',
  },
]

const categories = [
  { name: 'Housing', amount: 'R7,000', percentage: 35 },
  { name: 'Food', amount: 'R3,000', percentage: 15 },
  { name: 'Transport', amount: 'R1,500', percentage: 7.5 },
  { name: 'Entertainment', amount: 'R950', percentage: 4.75 },
]

function Dashboard() {
  return (
    <div className="space-y-8">
      <div>
        <p className="text-sm font-medium text-emerald-600">August 2026</p>
        <h2 className="mt-1 text-3xl font-bold tracking-tight text-slate-900">
          Good afternoon 👋
        </h2>
        <p className="mt-2 text-slate-500">
          Here's how your salary plan is looking this month.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {summaryCards.map((card) => (
          <div
            key={card.title}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <p className="text-sm font-medium text-slate-500">
              {card.title}
            </p>

            <p className="mt-3 text-2xl font-bold text-slate-900">
              {card.value}
            </p>

            <p className="mt-2 text-xs text-slate-500">
              {card.description}
            </p>
          </div>
        ))}
      </div>

      <div className="grid gap-6 xl:grid-cols-3">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm xl:col-span-2">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-slate-900">
                Budget allocation
              </h3>
              <p className="mt-1 text-sm text-slate-500">
                How your salary is currently allocated
              </p>
            </div>

            <button className="rounded-lg bg-emerald-50 px-3 py-2 text-sm font-medium text-emerald-700 hover:bg-emerald-100">
              Edit budget
            </button>
          </div>

          <div className="mt-6 space-y-5">
            {categories.map((category) => (
              <div key={category.name}>
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-sm font-medium text-slate-700">
                    {category.name}
                  </span>

                  <span className="text-sm text-slate-500">
                    {category.amount}
                  </span>
                </div>

                <div className="h-2 overflow-hidden rounded-full bg-slate-100">
                  <div
                    className="h-full rounded-full bg-emerald-500"
                    style={{ width: `${category.percentage * 2}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="font-semibold text-slate-900">
            Salary health
          </h3>

          <p className="mt-1 text-sm text-slate-500">
            Your current financial position
          </p>

          <div className="mt-8 flex justify-center">
            <div className="flex h-40 w-40 items-center justify-center rounded-full border-[18px] border-emerald-500">
              <div className="text-center">
                <p className="text-3xl font-bold text-slate-900">80%</p>
                <p className="text-xs text-slate-500">planned</p>
              </div>
            </div>
          </div>

          <div className="mt-8 space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-slate-500">Allocated</span>
              <span className="font-medium text-slate-900">R20,000</span>
            </div>

            <div className="flex justify-between text-sm">
              <span className="text-slate-500">Unallocated</span>
              <span className="font-medium text-emerald-600">R5,000</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-3">
        <button className="rounded-xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-emerald-700">
          + Add expense
        </button>

        <button className="rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50">
          Plan my salary
        </button>
      </div>
    </div>
  )
}

export default Dashboard