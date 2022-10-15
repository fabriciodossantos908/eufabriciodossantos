import fabricio from "../../assets/fabricio.png";
import { bg, downArrow, github, instagram, linkedin } from "../../assets/index";
import { DownArrow } from "../DownArrow";

type HeroSectionProps = {
  children: React.ReactNode; // 👈️ type children
};

export const HeroSection = (props: HeroSectionProps) => {
  return (
    <div className="w-full top-0 min-h-[40rem] h-auto sm:min-h-[45rem] md:min-h-[45rem] lg:min-h-[45rem] bg-primary-color relative">
      {/* NAVIGATION */}
      <div className="w-24 p-6" data-aos="fade-down" data-aos-delay="100">
        <h6 className="font-Black_Han_Sans text-black-color">FABRICIO.</h6>
      </div>

      <div
        className="w-full h-[35rem] grid grid-cols-12 gap-4 flex-col-reverse  md:pl-6 lg:pl-6 align-middle justify-center p-6  mb-8 md:mb-32 lg:mb-32"
        data-aos="fade-down"
        data-aos-delay="500"
      >
        <div className="md:row-start-1 lg:row-start-1 sm:col-span-12 col-span-12 md:col-span-6 lg:col-span-6 h-auto md:mt-[16rem] lg:mt-[16rem] mt-[4rem] md:mr-auto lg:mr-auto ">
          <h4
            className="font-Black_Han_Sans sm:text-[2rem] text-[1rem] text-left text-black-color "
            data-aos="fade-down"
            data-aos-delay="800"
          >
            Empreendedor
          </h4>
          <h4
            className="font-Black_Han_Sans sm:text-[3rem] text-[1.5rem] sm:mt-10 lg:mt-10 md:mt-10 mt-[1rem]  text-left text-black-color"
            data-aos="fade-down"
            data-aos-delay="900"
          >
            Full stack developer
          </h4>
          <h4
            className="font-Black_Han_Sans sm:text-[4rem] text-[2.2rem] sm:mt-10 lg:mt-10 md:mt-10 mt-[1rem]  text-left text-black-color"
            data-aos="fade-down"
            data-aos-delay="1000"
          >
            new stacks...
          </h4>

          <div className="flex justify-center sm:justify-start md:justify-start lg:justify-start mt-6 sm:mt-8 md:mt-8 lg:mt-8 ">
            {[github, instagram, linkedin].map((item, index) => {
              return (
                <div>
                  <img
                    src={item}
                    alt=""
                    className="block mr-4 md:mr-8 lg:mr-8 w-10 h-10 md:w-12 md:h-12 lg:w-12 lg:h-12"
                    data-aos="fade-down"
                    data-aos-delay={1000+(100*index)}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className="row-start-1 sm:col-span-12 col-span-12 md:col-span-6 lg:col-span-6 ">
          <img
            src={fabricio}
            alt="Fabrício dos santos"
            className="mt-8 lg:mt-36 md:mt-36  mx-auto   md:w-[18rem] lg:w-[32rem] w-[18rem]   md:h-[18rem] lg:h-[32rem] h-[18rem] "
          />
          <DownArrow className="md:block hidden lg:block ml-auto mr-12" />
        </div>
      </div>

      <div className="relative  w-full h-[13rem]">{props.children}</div>
    </div>
  );
};
