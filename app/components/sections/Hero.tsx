import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative h-screen w-full">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/Hero.png"
          alt="Valley of Flower Hero"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content */}
      <div className="relative h-full container-padding flex items-end justify-center text-center ">
        <div className="max-w-2xl text-white mb-20">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 whitespace-nowrap">
            A Blooming Escape
          </h1>
          <p className="text-sm md:text-base opacity-90 text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed Lorem ipsum
            dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
