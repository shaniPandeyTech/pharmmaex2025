import Image from "next/image";
import Marquee from "react-fast-marquee";

const reviews = [
  {
    name: "Harish Singhal ",
    title: "Director",
    rating: 5,
    image: "/images/reviewimg/HarishS1.webp",
    text: `PARTICIPATING IN PHARMMAEX WAS A FANTASTIC OPPORTUNITY TO GROW OUR NETWORK AND CONNECT WITH POTENTIAL BUSINESS PARTNERS. MR. SHIVAM AND THE ENTIRE TEAM DID A REMARKABLE JOB IN CREATING A PLATFORM THAT TRULY SUPPORTS BUSINESS EXPANSION IN THE PHARMA INDUSTRY.`
  },
  {
    name: "Sunil Khandelwal",
    title: "Director",
    rating: 5,
    image: "/images/reviewimg/client1.webp",
    text: `IT'S  REALLY A WONDERFUL EXPERIENCE TO EXPAND YOUR BUSINESS BY PARTICIPATING IN PHARMA EXPO WITH MR .SHIVAM (EX INDIAN PHRAMA)  WHICH IS NOW KNOWN AS PHARMMAEX . A PERFECT PLATFORM TO EXPLORE BUSINESS BY ADDING NEW BUSINESS ASSOCIATES.`
  },
  {
    name: "Davinder Thareja ",
    title: "Managing Director",
    rating: 5,
    image: "/images/reviewimg/client2.webp",
    text: `It was a real pleasure to participate at the Pharma Exhibition.
        My comment is kudos to everyone who puts on this event, it’s a learning event and it’s a fun event. The huge attendance was a testimony to a well organized and engaging event.
         Pharma Exibition experiences same as always great, glad to be here, looking forward to coming back next year.`
  },
  {
    name: "Jitender Pal",
    title: "Senior Vice President - Sales & Marketing",
    rating: 5,
    image: "/images/reviewimg/client3.jpeg",
    text: `It's pleasure being a part of pharmmaex, mr shivam sharma the founder and chairman of the company is full of energy and enthusiasm. My best wishes are with him. Jitender Pal, Senior VICE president, Akshar Molecules and Ritual Drugs Pvt. Ltd. Group of companies`
  },
  {
    name: "Ravi. K. Doda ",
    title: "M. Director",
    rating: 5,
    image: "/images/reviewimg/client4.webp",
    text: `Dear Shivam Sharma I am writing to express my sincere appreciation for your hard work and dedication. Your contributions have been invaluable to your team, and I am grateful for all that you do. Specifically, I want to recognize your outstanding work on your project.`
  },

  {
    name: "Mrinal Yadav",
    title: "Director",
    rating: 5,
    image: "/images/reviewimg/mirinalYadav.jpeg",
    text: "Taking part in Pharma Expo, now called 'Pharmmaex,' with Mr. Shivam, has been an amazing experience. This event is a great way to grow your business and make new connections in the pharmaceutical industry. Meeting experts and possible business partners has been really helpful. The name change to Pharmmaex shows how the event is getting even better for finding new chances and building good relationships. I think it's great how much this event focuses on growing your business and meeting new people. I'm excited to keep joining and making my business even better through this event."
  },
  {
    name: "Nitin Singh Vaglesh",
    title: "Director",
    rating: 5,
    image: "/images/reviewimg/nitin.jpeg",
    text: "We are very pleased with Shivam Sharma's expo services. We have been continuing for the last three years, and we wish to maintain the same association with you."
  },
  {
    name: "Shubham Goel",
    title: "Director",
    rating: 5,
    image: "/images/reviewimg/subham.webp",
    text: "We would like to commend you for your outstanding efforts and work during the past Exhibitions. We noticed and appreciate your attention to detail and relentless determination. It was an enormous undertaking but went smoothly and efficiently. As a valued partner, I would like to take this opportunity to thank you for your hard work and dedication."
  },
  {
    name: "Amit Wadhwa",
    title: "Director",
    rating: 5,
    image: "/images/reviewimg/Amit.webp",
    text: "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle. As with all matters of the heart, you'll know when you find it."
  },
  {
    name: "Pankaj Sharma",
    title: "Director",
    rating: 5,
    image: "/images/reviewimg/Pankaj.webp",
    text: "We want to express our utmost appreciation for a fruitful cooperation and partnership with Pharmma Ex. The partnership proved to be a testament of their dedication to discipline, professionalism, and excellence. We are looking forward to doing more business with them in the years to come."
  },
  {
    name: "Vikas Chaudhari",
    title: "Director",
    rating: 5,
    image: "/images/reviewimg/Vikas.webp",
    text: "Despite the bumps and bruises that have come along with Covid-19, the business has been stable and growing further, and that’s largely due to the exhibitions held by Mr. Shivam Sharma, who is now launching PHARMMAEX. Thank you so much for providing business growth opportunities under your previous umbrella Indian Pharma Fair."
  },
  {
    name: "Harsimran Singh",
    title: "Director",
    rating: 5,
    image: "/images/reviewimg/Harsimran.webp",
    text: "We have been associating with Pharmma Ex for the last many years, and every time they have come up with innovative ideas. They know what to deliver and that too on committed time."
  },
  {
    name: "Tarmeet Singh",
    title: "Director",
    rating: 5,
    image: "/images/reviewimg/Tarmeet.webp",
    text: "It is my pleasure to reach out and thank you personally for being a loyal business growth support ever since we have known each other! The past few years have taken everyone for quite a ride, and we’re so grateful you chose to tick the right boxes by holding exhibitions at an appropriate interval at strategic locations. As a token of appreciation, we assure you of our all possible support in your newly launched venture PHARMMAEX. Thank you for being an extended part of the Aesthetic family!"
  },
  {
    name: "Hariom Upadhyay",
    title: "Director",
    rating: 5,
    image: "/images/reviewimg/Hariom.webp",
    text: "Dear Mr. Shivam Sharma, Shivam means Satya and Sunder. Whatever work has been undertaken by him was Wonderful and Absolute. We had a wonderful experience at the Lucknow Exhibition held on 17-18 March 2023. Perfection is his passion. Now it's time to support PHARMAEX and boost up his morale. We wish him wonderful achievements in his career. Thanking you."
  },
  {
    name: "Supreet Singh",
    title: "Director",
    rating: 5,
    image: "/images/reviewimg/SupreetSingh.webp",
    text: "Mr. Shivam's professionalism has greatly contributed to our positive experience. His dedicated efforts and performance during previous exhibitions at the Indian Pharma Fair have been truly commendable. We expect a continued association with Pharmmaex. Thanks to Mr. Shivam."
  }
]

