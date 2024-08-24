export default function Prisma() {
  return (
    <div className="pages-notes-text">
      <div className="filter">
        <h2>Banco de dados relacionais</h2>
        <p>
          O Prisma ORM no seu aplicativo vai em alguns minutos começar a modelar
          seus dados, executar migrações de esquemas e consultar seu banco de
          dados.
        </p>
        <h3>Aplicação backend</h3>
        <p>
          Vamos contruir uma aplicação backend, com node.js e typescript para
          usar o postgre em conjunto com o prisma.
        </p>
        <p>
          Para começar vamos criar uma pasta backend e usar o comando{" "}
          <strong>npm init -y</strong> para contruir um projeto node.
        </p>
        <p>
          O próximo passo é criar o tsconfig.ts, pois vamos ultilizar typescript
          usando o comando: <strong>tsc --init</strong>.
        </p>
        <p>
          Dentro do nosso diretório backend vamos criar uma nova basta src para
          organizar nossos arquivos. Dentro do src vamos criar um arquivo
          server.ts que será onde vamos criar nosso servidor.
        </p>
        <p>
          Para criar um servidor, vamos baixar o express com o seguinte comando:{" "}
          <strong>npm i express</strong>e tambem{" "}
          <strong>npm i @types/express -D</strong>
          Assim vamos baixar tanto o express quanto os tipos dele. Colocamos o
          -D nos tipos para que fique apenas no desenvolvimento. Não é
          necessário em produção.
        </p>
        <h3>Express</h3>
        <p>Dentro do arquivo server.ts vamos escrever o seguinte código:</p>
        <pre>
          <code>
            {`
import express from "express";
import { router } from "./routes";

const app = express();

app.use(express.json());

app.use(router);

app.listen(3333, () => console.log("Servidor online!"));
              `}
          </code>
        </pre>

        <p>
          Estamos primeiro importando o express. Também estamos importando um
          arquivo de rotas que vou mostrar como está mais a baixo.
        </p>
        <p>
          Ainda aqui no server, vamos instânciar o express para uma constante
          que vamos chamar de app. Com o express funcionando, vamos primeiro
          passar para ele um método que ira passar em todo tipo de requisição.
        </p>
        <p>
          Na linha 6 estamos passando como parâmetro para o use o express.json()
          para que tadas as requisições sejam transformadas em json e ficarem
          mais simples de trabalhar com os dados. Na linha 8 estamos passando
          para o use o router que sera as rotas que serão criadas no nosso
          arquivo de rotas.
        </p>
        <p>
          Para finalizar, precisamos escutar uma porta. É assim que o server vai
          ficar rodando. Então na linha 10 estamos usando o método listen do
          express e como parâmetro passamos o número da porta e uma função
          callback que irá retornar apenas um console informando que o servidor
          está online.
        </p>
        <h3>Rotas no Express</h3>
        <p>
          Agora vamos criar um arquivos para gerênciar as rotas. Dentro do src
          vamos criar o arquivo routes.ts. E dentro vamos escrever o seguite
          código:
        </p>
        <pre>
          <code>
            {`
import { Router } from "express";
import { Request, Response } from "express";

const router = Router();

router.get("/teste", (req: Request, res: Response) => {
    return res.json({ ok: true });
});

export { router };
    `}
          </code>
        </pre>
        <p>
          Estamos importando o Router do express, os tipos Request e Response
          para tipar os parâmetros das requisições.
        </p>
        <p>
          Na linha 4 estamos inicializando o router. E logo na linha 6 estamos
          testando com uma requisição get, passando o caminho /teste e uma
          função callback que vai apenas retornar uma resposta com o json e
          passando um objeto. E por último estamos exportando, pois la no
          arquivo de server estamos usando o router no método use do express.
        </p>
        <h3>Rodar servidor</h3>
        <p>
          Vamos baixar o <strong>ts-node-dev</strong>. Ele vai nos auxiliar na
          hora de programar nossa aplicação. Vai deixar online nosso servidor e
          também vai ficar monitorando qualquer mudando no código, e dar um
          restart.
        </p>
        <p>
          Vamos usar o comando <strong>npm i ts-node-dev -D</strong>, feito a
          instalação vamos no nosso package.json e criar um script para ele.
          Nosso script vai ficar assim:
        </p>
        <pre>
          <code>
            {`
"scripts": {
  "start": "ts-node-dev src/server.ts"
},
  `}
          </code>
        </pre>
        <p>Estamos usando o ts-node-dev e passando o caminho do servidor.</p>
        <p>
          Pronto! Agora se formos no terminal e usar o comando{" "}
          <strong>npm start</strong> o nosso servidor vai ficar online. E para
          testar, vamos no navegador e ver nossa rota de teste:{" "}
          <strong>http://localhost:3333/teste</strong>
        </p>
        <h3>Configurar Prisma</h3>
        <p>
          Para instalar o prisma é muito simples, vamos usar o comando:{" "}
          <strong>npm install prisma</strong>
        </p>
        <p>
          Para inicializar, vamos usar o comando:{" "}
          <strong>npx prisma init</strong>
        </p>
        <p>
          Esse comando vai fazer duas coisas:
          <ul>
            <li>
              Criar um diretório prisma com um arquivo schema.prisma, que irá
              conter uma variável de conexão do banco de dados. É nesse
              diretório que vamos colocar nossos models, para criar nossas
              tabelas.
            </li>
            <li>
              Cria um arquivo .env na raiz do projeto que vai conter a variável
              de ambiente onde vamos alterar os valores para nos conectarmos ao
              nosso banco de dados.
            </li>
          </ul>
        </p>

        <p>
          Também vamos instalar o prisma client. Essa biblioteca vai nos
          permitir interagir com o banco de dados de forma programática. Para
          instalar vamos usar o comando:{" "}
          <strong>npm install @prisma/client</strong>
        </p>
      </div>
      <div className="filter">
        <h2>Criar tabelas</h2>
        <p>
          Para criar tableas no nosso banco de dados, vamos usar o model no
          nosso arquivo schema.prisma que fio criado. Veja como criar uma
          tabela:
        </p>
        <article>
          <h3>Observação</h3>
          <p>
            Para uma melhor experiência com o prisma, indico que baixe a
            extenção do vscode <strong>prisma</strong> para que tenha um auto
            complete e uma coloração do código mais atrativa.
          </p>
        </article>
        <pre>
          <code>
            {`
model User {
  id String @id @default(uuid())
  name String
  email String
  password String
  created_at DateTime? @default(now())
  updated_at DateTime? @default(now())

  @@map("users")
}
    `}
          </code>
        </pre>
        <p>Agora vamos destrinchar esse código.</p>

        <p>
          Na imagem acima estamo usando o model User e abrindo chaves para
          informar como será a tabela. Essa tabela vai ter os campos id, name,
          email e password. Essas campos serão string. Berceba que a tipagem do
          prisma usa o primeira letra maiúscula. teremos mais dois campos:
          create_at e update_at.
        </p>
        <p>
          O id tem a anotação @id que vai informar ao prisma que esse será a
          prime key da tabela, o @default(uuid()) vai servir para que o id seja
          setado automaticamente.
        </p>
        <p>
          Os campos de create_at e update_at vão ter uma tipagem direrente.
          DataTime que tambem irá ter a notação @default(now()) que nesse caso
          vai servir para setar automaticamente a data atual na hora da criação
          de algum dado.
        </p>
        <p>
          Por último vamos usar a notação @@map para dar o nome da nossa tabela.
          Nesse caso será users.
        </p>
      </div>
      <div className="filter">
        <h3>Ligações entre tabelas.</h3>
        <p>
          Bancos relacionais vão relacionar tabelas, e para fazer essas ligaçõe
          com o prisma vamos fazer da seguinte forma:
        </p>
        <pre>
          <code>
            {`
model Category{
  id String @id @default(uuid())
  name String
  create_at DateTime? @default(now())
  update_at DateTime? @default(now())

  @@map("categories")
  products Product[]
}

model Product{
  id String @id @default(uuid())
  name String
  price String
  description String
  banner String
  create_at DateTime? @default(now())
  update_at DateTime? @default(now())

  category Category @relation(fields: [category_id], references: [id])

  @@map("products")
  category_id String
}
    `}
          </code>
        </pre>
        <p>
          Criamos mais duas tabelas: Category e Product. Todo produto vai ter
          uma categoria. A relação aqui vai ser de um para muitos. No caso uma
          categoria vai ter vairios produtos.
        </p>
        <p>
          Na tabela Categoria vamos adicionar a notação products Product[].
          Assim estamos informando que essa tabela vai ter uma relação de um
          para muitos com a tabela Product.
        </p>
        <p>
          Na tabela Product vamos referciar a tabela Category com o id da mesma.
          Vamos vazer isso com o código{" "}
          <strong>
            category Category @relation(fields: [category_id], references: [id])
          </strong>{" "}
          o @relation vai informar que o campo category_id vai ser a forem key
          que irá ter o mesmo valor do id da category.
        </p>
        <p>
          Agora só falta falar do campo category_id que como passamos no
          relations, terá o mesmo valor do id da tabela Category.
        </p>
      </div>
      <div className="filter">
        <h3>Criar tabelas</h3>
        <p>
          Para criar tabelas vamos usar o prisma client. O código{" "}
          <strong>npx prisma generate</strong>
          vai gerar todas as tabelas que criamos no schama.prisma.
        </p>
        <p>
          Esse código vai criar dentro do diretório prisma outro diretório
          chamado migrations que vai conter os arquivos com o código sql.
        </p>
      </div>
      <div className="filter">
        <h3>Usando Prisma Client</h3>
        <h4>Arquiterura MSC</h4>
        <p>Model, Service e Controller == Organização.</p>
        <h5>Controller</h5>
        <p>
          A arquitetura MSC, aplica uma arquitetura de software baseada em
          camadas e é comumente utilizada no Backend. O MSC é utilizado para
          organizar nosso código.
        </p>
        <p>
          O controller é o que faz o primeiro contato com as requisições. Faz a
          recepção das requisições e passa adiante apenas as informações
          relevantes
        </p>

        <h5>Sevice</h5>
        <p>
          É responsável por abstrair as regras de negócio e controlar o acesso
          aos dados.
        </p>
        <h3>Inicializar Prima Client</h3>
        <p>
          Vamos criar um diretório no src do nosso projeto chamado prisma, e
          dentro vamos criar um arquivo index.ts que vai ter o seguite código:
        </p>
        <pre>
          <code>
            {`
import { PrismaClient } from "@prisma/client";

const prismaClient = new PrismaClient();

export default prismaClient;
    `}
          </code>
        </pre>
        <p>
          Bem simples. Estamos importando o prisma client, criando uma instância
          nova e exportando.
        </p>
        <h3>Organização de pastas.</h3>
        <p>
          Vamos criar dois diretórios: controllers e services. Dentro de cada um
          vamos criar uma pasta chamada user.
        </p>
        <p>
          Vamos começar pelo controller. Dentro do diretório user que está no
          controller vamos criar um arquivo CreateUserController.ts. Nesse
          arquivo vamos colocar o seguinte código:
        </p>
        <pre>
          <code>
            {`
import { Request, Response } from "express";
import { CreateUserService } from "../../services/user/CreateUserService";

class CreateUserController {
  async handle(req: Request, res: Response) {
    const { name, email, password } = req.body;

    const createUserService = new CreateUserService();

    const user = await createUserService.execute({ name, email, password });
    return res.json(user);
  }
}

export { CreateUserController };
          `}
          </code>
        </pre>
        <h3>CreateUserController</h3>
        <p>
          Vamos importar a tipagem do express, pois estamos trabalhando com o
          typescript.
        </p>
        <p>
          A segunda importação é do arquivo que criaremos no nosso services. O
          CreateUserService.ts.
        </p>
        <p>
          O controller é uma classe typescript que vai ter um método asincrono
          chamado handle onde vai receber dois argumentos. A requisição e a
          resposta. É ele que vamos usar no arquivo de rotas.
        </p>
        <p>
          Dentro do body da requisição estamos pegando o name, o email e o
          pasword.
        </p>
        <p>
          Agora vamos criar uma instância do nosso service que daqui a pouco
          veremos como será e por último estamos passando para uma constante o
          método do nosso service que vai ser chamado de execute e passar como
          parâmetro um objeto contendo o name, o email e o password.
        </p>
        <p>
          Vamos retornar o res.json(user) para termos acesso ao usuário que foi
          criado.
        </p>
        <h3>CreateUserService</h3>
        <pre>
          <code>
            {`
import prismaClient from "../../prisma";
import { hash } from "bcryptjs";

interface UserRequest {
  name: string;
  email: string;
  password: string;
}

class CreateUserService {
  async execute({ name, email, password }: UserRequest) {
    if (!email) {
      throw new Error("Email incorrect");
    }

    const userAlreadyExists = await prismaClient.user.findFirst({
      where: {
        email: email,
      },
    });

    if (userAlreadyExists) {
      throw new Error("User already exists");
    }

    const passwordHash = await hash(password, 8);

    const user = await prismaClient.user.create({
      data: {
        name,
        email,
        password: passwordHash,
      },
      select: {
        id: true,
        name: true,
        email: true,
      },
    });

    return user;
  }
}

export { CreateUserService };
    `}
          </code>
        </pre>
        <p>
          Nesse arquivo que vamos ver o uso do Prisma Client. Então primeiro
          vamos importar o prisma client que inicializamos no nosso src.
        </p>

        <p>
          Em seguida entamos criando uma interface que vai servir para obrigar o
          uso dos dados que queremos. Nesse caso será o name, email e password.
        </p>
        <p>
          A classe CreateUserService vai ter o método execute que usamos lá no
          controller. Esse método vai receber um objeto que terá como tipo a
          interface que criamos.
        </p>
        <p>
          Primeiramente vamos verificar se foi mandado o email. Caso não tenha
          sido enviado vamos retornar um new Error.
        </p>
        <p>
          Logo abaixo na linha 15 estamos atribuindo a uma constante o
          prismaClient.user.findFirst passando como parâmetro um objeto que terá
          a where. Essa where vai fazer uma verificação se esse email já existe
          no banco de dado.
        </p>
        <p>
          Então na linha 21 estamos verificando. Se essa constante for
          verdadeira, significa que esse email já está no banco de dados e vamos
          retornar um new Error.
        </p>
        <p>
          Caso passe das duas verificações anteriores, vamos criar uma constante
          user que vai ser atribuido o prismaClient.create e como parâmetro
          vamos passar um objeto com a data. Essa data são os dados que o user
          tem. O select vai retornar os dados seguros de quando um user for
          criado. Não vamos deixar retornar o password, pois é um dado sensível.
        </p>
        <h3>Criptografando senha</h3>
        <p>
          Se formos consultar o banco de dados, vamos conseguir ver o password.
          Não é uma boa prática vermos dados secretos. Por isso vamos criar uma
          forma de Criptografar esse password .
        </p>
        <p>
          Vamos ultilizar o <strong>bcryptjs</strong>. Então digitar o comando:{" "}
          <strong>npm i bcryptjs</strong> e o{" "}
          <strong>npm i @types/bcryptjs -D</strong>
        </p>
        <p>
          Agora que já baixamos, vamos ao código. No nosso arquivo
          CeateUserService.ts, vamos importar o hash do bcryptjs. Veja como
          ficou o código:
        </p>
        <pre>
          <code>
            {`
import { hash } from "bcryptjs";
    `}
          </code>
        </pre>
        <p>
          Depois vamos criar uma constante atribuindo o hash com o password e o
          número 8. O segundo parâmetro é o 8, mas tem várias formas de fazer
          essa criptografia. Você pode consultar a{" "}
          <a
            href="https://www.npmjs.com/package/bcryptjs"
            target="_blank"
            rel="noreferrer"
          >
            Documentação do bcryptjs
          </a>
        </p>
        <pre>
          <code>
            {`    
const passwordHash = await hash(password, 8);

const user = await prismaClient.user.create({
  data: {
    name,
    email,
    password: passwordHash,
  },
  select: {
    id: true,
    name: true,
    email: true,
  },
});
            `}
          </code>
        </pre>
        <p>
          Pronto! Agora se criarmos um novo user, vamos receber no banco um
          valor criptografado.
        </p>
        <h3>Descriptografar</h3>
        <p>
          Se formos usar essa funcionalidade de criptografia, na hora de logar
          em um sistema que vai receber esse password, vai dar um erro, pois
          estará criptografado e teremos que descriptografar.
        </p>
        <p>Então vamos fazer a rota de login do nosso exemplo.</p>
        <p>
          Dentro dos diretórios user do controller e do service, vamos criar
          arquivos como fizemos anteriormente, AuthUserController.ts e
          AuthUserService.ts respectivamente.
        </p>
        <p>Vamos começar pelo arquivo AuthUserController.ts. Veja o código:</p>
        <pre>
          <code>
            {`
class AuthUserController {
  async handle(req: Request, res: Response) {
    const { email, password } = req.body;

    const authUserService = new AuthUserService();

    const auth = await authUserService.execute({
      email,
      password,
    });

    return res.json(auth);
  }
}

export { AuthUserController };
    `}
          </code>
        </pre>
        <p>
          É basicamento a mesma coisa do controller anterior, mas dessa vez,
          vamos ter apenas dois dados: o email e o password.
        </p>
        <p>Agora veja como vamos fazer no arquivo AuthUserService.ts:</p>
        <pre>
          <code>
            {`
import prismaClient from "../../prisma";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

interface AuthRequest {
  email: string;
  password: string;
}

class AuthUserService {
  async execute({ email, password }: AuthRequest) {
    const user = await prismaClient.user.findFirst({
      where: {
        email,
      },
    });

    if (!user) {
      throw new Error("User/password incorrect");
    }

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new Error("User/password incorrect");
    }
  }
}

export { AuthUserService };
            `}
          </code>
        </pre>
        <p>
          Na linha 11, estamos buscando no banco de dados o email que foi
          passado para o requisição no nosso controller. Então na linha 17
          estamos verificando se o user existe, se sim, será true, caso
          contrario, será false e vamos retornar um erro.
        </p>

        <p>
          Na linha 21 estamos descriptografando usando o compare do bcryptjs.
          Ele recebe dois parâmetros para comparar: o password que recebemos do
          controller e o password criptografado, que foi o que recebemos do
          banco.
        </p>
        <p>
          Na linha 23 vamos verificar se o password é igual o do banco de dados.
          Se for false retornaremos um error.
        </p>
        <p>
          Para nossa aplicação ficar melhor ainda, vamos usar um token para dar
          acesso ao nosso usuário.
        </p>
      </div>
      <div className="filter">
        <h3>JWT</h3>
        <p>
          Vamos usar o JWT para autenticar o usuário. JSON WEB TOKEN vai ajudar
          na parte de segurança da nossa aplicação. Vai garantir que quem está
          acessando é realmente o usuário correto.
        </p>
        <h4>Instalando JWT</h4>
        <p>
          Para começar vamos baixar JWT com o comando:{" "}
          <strong>npm i jsonwebtoken</strong> e em seguida o comando{" "}
          <strong>npm i @types/jsonwebtoken -D</strong>.
        </p>
        <h4>Inicializar</h4>
        <p>
          Vamos importar o método sign do jsonwebtoken que baixamos. Ele vai
          precisar de 3 argumentos, o primeiro vai ser o payload. É opcional o
          que vamos colocar aqui, eu vou ultilizar um objeto que vai ter o nome
          e o email que obtivemos do user.
        </p>
        <p>
          O próximo argumento é o secretOrPrivateKey, que como o próprio nome já
          sugere, é secreto. Então não vamos passar o valor diretamente. Vamo
          ter que baixar o doc.env para poder usar variaveis de ambiente, como
          fizemos com o prisma.
        </p>
        <h3>Hash MD5</h3>
        <p>
          Para criamor uma hash vamos usar um site bastante conhecido: o{" "}
          <a
            href="https://www.md5hashgenerator.com/"
            target="_blank"
            rel="noreferrer"
          >
            md5hashgenerator .
          </a>
        </p>
        <p>
          Ele vai gerar para nós uma hash. No campo que veremos assim que
          acessar o site, colocaremos o valor que quisermos. No nosso caso, vou
          colocar o valor <strong>projetolanchonete</strong>. O site vai
          disponibilizar 3 valores, vamos copiar o do meio{" "}
          <strong>MD5 Hash</strong> e passar esse valor para uma variável de
          ambiente.
        </p>
        <p>
          No arquivo .env que já está nossa variavel de ambiente DATABASE_URL,
          vamos criar outra: JWT_SECRETE e passar nossa hash que foi gerada.
        </p>
        <p>
          Agora para conseguirmos usar o process.env, vamos baixar o dotenv com
          o seguite comando:
          <strong>npm i dotenv</strong>
        </p>
        <p>
          Depois que baixamos, podemos ir no nosso código e como segundo
          parâmetro vamo passar o process.env.JWT_SECRETE!. Estamos usando o
          sinal de exclamação no final, pois o typescript informa que esse dado
          pode vir undefined e com esse sinal, estamos afirmando que o valor vai
          ser passado.
        </p>
        <p>
          Por último vamos passar o terceiro argumento. Vai ser um objeto que
          terá 2 valores: o subject, vai ter como valor, o id que obtivemos do
          user e outro item do objeto será o expiresIn. Esse vai ter uma string{" "}
          <strong>'30d'</strong>. Esse valor significa que o teken vai ser
          trocado a cada 30 dias. Veja como ficou nosso arquivo
          AuthUserService.ts:
        </p>
        <p>
          Agora para finalir nosso service de login, vamos retornar os dados do
          usuário. Veja como ficou nosso arquivo AuthUserService.ts:
        </p>
        <pre>
          <code>
            {`
import prismaClient from "../../prisma";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

interface AuthRequest {
  email: string;
  password: string;
}

class AuthUserService {
  async execute({ email, password }: AuthRequest) {
    const user = await prismaClient.user.findFirst({
      where: {
        email,
      },
    });

    if (!user) {
      throw new Error("User/password incorrect");
    }

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new Error("User/password incorrect");
    }

    const token = sign(
      {
        name: user.name,
        email: user.email,
      },
      process.env.JWT_SECRETE!,
      {
        subject: user.id,
        expiresIn: "30d",
      }
    );

    return {
      id: user.id,
      name: user.name,
      email: user.email,
      token: token,
    };
  }
}

export { AuthUserService };
            `}
          </code>
        </pre>
        <p>
          Para testar nosso código, vamos passar para nosso arquivo de rotas,
          nossos controllers. Veja como vai ficar nosso arquivo de rotas:
        </p>
        <pre>
          <code>
            {`
import { Router } from "express";

import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";

const router = Router();

router.post("/users", new CreateUserController().handle);
router.post("/session", new AuthUserController().handle);

export { router };
          `}
          </code>
        </pre>
        <p>
          Perceba que apagamos o import dos tipos Request e Response, pois não
          vamos mais precisar. Então vamos importar nossos dois controllers e
          nas linhas 8 e 9 vamos criar nossas rotas. Para criar um usuário vamos
          usar o caminho users e para fazer login vamos usar o caminho session.
        </p>
        <p>
          Para testar esses caminhos tem várias formas. Agora essa é sua tarefa.
          Pesquise e consiga. Geralmento uso o postman, mas fique a vontade para
          fazer da forma que quiser.
        </p>
      </div>
      <div className="filter">
        <h3>Middleware</h3>
        <p>
          Vamos criar um middleware para ter uma função de autenticar o usuário
          e também disponibilizar o valor do id do user dentro request.
          Middlewares são funções intermediárias que executam algum código antes
          que a rota seja acessada. No nosso caso vamos verificar se o token foi
          passado, se está correto e também vamos adicionar as propriedades da
          requisição o valor do id do user.
        </p>
        <p>
          No nosso diretório src, vamos criar uma nova pasta: middlewares.
          Dentro dela vamos criar um arquivo que vou dar o nome de
          isAuthenticated.ts. Veja como ficou o código:
        </p>
        <pre>
          <code>
            {`
import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface Payload {
  sub: string;
}

export function isAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authToken = req.headers.authorization;

  if (!authToken) {
    return res.status(401).end();
  }

  const [, token] = authToken.split(" ");

  try {
    const { sub } = verify(token, process.env.JWT_SECRETE!) as Payload;

    req.user_id = sub;

    return next();
  } catch (err) {
    return res.status(401).end;
  }
}
            `}
          </code>
        </pre>
        <p>
          Primeiro estamos importando as tipagens que vamos usar nos argumentos
          da função. E também vamos importar o verify do jsonwebtoken.
        </p>
        <p>
          Dentro da nosso função vamos primeiro atribuir a uma constante o valor
          do token. Esse valor vai estar armazenado na req(request). Mais
          especificamente dentro de req.headers.authorization.
        </p>
        <p>
          O tipo de authorization que vamos usar no nosso projeto é o Bearer
          token. E quando pegamos esse valor, ele estará com um prefixo Bearer.
          Seria mais ou menos assim: Bearer
          eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSHVtYmVydG8iLCJlbWFpbi
        </p>
        <p>
          Vai ter o prefixo, um espaço e por último o token. Sabendo disso,
          vamos primeiro verificar se existe o token, se ele não existir vamos
          retornar um erro 401(não autorizado).
        </p>
        <p>
          Caso exista, vamos fazer um destructuring para resgatar apenas o valor
          do token, sem o prefixo.
        </p>
        <p>Agora vamos ver o try e catch.</p>
        <p>
          No catch, no caso de erro, vamos apenas retornar um erro de não
          autorizado.
        </p>
        <p>
          No try vamos usar o método do jsonwebtoken verify para desestruturar
          uma das partes que inserimos no token. O nosso token JWT é separado em
          3 partes: O header, o payload e o sub.
        </p>
        <p>
          O sub, nos inserimos quando fazemos login. No tercerio parâmetro que
          passamos para o método sign usamos o subject e a duração do token. O
          subject é o nosso sub, e nele passamo o id do user.
        </p>
        <p>
          O método do verify, vai precisar de dois argumentos. O próprio token,
          foi o que conseguimos do req.headers.authorization e o segundo
          parâmetro é a secretkey.
        </p>
        <p>
          Com o valor do sub(id do user), vamos atribuir ele a uma propriedade
          que vamos criar dentro do objeto req. O req tem várias propriedades e
          métodos como já vimos. Como estamos trabalhando com o typescript, ele
          vai dar erro, pois o user_id não esta na tipagem do req. Para resolver
          isso, vamos ter que adicionar um novo tipo para ele.
        </p>
        <h3>Adicionando nossa tipagem.</h3>
        <p>
          Para fazer isso, vamos primeiro, dentro do src, criar uma pasta @types
          e dentro dela criar outra pasta, que vamos nomear de express, pois o
          tipo que queremos adicionar é dele.
        </p>
        <p>
          Dentro dessa pasta vamos criar um arquivo nomeado assim:{" "}
          <strong>index.d.ts</strong>. Dentro desse arquivo, vamos adicionar o
          seguinte código:
        </p>

        <pre>
          <code>
            {`
declare namespace Express {
  export interface Request {
    user_id: string;
  }
}
              `}
          </code>
        </pre>
        <p>
          Para finalizar, vamos ter que ir no arquivo tsconfig.json e habilidar
          o typesRoots e adicionar o caminho da nosso tipagem. Veja como vai
          ficar:
        </p>
        <pre>
          <code>
            {`
"typeRoots": [
  "./src/@types"
]
            `}
          </code>
        </pre>
        <p>
          Agora para concluir nosso middleware, falta apenas chamar o next, pois
          já temos certeza que o token foi passado e também já inserimos na
          nossa requeste um atributo com o id do usuário.
        </p>
        <h3>Ultilizando middleware</h3>
        <p>
          Agora que nosso middleware está criado, vamos ver como ele seria útil.
        </p>
        <p>
          Vamos criar um outra rota para nossa aplicação. Dentro da nossa pasta
          controller, vamos criar outro arquivo DetailUserController.ts e dentro
          vamos escrever o seguinte código:
        </p>
        <pre>
          <code>
            {`
import { Request, Response } from "express";
import { DetailUserService } from "../../services/user/DetailUserService";

class DetailUserController {
  async handle(req: Request, res: Response) {
    const id = req.user_id;

    const detailUserService = new DetailUserService();

    const user = await detailUserService.execute(id);

    return res.json(user);
  }
}

export { DetailUserController };
            `}
          </code>
        </pre>
        <p>
          É praticamente igual os outros controllers, a diferença é que agora
          temos o user_id disponivel na req e vamos passar para o execute do
          nosso service que vamos criar da seguinte forma:
        </p>
        <pre>
          <code>
            {`
import prismaClient from "../../prisma";

class DetailUserService {
  execute(id: string) {
    const user = prismaClient.user.findFirst({
      where: {
        id: id,
      },
      select: {
        id: true,
        name: true,
        email: true,
      },
    });

    return user;
  }
}

export { DetailUserService };
            `}
          </code>
        </pre>
        <p>
          Nosso service está simplesmente buscando o usuário pelo id que
          passamos no parâmetro e retornando o usuário.
        </p>
        <p>
          Na nossa rota que vai ter uma mudança maior, veja como vai ficar nosso
          arquivo de rotas:
        </p>
        <pre>
          <code>
            {`
import { Router } from "express";

import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { DetailUserController } from "./controllers/user/DetailUserController";
import { isAuthenticated } from "./middlewares/isAuthenticated";

const router = Router();

router.post("/users", new CreateUserController().handle);
router.post("/session", new AuthUserController().handle);
router.get("/me", isAuthenticated, new DetailUserController().handle);

export { router };
            `}
          </code>
        </pre>
        <p>
          Na nossa terceira rota estamos passando como parâmetro para o método
          get 3 argumentos: O caminho, o nosso middleware e por último nosso
          controller.
        </p>
        <p>
          Nosso middleware, só vai permitir que seja acessada nosso rota /me se
          o token for passado e estaja imutavel. Isso pode testado em alguma
          aplicação como o postman.
        </p>
      </div>
      <div className="filter">
        <h3>Usando Multer para adicionar imagens</h3>
        <p>
          No nosso produto, temos o valor banner. Esse valor vai ter o nome da
          imagem que estará em uma pasta do nosso backend. Para fazer isso vamos
          ultilizar a biblioteca multer.
        </p>
        <p>
          Para baixar vamos usar os seguintes comandos:{" "}
          <strong>npm i multer</strong>e <strong>npm i @types/multer -D</strong>
          . Agora vamos configurar nosso multer.
        </p>
        <p>
          Vamos primeiramente criar dentro do nosso diretório src uma pasta
          chamada config, e dentro vamos criar uma pasta chamada multer. Veja o
          código dentro da página:
        </p>
        <pre>
          <code>
            {`
import crypto from "crypto";
import multer from "multer";

import { resolve } from "path";

export default {
  upload(folder: string) {
    return {
      storage: multer.diskStorage({
        destination: resolve(__dirname, "..", "..", folder),
        filename: (request, file, callback) => {
          const fileHash = crypto.randomBytes(16).toString("hex");
          const fileName = '{fileHash}-{file.originalname}';

          return callback(null, fileName);
        },
      }),
    };
  },
};
            `}
          </code>
        </pre>
        <p>
          Estamos importando o crypto, o multer e de dentro do path o resolve.
          Logo abaixo estamos exportando por padrão um objeto que vai ter um
          método chamado upload. Esse método vai receber o nome de uma pasta
          como parâmetro. Vamos criar essa pasta dentro do nosso diretório
          backend. Nesse caso dei o nome de temp.
        </p>
        <p>
          Esse método upload, vai retornar um objeto com apenas uma propriedade:
          o storage. O valor dessa propriedade vai ser nosso multer, vamos usar
          o método diskStorage passando um objeto com duas propriedades:
          destination e filename.
        </p>
        <p>
          Destination vai ter como valor o resolve do path, o resolve vai nos
          informar qual o caminho da pasta que vamos passar. Os parâmetros
          passados são o __dirname (ele representa a diretório onde foi
          declarado), o segundo e o terceiro parâmetro são duas strings, dois
          pontos cada um. Cada dois pontos sai de uma pasta, então estamos
          saindo de duas pastas. E por último é o nome da pasta, que será
          passado como parâmetro para nosso método upload.
        </p>
        <p>
          A propriedade filename vai ser uma função anônima, ela também recebe
          três parâmetros: request (não vamos ultilizar), o file (será o arquivo
          que vamos receber da requisição.) e por último uma callback. Essa
          callback vamos chamar ela como retorno passando null como primeiro
          parâmetro e o nome que vamos dar para nosso arquivo. Nós estamos
          tirando essas configurações da{" "}
          <a
            href="https://www.npmjs.com/package/multer"
            target="_blank"
            rel="noreferrer"
          >
            documentação do multer
          </a>
          .
        </p>
        <p>
          Para criar o nome do arquivo, vamos primeiro passar um valor hash,
          para que sempre que mandemos um arquivo para nosso sistema, ele tenha
          um nome difernte. Então o nome vai ser essa hash e o nome original do
          arquivo.
        </p>
        <h3>Resgatar arquivo da requisição</h3>
        <p>
          Agora vamos criar o product, o service não vai ter nenhuma novidade,
          vamos apenas passar para o create do prismaClient o objeto, com os
          valores que o controller vai repassar. O nosso controller vai ter uma
          diferença. Veja:
        </p>
        <pre>
          <code>
            {`
import { Request, Response } from "express";
import { CreateProductService } from "../../services/product/CreateProductService";

class CreateProductController {
  async handle(req: Request, res: Response) {
    const { name, price, description, category_id } = req.body;

    const createProductService = new CreateProductService();

    if (!req.file) {
      throw new Error("Error upload file");
    } else {
      const { filename: banner } = req.file;

      const product = await createProductService.execute({
        name,
        price,
        description,
        banner,
        category_id,
      });

      return res.json(product);
    }
  }
}

export { CreateProductController };
            `}
          </code>
        </pre>
        <p>
          O banner vai ser a única diferença dos outros controllers. Primeiro
          estamos verificando se existe um arquivo no req.file, se não, vamos
          retornar um erro, nós não vamos permitir cadastrar nenhum produto sem
          imagem. Se existir um arquivo, vamos renomear o filename do arquivo
          para banner, assim ele será passado para nosso objeto que enviamos
          para o método execute.
        </p>
        <h3>Usando multer</h3>
        <p>
          No nosso arquivo de rotas vamos configurar o multer para passar á
          nossa rota. Ele vai servir como um middleware. Veja como ficou:
        </p>
        <pre>
          <code>
            {`
import { Router } from "express";
import multer from "multer";

import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { DetailUserController } from "./controllers/user/DetailUserController";

import { CreateCategoryController } from "./controllers/category/CreateCategoryController";
import { ListCategoryController } from "./controllers/category/ListCategoryController";

import { CreateProductController } from "./controllers/product/CreateProductController";

import { isAuthenticated } from "./middlewares/isAuthenticated";

import uploadConfig from "./config/multer";

const router = Router();

const upload = multer(uploadConfig.upload("./temp"));

router.post("/users", new CreateUserController().handle);
router.post("/session", new AuthUserController().handle);
router.get("/me", isAuthenticated, new DetailUserController().handle);

router.post(
  "/category",
  isAuthenticated,
  new CreateCategoryController().handle
);
router.get("/categories", isAuthenticated, new ListCategoryController().handle);

router.post(
  "/product",
  isAuthenticated,
  upload.single("file"),
  new CreateProductController().handle
);

export { router };
            `}
          </code>
        </pre>
        <p>
          Na segunda linha estamos importando o multer, e nossa última
          importação é a configuração que fizemos do mesmo.
        </p>
        <p>
          Logo abaixo do nosso router, estamos atribuindo a uma constante upload
          o multer, passando como parâmetro a nosso método que criamos na
          confiração do multer. O nosso método vai precisar do nome da pasta
          onde será armazenada as imagens, nós passamos o ./temp.
        </p>
        <p>
          Agora na hora de criar a rota, vamos passar o caminho, o middleware de
          autenticação, o nosso mais novo middleware do multer e por último
          nosso controller.
        </p>
      </div>
      <div className="filter">
        <h3>Buscar vários dados</h3>
        <p>
          Até agora vimos como buscar o um dado por vez com o findFirst do
          prismaClient. Para buscar vários documentos de uma vez, vamos usar o
          método findMany.
        </p>
        <p>
          Vamos criar mais um arquivo no nosso diretório product. Esse vai ser
          para buscar produtos por categorias. O nome que dei foi:
          ListByCategoryService e ListBayCategoryController.
        </p>
        <p>
          O controller vamos ter uma difernça, pois vamos pegar o valor para
          passarmos para nosso service do query da requisição. Veja:
        </p>
        <pre>
          <code>
            {`
import { Request, Response } from "express";
import { ListByCategoryService } from "../../services/product/ListByCategoryService";

class ListByCategoryController {
  async handle(req: Request, res: Response) {
    const category_id = req.query.category_id as string;
    const listByCategoryService = new ListByCategoryService();

    const list = await listByCategoryService.execute(category_id);

    return res.json(list);
  }
}

export { ListByCategoryController };
            `}
          </code>
        </pre>
        <p>
          Quando recebemos o valor da query da requisição, o typescript não sabe
          qual tipo será, então estamos passando a notação as string para
          afirmar que esse valor vai ser uma string.
        </p>
        <p>
          No nosso service que vamos ultilizar o método findMany para buscar
          vários dados de uma vez. Veja:
        </p>
        <pre>
          <code>
            {`
import prismaClient from "../../prisma";

class ListByCategoryService {
  async execute(category_id: string) {
    const findByCategory = await prismaClient.product.findMany({
      where: {
        category_id: category_id,
      },
    });

    return findByCategory;
  }
}

export { ListByCategoryService };
            `}
          </code>
        </pre>
      </div>
      <div className="filter">
        <h3>Deletar dados</h3>
        <p>
          O nosso projeto vai ter mais duas tabelas: orders e items. Criamos
          assim no nosso arquivo schema.prisma:
        </p>
        <pre>
          <code>
            {`
model Order{
  id String @id @default(uuid())
  table Int
  status Boolean @default(false)
  draft Boolean @default(true)
  name String?
  create_at DateTime? @default(now())
  update_at DateTime? @default(now())

  @@map("orders")
  items Item[]
}

model Item{
  id String @id @default(uuid())
  amount Int
  create_at DateTime? @default(now())
  update_at DateTime? @default(now())

  order Order @relation(fields: [order_id], references: [id])
  product Product @relation(fields: [product_id], references: [id])

   @@map("items")
   order_id String
   product_id String
}
            `}
          </code>
        </pre>
        <p>
          Nossa tabela orders, além do create e update (valores padrões de todas
          as tabelas) vai ter uma table (onde vamos passar o número da mesa),
          status (vai informar se o pedido foi concluído ou não), draft (vai
          servir como um parâmetro para saber se a ordem, vai, ou não, aparecer
          para ser preparado o pedido) e name (vai ser um valor opcional, caso
          queira pegar o nome do cliente).
        </p>
        <p>
          O status vai ter o valor false como padrão, pois vai ser concluído
          posteriormente (quando o cliente pedir a conta). E o draft vai ter o
          valor true, pois caso seja passado para false, quer dizer que a ordem
          já foi mandada para cozinha e não é mais um rascunho.
        </p>
        <p>
          Por último, vai ter uma foren key de items, para sabermos quais serão
          os itens do pedido, vamos passar para a order o id dos itens que o
          cliente pedir.
        </p>
        <p>
          A tabela items vai ter apenas o amount(quantidade de produtos que cada
          item lançado). Vai ter duas foren keys. O order_id(é a ordem que esse
          item pertence ) e product_id (o produto é o item em si).
        </p>
        <h4>Método delete</h4>
        <p>
          Quando criarmos uma ordem e o cliente desistir de pedir, vamos ter que
          deletar o pedido criado.
        </p>
        <p>
          Vamos criar um controller com o seguinte nome:
          DeleteOrderController.ts, nesse arquivo não vai ter nada de novo,
          vamos apenas pegar o order_id, será recebido do req.query, Veja:
        </p>
        <pre>
          <code>
            {`
import { Request, Response } from "express";
import { RemoveOrderService } from "../../services/order/RemoveOrderService";

class RemoveOrderController {
  async handle(req: Request, res: Response) {
    const order_id = req.query.order_id as string;

    const removeOrderService = new RemoveOrderService();

    const order = await removeOrderService.execute(order_id);

    return res.json(order);
  }
}

export { RemoveOrderController };
            `}
          </code>
        </pre>
        <p>
          No service que iremos ultilizar o método delete do prismaClient. Veja:
        </p>
        <pre>
          <code>
            {`
import prismaClient from "../../prisma";

class RemoveOrderService {
  async execute(order_id: string) {
    const order = await prismaClient.order.delete({
      where: {
        id: order_id,
      },
    });

    return order;
  }
}

export { RemoveOrderService };
            `}
          </code>
        </pre>
        <p>
          Nosso projeto tem a funcionalidade de adicionar e deletar itens de uma
          order, já vimos como fazer esses funcionalidades, de criar e deletar
          dados em uma tabela. Então não vou mostrar nessas anotações como
          fazer. Mas caso queira ver como, vá no nosso{" "}
          <a href="#" target="_blank" rel="">
            repósitorio do projeto.
          </a>
        </p>
      </div>
    </div>
  );
}
