import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import Card from "./Card";

const projects = [
  {
    title: "Little Lemon",
    description:
      "Throw away your pots and pans. Bite your cheeks and put your lower lip on your chin.",
    getImageSrc: () => require("../images/photo1.jpg"),
  },
  {
    title: "Personal Blog",
    description:
      "A personal blog with a dark theme and a clean layout. Built with React and Chakra UI.",
    getImageSrc: () => require("../images/photo2.jpg"),
  },
  {
    title: "Photo Gallery",
    description:
      "A photo gallery with a masonry layout and a lightbox feature.",
    getImageSrc: () => require("../images/photo3.jpg"),
  },
  {
    title: "E-commerce Store",
    description:
      "An e-commerce store with a shopping cart and a checkout feature.",
    getImageSrc: () => require("../images/photo4.jpg"),
  },
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#14532d"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading as="h2" id="projects-section">
        Featured Projects
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns="repeat(2, minmax(0, 1fr))"
        gridGap={8}
      >
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.getImageSrc()}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;
