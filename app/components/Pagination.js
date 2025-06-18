export default function Pagination() {
    return (
<section className="py-6">
  
  <div className="flex justify-center items-center space-x-2 mt-8">
    <button className="w-8 h-8 rounded-full border flex items-center justify-center text-xl text-gray-600 hover:bg-gray-100">
      ←
    </button>
    <button className="w-8 h-8 text-green-600 font-semibold underline">1</button>
    <button className="w-8 h-8 text-gray-700 hover:underline">2</button>
    <button className="w-8 h-8 text-gray-700 hover:underline">3</button>
    <button className="w-8 h-8 text-gray-700 hover:underline">4</button>
    <span className="text-gray-400">......</span>
    <button className="w-8 h-8 text-gray-700 hover:underline">26</button>
    <button className="w-8 h-8 rounded-full border flex items-center justify-center text-xl text-gray-600 hover:bg-gray-100">
      →
    </button>
  </div>
</section>

    )
    }