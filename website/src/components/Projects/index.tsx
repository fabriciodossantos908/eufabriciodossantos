import {
  alphacode,
  balls,
  github,
  habibs,
  njob,
  origo,
  trigo,
} from "../../assets";
import ProjectTopicProps from "../../interfaces/ProjectTopic";
import { ProjectTopic } from "../ProjectTopic";
import { Waves } from "../Waves";
import styles from "./Projects.module.css";

type ProjectsProps = {
  children?: React.ReactNode;
};

export const Projects = (props: ProjectsProps, children: ProjectsProps) => {
  const projects: Array<ProjectTopicProps> = [
    {
      image: alphacode,
      title: "alphacode",
      substring: "it solutions",
      projects: [
        { image: habibs, title: "Habib's" },
        { image: trigo, title: "Trigo" },
        { image: njob, title: "Njob" },
        { image: origo, title: "Origo" },
      ],
    },
  ];

  return (
    <div className="w-full max-h-[40rem] h-auto sm:h-[65rem] md:h-[65rem] lg:h-[65rem] bg-black-color relative overflow-hidden shadow-inner ">
      <div className="absolute -top-35 right-0 z-0 ">
        <img
          src={balls}
          alt=""
          className="w-[45vw] lg:h-[150vh] md:h-[150vh] h-[80vh] "
        />
      </div>

      <div className="grid grid-cols-12 mb-16">
        <div className="lg:col-span-8 md:col-span-8 col-span-12 md:col-start-1  lg:col-start-1 col-start-1">
          <h2
            className="font-Black_Han_Sans sm:text-[3rem] text-[1.5rem] sm:mt-10 lg:mt-10 md:mt-10 mt-8 ml-8 md:ml-14 lg:ml-14 text-white"
            data-aos="fade-down-right"
            data-aos-delay="500"
          >
            O QUE ESTAMOS
          </h2>
        </div>
        <div className="lg:col-span-6 md:col-span-6 col-span-8 col-start-3">
          <h2
            className="font-Black_Han_Sans sm:text-[3rem] text-[1.5rem] sm:mt-10 lg:mt-10 md:mt-10 mt-2 text-left text-white"
            data-aos="fade-down-right"
            data-aos-delay="600"
          >
            DESENVOLVENDO?
          </h2>
          <h2
            className="font-Lato sm:text-[1rem] text-[1rem] sm:mt-2 lg:mt-2 md:mt-2 mt-2 mr-8 text-center text-white"
            data-aos="fade-down-right"
            data-aos-delay="700"
          >
            Projetos recentes que desenvolvi nos últimos 2 anos
          </h2>
        </div>
      </div>

      <div className="w-12/12 lg:h-[5rem] md:h-[5rem] h-[2.5rem] mb-10 bg-secondary-color z-10 relative overflow-hidden hidden lg:flex md:flex sm:flex">
        {["PROJETOS",  "PROJECTS", "PROGETTI"].map(
          (item) => {
            return (
              <p className=" w-[12rem] font-Black_Han_Sans sm:text-[3rem] text-[0.5rem] lg:mt-8 md:mt-8 mt-0 mx-auto text-center text-white block ">
                {item}
              </p>
            );
          }
        )}
      </div>

      {projects.map((value) => {
        return (
          <ProjectTopic
            image={value.image}
            title={value.title}
            substring={value.substring}
            projects={value.projects}
          />
        );
      })}
    </div>
  );
};
