export default function HighlightExhibitions() {
    const images = [
      "/images/e1.jpg",
      "/images/e1.jpg", "/images/e1.jpg", 
      "/images/e1.jpg", "/images/e1.jpg", 
      "/images/e1.jpg", "/images/e1.jpg", 
      "/images/e1.jpg", "/images/e1.jpg", 
      "/images/e1.jpg", "/images/e1.jpg", 
      "/images/e1.jpg", "/images/e1.jpg", 
      "/images/e1.jpg", "/images/e1.jpg", 
      
    ];
  
    return (
      <div className="py-12 mx-auto">
        <div className="container mx-auto">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between px-4 py-6 max-w-7xl mx-auto">
      
      <h2 className="text-2xl font-bold">Highlight of Exhibitions</h2>

     
      <button
        className="mt-4 sm:mt-0 border border-black text-black px-6 py-2 rounded-full hover:bg-black hover:text-white transition"
      >
        View Full Gallery
      </button>
    </div>
        </div>
        <div className=" flex flex-center flex-wrap gap-4 mx-auto justyfy-between ">
          {images.map((src, index) => (
            <div key={index} className="overflow-hidden">
              <img width={315} height={270} src={src} alt={`Gallery ${index + 1}`} className="w-full  object-cover hover:scale-105 transition duration-300" />
            </div>
          ))}
        </div>
      </div>
    );
  }
  