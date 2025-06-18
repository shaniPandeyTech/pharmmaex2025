export default function HeroInnovation() {
    return (
      <section className="px-4 py-10 sm:py-16 max-w-7xl mx-auto">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-8">
          {/* Text Content */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 leading-tight">
            Where innovation meets excellence in pharmaceutical solutions.
            </h2>
  
            <p className="text-gray-700 mb-4 text-sm sm:text-base">
            Lorem ipsum dolor sit amet consectetur. Arcu adipiscing quisque volutpat arcu eget cursus eget mi a. Vel nunc sagittis leo volutpat ligula mi lacinia in nisl. Laoreet eu ornare orci et nibh dis eget. Iaculis bibendum auctor vitae morbi nisl nunc aliquet mi nisl.
            Varius ornare proin aliquam nibh pellentesque. Non mattis pellentesque vitae rhoncus est pretium eros enim. Proin dictumst maecenas cursus mus in ut urna neque. Ullamcorper vestibulum ac vestibulum faucibus rhoncus tellus. Fermentum augue viverra in sed ornare massa neque pellentesque. Mattis malesuada nisl in curabitur. Enim et in ac enim sit orci. Accumsan donec enim nascetur nulla integer tortor arcu dolor quis. Nulla consectetur netus lorem morbi.
            </p>
  
            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition">
                Pre-Registration
              </button>
              <button className="border border-black text-black px-6 py-2 rounded-full hover:bg-black hover:text-white transition">
                Become Exhibitor
              </button>
            </div>
          </div>
  
          {/* Image */}
          <div className="w-full lg:w-1/2">
            <img
              src="/images/innovation.jpg" // <- put your image in /public
              alt="Exhibition Highlight"
              className="rounded-xl w-full object-cover"
            />
          </div>
        </div>
      </section>
    );
  }
  