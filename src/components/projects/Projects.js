import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectFour, fire, Blood, ecommerce} from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
  <a href="https://example.com/cloud-cloaking-wall-model" target="_blank" rel="noopener noreferrer">
    <ProjectsCard
      title="Cloud Cloaking Wall Model"
      des="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
      src={projectOne}
    />
  </a>
  <a href="https://example.com/speech-recognition" target="_blank" rel="noopener noreferrer">
    <ProjectsCard
      title="Speech Recognition"
      des="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
      src={projectFour}
    />
  </a>
  <a href="https://example.com/fire-detection" target="_blank" rel="noopener noreferrer">
    <ProjectsCard
      title="Fire Detection"
      des="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
      src={fire}
    />
  </a>
  <a href="https://example.com/blood-bank-management-system" target="_blank" rel="noopener noreferrer">
    <ProjectsCard
      title="Blood Bank Management System"
      des="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
      src={Blood}
    />
  </a>
  <a href="https://github.com/sakthi637/EUPHORIA_FASHIONS.git" target="_blank" rel="noopener noreferrer">
    <ProjectsCard
      title="E-commerce Website"
      des="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
      src={ecommerce}
    />
  </a>
  <a href="https://example.com/portfolio-website" target="_blank" rel="noopener noreferrer">
    <ProjectsCard
      title="Portfolio Website"
      des="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
      src={projectTwo}
    />
  </a>
</div>

    </section>
  );
}

export default Projects