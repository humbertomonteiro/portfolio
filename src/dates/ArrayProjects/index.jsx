// import MataMosquito from "../../assets/imgs/projects/mata-mosquito.png";
import Orcamento from "../../assets/imgs/projects/orcamento.png";
import TiaNanda from "../../assets/imgs/projects/tiaNanda.png";
import TopHair from "../../assets/imgs/projects/topHair.png";
import Sabiaguaba from "../../assets/imgs/projects/sabiaguaba-park.png";
import HumLink from "../../assets/imgs/projects/encurtarLink.png";
import HumasTarefas from "../../assets/imgs/projects/humas-tarefas.png";
import HumsFilms from "../../assets/imgs/projects/humsFilms.png";
// import GetDataProduct from "../../assets/imgs/projects/get-data-product.png";
// import GreApp from "../../assets/imgs/projects/gre-app-login.png";
import FinansFlow from "../../assets/imgs/projects/finans-flow.png";
import BookBaby from "../../assets/imgs/projects/book-baby.png";

const projects = [
  {
    id: 2,
    img: Orcamento,
    title: "My Finans",
    tecnologis: "HTML, CSS, JavaScript",
    url: "https://humbertomonteiro.github.io/my_finans/",
    description: `Um programa que vai organizar as receitas e 
        despesas. Mostrando o valor de todas as despesas cadastradas,
        o valor das receitas cadastradas, o balanço mensal, o valor
        atual de acordo com as transações que foram resolvidas.`,
  },
  {
    id: 3,
    img: TiaNanda,
    title: "Formando Futuros",
    tecnologis: "HTML, CSS, JavaScript",
    url: "https://humbertomonteiro.github.io/tia_nanda/",
    description: `Uma landing page feita para uma professora 
        onde tem todas as redes sociais dela, mostra a 
        localização do reforço escolar e também para 
        expor os materiais que ela vende.`,
  },
  {
    id: 4,
    img: TopHair,
    title: "Top Hair",
    tecnologis: "HTML, CSS, JavaScript",
    url: "https://humbertomonteiro.github.io/tophairssa/index.html",
    description: `Uma landing page feita para uma vendedora de
        megahair, que mostra e descreve todos os produtos disponives. 
        `,
  },
  {
    id: 5,
    img: Sabiaguaba,
    title: "Sabiaguaba Park",
    tecnologis: "HTML, CSS, JavaScript",
    url: "https://humbertomonteiro.github.io/sabiaguaba_park/index.html",
    description: `Uma landing page feita para uma barraca
        de praia que mostra a localizaçãoe e o cardápio.`,
  },
  {
    id: 6,
    img: HumLink,
    title: "Hum Link",
    tecnologis: "React",
    url: "https://meulinkapp.vercel.app/",
    description: `Um programa que usa a api da Bitly para encurtar 
        links, e armazena os links encurtados em outra página ultilizando 
        o localhost.`,
  },
  {
    id: 7,
    img: HumasTarefas,
    title: "Humas Tarefas",
    tecnologis: "React, Firebase",
    url: "https://humastarefasapp.vercel.app/",
    description: `Um programa que serve para organizar tarefas.
        Essas tarefas são cadastradas no firebase e também tem um
        sistema de login, para que cada usuário veja suas próprias 
        tarefas.`,
  },
  {
    id: 8,
    img: HumsFilms,
    title: "Hums Films",
    tecnologis: "React",
    url: "https://humsfilmsapp.vercel.app/",
    description: `Um programa que usa a api do The Movie DB, que 
        irá mostrar filmes que estão em cartaz atualmente. Vamos mostrar 
        as sinopses e usar links do Youtube para direcionar para o trailler
        do filme. Tambem podemos salvar filmes em uma página de favoritos
        que esta sendo armazenado usando o localhost.`,
  },
  // {
  //     id: 9,
  //     img: GetDataProduct,
  //     title: 'Lista de espera',
  //     tecnologis: 'React, Firebase',
  //     url: 'https://get-data-product.netlify.app/',
  //     description: `Um programa que recebe dados e armazena no Firebase e
  //     adiciona em um grupo de WhatsApp quem se cadastrar. Os dados
  //     serão mostrados em uma página que usa login para poder ter acesso.`
  // },
  // {
  //     id: 10,
  //     img: GreApp,
  //     title: 'Gerenciador de reforço',
  //     tecnologis: 'React, Firebase',
  //     url: 'https://appgre-solutions.netlify.app',
  //     description: `Um programa serve para cadastrar alunos, informando
  //     o valor que o aluno paga e mostrar o balanço de gastos e entradas
  //     que o reforço terá. Projeto com login para que cada professora
  //     possa se cadastrar e gerênciar seu reforço escolar.`
  // },
  {
    id: 11,
    img: FinansFlow,
    title: "Finans Flow",
    tecnologis: "React, Firebase",
    url: "https://finansflow.vercel.app/",
    description: `Uma aplicação para registrar transações de despesas, receitas
        e ate clientes. Mostrando de forma simples o seu balanço e informando se tem 
        algum atraso.`,
  },
  {
    id: 12,
    img: BookBaby,
    title: "Book Baby",
    tecnologis: "React, Firebase",
    url: "https://my-baby-izj2uz303-humbertomonteiro.vercel.app/",
    description: `Uma aplicação para criar eventos para crianças.`,
  },
];

export { projects };

// {
//     id: 1,
//     img: MataMosquito,
//     title: 'Mata Mosquito',
//     tecnologis: 'HTML, CSS, JavaScript',
//     url: 'https://humbertomonteiro.github.io/mata_mosquito/',
//     description: `Um jogo feito com JavaScript puro,
//     que consiste em ficar mostrando a imagem de um mosquito
//     por um período determinado pelo nível escolhido no
//     início do jogo. De acordo com o nível também, vamos ter
//     a quantidade de tempo do jogo. Serão três vidas. Se o
//     mosquito aparecer e você não conseguir clicar nele antes
//     dele desaparecer, irá perder uma vida.`
// }
