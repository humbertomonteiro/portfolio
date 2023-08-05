
import { DiReact, DiNodejsSmall } from 'react-icons/di'
import { AiFillGithub } from 'react-icons/ai'
import { SiFirebase, SiMongodb } from 'react-icons/si'
import { BsGit } from 'react-icons/bs'
import { GrMysql } from 'react-icons/gr'

import Git from '../../pages/PagesNotes/Git'
import Github from '../../pages/PagesNotes/Github'
import Node from '../../pages/PagesNotes/Node'
import React from '../../pages/PagesNotes/React'
import Firebase from '../../pages/PagesNotes/Firebase'
import MySQL from '../../pages/PagesNotes/MySQL'
import MongoDb from '../../pages/PagesNotes/MongoDB'

const notes = [ 
    {
        id: 'git',
        title: 'Git',
        description: `Sistema de controle de versão, 
        projetado para lidar com tudo, desde projetos 
        pequenos a muito grandes com velocidade e 
        eficiência.`,
        icon: <BsGit />,
        component: <Git />

    },
    {
        id: 'github',
        title: 'Git Hub',
        description: `Aproveitado para a produtividade. 
        Projetado para colaboração. Celebrado pela 
        segurança integrada.`,
        icon: <AiFillGithub />,
        component: <Github />
    },
    {
        id: 'node',
        title: 'Node JS',
        description: `É um ambiente de tempo de execução 
        JavaScript multiplataforma e de código.`,
        icon: <DiNodejsSmall />,
        component: <Node />
    },
    {
        id: 'react',
        title: 'React JS',
        description: `permite que você crie interfaces 
        de usuário a partir de peças individuais chamadas 
        componentes.`,
        icon: <DiReact />,
        component: <React />
    },
    {
        id: 'firebase',
        title: 'Firebase',
        description: `Uma plataforma de desenvolvimento de 
        aplicativos que ajuda você a criar e desenvolver 
        aplicativos e jogos.`,
        icon: <SiFirebase />,
        component: <Firebase />
    },
    {
        id: 'mysql',
        title: 'MySQL',
        description: `É um sistema open-source de gerenciamento 
        de base de dados relacional SQL, desenvolvido e suportado 
        pela Oracle.`,
        icon: <GrMysql />,
        component: <MySQL />
    },
    {
        id: 'mongodb',
        title: 'MongoDB',
        description: `
        MongoDB: banco de dados NoSQL flexível, escalável, usado 
        em aplicativos modernos com grandes volumes de dados.`,
        icon: <SiMongodb />,
        component: <MongoDb />
    },
]

export { notes }