export default function ReviewSlider() {
  return (
    <section className="bg-gray-50 py-16 px-4">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
        Our Clients Reviews
      </h2>
      <div className="space-y-6">
        {[0, 1].map((rowIndex) => (
          <Marquee
            key={rowIndex}
            direction={rowIndex % 2 === 0 ? "left" : "right"}
            speed={30}
            gradient={false}
            pauseOnHover
          >
            {[...reviews, ...reviews].map((review, i) => (
              <div
                key={`${rowIndex}-${i}`}
                className="mx-4 w-[300px] max-w-xs p-4 bg-white/60 rounded-xl shadow-md"
              >
                <div className="flex items-center space-x-3 mb-2">
                  <Image
                    src={review.image}
                    alt={review.name}
                    width={40}
                    height={40}
                    className="rounded-full object-cover"
                  />
                  <div>
                    <p className="font-bold text-sm">{review.name}</p>
                    <p className="text-xs text-gray-500">{review.title}</p>
                    <div className="text-yellow-500 text-xs">
                      {"⭐".repeat(review.rating)} {review.rating.toFixed(1)}
                    </div>
                  </div>
                </div>
                <p className="text-sm text-gray-800">{review.text}</p>
              </div>
            ))}
          </Marquee>
        ))}
      </div>
    </section>
  );
}
