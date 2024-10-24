import { Link } from "react-router-dom";
import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";

const Index = () => {
  return (
    <div>
      <div className="container mx-auto">
        <div className="w-[90%] mx-auto">
          <div className="flex justify-between p-2 mt-2">
            <p className="font-dancing text-xl md:text-2xl lg:text-3xl">
              Caleb
            </p>

            <div className="hidden md:flex text-gray-700 font-medium space-x-3">
              {[
                "About Me",
                "Services",
                "Portfolio",
                "Testimonials",
                "Contact Me",
              ].map((item) => (
                <Link
                  key={item}
                  to="/"
                  className="px-3 py-2 hover:bg-yellow-300 hover:text-white"
                >
                  {item}
                </Link>
              ))}
            </div>

            <button className="bg-yellow-400 font-medium text-white py-2 px-4 rounded hover:bg-yellow-300">
              Hire Me
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
  {/* Text Section */}
  <div className="mt-5 py-12 px-2">
    <p className="text-yellow-400 text-base md:text-lg font-medium">
      Hello, I am
    </p>
    <p className="my-1 text-3xl md:text-5xl lg:text-6xl font-bold tracking-wide whitespace-nowrap">
      CALEB NYONG
    </p>
    <p className="mt-1 text-green-700 text-lg md:text-xl lg:text-2xl font-medium">
      UI/UX & Product Designer
    </p>
    <p className="mt-2 text-gray-500">
      I am a top online marketer and branding expert. I started my career by
      launching the popular metaverse design. In just a few short years, I built
      the brand to millions of social media followers and website visitors.
    </p>

    <div className="flex mt-8 space-x-6">
      <button className="bg-yellow-400 border border-yellow-400 font-medium text-white py-1 px-8 rounded hover:bg-yellow-300">
        Hire Me
      </button>
      <button className="flex items-center font-medium py-1 px-2 hover:underline">
        Download CV
        <ArrowDownTrayIcon className="w-6 h-6 ml-2 text-yellow-400" />
      </button>
    </div>

    {/* Testimonial Section */}
    <div className="shadow-lg max-w-sm mt-8 p-4 border border-gray-200 rounded-md">
      <div className="flex space-x-4 items-center">
        <img
          src="/public/assets/images/images-removebg-preview.png"
          alt="Phanny"
          className="w-16 h-16 rounded-full object-cover"
        />
        <div>
          <p>Phanny - Nigeria</p>
          <span className="text-gray-500 text-sm">Sat 28 May 2022</span>
        </div>
      </div>
      <p className="pt-4 text-sm text-gray-700">
        In just a few short years, I built the brand to millions of social media
        followers and website visitors.
      </p>
    </div>
  </div>

  {/* Image Section */}
  <div className="py-5 px-2 flex justify-center">
    <img
      src="/public/assets/images/PortfolioPicture.png"
      alt="Portfolio"
      className="max-w-full h-auto object-contain"
    />
  </div>
</div>


          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Image Section */}
            <div className="py-5 px-2 flex justify-center">
              <img
                src="/public/assets/images/person.png"
                alt="Portfolio"
                className="max-w-full h-auto object-contain"
              />
            </div>

            {/* Text Section */}
            <div className="mt-5 py-12 px-2">
              <p className="text-yellow-400 text-base md:text-lg font-medium">
                A bit
              </p>
              <p className="my-1 text-xl md:text-3xl lg:text-4xl font-medium whitespace-nowrap">
                About Me
              </p>

              <p className="mt-2 text-gray-500">
                I am a top online marketer and branding expert. I started my
                career by launching the popular metaverse design. In just a few
                short years, I built the brand to millions of social media
                followers and website visitors.
              </p>

              <div className="flex mt-4 items-center">
                <img
                  src="/public/assets/images/award-badge-svgrepo-com.svg"
                  className="w-24 h-12"
                  alt="Award Badge"
                />
                <p className="text-yellow-400 text-sm ml-4">
                  5 years + <br />
                  <span className="text-black">Experience</span>
                </p>
              </div>

              <div className="flex mt-8 space-x-6">
                <button className="bg-yellow-400 border border-yellow-400 text-white font-medium py-2 px-6 rounded hover:bg-yellow-300">
                  Hire Me
                </button>
                <button className="flex items-center font-medium py-2 px-4 hover:underline">
                  Download CV
                  <ArrowDownTrayIcon className="w-6 h-6 ml-2 text-yellow-400" />
                </button>
              </div>
            </div>
          </div>

          <div className="grid gap-8">
            {/* Services Section */}
            <div className="mt-5 py-12 px-4">
              <div className="text-center">
                <p className="text-yellow-400 text-base md:text-lg font-medium">
                  Services
                </p>
                <p className="text-xl md:text-3xl lg:text-4xl font-medium">
                  Check My Services
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                <div className="flex flex-col items-center text-center">
                  <img
                    src="/public/assets/images/best-landing-page-examples-64e6080f990bb-sej.png"
                    alt="Landing Page Design"
                    className="rounded-xl h-60 w-full object-cover"
                  />
                  <p className="font-semibold mt-4">Landing Page Design</p>
                  <p className="text-gray-500 text-sm mt-2 px-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolores adipisci neque laudantium voluptatum consequuntur?
                    Repellendus nobis molestiae rem soluta explicabo!
                  </p>
                </div>

                <div className="flex flex-col items-center text-center">
                  <img
                    src="/public/assets/images/0_LrWWTC_A9IV-ZMNX.png"
                    alt="Mobile App Design"
                    className="rounded-xl h-60 w-full object-cover"
                  />
                  <p className="font-semibold mt-4">Mobile App Design</p>
                  <p className="text-gray-500 text-sm mt-2 px-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolores adipisci neque laudantium voluptatum consequuntur?
                    Repellendus nobis molestiae rem soluta explicabo!
                  </p>
                </div>

                <div className="flex flex-col items-center text-center">
                  <img
                    src="/public/assets/images/Branding-ideas-and-inspirations-7.jpg"
                    alt="Branding Design"
                    className="rounded-xl h-60 w-full object-cover"
                  />
                  <p className="font-semibold mt-4">Branding Design</p>
                  <p className="text-gray-500 text-sm mt-2 px-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolores adipisci neque laudantium voluptatum consequuntur?
                    Repellendus nobis molestiae rem soluta explicabo!
                  </p>
                </div>
              </div>
            </div>

            {/* Portfolio Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="py-5 px-4 flex justify-center">
                <img
                  src="/public/assets/images/9ed56c86218617.5d931036e3232.png"
                  className="h-[80%] w-full object-cover"
                  alt="Portfolio"
                />
              </div>
              <div className="mt-5 py-12 px-4">
                <p className="text-yellow-400 text-lg md:text-xl lg:text-2xl font-medium">
                  01
                </p>
                <p className="my-1 text-lg md:text-xl lg:text-2xl font-medium">
                  Bakery Landing Page Design
                </p>
                <p className="mt-2 text-gray-500">
                  Welcome to our bakery, where every treat is made with love and
                  the finest ingredients. Indulge in a world of freshly baked
                  breads, pastries, and cakes, crafted to bring a smile to your
                  face. Whether you are craving something sweet or savory, our
                  bakery offers a delightful selection that’s perfect for any
                  occasion. Experience the warmth and joy of homemade goodness,
                  right here!
                </p>
                <button className="mt-8 text-yellow-400 border border-yellow-400 font-medium py-1 px-8 rounded hover:bg-yellow-400 hover:text-white">
                  Details
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Text Section */}
            <div className="py-12 px-4">
              <p className="text-yellow-400 text-lg md:text-xl lg:text-2xl font-medium">
                02
              </p>
              <p className="my-1 text-lg md:text-xl lg:text-2xl font-medium">
                Shoe Store Ecommerce Landing Page Design
              </p>
              <p className="mt-2 text-gray-500">
                Welcome to our store, where style meets convenience. Discover a
                curated collection of the latest fashion trends, handpicked to
                elevate your wardrobe. Whether you are shopping for everyday
                essentials or something special, our store offers a seamless
                shopping experience with high-quality products.
              </p>
              <button className="mt-8 text-yellow-400 border border-yellow-400 font-medium py-1 px-8 rounded hover:bg-yellow-400 hover:text-white">
                Details
              </button>
            </div>

            {/* Image Section */}
            <div className="px-4 flex justify-center lg:justify-end">
              <img
                src="/public/assets/images/shoe.png"
                className="h-auto max-h-[85%] w-full object-contain"
                alt="Shoe Store"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="py-5 px-2 flex justify-center md:justify-start">
              <img
                src="/public/assets/images/clr.png"
                className="w-full h-auto max-h-[90%] object-contain"
                alt="Portfolio"
              />
            </div>
            <div className="mt-5 py-8 px-4 md:px-2">
              <p className="text-yellow-400 text-lg md:text-xl lg:text-2xl font-medium">
                03
              </p>
              <p className="my-1 text-lg md:text-xl lg:text-2xl font-medium whitespace-nowrap">
                ClearMix Landing Page Design
              </p>
              <p className="mt-2 text-gray-500">
                ClearMix is a cutting-edge video production platform designed to
                simplify the creation of high-quality, professional videos.
                Whether you’re producing corporate interviews, marketing
                content, or remote testimonials, ClearMix provides an
                easy-to-use solution for capturing, editing, and delivering
                polished videos without the need for a physical studio.
              </p>
              <button className="mt-8 text-yellow-400 border border-yellow-400 font-medium py-1 px-8 rounded hover:bg-yellow-400 hover:text-white">
                Details
              </button>
            </div>
          </div>

          <div className=" grid">
            <div className="mt-5 py-12 px-2  ">
              <div className=" text-center">
                <p className="text-yellow-400 text-base md:text-lg font-medium">
                  Portfolio{" "}
                </p>
                <p className=" text-xl md:text-3xl lg:text-4xl font-medium whitespace-nowrap">
                  People Lie Work Don't{" "}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
  {/* First Image */}
  <div className="flex justify-center">
    <img
      src="/public/assets/images/best-landing-page-examples-64e6080f990bb-sej.png"
      alt="Landing Page Design"
      className="rounded-xl h-60 object-cover"
    />
  </div>

  {/* Second Image */}
  <div className="flex justify-center">
    <img
      src="/public/assets/images/best-landing-page-examples-64e6080f990bb-sej.png"
      alt="Mobile App Design"
      className="rounded-xl h-60 object-cover"
    />
  </div>

  {/* Third Image */}
  <div className="flex justify-center">
    <img
      src="/public/assets/images/best-landing-page-examples-64e6080f990bb-sej.png"
      alt="Branding Design"
      className="rounded-xl h-60 object-cover"
    />
  </div>

  {/* Fourth Image */}
  <div className="flex justify-center">
    <img
      src="/public/assets/images/best-landing-page-examples-64e6080f990bb-sej.png"
      alt="Fourth Design"
      className="rounded-xl h-60 object-cover"
    />
  </div>
</div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
