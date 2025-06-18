export default function ExhibitionStats() {
    const stats = [
      { value: "6000+", label: "Attendees" },
      { value: "120+", label: "Exhibitors" },
      { value: "7500+", label: "Product on Display" },
      { value: "10+", label: "Media Coverage" },
    ];
  
    return (
      <section className="bg-[url('/images/bg-what.jpg')] bg-cover bg-center py-16">
        <div className="max-w-[1440px] mx-auto px-4">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-10">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <h2 className="text-white text-2xl md:text-3xl font-bold leading-snug">
              What’s in the <br className="sm:hidden" /> Exhibition
            </h2>
          </div>
  
         <div className="flex flex-wrap gap-6 justify-center">
            {stats.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#2b2b2b]/80 backdrop-blur-md text-white rounded-xl px-4 py-10 text-center min-w-[240px]"
              >
                <div className="text-3xl font-bold mb-1">{item.value}</div>
                <div className="text-sm font-medium opacity-90">{item.label}</div>
              </div>
            ))}
            </div>
            </div>
          
        </div>
      </section>
    );
  }