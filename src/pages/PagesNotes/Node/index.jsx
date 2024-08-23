import { Link } from "react-router-dom";

export default function Github() {
  return (
    <div className="pages-notes-text">
      <div className="filter">
        <h2>O que é Node js</h2>
        <p>
          Node.js é um ambiente que permite a execução de código javascript fora
          do navegador. É ultilizado para construir e consumir APIs (back-ends).
          O Node possui apenas um núcleo (single-threaded), mas suporta várias
          operações simultâneas (non-blocking), onde podemos ter várias
          requisições e o Node vai conseguir atender todas e entregar quando a
          requisição estiver pronta. Tem um uso baixo de memória, que facilita
          na hora de colocar uma aplicação no ar e por isso não precisar gastar
          tanto para manter uma aplicação. Tambem tem muita harmonia com o
          front-end, pois ambos ultilizam javascript. Todas essas
          caracteristicas fazem com que o Node.js seja rápido, escalavel e
          consequêntemente muito forte no mercado.
        </p>
      </div>

      <div className="filter">
        <h2>Sistema de módulos</h2>
        <p>
          O node funciona com <strong>módulos</strong> (módulos são pastas com
          arquivos que tem funcionalidades). Temos três tipos de módulos. Os que
          vem por padrão no node, como o path, o fs e o http. Tem os módulos de
          terceiros, como por exemplo o express, o nodemon, o axios e muitos
          outros. E também podemos fazer nossos próprio módulos.
        </p>
      </div>

      <div className="filter">
        <h2>npm</h2>
        <p>
          O npm é o gerenciador de pacotes do node. Essa ferramenta vai deixar
          sua aplicação organizada e otimizada. O npm hospeda milhares de
          módulos grátis que você pode baixar e usar nas suas aplicações. O npm
          é baixado quando você baixa o node.js na sua máquina.
        </p>
      </div>

      <div className="filter">
        <h2>Package.json</h2>
        <h3>Para iniciar</h3>
        <p>
          Package.json é um arquivo de configuração para seu projeto, vai lhe
          auxiliar em deixar suas bibliotecas e frameworks atualizados e/ou com
          as suas versões desejadas. Para criar seu arquivo package.json basta
          dar o comando no terminal <strong>npm init</strong>. O node vai lhe
          fazer algumas perguntas de configurações, mas como são muito simples
          de serem alteradas, geralmente usamos no lugar do npm init, o comando{" "}
          <strong>npm init -y</strong> que vai gerar o arquivo com configurações
          padrões.
        </p>
        <h3>Scripts</h3>
        <p>
          O package.json vai te auxiliar em usar suas dependências com os{" "}
          <strong>scripts</strong> (são formas de chamar alguma dependência
          configurada) e podemos usar essa configuração com um comando simples,
          como npm <strong>start</strong>, (é uma palavra reservada do node), ou
          caso preferir você pode usar qualquer nome que queira dar pro seu
          script. Caso use uma palavra reservada, como o start, basta apenas
          executar o comando <strong>npm start</strong>, que seu script vai
          funcionar. Se caso você quiser dá um nome aleatório você vai precisar
          usar o <strong>run</strong> para chamar seu script. Vamos exemplificar
          usando um script com o nome dev, que não é uma palavra reservada. Esse
          script só vai rodar caso chame da seguinte forma:{" "}
          <strong>npm run dev</strong>. Para ver como funciona na prática os
          scripts vá para a parte de módulos de terceiros e veja como usamos uma
          biblioteca chamada nodemon.
        </p>
        <h2>Módulos de terceiros</h2>
        <h3>Como baixar</h3>
        <p>
          Os módulos de terceiros são baixados com o npm, o gerenciador de
          pacotes do node. É muito simples baixar módulos com o npm. Só
          precisamos usar o comando <strong>npm install</strong> e em seguida o
          nome da biblioteca ou framework que queremos baixar para nosso
          projeto. (Ou <strong>npm i</strong> é o nome do módulo, que é uma
          forma abreviada.)
        </p>
        <article>
          <h3>Observação</h3>
          <p>
            Caso baixe um pacote com o npm sem ter criado o package.json antes,
            não tem problema. O arquivo package.json, packege-lock.json que
            serve para deixar as dependências baixadas na versão correta e a
            pasta node_modules serão adicionados ao seu projeto normalmente.
          </p>
        </article>
        <h3>node_modules</h3>
        <p>
          Quando baixamos alguma dependência, a pasta node_modules é criada para
          armazenar essa dependência no seu projeto. Essa pasta é muito grande e
          não precisamos mandar ela para o repositório remoto, pois é muito
          simples de baixar as dependências que estão no arquivo package.json
          com o comando <strong>npm i</strong>.
        </p>
        <h3>.gitignore</h3>
        <p>
          Para ignorarmos a pastas que não queremos mandar para o repositório
          remoto, criamos um arquivo nomeada como .gitignore na raiz do projeto.
          Para adicionamos as pastas e ou arquivos que queremos ignorar vamos
          apenas escrever o nome nessa pasta lá dentro. Como exemplo vamos
          adicionar o node_modules e pronto. Esse arquivo não será enviado para
          seu repositório remoto.
        </p>
        <h3>baixando globalmente</h3>
        <p>
          Também podemos baixar as dependências globalmente usando o{" "}
          <strong>npm i -g</strong> e em seguida o nome da dependência. Baixar
          globalmente quer dizer que todos os seus projetos terão essa
          dependência disponível para ultilizar, pois não será adicionada apenas
          na pasta node_modules do seu projeto e sim em outra paste que basta
          chamar o nome no terminal e será atendido seu comando.
        </p>
      </div>

      <div className="filter">
        <h2>Importar</h2>
        <h3>require</h3>
        <p>
          Já vimos como baixar dependências de terceiros, agora vamos importar
          essas dependências para conseguirmos ultiliza-las. O método require
          faz esse trabalho para nós. Vamos exemplificar usando o lodash ,uma
          biblioteca muito conhecida e utilizada. Vamos baixa-la usando o
          comando <strong>npm i lodash</strong> e esperamos baixar todos os
          pacates. Agora precisamos importar essa dependência. Seria assim:
        </p>
        <pre>
          <code>
            {`
const lodash = require('lodash')
            `}
          </code>
        </pre>
        <p>
          Uma sintaxe muito simples. Atribuímos a uma constante o nome do módulo
          e em seguida chamamos o método require com o nome do módulo que
          queremos como parâmetro. Geralmente usamos o mesmo nome do pacote na
          constante.
        </p>
        <article>
          <h3>Obsevação</h3>
          <p>
            Perceba que o require recebe o nome do pacote sem o caminho
            relativo. Isso acontece porque a pasta do módulo tem o arquivo
            índex. Então já fica de fica quando formos fazer nossos próprios
            módulos usarmos o nome do arquivo principal como índex para podermos
            usar essa sintaxe mais enxuta.
          </p>
        </article>
        <article>
          <h3>Observação</h3>
          <p>
            As dependências que são instaladas tem sua versão informada. Assim:{" "}
            <strong>"express": "^4.18.2"</strong>. Normalmente será assim: um
            sinal e uma sequêcia com três números. O primeiro número é o minor,
            o segundo é o major e o último o fix. o sinal que está no exemplo é
            o circunflexo. Isso quer dizer que a versão da sua dependencia
            poderar atualizar automaticamente o mejor até a versão 99, mas não
            poderar atualizar o minor que é o primeiro número.
          </p>
          <p>
            Podemos alterar o sinal das nossas dependências usando o ~ no lugar
            do ^. Alterando só irá atualizar automaticamente a versão do
            fix.(segundo número) E se não usar nenhum sinal, quer dizer que só
            será usada a versão informada e o package.json vai sempre permanecer
            com essa versão.
          </p>
          <p>
            Tambem podemos informar qual versão queremos baixar para nossa
            aplicação. veja o exemplo:
            <strong>npm i --save-dev axios@0.27.2 -E</strong>. Nesse comando,
            estamos informando qual a dependencia que queremos baixar, depois o
            sinal @, logo em seguida a versão(são a sequência de três números) e
            por ultimo o -E para informar que queremos installar exatamente a
            versão passada.
          </p>
        </article>
      </div>

      <div className="filter">
        <h2>Módulos próprios</h2>
        <h3>modules.exports</h3>
        <p>
          O module.exports é o objeto que vai deixar variáveis, constantes,
          funções objetos e arrays disponíveis para importarmos em outro
          arquivo. Temos três formas de referenciar esse objeto. O this, o
          exports e o próprio modules.exports. Vamos exemplificar. Se criarmos
          um arquivo com o nome exports.js e escrevermos as seguintes linhas de
          código:
        </p>
        <pre>
          <code>
            {`
this.a = 1
exports.b = 2
module.exports.c = 3
            `}
          </code>
        </pre>
        <p>
          Essas três propriedades a, b e c estarão disponíveis para exportarmos
          em outros arquivos do nosso projeto.
        </p>
        <p>
          Continuando com o exemplo, vamos criar outro arquivo com o nome
          import.js e escrever o seguinte código:
        </p>
        <pre>
          <code>
            {`
const exports = require('./exports')
console.log(exports)
            `}
          </code>
        </pre>
        <p>Vamos receber como resposta do nosso console.log o seguinte:</p>
        <pre>
          <code>
            {`
a: 1, b: 2, c: 3
            `}
          </code>
        </pre>
        <p>
          Vemos que as atribuições feitas pelas três formas de referenciar o
          módulo foram adicionadas ao objeto.
        </p>
        <article>
          <h3>Observação</h3>
          <p>
            caso passe para o this ou para o exports um novo objeto. O módulo
            não será alterado, pois esses são apenas referências ao objeto. Para
            atribuir um novo abjeto ao módulo precisaríamos usar o
            module.exports que é o objeto realmente.
          </p>
        </article>
      </div>

      <h2>Módulos pre-instalados</h2>

      <div className="filter">
        <h3>Módulo path</h3>
        <p>
          O path é uma das dependências pre-instaladas do Node mais importantes.
          Para vermos sua ultilização, vamos criar uma pasta chamada modules e
          dentro dessa pasta vamos criar um arquivo chamado path.js. Como já vem
          instalada, podemos já importar para esse arquivo o path da seguinte
          forma:
        </p>
        <pre>
          <code>
            {`
const path = require('path'))
            `}
          </code>
        </pre>
        <article>
          <h3>Observação</h3>
          <p>
            Veja que o caminho passado para o path está apenas o 'path' sem o
            caminho relativo. Só está com essa sintaxe simplificada pois os
            módulos pre-instalados estão disponiveis no próprio Node.
          </p>
        </article>
        <p>
          path significa caminho em português e é isso que o path vai nos
          informar. Com métodos simples vamos saber em qual pasta está o
          arquivo, o diretório do projeto, as extenções dos arquivos entre
          outras coisas.
        </p>
        <p>
          O Node tem algumas variaveis globais, aqui vamos conhecer uma.{" "}
          <strong>__filename</strong>. Essa variavel é o nome do arquivo que
          está sendo executado. Para entender melhor vamos fazer o seguinte
          script no nosso aquivo path.js:
        </p>

        <pre>
          <code>
            {`
console.log(path.basename(__filename))
            `}
          </code>
        </pre>
        <p>
          Aqui vamos passar para o path a função <strong>basename</strong> que
          serva para obter o nome do arquivo atual. Como parâmetro vamos passar
          o __filename que dirá em qual arquivo está sendo declarada essa
          variavel(no caso é no arquivo path.js).
        </p>
        <p>
          Já para saber em qual diretório estamos, vamos ter que usar a função{" "}
          <strong>dirname</strong>, passando o __filename como parâmetro para
          informar em qual arquivo que estamos. Essa linha de código irá
          retornar o diretório da pasta em que estamos.
        </p>
        <pre>
          <code>
            {`
console.log(path.dirname(__filename))
            `}
          </code>
        </pre>
        <p>
          Para ver as extenções dos nossos arquivos tambem é muito fácil com o
          path. Basta que passemos o método <strong>extname</strong> tambem com
          o __filename como parâmetro.
        </p>
        <pre>
          <code>
            {`
console.log(path.extname(__filename))
            `}
          </code>
        </pre>
        <p>
          Podemos criar um objeto com informações do nosso arquivo se fizermos
          esse código:
        </p>
        <pre>
          <code>
            {`
console.log(path.parse(__filename))
            `}
          </code>
        </pre>
        <p>
          O Node.js vai nos retornar um objeto com as principais informações do
          nosso arquivo. Basta usarmos o método <strong>parse</strong> com o
          __filename como parâmetro.
        </p>
        <p>
          O path tambem pode juntar caminhos de arquivos com o método{" "}
          <strong>join</strong>. Aqui vamos conhecer mais uma variável do Node o{" "}
          <strong>__dirname</strong> que vai armazenar o diretório onde está
          sendo declarado.
        </p>
        <p>
          Para o método join vamos passar __dirname como parâmetro e o que
          queremos juntar com o diretório passado(o __dirname é o diretorio
          atual). veja o exempli abaixo:
        </p>
        <pre>
          <code>
            {`
console.log(path.join(__dirname, 'teste', teste.html))
            `}
          </code>
        </pre>
        <p>
          Nesse exemplo o join irá retornar o diretório atual e passar uma pasta
          e um arquivo para esse diretório. O Node.js retornará:
          <strong>C:\estudos\modules\teste\teste.html</strong>. Esse método vai
          servir para criarmos pastas com outro método muito importante que já
          vem pré-instalado no Node, o <strong>fs</strong>.
        </p>
      </div>
      <div className="filter">
        <h3>Módolo fs</h3>
        <p>
          Esse método vai nos permitir manipular arquivos, vamos poder criar,
          ler, renomear arquivos entre outras coisas. Para vermos como
          ultiliza-lo vamos criar um arquivo chamado fs.js na pasta metodos que
          criamos. Nesse arquivo vamos inportar tanto o fs quanto o path que é
          nessesário para ultilizar o fs.
        </p>
        <pre>
          <code>
            {`
const fs = require('fs')
const path = require('path')
            `}
          </code>
        </pre>
        <p>
          Para começar vamos criar uma pasta usando um método do fs chamado{" "}
          <strong>mkdir</strong>. Aqui vamos precisar do método join do path.
          Como primeiro argumento do join vamos usar o diretório de onde
          queremos criar a pasta e como segundo argumento vamos passar o nome da
          pasta que vamos criar. Para finalizar como último argumento do mkdir
          vamos usar uma callback para tratar erros. Veja o exemplo:
        </p>
        <pre>
          <code>
            {`
fs.mkdir(path.join(__dirname, '/teste'), (error) = &gt; const msg =
error ? console.log(error) : console.log('Pasta criada!'))
            `}
          </code>
        </pre>

        <p>
          Nesse exemplo vemos que foram passados dois parâmetros para o método
          mkdir o path com o caminho que queremos construir e uma callback que
          recebe um erro e retorna um console.log.
        </p>
        <p>
          Essa linha de código vai ser mostrar a mensagem que passamos de Pasta
          criada! no nosso terminal e se você for na pasta modules que foi o
          diretório onde escrevemos a linha de código. Verá que foi criada uma
          pasta com o nome teste, que foi o nome que passamos para o método join
          do path.
        </p>
        <p>
          Caso salve novamento o arquivo index.js, verá uma menssagem de erro.
          Pois a pasta que quer criar já existe. Então a callback que trata o
          erro mostrará a mensagem criada para a situação.v
        </p>
        <p>
          Para criar um arquivo é bem parecido de como criar uma pasta. Vamos
          mudar o método para o<strong>writeFile</strong> e passar três
          parârametros: Local onde quer criar a pasta é o primeiro parâmetro, e
          é passado com o path novamente, sendo o primeiro parâmetro do path o
          diretório, o segundo é o nome da pasta(Esse é opcional) e o terceiro o
          nome do arquivo que quer criar. O segundo parâmetro passado para o
          método writeFiler é o conteúdo do arquivo e por último é uma callback
          para tratar erros. Veja o exemplo a seguir.
        </p>
        <p>
          Agora se for para a pasta teste que está na pasta modulos verá que
          dentro dela existe um arquivo HTML que nele tem o conteúdo passado
          para a função writeFile.
        </p>
        <p>
          Caso altere o conteúdo do arquivo que está criando para Conteúdo do
          arquivo 2! e salvar. Verá que foi sobreescrito o antigo por esse novo.
          Se quisermos adicionar um conteúdo a um arquivo vamos usar outro
          método. O <strong>AppendFile</strong>, que será igual o writeFile na
          sintaxe, só que irá ser adicionado o conteúdo e não sobreescrito. Veja
          como foi feito o código e o resultado no arquivo:
        </p>
        <p>Esse é o resultado: Conteudo do arquivo!Hello word!!!</p>
        <p>Veja que foi adicionado o conteúdo novo como esperado.</p>
        <p>
          Agora vamos ler um arquivo. Para isso vamos usar o método{" "}
          <strong>readFile</strong>. Aqui vamos passar o arquivo que queremos
          ler com o path no primeiro argumento, no segundo parâmetro vamos
          passar o sistema de caracteres que está sendo usado no arquivo, no
          caso será o utf8 e por último vamos passar uma callback com dois
          argumentos: error que usaremos para informar qual erro com a nossa
          callback e data que é o conteúdo retornado pela função. Veja o
          exemplo:
        </p>
        <p>
          Aqui será retornado para nós o que está escrito no arquivo passado com
          o path. Esse será o resultado: Conteudo do arquivo!Hello word!!!
        </p>
      </div>
      <div className="filter">
        <h3>Método HTTP</h3>
        <p>
          O Node.js tem o método HTTP pré-instalado e vamos usa-lo agora para
          construir um pequeno back-end. Como já sabemos temos que primeiro
          importar esse método. Nossa próxima linha de código será declarando
          uma porta. Porta servirá para informar para nossa máquina onde vamos
          rodar esses processos que serão passados no nosso back-end.
        </p>

        <p>
          Nosso próximo passo será atribuir para uma constante nosso método http
          e chamar a função
          <strong>createServer</strong> que receberar como parâmetro uma
          callback que tem dois argumentos: o<strong>request</strong> é o objeto
          da requisição que será mandado para o servidor e retornará o segundo
          parâmetro da nossa callback o <strong>response</strong> que é o objeto
          da resposta, onde teremos vários métodos disponiveis para trabalhar
          nossa aplicação.
        </p>
        <p>
          Agora vamos começar a passar requisições para nosso back-end. Vou
          fazer uma condição:
        </p>
        <p>
          veja que na condição passada temos o <strong>req.url</strong> que
          representa a url da requisição que estamos mandando para o servidor.
          Então se for exatamente igual /home a requisição retornará com o{" "}
          <strong>res.end</strong> qualquer coisa que queira retornar(basta que
          esteja em formato de string). Nesse caso estamos mandando como
          resposta um HTML com a tag de titulo com Home Page!!! Tambem vemos a
          função res.writeHead que serve para informar tanto o status da
          requisição quanto o content-type que está sendo enviado. Assim
          evitamos erros.
        </p>
        <p>
          Para testarmos vamos primeiro usar o método <strong>listen</strong> do
          http com a porta que declaramos no começo do código e como segundo
          parâmetro uma callback retornando uma string informando que o servidor
          está rodando. Vejá como foi feito:
        </p>
        <p>
          Agora basta salvar esse arquivo que o nodemon vai reiniciar a
          aplicação e podemos ir no nosso navegador acessar o
          localhost:8080/home que vai está retornando o HTML informado.
        </p>
        <p>
          Agora vamos passar como resposta uma lista de usuários em formato
          json, mas o res.end não vai conseguir ler corretamente esse json,
          então vamos dar um parser nesse json com a função JSON.stringify e o
          código irá ficar da seguinte forma:
        </p>
        <p>
          Se acessarmos agora o localhost:8080/users vamos ver que estará
          retornando os usuários corretamente.
        </p>
        <p>
          Usamos o back-end geralmente para enviar json com dados para
          trabalharmos, mas de api de terceiros de um banco de dados.
        </p>
      </div>
      <div className="filter">
        <h2>Express</h2>
        <p>
          Criamos uma aplicação backend usando Node, Typescript e usando como
          banco de dados o postgre em conjunto com o Prisma ORM. Então caso
          queira ver como funciona o express, vá nas anotações
          <Link onClick={() => window.scroll(0, 0)} to={"/pages-notes/prisma"}>
            Prisma
          </Link>
        </p>
      </div>
    </div>
  );
}
