import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
// import corpcommentImg from "@/public/corpcomment.png";
import innovetImg from "@/public/project1.jpg";
import movieImg from "@/public/project2.jpg";
import globeImg from "@/public/project3.jpg";
import sushiImg from "@/public/project4.png";
import rmtdevImg from "@/public/rmtdev.png";
// import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Microverse Training Program",
    location: "Remote",
    description:
      "I was trained to become a full-stack developer and work remotely and collaboratively.",
    icon: React.createElement(LuGraduationCap),
    date: "2022 - 2023",
  },
  {
    title: "Wordpress Developer Intern",
    location: "Remote",
    description:
      "I worked as a wordpress developer for 3 months with Jethitech Solutions, a digital marketing agency.",
    icon: React.createElement(CgWorkAlt),
    date: "2023",
  },
  {
    title: "Full-Stack Developer",
    location: "Kampala, UG",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "Present",
  },
] as const;

export const projectsData = [
  {
    title: "Sushi template",
    description:
      "I developed this responsive website template for a fictional sushi restaurant with the purpose of showcasing my front-end skills.",
    tags: ["HTML", "CSS", "Javascript", "Animations"],
    imageUrl: sushiImg,
  },
  {
    title: "Innovet - hack for pets",
    description:
      "I developed this responsive website template for a fictional conference with the purpose of showcasing my front-end skills.",
    tags: ["HTML", "CSS", "Javascript"],
    imageUrl: innovetImg,
  },
  {
    title: "World Wonders",
    description:
      "I developed this wonderful app where one can access demographic information for any country on the planet with ability to search.",
    tags: ["HTML", "CSS", "React", "Next JS"],
    // imageUrl: globeImg,
    imageUrl: rmtdevImg,
  },
  {
    title: "Movies Web App",
    description:
      "This is a movies' API based web application that shows a list of movies and the ability to reserve or comment on a particular movie. Developed in collaboration with Omar and Mohsen",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: movieImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;
