import RenderReact from "../../../components/ExemplesReact/RenderReact";
import ClassComponent from "../../../components/ExemplesReact/ClassComponent";
import CicleLife from "../../../components/ExemplesReact/CicliLife";
import CicleLifeUpdate from "../../../components/ExemplesReact/CicliLifeUpdate";
import Member from "../../../components/ExemplesReact/Member";
import RendenConditional from "../../../components/ExemplesReact/RenderConditional";
import RenderArrays from "../../../components/ExemplesReact/RenderArrays";
import RenderForm from "../../../components/ExemplesReact/RenderForm";
import UseState from "../../../components/ExemplesReact/UseState";
import UseEffect from "../../../components/ExemplesReact/UseEffect";
import Api from "../../../components/ExemplesReact/Api";
import ExempleRoute from "../../../components/ExemplesReact/ExempleRoutes";
import ExempleContextApi from "../../../components/ExemplesReact/ExempleContextApi";

export default function React() {
  return (
    <div className="pages-notes-text">
      <div className="filter">
        <h2>Criando projeto</h2>
        <p>
          Para criar um projeto react, temos que ter instalado o node.js na
          nossa maquina, pois vamos ultilizar o npx que é do gerenciador npm do
          node. Com o node instalado vamos abrir nosso terminal e dar o comando
          <strong>npx create-react-app ''</strong>e dentro das aspas dar o nome
          do projeto. Vamos esperar baixar todas as dependências e em seguida
          vamos entrar no projeto criado e dar o comando npm start para abrir o
          projeto no nosso navegador. Veja o exemplo:
        </p>
        <p>
          <strong>npx create-react-app 'my-app'</strong> em seguida vamos entrar
          no projeto criado <strong>cd my-app</strong> e por último vamos
          inicializar com o comando <strong>npm start</strong>
        </p>
        <p>Seu projeto será criado com varias pastas e arquivo.</p>
        <div className="div-img">
          <img
            className="img-p"
            src={require("../../../assets/imgs/imgsReact/img-react-1.png")}
            alt=""
          />
        </div>
        <p>
          Podemos apagar grande parte desses arquivos. No meu caso deixo apenas
          na pasta src o Arquivo App.js e o index.js que está renderizando o
          arquivo App.js.
        </p>
      </div>

      <div className="filter">
        <h2>Para que serve o React</h2>
        <p>
          O React veio para melhorar a forma de programar o front-end das
          aplicações web. Tornando mais prático e inteligente a forma de fazer
          códigos usando JSX, uma forma de programar com JavaScript e HTML em
          componentes reultilizavéis e bem mais intuitivos.
        </p>
      </div>
      <div className="filter">
        <h2>Componentes</h2>
        <p>
          São funções ou classes que retornam <strong>jsx</strong>. (é quando
          retornamos JavaScript com HTML no mesmo código) Para fazermos um
          componente temos algumas regras.
          <ul>
            <li>
              O nome da função ou classe tem que começar com letra maiuscula.
            </li>
            <li>
              Se não for uma função arrow com apenas um elemento HTML o return é
              obrigatório e o mesmo só vai funcionar abrindo e feichando os
              parêntesis.
            </li>
            <li>
              Para retornar mais de um elemento HTML precisamos ter um elemento
              HTML envolvendo esses elementos.
            </li>
            <li>Qualquer erro de HTML vai dar erro na sua aplicação.</li>
            <li>Todo código JavaScript é usado dentro de chaves no jsx.</li>
          </ul>
        </p>
      </div>

      <div className="filter">
        <h2>Componente estático</h2>
        <p>
          O statless Component é um componente que não usa{" "}
          <strong>state</strong> nem <strong>Ciclo de vida</strong>. É usado
          basicamente para mostrar algo na tela.
        </p>
        <p>
          Veja aqui um componente usando uma função arrow, o único que não
          precisar do return, pois está retornando apenas um único elemento :
        </p>
        <div className="div-img">
          <img
            src={require("../../../assets/imgs/imgsReact/componentFunctionArrow.png")}
            alt=""
          />
        </div>
        <p>
          Veja aqui uma função que tem que ser passado o return com parêntesis,
          pois será retornado mais de uma linha de código. dentro dos parêntesis
          envolvemos com uma div dois elementos para funcionar.
        </p>
        <div className="div-img">
          <img
            src={require("../../../assets/imgs/imgsReact/componentNoProps.png")}
            alt=""
          />
        </div>
        <p>
          Para usar seu componente que acobou de criar, temos que ultilizar como
          se fosse uma tag HTML. Veja o exemplo:
        </p>
        <div className="div-img">
          <img
            src={require("../../../assets/imgs/imgsReact/componentUsed.png")}
            alt=""
          />
        </div>
        <p>O resultado aqui seria o que está na função Person passada.</p>
        <p>
          Uma das principais ultilidades do react é poder usar varias vezes o
          mesmo componente. veja o que podemos fazer:
        </p>
        <div className="div-img">
          <img
            src={require("../../../assets/imgs/imgsReact/componentReUsed.png")}
            alt=""
          />
        </div>
        <p>
          Assim sera mostrado no DOM da sua aplicação duas veses o que esta no
          componenete. E você pode repetir quantas vezes quiser.
        </p>
        <p>
          Mas não é muito reutilizável um componente que so repete tudo
          igualzinho. Por isso temos os props
        </p>
      </div>

      <div className="filter">
        <h2>Props</h2>
        <p>
          Props é o objeto que vamos referenciar para conseguirmos usar as
          propriedades que passarmos para nossos componentes.
        </p>
        <p>
          Propriedades de um componente são quaisquer dados que queira passar
          para o componente. Veja esse exemple de propriedades passadas:
        </p>
        <div className="div-img">
          <img
            src={require("../../../assets/imgs/imgsReact/componentPropriedades.png")}
            alt=""
          />
        </div>
        <p>
          Veja que estão sendo passadas três propriedades para cada componente.
          Para usarmos essas propriedades vamos fazer assim:
        </p>
        <div className="div-img">
          <img
            src={require("../../../assets/imgs/imgsReact/componentProps.png")}
            alt=""
          />
        </div>
        <p>
          Passamos o props como argumento para função e usamos a anotação pronto
          para adiquirir cada uma das propriedades. Assim é muito mais
          reutilizáve cada componente. Veja o resultado abaixo o componente
          criado:
        </p>
        <div className="exemple">
          <RenderReact name="Humberto" office="Programador" age="25" />
          <RenderReact name="Fernanda" office="Professora" age="25" />
        </div>
      </div>

      <div className="filter">
        <h2>Class Component</h2>
        <p>
          O segundo tipo de componente é o class component, que vai usar metódos
          para ser mais interativo e mais inteligente.
        </p>
        <p>
          Para usarmos uma class no react precisamos primeiro importar o{" "}
          <strong>Component</strong>. Vamos importar assim no comoço do arquivo:
        </p>
        <div className="div-img">
          <img
            src={require("../../../assets/imgs/imgsReact/importComponent.png")}
            alt=""
          />
        </div>
        <p>
          Agora vamos criar nossa classe. O Component importado é o que será
          usado para o extends da nossa classe. Obrigatoriamente precisamos usar
          o método render para renderizar o nosso jsx no DOM. Veja como ficou:
        </p>
        <div className="div-img">
          <img
            src={require("../../../assets/imgs/imgsReact/classComponentRender.png")}
            alt=""
          />
        </div>
        <p>
          A classe tem as propriedades dentro dela por conta do Component que
          importamos. Para usarmos as propriedades dos componentes basta que
          usemos o <strong>this.props</strong> ele vai referênciar o objeto das
          propriedades.
        </p>
        <div className="div-img">
          <img
            src={require("../../../assets/imgs/imgsReact/classComponentProps.png")}
            alt=""
          />
        </div>
      </div>

      <div className="filter">
        <h2>States em Classes</h2>
        <p>
          Vimos que props são valores estáticos passados como parâmetro para os
          componentes. O State é o estado do componente, que diferente das props
          (propriedades) podem ser alteradas. Então as States são dinâmicas.
        </p>
        <p>
          Para usarmos states nas classes vamos ter que declarar o constructor e
          o super desse constructor passando o props como argumento dos dois.
          Veja:
        </p>
        <div className="div-img">
          <img
            src={require("../../../assets/imgs/imgsReact/stateClassConstructor.png")}
            alt=""
          />
        </div>
        <p>
          Dentro do constructor vamos passar os states referentes a esse
          componente. Nesse exemplo vamos passar um contador com o valor inicial
          0 (zero). Então vamos apagar o conteúdo que está sendo retornado na
          div para adicionarmos dois botões e o contador no meio deles. A ideia
          é usar um botão para diminuir o contador e o outro para aumentar. Veja
          como ficou:
        </p>
        <div className="div-img">
          <img
            src={require("../../../assets/imgs/imgsReact/stateClassSet.png")}
            alt=""
          />
        </div>
      </div>
      <div className="filter">
        <h3>this.state</h3>
        <p>
          Para passar o state para o constructor usamos o{" "}
          <strong>this.state</strong> e atribuimos a ele um objeto com os
          atributos.
        </p>
        <p>
          Para chamar esses atributos vamos usar a mesma notação ponto passando
          o atributo que desejamos. Nesse caso foi: this.state.contador
        </p>
        <p>
          Como já mencionado o código JavaScript no jsx é usado entre chaves. E
          para aplicarmos funções para os nossos botões, vamos usar o evento
          onClick e pasarmos uma arrow function com a função que desejamos.
        </p>
        <p>
          Certo! Mas onde vamos criar essas funções? Vamos criar as funções
          dentro da nossa classe abaixo do constructor. Nesse caso são
          duas.(diminuir e aumentar).
        </p>
        <div className="div-img">
          <img
            src={require("../../../assets/imgs/imgsReact/stateClassFunctions.png")}
            alt=""
          />
        </div>
        <p>
          Muito simples de criar uma função, basta que dê o nome da função, abra
          e feiche parêntesis e abra e feiche as chaves. Dentro das chaves use o
          código.
        </p>
        <p>
          Aqui estamos primeiro declarando uma variável state passando o
          this.state que é onde está o que queremos alterar (o nosso contador)
          vamos alterar o valor do contador usando a notação ponto, atribuindo a
          lógica desejada.
        </p>
      </div>

      <div className="filter">
        <h3>this.setState</h3>
        <p>
          Por último para conseguirmos alterar de fato nosso state, temos que
          usar o <strong>this.setState</strong> e passarmos nossa variável state
          que foi alterada na lógica da função.
        </p>
        <p>
          Para adicionar a função para o onClick temos duas maneiras. A primeira
          é usando o metódo <strong>bind</strong>. Vamos usar com a função
          diminuir.
        </p>
        <p>
          Primeiro vamos dentro do constructor, abaixo do this.state e vamos
          declarar o this.diminuir e atribuir o this.diminuir.bind(this). Assim
          vamos deixar claro para a class que a função diminuir tem a própria
          classe como escopo da função. Veja:
        </p>
        <div className="div-img">
          <img
            src={require("../../../assets/imgs/imgsReact/stateClassFunctionsBind.png")}
            alt=""
          />
        </div>
        <p>
          Agora é só passar para o metódo onClick a função diminuir da seguinte
          forma:
        </p>
        <div className="div-img">
          <img
            src={require("../../../assets/imgs/imgsReact/stateClassFunctionsBindOnclick.png")}
            alt=""
          />
        </div>
        <p>
          A segunda forma é bem mais simples. A arrow function não vai variar o
          this, então basta que passemos para o onClick uma função arrow da
          seguinte maneira:
        </p>
        <div className="div-img">
          <img
            src={require("../../../assets/imgs/imgsReact/stateClassFunctionsArrowOnclick.png")}
            alt=""
          />
        </div>
        <p>Veja abaixo o que foi criado:</p>
        <div className="exemple div-buttons">
          <ClassComponent />
        </div>
        <p>
          Clicando o elemento será alterado. Isso só acontece porque o State é
          dinâmico, conseguimos usar o setState para alterar o estado dos
          componentes.
        </p>
      </div>

      <div className="filter">
        <h2>Cliclos de vida de um componente</h2>
        <h3>Inicialização</h3>
        <p>
          Os ciclos de vida de um componente começam na{" "}
          <strong>inicialização</strong> com o constructor no caso das classes.
          O componente nessa fase se prepera configurando os estados e iniciando
          as props padrões, caso existam.
        </p>
        <p>
          Vamos exemplificar criando um componente de mostrar as horas. Temos
          que criar a classe passando para o extends Component importado do
          react, em seguida vamos montar o contructor e o super passando as
          props como argumento e dentro do constructor vamos setar nosso state
          que no caso vai ser uma string com o formato das horas.
        </p>
        <p>
          Como já vimos no caso das classes, sempre teremos que passar o render
          para conseguir renderizar o nosso jsx no DOM. Veja como ficou:
        </p>
        <div className="div-img">
          <img
            src={require("../../../assets/imgs/imgsReact/cicleLifeInitialize.png")}
            alt=""
          />
        </div>
        <h3>Montagem</h3>
        <p>
          O próximo ciclo é o de <strong>Montagem</strong> que é ultilizada
          quando está pronto para ser montado o DOM no navegador. Usamos o
          metódo <strong>componentWillMount()</strong> para todas as coisas que
          vecê deseja fazer antes do componente ser montado.
        </p>
        <p>
          Depois que o componente é montado no DOM temos o método{" "}
          <strong>componentDidMount()</strong> para fazermos ações na nossa
          aplicação. É uma das que mais vamos ultilizar, para consumir apis
          entre outras coisas.
        </p>
        <p>
          Para exemplificar a ultilização dela vamos inicializar a hora que ja
          háviamos declarado anteriormente. Para fazer isso vamos usar o
          setInterval veja como ficou:
        </p>
        <div className="div-img">
          <img
            src={require("../../../assets/imgs/imgsReact/cicleLifeDidMount.png")}
            alt=""
          />
        </div>
        <p>
          Note que para alterar um state que não foi passado para uma variável
          estamos usando o destructuring para referenciarmos o state que
          queremos. Veja o resultado:
        </p>
        <CicleLife />
        <h3>Atualização</h3>
        <p>
          Tem tambem o ciclo de <strong>atualização</strong>, nessa fase existem
          duas formas o <strong>componentDidUpdate()</strong> que vai mudar o
          componente assim que for atualizado. O outro é o{" "}
          <strong>componentWillUpdate</strong> que só é executado quando o{" "}
          <strong>shouldComponentUpdate</strong> retornar true.
        </p>
        <p>
          Para vermos o funcionamento do <strong>componentDidUpdate()</strong>{" "}
          vamos criar uma nova classe assim:
        </p>
        <div className="div-img">
          <img
            src={require("../../../assets/imgs/imgsReact/cicleLifeUpdate.png")}
            alt=""
          />
        </div>
        <p>
          Veja que criamos uma função para atualizar o state update e para o
          método componentDidUpdate passamos para um h4 uma string informando a
          atualização. Click no atualizar para ver atualizar o nome do botão e o
          componentDidUpdate perceber e mostrar a string.
        </p>

        <CicleLifeUpdate />
        <h3>Desmontagem</h3>
        <p>
          Por último temos o ciclo de <strong>Desmotagem</strong> nessa fase o
          componente não é mais necessário e será desmontado com o método{" "}
          <strong>componentWillUnmount()</strong>
        </p>
      </div>

      <div className="filter">
        <h2>Eventos</h2>
        <p>
          Em eventos vamos fazer uma pequena aplicação para conseguirmos
          entender melhor o funcionamento de cada evento. Na verdade vamos ver
          além de eventos, pois vamos entender como organizar os elemtos no
          nosso projeto, como usar props no state entre outras coisas.
        </p>
        <p>
          Vamos começar fazendo nossa classe e importar-la para que nosso
          componente app possa renderizar nossa pequena aplicação.
        </p>
        <div className="div-img">
          <img
            src={require("../../../assets/imgs/imgsReact/eventsCreateClass.png")}
            alt=""
          />
        </div>
        <p>
          Veja como fazer uma classe na aba de <strong>classComponent</strong>.
          Na imagem acima estamos passando o nome para o state de acordo com a
          props recebida que será <strong>Visitante</strong>.
        </p>
        <p>
          Vamos usar no nosso jsx dois botões, um de entrar e outro de sair.
          Para isso vamos usar o evento <strong>onClick</strong> para
          adicionarmos nossas ações.
        </p>
        <p>
          O props nome será visitante e o primeiro botão vai alterar o state
          para Humberto e o segundo botão vai servir tambem para alterar o nome,
          mas dessa vez vamos passar apenas aspas vazias para mostrar apenas o
          Bem-vindo.
        </p>
        <div className="div-img">
          <img
            src={require("../../../assets/imgs/imgsReact/eventsOnclick.png")}
            alt=""
          />
        </div>
        <p>
          Veja que primeiro criamos uma função para alterar o nome que será
          passada para o botão de entrar e para o botão de sair passamos
          diretamento o this.setState para mudar o valor do nome.
        </p>
        <p>
          Podemos passar o nome como parâmetro para a função entrar e no lugar
          de passar o nome diretamente para função como na imagem anterior,
          podemos passar o argumento nome que estamos passando para função.
        </p>
        <p>Assim vamos passar o nome quando chamarmos a função. Veja como:</p>
        <div className="div-img">
          <img
            src={require("../../../assets/imgs/imgsReact/eventsOnclick2.png")}
            alt=""
          />
        </div>
        <p>
          Veja que passamos o nome no evento onClick de entrar e na hora de sais
          passamos o nome visitante que já é o padrão passado na propriedade do
          componente.
        </p>
        <Member nome="Visitante" />
      </div>

      <div className="filter">
        <h2>Renderização Condicional</h2>
        <p>
          Com esse sintaxe podemos mostrar partes do componente, apenas se for
          atendida alguma lógica. Para vermos o funcionamento veja esse exemplo
          de como usar:
        </p>
        <div className="div-img">
          <img
            src={require("../../../assets/imgs/imgsReact/conditionalRendering.png")}
            alt=""
          />
        </div>
        <p>
          Veja que dentro da div tem um código dentro de chaves, esse código
          está verificando se o status(state passada para class) é igual a 1. Em
          seguida vemos o sinal && e uma tag h1, que é o que será renderizado
          caso a verificação seja verdadeira.
        </p>
        <p>
          Como o state tem o valor de 1, o h1 será renderizado, mas caso
          mudassemos para 2 por exemplo, essa parte do componente não seria
          mostrada.
        </p>
        <p>
          Temos outra forma de usar a renderização condicional. Essa é na minha
          opnião, uma forma mais legível de escrever essa funcionalidade. No
          caso é usando o operador ternário, vamos passar para o status um valor
          booleano ao invés de outro tipo. Veja o exemplo:
        </p>
        <div className="div-img">
          <img
            src={require("../../../assets/imgs/imgsReact/conditionalRenderingBoolean.png")}
            alt=""
          />
        </div>
        <p>
          Aqui apenas usamos a própria state como verificação, pois ela tem um
          valor booleano. Vamos usar o sinal de interrogação(?) e se for
          verdadeiro irá retornar a parte do componente que foi escrita depois
          do sinal ?. Se for falso irá retornar a parte depois do sinal dois
          pontos (:)
        </p>
        <p>
          Vamos deixar mais interesante colocando um botão para alterar o valor
          da state. Veja:
        </p>
        <div className="div-img">
          <img
            src={require("../../../assets/imgs/imgsReact/conditionalRenderingExemple.png")}
            alt=""
          />
        </div>
        <p>
          Veja que a função entrar vai alterar o status para diferente do que
          esteja setado, pois passamos o próprio this.states.status com o sinal
          de interrogação na frente (!), e isso faz esse efeito de contrario em
          valores booleanos. Veja abaixo como ficou:
        </p>
        <RendenConditional />
      </div>

      <div className="filter">
        <h2>Trabalhando com Arrays</h2>
        <p>
          Para exemplificar vamos construir uma pequena base de usuárions, ou
          seja um array com vários objetos que serão nossos usuários. Assim:
        </p>
        <div className="div-img">
          <img
            src={require("../../../assets/imgs/imgsReact/arrayObjectsList.png")}
            alt=""
          />
        </div>
        <p>
          Para conseguir renderizar nossos users vamos usar o map um método para
          percorrermos arrays.
        </p>
        <p>
          Veja como seria para renderizarmos apenas os nomes de cada usuário:
        </p>
        <div className="div-img">
          <img
            src={require("../../../assets/imgs/imgsReact/arrayObjectsUsers.png")}
            alt=""
          />
        </div>
        <p>
          Dentro de chaves vamos aplicar ao this.state.feed o map percorrendo
          todos os objetos e dentro do map vamos usar o return par renderizar
          uma div que contem uma tag h2 com o username de cada um.
        </p>
        <p>
          Se renderizarmos esses users na nossa aplicação, vamos ver que no
          console do navegador vai apresentar um aviso de alerta, pois as keys
          não estão sendo usadas.
        </p>

        <h3>Keys</h3>
        <p>
          As Keys (chaves em português) são como ids dos nossos elementos
          renderizados. Com o código mostrado na imagem acima, iriamos retornar
          três divs cada uma com um conteúdo diferente, o react nos incentiva a
          usar as keys para que fique mais fácial de diferenciar os elementos
          criados.
        </p>
        <p>
          Para resolvermos isso basta adicionar as divs que serão retornadas uma
          propriedade chamada key iformando algo que cada uma tenha de
          diferente, nesse exemplo serão os ids. Veja como foi resolvido:
        </p>
        <div className="div-img">
          <img
            src={require("../../../assets/imgs/imgsReact/arrayObjectsKey.png")}
            alt=""
          />
        </div>

        <p>
          Para ficar bem mais interessante vamos fazer uma pequena mudança para
          que seja mostrado como se fosse um post de rede social.
        </p>
        <p>
          Primeiro vamos criar um componente para fazer o layout que queremos,
          vamos deixar bem simples. Acima da class vamos criar essa função:
        </p>
        <div className="div-img">
          <img
            src={require("../../../assets/imgs/imgsReact/arrayObjectsComponentLayout.png")}
            alt=""
          />
        </div>
        <p>
          Vamos apenas pasar o username para uma tag h3 e as curtidas e
          comentarios vamos escrever em uma tag a separadas pelo sinal pipe(|)
        </p>
        <p>
          Agora basta que que ao invés de passar o layout para o map da classe
          vamos passar apenas o componente Feed com as propriedades que
          desejamos. Veja o exemplo:
        </p>
        <div className="div-img">
          <img
            src={require("../../../assets/imgs/imgsReact/arrayObjectsComponentMap.png")}
            alt=""
          />
        </div>
        <p>
          O username está sendo passado normalmente, mas as curtidas e
          comentários estão em operadores ternários para caso sejam valores
          menores que 1 e as palavras precisem estar no singular. Veja como
          ficou:
        </p>
        <RenderArrays />
      </div>

      <div className="filter">
        <h2>Trabalhando com formularios</h2>
        <p>
          Vamos fazer um exemplo para entendermos como usar inputs no react.
          Primeiro vamos criar nossa class e renderizar nela dois inputs e um
          select para o sexo, pois será um pequeno formulario, com e-mail, senha
          e sexo.
        </p>
        <p>
          Tambem já vamos passar os states necessários, que serão os mesmos:
          e-mail, senha e sexo.
        </p>
        <p>
          Para alterar os valores desses states vamos ultilizar o evento{" "}
          <strong>onChange</strong> que é disparado toda vez que atualizamos
          algo no DOM do nosso documento. Então vamos passar para o
          this.setState o evente.target. Veja como ficou:
        </p>
        <div className="div-img">
          <img
            src={require("../../../assets/imgs/imgsReact/formReactStateAndFunctions.png")}
            alt=""
          />
        </div>
        <p>O jsx ficou da seguinte forma:</p>
        <div className="div-img">
          <img
            src={require("../../../assets/imgs/imgsReact/formReactJsx.png")}
            alt=""
          />
        </div>
        <p>
          Veja que os inputs e o select estão com os events onChange que estão
          com arrow functions que chamam as funções criadas.
        </p>
        <p>
          Logo abaixo tem três h2 que vão receber os states. Veja como ficou o
          nosso componente:
        </p>
        <RenderForm />
      </div>

      <div className="filter">
        <h2>Praticando formulário</h2>
        <p>
          Vamos criar outro formulario para que possamos treinar. Nesse exemplo
          vamos deixar os espaçoes para três inputs: nome, email e senha.
        </p>
        <p>
          Esses inputs vão ficar dentro de uma tag form para usarmos o evento
          onSubmit. Para isso teremos que dentro do form e depois dos inputs um
          botão para submetermos o formulario, então ele terá o type submit.
        </p>
        <p>
          O evento onSubmit da tag form irá receber uma função arrow nomeada
          como cadastrar. Esse função primeiramente vai desconstruir com o
          destructuring os states da nossa classe que serão o nome, o email e a
          senha. Em seguida vamos mostrar esses dadas em uma string com o alert.
          Veja como ficou o código das state e da função cadastrar:
        </p>
        <div className="div-img">
          <img
            src={require("../../../assets/imgs/imgsReact/praticFormStatesAndFunction.png")}
            alt=""
          />
        </div>
        <p>Agora veja o jsx:</p>
        <div className="div-img">
          <img
            src={require("../../../assets/imgs/imgsReact/praticFormJsx.png")}
            alt=""
          />
        </div>
      </div>

      <div className="filter">
        <h2>Api Hooks</h2>
        <p>
          A api Hooks do React.js é uma ferramenta muito sensacional, com ela
          podemos deixar nossas funções interativas e mais inteligentes, que
          antes somente as classes tinham esse habilidade.
        </p>
      </div>

      <div className="filter">
        <h3>useState</h3>
        <p>
          Para conseguirmos usar essa api vamos primeiro ter que importar o
          useState do react. Vaja como importar:
        </p>
        <div className="div-img">
          <img
            src={require("../../../assets/imgs/imgsReact/importUseState.png")}
            alt=""
          />
        </div>

        <p>Teremos duas constantes para o useState: state e setState.</p>
      </div>

      <div className="filter">
        <h4>state</h4>
        <p>
          É o valor do estado, então é o valor que pode ser alterado. Para
          aprendermos de uma forma mais fácil, vamos fazer uma lista de tarefas.
        </p>
        <p>
          Então para começar vamos usar uma state para o nome, pois o títolo
          será tarefas de Humberto, esse nome será uma state. Veja:
        </p>
        <div className="div-img">
          <img
            src={require("../../../assets/imgs/imgsReact/useStatePract.png")}
            alt=""
          />
        </div>
        <p>
          Perceba que o state agora é adicionado a uma constante com um
          destructuring com dois elementos(name e setName) e é passado para essa
          constante o useState com um valor padrão('Humberto') .
        </p>
        <p>
          Esse valor padrão é passado para o primeiro elemento do
          destructuring(name), que será a nossa state. Então podemos concluir
          que esse é o this.state de uma class component.
        </p>
      </div>

      <div className="filter">
        <h4>setState</h4>
        <p>
          O segundo valor será o this.setState de uma class component, que será
          responsavel por alterar o valor da state.
        </p>
        <p>
          vamos adicionar uma lista de tarefas para uma state nova chamada de
          tarefas. Veja:
        </p>
        <div className="div-img">
          <img
            src={require("../../../assets/imgs/imgsReact/useStateArray.png")}
            alt=""
          />
        </div>
        <p>
          Veja que declaramos outra state, mas agora para tarefas e passamos
          como valor padrão um array com dois elementos.
        </p>
        <p>
          Para renderizarmos essas strings que estão no array usamos o método
          map. Vamos passar para a state o map e retornar uma li para cada
          tarefa do array.
        </p>
        <article>
          <h3>Dica</h3>
          <p>
            Para retornar valores com o map podemos fazer como foi feito acima,
            mas tem uma forma menos verbosa, que não precisariamos usar o
            return. Passariamos uma arrow function com parentesis ao invés de
            chaves. Veja como ficaria:
          </p>
          <div className="div-img">
            <img
              src={require("../../../assets/imgs/imgsReact/useStateTip1.png")}
              alt=""
            />
          </div>
        </article>
        <p>
          Dessa forma o nosso component já está retornando uma lista com duas
          terefas, mas para ficar mais interessante vamos colocar um input e um
          botão para que possamos adicionar mais tarefas.
        </p>
        <p>Primeiro vamos criar uma state para o input. Veja:</p>
        <div className="div-img">
          <img
            src={require("../../../assets/imgs/imgsReact/useStateInput.png")}
            alt=""
          />
        </div>
        <p>
          Em seguida vamos criar o input e o botão que irá adicionar o input a
          lista.
        </p>
        <div className="div-img">
          <img
            src={require("../../../assets/imgs/imgsReact/useStateInputBtn.png")}
            alt=""
          />
        </div>
        <p>
          Veja que o input tem o atributo value com o valor do state input e o
          evento onChange vai setar um novo valor para o input com o setInput.
        </p>
        <p>
          O button terá os atributos type, informando que é do tipo botão e o
          evento onClick que é adicionado uma funcão <strong>add</strong> que
          vamos criar para adicionar o novo input as tarefas.
        </p>
        <p>
          Essa é outra diferença do Hooks para a class component. Com a classe
          tinhamos que passar a função com o axilio do bind ou de uma arrow
          function e aqui não. Passamos diretamente a função e pronto.
        </p>
        <p>
          Agora veja a função add criada para adicionar o input na lista de
          tarefas:
        </p>
        <div className="div-img">
          <img
            src={require("../../../assets/imgs/imgsReact/useStateFunction.png")}
            alt=""
          />
        </div>
        <p>
          Veja que estamos apenas usando o setTarefas para alterar o valor da
          state tarefas passando como parâmetro um array com o operador sprad
          que tem a função de pegar todos os valores que já estão no array e o
          próximo valor será o do input que foi adicionado com o evento
          onChange.
        </p>
        <p>
          Por último estamos apenas setando uma string vazia para o input ficar
          limpo quando for adicionado um intem.
        </p>
        <UseState />
      </div>

      <div className="filter">
        <h3>useEffect</h3>
        <p>
          Esse hook vai substituir os ciclos de vida do class component. A
          sintaxe dele é bem simples. Vamos primeiro importar o useEffect e em
          seguida vamos usar passando dois parâmetros: uma funcão a que será
          executada quando algo acontecer, ou simplismente a página ser
          carregada e um array que vai informar a state que será munitorada.
        </p>
        <p>
          Vamos continuar com o antigo exemplo de tarefas e ver como chamar uma
          função sempre que adicionarmos uma nova tarefa. Como já citado vamos
          primeiramente importar o useEffect. Veja como:
        </p>
        <div className="div-img">
          <img
            src={require("../../../assets/imgs/imgsReact/useEffectImport.png")}
            alt=""
          />
        </div>
        <p>
          Como já estavamos importando o useState, nos apenas adicionamos o
          useEffect para ultiliza-lo. Logo em seguida vamos chamer esse
          useEffect passando os dois parâmetros necessários.
        </p>
        <div className="div-img">
          <img
            src={require("../../../assets/imgs/imgsReact/useEffectSintaxe.png")}
            alt=""
          />
        </div>
        <p>
          Caso deixassemos o array vazio, o useEffect seria executado assim que
          carregassemos a página. Nesse caso queremos ver as mudanças na state
          tarefas, que são adicionadas.
        </p>
        <div className="div-img">
          <img
            src={require("../../../assets/imgs/imgsReact/useEffectState.png")}
            alt=""
          />
        </div>
        <p>
          A função que iremos passar será para adicionar as tarefas no
          localStorage. Veja:
        </p>
        <div className="div-img">
          <img
            src={require("../../../assets/imgs/imgsReact/useEffectFunction.png")}
            alt=""
          />
        </div>
        <p>
          Caso inspecione sua página, em seguida entre no aplication e veja o
          localStorage. Verá que já estão lá nossas tarefas. Porem se
          recarregarmos a página a terefa irá sumir da tela, pois não estamos
          buscando no localStorage o valor, apenas registrando.
        </p>
        <p>
          Para buscarmos um valor assim que carregarmos nossa página vamos
          tambem usar o useEffect, só que dessa vez sem passar parâmetros para o
          array. Veja como ficou:
        </p>
        <div className="div-img">
          <img
            src={require("../../../assets/imgs/imgsReact/useEffectInsta.png")}
            alt=""
          />
        </div>
        <p>
          Estamos pegando as tarefas do localStorage e fazendo uma verificação:
          se tiver algo lá, altere o valor da state tarefa com o setTarefa,
          passando o valor parseado para string com o JSON.parse.
        </p>
        <UseEffect />
      </div>

      <div className="filter">
        <h2>Api</h2>
        <p>
          Application Programming Interface(API) em português: Interface de
          Programação de Aplicativos. São um conjunto de padrões que fazer parte
          de uma aplicação. Ela serva para que fique mais simples e prático para
          desenvolver plataformas. Podemos criar muitas coisas com APIs. Vamos
          usar uma API para exemplificar e enterdermos melhor.
        </p>
        <p>
          <strong>https://sujeitoprogramador.com/rn-api/?api=posts</strong>
        </p>
        <p>
          Essa API foi desponibilizada pelo Matheus Fraga, dono do canal
          <a
            href="https://www.youtube.com/@Sujeitoprogramador"
            target="_blanck"
          >
            Sujeito Programador
          </a>
          . E vamos trabalhar com ela para fazermos nossa aplicação com React
          JS. Essa é uma API de um array de objetos.
        </p>
      </div>

      <div className="filter">
        <h2>Carregar API</h2>
        <p>
          Assim que carregar nossa página queremos carregar os dados da nossa
          API, então para começar, vamos usar useEffect sem parâmetro no array
          que passamos no segundo argumento.
        </p>
        <p>
          Essa API tem 7 objetos, cada um com um post. Para conseguirmos
          visualizala teremos que fazer uma função no nosso useEffect que vai
          usar o fetch para que possamos fazer a requisição. Veja como:
        </p>

        <div className="div-img">
          <img src={require("../../../assets/imgs/imgsHTTP/api.png")} alt="" />
        </div>

        <p>
          Estamos criando uma função com uma let que está com nossa API e
          passando para o fetch que recebe uma resposta que precisamos fazer um
          parse para json e mostrando no console.log esse json. Você pode abrir
          o inspecionar do seu navegador e ver esse console.
        </p>

        <p>
          Agora vamos passar essa resposta parseada para uma state, vamos chamar
          ela de posts. Veja como ficou:
        </p>

        <div className="div-img">
          <img
            src={require("../../../assets/imgs/imgsHTTP/carregarApi.png")}
            alt=""
          />
        </div>
        <p>Feito isso agora podemos usar os dados que obtevemos.</p>
      </div>
      <div className="filter">
        <h2>Consumir API</h2>
        <div className="div-img">
          <img
            src={require("../../../assets/imgs/imgsHTTP/consumirApi.png")}
            alt=""
          />
        </div>
        <p>
          Estamos simplesmente usando o map para renderizar cada item. Vamos
          colocar algumas classes e estilizar um pouco. Veja como ficou nossa
          aplicação:
        </p>

        <Api />
      </div>

      <div className="filter">
        <h2>Rotas</h2>
        <p>
          Podemos ter navegação de páginas na nossa aplicação. E é isso que
          vamos ver agora. Para começar vamos baixar o react-router-dom.
        </p>
        <p>
          Como sempre vamos fazer um exemplo para ficar melhor de entender.
          Vamos dentro da nossa página src de um projeto react e criar uma pasta
          pages, e dentro dela vamos criar outras 2 pastas 1 com o nome Home e a
          outra como o nome ExempleRoute.
        </p>
        <p>
          Agora vamos criar um componente funcional para cada pasta e
          exporta-los. Veja como fizemos com um dos componentes criados:
        </p>
        <div className="div-img">
          <img
            src={require("../../../assets/imgs/imgensRoutes/route1.png")}
            alt=""
          />
        </div>
      </div>
      <div className="filter">
        <h2>Criando Rotas</h2>
        <p>
          Agora vamos criar na pasta src um arquivo nomeado como routes.jsx e
          importar para esse arquivo o <strong>BrowserRouter</strong>, o
          <strong>Routes</strong> e o <strong>Route</strong>.
        </p>

        <div className="div-img">
          <img
            src={require("../../../assets/imgs/imgensRoutes/routesApp.png")}
            alt=""
          />
        </div>

        <p>
          Vamos usar primeiro o <strong>BrowserRouter</strong>, dentro vamos
          usar o <strong>Routes</strong> e por último vamos usar o
          <strong>Route</strong>.
        </p>
        <p>
          Dentro do <strong>Route</strong> passamos o <strong>path</strong>
          que é o caminho que vamos entrar e por último passamos o element que é
          o componente para onde vai ser direcionado.
        </p>
        <div className="div-img">
          <img
            src={require("../../../assets/imgs/imgensRoutes/configurandoRotas.png")}
            alt=""
          />
        </div>
        <p>
          Veja que o Home está sendo direcionado para o ' / ' que é sempre a
          primeira página que irá abrir em uma aplicação. Se usarmos o ' * '
          como caminhos, vamos está direcionando todos os caminhos não criados
          para o elemento que passarmos.
        </p>
      </div>
      <div className="filter">
        <h2>Usando as Rotas</h2>
        <p>
          Agora vamos no nosso app.js para importar nosso componente routes e
          começar a usar nossas rotas. Assim que salvarmos nossa aplicação
          passando nosso componente routes, seremos direcionado para o Home,
          pois está configurado como ' / ' e esse será nossa página inicial.
        </p>
        <p>
          Podemos testar nossa rota exempleRoute indo na url e no final dela
          escrevendo /exempleRoute e darmos enter, seremos direcionados para
          nosso outro componente.
        </p>
      </div>
      <div className="filter">
        <h2>Link</h2>

        <p>
          Agora para navegarmos entre nossos componentes, vamos usar o Link que
          tambem vamos importar do react-router-dom.
        </p>

        <p>
          No nosso componente Home vamos importar o Link e passar para o
          parâmetro
          <strong>to</strong> o caminho a seguir ao clica-lo. Nesse caso como só
          temos mais um caminho vamos passar o ExempleRoute. Veja:
        </p>
        <div className="div-img">
          <img
            src={require("../../../assets/imgs/imgensRoutes/link.png")}
            alt=""
          />
        </div>
        <ExempleRoute />
      </div>

      <div className="filter">
        <h2>ContextApi</h2>
        <p>
          Esse hook do react vai servir para podermos passar para toda nossa
          aplicação os states que quisermos deixar global. Assim consiguiremos
          usar os states criados em um componente em todo o sistema sem precisar
          passar parâmetros.
        </p>
        <h3>Criando ContextApi</h3>
        <p>
          Vamos criar uma pasta, vamos dar o nome de contexts e dentro dela
          criar um arquivo nomeado como user. Dentro desse arquivo vamos
          importar o useContext e createContext do react.
        </p>
        <p>
          Agora vamos criar uma constante que vamos chamar de UserContext e
          atribuir a ela o createContext passando um objeto vazio.
        </p>
        <p>
          Vamos tambem criar o componente para exportarmos, que vamos chamar de
          UserProvider e esse componente vai apenas retornar o
          UserContext.Provider com o children como filho.
        </p>
        <p>
          Agora todas as states que criarmos aqui e atribuirmos ao value do
          UserContext.provider serão passadas para os childrens do nosso
          component UserProvider.
        </p>
        <p>
          Para exemplificar vamos criar uma state name e passar pare nosso
          componente. Veja o arquivo que criamos:
        </p>
        <div className="div-img">
          <img
            src={require("../../../assets/imgs/imgsReact/useContext-1.png")}
            alt=""
          />
        </div>
        <p>
          Agora para vermos a ultilidade desse hook, vamos criar três arquivos:
          escola, alunos e estudante. O arquivo escola será o que vamos importar
          o UserProvider que vamos usar para deixar todos os componentes sendo
          filhos desse UserProvider e conseguirmos ultilizar as states que estão
          dentro dele.
        </p>
        <p>Veja como ficou o arquivo escola:</p>
        <div className="div-img">
          <img
            src={require("../../../assets/imgs/imgsReact/useContext-2.png")}
            alt=""
          />
        </div>
        <p>
          Perceba que estamos importando e usando o arquivo Student como filho,
          e dentro do Student estamos importando e usando o Name. Dessa forma
          todos os componentes estarão sendo englobados pleo UserProvider. O
          scholl diretamente, o Student como componente e o name por estar como
          componente de Student.
        </p>
        <p>
          Para usar a state criada no arquivo do User no nosso arquivo name,
          vamos importar o useContext do react e o UserContext do arquivo
          UserContext. Veja:
        </p>
        <div className="div-img">
          <img
            src={require("../../../assets/imgs/imgsReact/useContext-3.png")}
            alt=""
          />
        </div>
        <p>
          Estamos extraindo o name usando o destructuring no hook useContente
          passando o UserContext que é o provedor que criamos.
        </p>
        <p>
          Podemos usar o setState tambem, vamos usar o setState no nosso arquivo
          Student para vermos como as states globais são bem fácieis de usar.
          Veja:
        </p>
        <div className="div-img">
          <img
            src={require("../../../assets/imgs/imgsReact/useContext-4.png")}
            alt=""
          />
        </div>
        <ExempleContextApi />
      </div>
    </div>
  );
}
