import Image from "next/image";
import Button from "../ui/Button";

const About = () => {
  return (
    <section id="about">
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 items-center">
          <div className="col-span-1 sm:col-span-2 lg:col-span-3 relative h-[50vw] sm:h-[40vw] lg:h-[50vw]">
            <Image
              src="/images/about.png"
              alt="About Us"
              fill
              className="object-cover"
            />
          </div>
          <div className="col-span-1 sm:col-span-2 lg:col-span-2 bg-[#FFFF00] p-4 sm:p-6 lg:p-8 flex flex-col h-full">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6 mt-10 sm:mt-20">
              About Us
            </h2>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 mb-4 sm:mb-6">
              Valley of Flowers, a UNESCO World Heritage Site, is a
              breathtakingly beautiful national park located in the Chamoli
              district of Uttarakhand, India. This enchanting valley is home to
              over 300 species of flowers, including the rare and endangered
              Himalayan Blue Poppy. The park&apos;s diverse flora and fauna, set
              amidst the majestic Himalayan mountains, make it a nature
              lover&apos;s paradise.
            </p>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 mb-4 sm:mb-6">
              Koraput, a district in Odisha, India, is known for its rich
              cultural heritage and natural beauty. The region is home to
              numerous tribes, each with their unique customs and traditions.
              The scenic beauty of Koraput, with its lush green forests, rolling
              hills, and sparkling waterfalls, makes it an ideal destination for
              those seeking an offbeat adventure.
            </p>
            <div className="flex-grow-0">
              <Button variant="primary">Know More</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
