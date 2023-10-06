import "./carrossel-2.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCreative } from "swiper/modules";

import Img1 from "../../../assets/imgs/slider-projects/1.png";
import Img2 from "../../../assets/imgs/slider-projects/2.png";
import Img3 from "../../../assets/imgs/slider-projects/3.png";
import Img4 from "../../../assets/imgs/slider-projects/4.png";

const slides = [
  {
    id: 1,
    title: "Tela de login e de cadastro",
    img: Img1,
    text: `
            Essa aplicação utiliza o React em conjunto com o 
            React Router DOM para oferecer uma navegação eficiente 
            entre diferentes páginas. Além disso, ela integra o 
            Firebase para autenticar logins de usuários. Essa combinação 
            permite criar interfaces interativas, oferecer uma experiência 
            de usuário mais fluida e garantir a segurança dos dados ao 
            controlar o acesso a rotas protegidas apenas para usuários 
            autenticados.
        `,
    url: "https://appgre-solutions.netlify.app/",
  },
  {
    id: 2,
    title: "Usando Apis de terceiros",
    img: Img2,
    text: `
            Utilizando APIs pode obter informações relevantes para 
            exibir aos usuários. Além disso, ela faz uso do LocalStorage para 
            armazenar certos dados localmente no navegador do usuário, 
            permitindo que eles sejam acessados posteriormente mesmo quando 
            não há conexão com a internet. Essa combinação de APIs de 
            terceiros e LocalStorage possibilita a criação de uma aplicação 
            dinâmica e funcional.
        `,
    url: "https://humsfilms.netlify.app/",
  },
  {
    id: 3,
    title: "Firebase",
    img: Img3,
    text: `
            Com a integração com o Firebase, a aplicação oferece uma 
            plataforma completa para gerenciamento e análise de dados 
            relacionados ao reforço escolar, auxiliando no acompanhamento 
            e tomada de decisões com base em informações atualizadas e precisas.
        `,
    url: "https://appgre-solutions.netlify.app/",
  },
  {
    id: 4,
    title: "HTML5 semântico, Media querys",
    img: Img4,
    text: `
        O HTML semântico é empregado para estruturar o conteúdo da aplicação 
        de maneira significativa, utilizando tags apropriadas para cada 
        elemento, como cabeçalhos, parágrafos, listas e seções. Por sua vez, 
        as media queries no CSS são utilizadas para adaptar o design da 
        aplicação a diferentes dispositivos e tamanhos de tela. 
        `,
    url: "https://www.tophairssa.com.br/index.html",
  },
];

export default function CarrosselTow() {
  return (
    <Swiper
      modules={EffectCreative}
      effect="creative"
      creativeEffect={{
        prev: {
          shadow: true,
          translate: [0, 0, -400],
        },
        next: {
          translate: ["100%", 0, 0],
        },
      }}
      grabCursor={true}
      pagination={{ clickable: true }}
      autoplay={{
        delay: 3000,
      }}
      className="carrossel-2"
    >
      {slides.map((e) => (
        <SwiperSlide key={e.id}>
          <div className="carrossel-cont">
            <div className="carrossel-img">
              <img src={e.img} alt={e.img} />
            </div>
            <div className="carrossel-description">
              <h2>{e.title}</h2>
              <p>{e.text}</p>
              <a href={e.url} target="_blank" without rel="noreferrer">
                Ver Projeto{" "}
              </a>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
