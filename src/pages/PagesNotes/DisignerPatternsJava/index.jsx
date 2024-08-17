export default function DisignPatterns() {
  return (
    <div className="pages-notes-text">
      <div className="filter">
        <h2>Introdução:</h2>
        <p>
          Os Design Patterns, ou padrões de projeto, representam soluções
          reutilizáveis para problemas comuns no desenvolvimento de software. Em
          Java, uma linguagem conhecida por sua flexibilidade e robustez, os
          Design Patterns desempenham um papel crucial ao oferecer estruturas
          testadas e aprovadas para resolver desafios específicos de projeto de
          software.
        </p>
      </div>
      <div className="filter">
        <h2>Builder</h2>
        <p>
          Builder vai usar uma classe adicional na nossa classe principal. No
          exemplo abaixo, tem uma classe Casa e dentro vai ter outra classe
          chamada CasaBuilder.
        </p>
        <p>
          Vamos privar o constructor para que não possamos criar uma nova
          instância dele, o único responsável de criar objetos vai ser o nosso
          builder.
        </p>
        <div className="div-img">
          <img
            src={require("../../../assets/imgs/imgsDisignerPatterns/builder.png")}
            alt="builder"
          />
        </div>
        <p>
          A estratégia aqui é não usar o construtor, mas sim ajustar todas os
          métodos set, a retornarem o próprio objeto. Dessa forma podemos
          encadear as chamadas dos métodos e setar de forma mais livre os
          atributos do objeto. Veja como fica:
        </p>
        <div className="div-img">
          <img
            src={require("../../../assets/imgs/imgsDisignerPatterns/builderUsage.png")}
            alt="builderUsage"
          />
        </div>
        <p>
          Por último para criar uma instância da classe Casa mesmo vamos criar o
          método build. Veja:
        </p>
        <div className="div-img">
          <img
            src={require("../../../assets/imgs/imgsDisignerPatterns/methodBuild.png")}
            alt="methodBuild"
          />
        </div>
        <p>
          Dessa forma não ficamos presos as regras de seguir todos os atributos
          do construtor na ordem correta, além do código fica mais legivel. Veja
          como fica para criar um novo objeto:
        </p>
        <div className="div-img">
          <img
            src={require("../../../assets/imgs/imgsDisignerPatterns/newObject.png")}
            alt="newObject"
          />
        </div>
      </div>
      <div className="filter">
        <h2>Method Factory</h2>
        <p>
          É um padrão de criação creacional que ajuda a lidar com a criação de
          objetos sem especificar a classe exata deles. Ele delega a
          responsabilidade de criar objetos para subclasses, promovendo maior
          flexibilidade e desacoplamento no seu código.
        </p>
        <p>
          No exemplo a seguir, temos duas classes de produtos: Digital e Fisico.
          Essas duas classes vão ser filhas da classe Produto. Para criar um
          objeto de uma dessas classes usariamos dessa forma:
        </p>
        <pre>Produto produtoFisico = new Produto();</pre>
        <p>
          Para diferênciar o produto físico do digital, temos um atributo na
          classe Produto: possuiDimencoesFisicas. Entao nós vamos ter que dar
          essa caracteristica manualmente. Dessa forma:
        </p>
        <pre>produtoFisico.setPossuiDimencoesFisicas(true);</pre>
        <p>
          Com o method factory é diferente. Vamos criar uma classe especifica
          para criar esses objetos. Por isso tem esse nome factory. É uma
          fabrica de objetos. Veja como ficaria uma classe factory:
        </p>
        <div className="div-img">
          <img
            src={require("../../../assets/imgs/imgsDisignerPatterns/factoryMethod.png")}
            alt="factoryMethod"
          />
        </div>
        <p>
          É uma classe com um método static que recebe um enum
          <a
            href="https://docs.oracle.com/javase/tutorial/java/javaOO/enum.html"
            target="_blank"
            rel="noreferrer"
          >
            (Clique aqui para aprender sobre enum).
          </a>
          Dentro do nosso método estamos usando um switch, e dependendo do tipo
          de enum já irá ser instânciado um novo objeto, passado o atributo ao
          possuiDimencoesFisicas e retornado objeto correto. Veja como
          criariamos:
        </p>
        <div className="div-img">
          <img
            src={require("../../../assets/imgs/imgsDisignerPatterns/factoryUsage.png")}
            alt="factoryUsage"
          />
        </div>
        <p>
          Estamos atribuindo a uma variável com um tipo Pessoa a classe factory
          que criamos, usando o método e apenas passando o tipo de enum para o
          objeto ser criado já com os atributos corretos.
        </p>
      </div>
      <div className="filter">
        <h2>Singleton</h2>
        <p>
          O padrão de projeto Singleton garante a existência de apenas uma
          instância de uma classe e fornece um ponto de acesso global a ela.
          Veja essa classe:
        </p>
        <div className="div-img">
          <img
            src={require("../../../assets/imgs/imgsDisignerPatterns/singleton.png")}
            alt="singleton"
          />
        </div>
        <p>
          Temos uma classe que vai ter um Hashmap{" "}
          <a
            href="https://docs.oracle.com/javase/8/docs/api/java/util/HashMap.html"
            target="_blank"
            rel="noreferrer"
          >
            (aprenda mais sobre Hashmap)
          </a>
          .
        </p>
        <p>
          Esse Map vai receber uma string e um boolean. O construtor vai nos
          retornar todos os dias da semana true.
        </p>
        <p>
          E para completar vamos ter dois métodos: O que irá mostrar todos os
          dias e outro que irá ocupar um dia. No caso fazer um replace e tornar
          false o dia que colocarmos como parâmetro.
        </p>
        <p>
          Agora vamos criar uma instância dessa classe e ocupar dois dias. Veja:
        </p>
        <div className="div-img">
          <img
            src={require("../../../assets/imgs/imgsDisignerPatterns/singletonProblem.png")}
            alt="singletonProblem"
          />
        </div>
        <p>Estamos usando um Method Factory para criarmos nossos objetos.</p>
        <p>
          O problema aqui é que as duas chamadas estão criando instâncias
          diferentes. Toda vez que evocamos o método reservarDia, estamos
          criando uma agenda nova.
        </p>
        <p>
          Para resolver isso, podemos usar nosso partens singleton. Ele vai nos
          fornecer três opções.
        </p>
        <h3>HEAGER</h3>
        <p>Essa forma usa esse código:</p>
        <div className="div-img">
          <img
            src={require("../../../assets/imgs/imgsDisignerPatterns/singletonEAGER.png")}
            alt="singletonEAGER"
          />
        </div>
        <p>
          Estamos adicionando um atributo INSTANCE, ele sendo final(Não pode ser
          alterado). Ele está recebendo uma instância do nosso objeto.
        </p>
        <p>
          Logo abaixo do construtor criamos o método getInstance que vai nos
          retornar a INSTANSE. Então a classe factory para criarmos os objetos
          vai ficar assim:
        </p>
        <div className="div-img">
          <img
            src={require("../../../assets/imgs/imgsDisignerPatterns/eager.png")}
            alt="eager"
          />
        </div>
        <h3>LAZY</h3>
        <p>Veja como ficaria usando LAZY:</p>
        <div className="div-img">
          <img
            src={require("../../../assets/imgs/imgsDisignerPatterns/singletonLazy.png")}
            alt="singletonLazy"
          />
        </div>
        <p>
          Iniciariamos a INSTANCE como null e no getInstance iriamos verificar
          se essa INSTANCE é null. Se for criamos uma, se não vamos retornar
          ela.
        </p>
        <h3>Enum</h3>
        <p>O enum vai mudar pouco. Veja:</p>
        <div className="div-img">
          <img
            src={require("../../../assets/imgs/imgsDisignerPatterns/singletonEnum.png")}
            alt="singletonEnum"
          />
        </div>
        <p>
          vamos transformar a classe em enum, adicionar o tipo de enum como
          INSTANCE no lugar de criar uma instância nova do nosso objeto e no
          getInstance vamos apenas retornar esse INSTANCE.
        </p>
        <h3>Diferênças</h3>
        <p>
          O EAGER e o LAZY tem uma diferênça de ultilização de mémoria. O EAGER
          vai ser inicializado sempre, já o LAZY só irá inicializar quando for
          chamado o método getInstance.
        </p>
        <p>
          A diferênça do LAZY e do EAGER para o enum, é que o enum é mais
          seguro. O LAZY e o EAGER vai ter uma brecha para ser criado uma nova
          instânci. Com o seguinte código:
        </p>
        <div className="div-img">
          <img
            src={require("../../../assets/imgs/imgsDisignerPatterns/beforeEnum.png")}
            alt="beforeEnum"
          />
        </div>
        <p>
          Usando os comandos acima vamos conseguir criar novas instâncias tanto
          no EAGER quanto no LAZY. O Enum vai ser a nossa bala de prata para nos
          proteger desse código. Então o mais recomendado é usar o Enum para
          criarmos nossos Singletons.
        </p>
      </div>
      <div className="filter">
        <h1>Prototype</h1>
        <p>
          Para exemplificar o prototype vamos criar uma classe de criar botão
          especificos, cada um com suas caracteristicas. Veja o código a seguir:
        </p>
        <div className="div-img">
          <img
            src={require("../../../assets/imgs/imgsDisignerPatterns/botaoRegistry.png")}
            alt="botaoRegistry"
          />
        </div>
        <p>
          Nesse código estamos criando um REGISTRY com o map, que vai ter uma
          string como chave e um Botao como valor. Essa classe Botao é bem
          simples, vai passar para o construtor apenas algumas caracteristicas
          como cor e altura, e tem o getters e setters de cada atributo.
        </p>
        <p>
          Logo abaixo do REGISTRY que criamos estamos adicionando a um bloco
          static com dois tipos de botão. Estamos criando um novo botão e
          passando cada caracteristica dele. Por último nesse bloco, vamos dar
          um put no REGISTRY, passando a Chave e o valor que cada um vai ter.
        </p>
        <p>
          Desse forma, o bloco static, assim que o código for rodado vai criar
          pra gente os nosso protótipos. Esses prótotipos que vão ser clonados.
        </p>
        <p>
          Para clonar vamos usar outro pattern. O Method Factory. Vamos criar
          outra classe chamada botaoFactory que vai ter um método chamado
          getInstance, que irá receber uma chava como parâmetro. Essa chave vai
          nos permitir chegar ao valor dela. Esse valor é o botão protótipo.
          Então veja como fizemos:
        </p>
        <div className="div-img">
          <img
            src={require("../../../assets/imgs/imgsDisignerPatterns/botaoFactory.png")}
            alt="botaoFactory"
          />
        </div>
        <p>
          Veja que estamos criando um novo botão chamado clone que irá receber
          as caracteristicas a partir da chave que vai receber como parâmetro.
          Agora vamos criar um método no nosso BotaoRegistry para chamar esse
          método. Dessa forma:
        </p>
        <div className="div-img">
          <img
            src={require("../../../assets/imgs/imgsDisignerPatterns/getBotao.png")}
            alt="getBotao"
          />
        </div>
        <p>
          Está feito. Agora vamos criar uma classe de teste para vermos
          funcionar nosso código. Veja:
        </p>
        <div className="div-img">
          <img
            src={require("../../../assets/imgs/imgsDisignerPatterns/criandoClone.png")}
            alt="criandoClone"
          />
        </div>
        <p>
          Estamos criando clones de botões sem precisar ficar criando
          subclasses.
        </p>
      </div>
    </div>
  );
}
