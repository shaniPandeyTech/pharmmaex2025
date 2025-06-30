export default function HeroInnovation() {
    return (
      <section className="px-4 py-10 sm:py-16 container mx-auto">

      <div className="text-center mb-20">
        <h2 className="heading mb-4">About PharmmaEx</h2>

        <p className="text-[16px] lg:text-[22px] text-left">At PharmmaEx, we are dedicated to organizing premier exhibitions across the nation dedicated to the pharmaceutical, nutraceutical, and healthcare sectors. Our events aim to explore and address the evolving needs of the entire pharmaceutical industry.
These exhibitions serve as a vital platform for pharmaceutical manufacturers/franchise industry professionals, and entrepreneurs to connect, collaborate, and stay updated with the latest trends and innovations.
We are committed to meeting the diverse expectations of the pharma industry and continuously strive to create value-driven events that foster growth and development within the sector.</p>
        </div>






        <div className="flex flex-col-reverse lg:flex-row items-center gap-8">
          {/* Text Content */}
          <div className="w-full lg:w-1/2 text-justify">
            <h2 className="heading mb-4 leading-tight">
            About The Organizer
            </h2>
  
            <p className="text-gray-700 mb-4 text-[16px] lg:text-[22px]">
            Mr. Shivam Sharma, Director of PharmmaEx, brings over 15 years of extensive experience in the pharmaceutical exhibition industry. His rich expertise and successful track record in organizing impactful events have significantly contributed to the growth and reputation of PharmmaEx.
            </p>
            <p className="text-gray-700 mb-4 text-[16px] lg:text-[22px]">The PharmmaEx team comprises industry experts specializing in branding, event management, and ensuring the success of each exhibition. Our organization is fully equipped with the necessary resources and support to deliver seamless, high-quality events that meet the diverse needs of the pharmaceutical and healthcare sectors.</p>
  
            {/* Buttons */}
                    {/* <div className="flex flex-col sm:flex-row gap-4">
                      <button className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition">
                        Pre-Registration
                      </button>
                      <button className="border border-black text-black px-6 py-2 rounded-full hover:bg-black hover:text-white transition">
                        Become Exhibitor
                      </button>
                    </div> */}
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
  