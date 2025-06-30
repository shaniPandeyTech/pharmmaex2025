export default function HighlightExhibitions() {
    const images = [
      "/images/e1.jpg",
      "/images/e1.jpg", "/images/e1.jpg", 
      "/images/e1.jpg", "/images/e1.jpg", 
      "/images/e1.jpg", "/images/e1.jpg", 
      "/images/e1.jpg", "/images/e1.jpg", 
      "/images/e1.jpg", "/images/e1.jpg", 
      "/images/e1.jpg", "/images/e1.jpg", 
      "/images/e1.jpg", "/images/e1.jpg", "/images/e1.jpg", 
      "/images/e1.jpg", "/images/e1.jpg", 
      
    ];
  
    return (
      <div className="py-4 lg:py-12 mx-auto">
        <div className="container mx-auto">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between  mx-auto">
      
      <h2 className="heading">Highlight of Exhibitions</h2>

     
      <button
        className="mt-4 sm:mt-0 border border-black text-black px-6 py-2 rounded-full hover:bg-black hover:text-white transition"
      >
        View Full Gallery
      </button>
    </div>
        </div>
        <div className="w-full  bg-white py-8">
  <div className="flex flex-wrap justify-center gap-1">
    {images.map((src, index) => (
      <div
        key={index}
        className="w-[32%] h-auto lg:w-[16.3%] lg:h-[270px] overflow-hidden rounded-lg shadow-md"
      >
        <img
          src={src}
          alt={`Gallery ${index + 1}`}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
    ))}
  </div>
</div>
      </div>
    );
  }
  