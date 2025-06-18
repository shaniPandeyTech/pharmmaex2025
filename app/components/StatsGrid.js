export default function StatsGrid() {
    const stats = [
      { label: 'Exhibitors', value: '6000+' },
      { label: 'Cities Covered', value: '120+' },
      { label: 'Products on Display', value: '7500+' },
      { label: 'Healthcare Sectors', value: '10+' },
    ];
  
    return (
      <section className="bg-gray-50 py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 px-4">
          {stats.map((item, idx) => (
            <div
              key={idx}
              className="text-center bg-white rounded-xl shadow p-6"
            >
              <p className="text-3xl font-bold text-green-700">{item.value}</p>
              <p className="text-gray-600 mt-1">{item.label}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }