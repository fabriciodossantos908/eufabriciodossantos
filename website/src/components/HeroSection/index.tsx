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
      <div className="w-24 p-6">
        <h6 className="font-Black_Han_Sans text-black-color">FABRICIO.</h6>
      </div>

      <div
        className="w-full h-[35rem] flex gap-4 flex-col-reverse	md:flex-row	lg:flex-row	sm:flex-row  md:pl-6 lg:pl-6 align-middle justify-center lg:justify-end flex-wrap p-6  mb-8 lg:mb-0 "
        data-aos="fade-down"
        data-aos-delay="100"
      >
        <div className="sm:col-span-12 col-span-12 md:col-span-6 lg:col-span-6 h-auto md:mt-auto lg:mt-auto mt-8 md:mr-auto lg:mr-auto ">
          <h4 className="font-Black_Han_Sans sm:text-[2rem] text-[1rem] text-left text-black-color ">
            Empreendedor
          </h4>
          <h4 className="font-Black_Han_Sans sm:text-[3rem] text-[1.5rem] sm:mt-10 lg:mt-10 md:mt-10 mt-2  text-left text-black-color">
            Full stack developer
          </h4>
          <h4 className="font-Black_Han_Sans sm:text-[4rem] text-[2.2rem] sm:mt-10 lg:mt-10 md:mt-10 mt-2  text-left text-black-color">
            new stacks...
          </h4>

          <div className="flex justify-center sm:justify-start md:justify-start lg:justify-start mt-6 sm:mt-8 md:mt-8 lg:mt-8">
            {[github, instagram, linkedin].map((item, index) => {
              return (
                <div>
                  <img
                    src={item}
                    alt=""
                    className="block mr-4 md:mr-8 lg:mr-8 w-10 h-10 md:w-12 md:h-12 lg:w-12 lg:h-12"
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className="sm:col-span-12 col-span-12 md:col-span-6 lg:col-span-6">
          <img
            src={fabricio}
            alt="Fabrício dos santos  "
            className=" mt-8 lg:mt-36 md:mt-36"
          />
          <DownArrow className="md:block hidden lg:block" />
        </div>
      </div>

      <div className="relative  w-full h-[13rem] " >{props.children}</div>
    </div>
  );
};
