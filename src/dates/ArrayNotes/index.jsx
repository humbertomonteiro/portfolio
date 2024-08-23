import { DiReact, DiNodejsSmall } from "react-icons/di";
import { AiFillGithub } from "react-icons/ai";
//SiMongodb
import { SiFirebase } from "react-icons/si";
import { BsGit } from "react-icons/bs";
import { GrMysql } from "react-icons/gr";
import { FaJava } from "react-icons/fa";
import { IoGameControllerOutline } from "react-icons/io5";
import { SiPrisma } from "react-icons/si";
// import { TbNotes } from "react-icons/tb";

import Git from "../../pages/PagesNotes/Git";
import Github from "../../pages/PagesNotes/Github";
import Node from "../../pages/PagesNotes/Node";
import React from "../../pages/PagesNotes/React";
import Firebase from "../../pages/PagesNotes/Firebase";
import MySQL from "../../pages/PagesNotes/MySQL";
// import MongoDb from "../../pages/PagesNotes/MongoDB";
import Java from "../../pages/PagesNotes/Java";
import DisignPatterns from "../../pages/PagesNotes/DisignerPatternsJava";
import Prisma from "../../pages/PagesNotes/Prisma";
// import Notes from "../../pages/PagesNotes/Notes";

const notes = [
  {
    id: "git",
    title: "Git",
    description: `Sistema de controle de versão, 
        projetado para lidar com tudo, desde projetos 
        pequenos a muito grandes com velocidade e 
        eficiência.`,
    icon: <BsGit />,
    component: <Git />,
  },
  {
    id: "github",
    title: "Git Hub",
    description: `Aproveitado para a produtividade. 
        Projetado para colaboração. Celebrado pela 
        segurança integrada.`,
    icon: <AiFillGithub />,
    component: <Github />,
  },
  {
    id: "node",
    title: "Node JS",
    description: `É um ambiente de tempo de execução 
        JavaScript multiplataforma e de código.`,
    icon: <DiNodejsSmall />,
    component: <Node />,
  },
  {
    id: "react",
    title: "React JS",
    description: `permite que você crie interfaces 
        de usuário a partir de peças individuais chamadas 
        componentes.`,
    icon: <DiReact />,
    component: <React />,
  },
  {
    id: "firebase",
    title: "Firebase",
    description: `Uma plataforma de desenvolvimento de 
        aplicativos que ajuda você a criar e desenvolver 
        aplicativos e jogos.`,
    icon: <SiFirebase />,
    component: <Firebase />,
  },
  {
    id: "mysql",
    title: "MySQL",
    description: `É um sistema open-source de gerenciamento 
        de base de dados relacional SQL, desenvolvido e suportado 
        pela Oracle.`,
    icon: <GrMysql />,
    component: <MySQL />,
  },
  // {
  //   id: "mongodb",
  //   title: "MongoDB",
  //   description: `
  //       MongoDB: banco de dados NoSQL flexível, escalável, usado
  //       em aplicativos modernos com grandes volumes de dados.`,
  //   icon: <SiMongodb />,
  //   component: <MongoDb />,
  // },
  {
    id: "java",
    title: "Java",
    description: `
        Java é uma linguagem de programação orientada a objetos, robusta, versátil e multiplataforma, criada na década de 90.`,
    icon: <FaJava />,
    component: <Java />,
  },
  {
    id: "DisignPatterns",
    title: "Disign Patterns",
    description: `
        Os Design Patterns, ou padrões de projeto, representam soluções
          reutilizáveis para problemas comuns no desenvolvimento de software.`,
    icon: <IoGameControllerOutline />,
    component: <DisignPatterns />,
  },
  {
    id: "prisma",
    title: "Prisma",
    description: `
        Uma forma fácil de manipular nosso banco de dados`,
    icon: <SiPrisma />,
    component: <Prisma />,
  },
  // {
  //   id: "notes",
  //   title: "Notes",
  //   description: `
  //       Anotações importantes que sempre revejo.`,
  //   icon: <TbNotes />,
  //   component: <Notes />,
  // },
];

export { notes };
