import ProjectTopicProps from "../../interfaces/ProjectTopic";

import styles from "./ProjectTopic.module.css";

type ProjectsProps = {
  children?: React.ReactNode; // 👈️ type children
};

export const ProjectTopic = (props: ProjectTopicProps) => {
  return (
    <div className=" md:w-6/12 lg:w-6/12 w-12/12 h-auto">
      <div className="w-full  min-h-12 h-auto  flex items-center justify-center grid-cols-12 gap-4 flex-wrap	">
        <div className="w-2/12">
          <img
            src={props.image}
            alt=""
            className="col-span-3 ml-auto w-[3rem] h-[3rem] "
          />
        </div>
        <div className="w-8/12 ml-2 mr-auto">
          <h2
            className={
              "lg:pt-[2rem] md:pt-[2rem] sm:pt-[2rem] pt-[0rem] " +
              "lg:mb-[1rem] md:mb-[1rem] sm:mb-[1rem] mb-[0rem] " +
              "font-Black_Han_Sans lg:text-[3rem] md:text-[3rem] sm:text-[3rem] text-[1.5rem]  text-left " +
              "inline-block align-text-bottom	text-white uppercase  relative z-0 " +
              styles.titleProject
            }
          >
            {props.title}
          </h2>
          <p className="lg:text-[1.5rem] md:text-[1.5rem] sm:text-[1.5rem] text-[1rem] uppercase text-white">
            {props.substring}
          </p>
        </div>
      </div>
      <div className="w-10/12 mt-4 mb-8  mx-auto flex">
        {props.projects.map((value, index) => {
          return (
            <div
              className={
                " sm:ml-8 lg:ml-8 md:ml-8 ml-4 relative group-hover group " +
                styles.item
              }
              data-aos="fade-down"
              data-aos-delay={100 * index}
            >
              <img
                src={value.image}
                alt=""
                className="sm:group-hover:scale-110 lg:group-hover:scale-110 md:group-hover:scale-110 cursor-pointer transition delay-75  w-[3rem] h-[3rem] "
              />
              <span
                className="
                group-hover:scale-110 group-hover:transition group-hover:delay-100 group-hover:block group-hover:font-bold
                lg:hidden md:hidden sm:lg:hidden
                lg:absolute md:absolute sm:lg:absolute block
                -bottom-50  lg:right-0 md:right-0 sm:lg:right-0  mt-1
                lg:text-[1.5rem] md:text-[1.5rem] sm:text-[1.5rem] text-[0.8rem]
                text-center
                font-Lato font-thin text-white"
              >
                {value.title}
              </span>
            </div>
          );
        })}{" "}
      </div>
    </div>
  );
};
