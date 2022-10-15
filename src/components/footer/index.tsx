import { contact, leftArrow } from "../../assets";

type ProjectsProps = {
  children?: React.ReactNode;
};

export const Footer = (props: ProjectsProps) => {
  return (
    <div className="relative w-full min-h-[15rem] h-auto bg-primary-color">
      {props.children}

      <div className="w-full pt-[10rem]">
        <div className="w-12/12 min-h-[20rem] h-auto lg:ml-3rem md:ml-3rem sm:ml-3rem mr-auto relative 
        lg:pb-[4rem] md:pb-[4rem] sm:pb-[4rem] pb-[0rem] 
        ">
          <div
            className="
           lg:w-4/12 md:w-4/12 sm:w-4/12 w-8/12
           lg:h-[15rem] md:h-[15rem] sm:h-[15rem] h-[10rem]
            mx-auto flex justify-center items-center relative"
          >
            <img
              src={contact}
              alt=""
              className="absolute top-0 left-0 
              lg:w-[15rem] md:w-[15rem] sm:w-[15rem] w-[10rem]
              lg:h-[15rem] md:h-[15rem] sm:h-[15rem] h-[10rem]
              "
            />
            <span
              className="
              w-6/12 h-1/6 
              lg:mt-28 md:mt-28 sm:mt-28 mt-auto
              mb-auto
              lg:ml-8 md:ml-8 sm:ml-8 ml-4 
              text-center font-Black_Han_Sans 
              lg:text-[3rem] md:text-[3rem] sm:text-[3rem] text-[2rem]
            text-white align-text-bottom"
            >
              Fabricio.
            </span>
          </div>

          <button
            className="
            w-12/12  
            lg:mt-[4rem] md:mt-[4rem] sm:mt-[4rem] mt-[2rem]
            lg:mr-auto md:mr-auto sm:mr-auto 
            lg:mx-8 md:mx-8 sm:mx-8 mx-auto
            flex justify-center align-middle
            pointer
            text-white
            bg-secondary-color
          lg:hover:bg-secondary-color md:hover:bg-secondary-color sm:hover:bg-secondary-color
            lg:hover:scale-90 md:hover:scale-90 sm:hover:scale-90
            transition delay-75"
          >
            entrar em contato
            <img src={leftArrow} alt="" className="w-2/12 ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};
