export default function Java() {
  return (
    <div className="pages-notes-text">
      <div className="filter">
        <h2>Variaveis</h2>
        <p>
          O java ultiliza 8 tipos primitivos.
          <ul>
            <li>byte: Para declarar números inteiros entre -128 e 127</li>
            <li>
              short: Para declarar números inteiros entre -32.768 e 32.767
            </li>
            <li>
              int: Para declarar números inteiros entre -2<sup>31</sup> e 2
              <sup>31</sup>
            </li>
            <li>
              long: Números inteiros entre -2<sup>63</sup> e 2<sup>63</sup>.
            </li>
            <li>float: Para números décimais com arredondamento.</li>
            <li>double: Para números décimais com mais precisão.</li>
            <li>boolean: Para valores logicos verdadeiros ou falsos</li>
            <li>
              char: Para valores de um caracter. Podendo ser qualquer caracter
              do teclado.
            </li>
          </ul>
        </p>
        <p>
          Para declararmos uma variável vamos primeiro indicar o tipo, pois o
          java é uma linguagem fortemente tipada. Em seguida para atribuirmos um
          valor a essa variável vamos usar o operador igual (=).
        </p>
        <article>
          <h3>Observação</h3>
          <p>O ponto e virgula (;) é obrigatório usando Java.</p>
        </article>
        <p>Veja abaixo exemplos de como declarar variáveis:</p>
        <pre>
          <code>
            {`
int a = 2;
float b = 3.3;
boolean c = false;
char d = #;
            `}
          </code>
        </pre>

        <article>
          <h3>Obsevação</h3>
          <p>
            Também podemos declarar uma variável e só depois atribuir um valor.
            Veja:
          </p>
          <pre>
            <code>
              {`
int f;
f = 4;
              `}
            </code>
          </pre>
        </article>
        <article>
          <h3>Obsevação</h3>
          <p>
            Geralmente é usado o int para declarar variáveis de valor inteiro.
            Pois é um tipo primitivo que irá abrangir a maioria dos números que
            uma aplicação usa.
          </p>
        </article>
      </div>
      <div className="filter">
        <h2>Operadores númericos</h2>
        <p>
          Os operados númericos são o de soma (+), subtração (-), multiplicação
          (*) e divisão (/).
        </p>
        <p>
          O java entende que números inteiros em qualquer operação vai resultar
          em um número inteiro. Mas caso fossemos fazer o seguinte código iria
          dar um resultado errado:
        </p>
        <pre>
          <code>
            {`
int a = 2;
int b = 3;
float divisao = b / a;
            `}
          </code>
        </pre>
        <p>
          O resultado de 3 divido para 2 seria 1,5, mas o java vai retornar um
          valor inteiro, nesse caso 1. Para resolver esse problema vamos usar o
          seguinte código:
        </p>
        <pre>
          <code>
            {`
float divisao = (float) b / a;
            `}
          </code>
        </pre>
        <p>
          Dessa forma o java vai entender que o resultado dessa operaçã usando
          números inteiros vai ser um número decimal.
        </p>
      </div>
      <div className="filter">
        <h2>Operadores lógicos</h2>
        <p>
          Para trabalhar com dados booleanos vamos ultilizar o && (And), o ||
          (Or) e o ? (Ternário). Para exemplificar o uso dos operadores vamos
          usar um algorítimo que irá dizer se vamos ou não à praia.
        </p>
        <p>
          No código abaixo vamos à praia apenas se estiver fazendo sol e se for
          final de semana.
        </p>
        <pre>
          <code>
            {`
boolean fimDeSemana = true;
boolean fazendoSol = true;
boolean vamosAPraia = fimDeSema && fazendoSol;
            `}
          </code>
        </pre>
        <h3>Operador &&</h3>
        <p>
          O operador && vai retornar true (verdade) se todos os dados
          verificados forem verdadeiros, o exemplo acima foi retornado true,
          pois declaramos true para ambas variáveis. Podemos fazer com mais
          dados, nesse exemplo estamos usando dois, para um fácil entendimento.
        </p>
        <h3>Operador ||</h3>
        <p>
          Já o operador || vai retornar true se pelo menos um dos dados forem
          verdadeiros. Vamos mudar a variável fimDeSemana para false e testar o
          pipe (||):
        </p>
        <pre>
          <code>
            {`
fimDeSemana = false;
boolean vamosAPraia = fimDeSemana || fazendoSol;
            `}
          </code>
        </pre>
        <p>
          Nesse caso o java também irá retornar true, pois um dos resultados é
          verdadeiro. Caso alterassemos os dois parametros para false, o java
          retornaria false.
        </p>
        <h3>Operador ?</h3>
        <p>
          Com esse operador podemos atribuir um valor de acordo com o resultado
          de um dado. Veja como usar:
        </p>
        <pre>
          <code>
            {`
String mensagem = fazendoSol ? 'Vamos á praia!' : 'Não vamos a praia.';
            `}
          </code>
        </pre>

        <p>
          O código acima irá retornar Vamos à praia caso a variável fazendoSol
          seja true, se for false o valor Após o sinal : (dois pontos) será
          retornado. (Não vamos à praia)
        </p>
      </div>
      <div className="filter">
        <h2>Operadores condicionais</h2>
        <h3>if else</h3>
        <p>
          O bloco if e else, que vai ser como no operador ternário que já vimos.
          Ele vai verificar um valor ou uma lógica, caso seja verdadeira, vai
          retornar o valor que está no if, caso seja falso, irá retornar o que
          esta no else. Veja o exemplo:
        </p>
        <div className="div-img">
          <img
            src={require("../../../assets/imgs/imgsJava/blocoIfElse.png")}
            alt="bloboIfElses"
          />
        </div>
        <p>
          Esse bloco pode verificar outras condições e dar outros resultados
          usando o else if. Veja:
        </p>
        <div className="div-img">
          <img
            src={require("../../../assets/imgs/imgsJava/blocoIfElse2.png")}
            alt="bloboIfElses2"
          />
        </div>
        <h3>Switch</h3>
        <p>Vamos agora ver como usar essa estrutura de controle:</p>
        <div className="div-img">
          <img
            src={require("../../../assets/imgs/imgsJava/switch.png")}
            alt="switch"
          />
        </div>
        <p>
          Perceba que declaramos uma variavel graduacao e vamos atribuir um
          valor diferente de acordo com a nota.
        </p>
        <p>
          O operador switch vai analizar esse variavel graduacao e de acordo com
          cada valor vai dar uma resposta diferente.
        </p>
        <p>
          Não podemos esquecer de colocar a palavra break depois de cada caso,
          para que quando analizado, dê apenas o resultado que foi resolvido.
        </p>
      </div>
      <div className="filter">
        <h2>Array</h2>
        <p>Array são uma estrutura de dados que se acemelham a uma lista.</p>
        <p>Para declarar um array podemos usar dessa forma:</p>
        <pre>
          <code>
            {`
int[] numeros = new int[5];
            `}
          </code>
        </pre>
        <p>
          Primeiro vamos informar o tipo do array. Em java so podemos criar
          arrays com o mesmo tipo. Em seguida vem o nome do array. Agora vamos
          instanciar o array com o new int e informar a quantidade de posições
          que esse vetor terá.
        </p>
        <p>
          Esse quantidade de vetores terá que ser respeitada. O array não
          suportará mais indices do que o setado. Podemos colocar menos ou
          nenhum dado, mas não poderemos ultrapassar.
        </p>
        <p>
          Para atribuir valores nas posições do array vamos usar os indices. E
          os indices vão começar do 0 (zero). Então no array que criamos de 5
          indeces, teria essas posições: 0, 1, 2, 3, 4. Vemos ver uma das formas
          de atribuir valores:
        </p>
        <pre>
          <code>
            {`
numeros[0] = 1;
numeros[1] = 2;
numeros[2] = 3;
numeros[3] = 4;
numeros[4] = 5;
            `}
          </code>
        </pre>
        <p>
          Se usarmos o System.out.println(numeros) nos receberiamos a seguinte
          resposta: [I@7b23ec81
        </p>
        <p>
          Esse resultado são as caracteristicas do que array. Para conseguir
          vermos cada valor, termso que usar os indices de cada posição. Veja um
          exemplo: System.out.println(numeros[0])
        </p>
        <p>Ou poderiamos ver o array completo dessa forma:</p>
        <pre>
          <code>
            {`
System.out.println(Arrays.toString(numeros));
            `}
          </code>
        </pre>

        <h2>Array Dinâmico</h2>
        <p>
          Vimos que um vetor tem que ser informado quantos espaços vão ter para
          o mesmo ser inicializado. O ArrayList vai nos permitir criar arrays
          dinâmicos de uma forma bem simples. Veja:
        </p>
        <pre>
          <code>
            {`
ArrayList&lt;integer&gt; idades = new ArrayList&lt;interger&gt;();
            `}
          </code>
        </pre>
        <p>
          O array já esta criado. Estamos usando o objeto ArrayList, entre os
          sinais maior e menor, vamos atribuir o tipo do array, em seguida dar o
          nome, o próximo passo é atribuir uma instância do mesmo ArrayList com
          o mesmo parâmetro.
        </p>
        <p>Para adicionar um elemento para esse array vmaos usar o .add().</p>
        <pre>
          <code>
            {`
idades.add(22);
            `}
          </code>
        </pre>
        <p>Para retornar o valor de indice, vamos usar o método .get().</p>
        <pre>
          <code>
            {`
idades.get(0);
            `}
          </code>
        </pre>
        <p>Para remover algum indice, vamos usar o .remove().</p>
        <pre>
          <code>
            {`
idades.remove(0);
            `}
          </code>
        </pre>
        <p>Para sabermos o tamanho desse array vamos usar o .size().</p>
        <pre>
          <code>
            {`
idades.size();
            `}
          </code>
        </pre>
        <p>
          São varios métodos disponíveis para usarmos, esse são alguns, mas caso
          queira saber mais
          <a
            href="https://docs.oracle.com/javase/8/docs/api/java/util/ArrayList.html"
            target="_blank"
            rel="noreferrer"
          >
            Clique aqui
          </a>
          .
        </p>
        <h2>Laço for</h2>
        <p>
          A forma que vimos de criar arrays é correta, mas bem complicada.
          Poderiamos criar um array de uma forma menos verbosa, e mostrar todos
          de uma vez, com um estrutura de laço. assim:
        </p>
        <p>
          Perceba que na declaração do array, não precisamos passar o indice.
        </p>
        <p>
          E agora estamos passando em cada um dos indices com uma estrutura de
          repetição. O for.
        </p>
        <div className="div-img">
          <img
            src={require("../../../assets/imgs/imgsJava/arrayInFor.png")}
            alt="arrayInFor"
          />
        </div>
        <p>
          O for vai ter uma sintaxe bem simples. Vamos primeiro declarar uma
          variavel e atribuir o 0. Em seguida vamos usar o ponto e virgula para
          separar e dar uma condição de repetição. Nesse caso como queremos ver
          todas as posições do arrays, a condição é que enquanto o i for menor
          que o tamanho do array, ele prossiga.
        </p>
        <p>
          O tamanho do array é simples de obter. Bastar colocar o nome do array
          e passar o metodo length.
        </p>
        <p>
          O último dado para o for é aumentar cada vez que a condição não for
          atendida. Como colocamos a variável i valendo 0, e o array tem um
          tamanho 5, se no último parâmetro passarmos o i++, essa variável i
          será incrementada mais um cada vez que não for atingida a lógica
          passada.
        </p>
        <p>
          Então basta que passemos no indice do array a variavel i que, vai sair
          do 0 ao 5.
        </p>
        <h3>Trabalhando array com for</h3>
        <p>
          O for vai nos permitir trabalhar com os dados dos arrays. Vamos fazer
          como exemplo um algorítimo que vai nos mostrar o maior número, o menor
          e a media deles. Veja o código:
        </p>
        <div className="div-img">
          <img
            src={require("../../../assets/imgs/imgsJava/trabalhandoArray.png")}
            alt="trabalhandoArray"
          />
        </div>
      </div>
      <div className="filter">
        <h2>Funções</h2>
        <p>
          A sintaxe de funções no Java vai seguir a mesma da função main, onde
          criamos todos os códigos até agora, mas para criarmos nossas próprias
          funções, vamos escrevelas fora do escopo da função main.
        </p>
        <p>
          O escopo é a area da função, que é determinada com as chaves. Vamos
          criar uma função para retornar uma menssagem de saudação parra servir
          de exemplo. Veja:
        </p>
        <div className="div-img">
          <img
            src={require("../../../assets/imgs/imgsJava/funcao.png")}
            alt="funcao"
          />
        </div>
        <p>
          Essa função pode receber parâmetros e ficar bem mais ultilizavel.
          Veja:
        </p>
        <div className="div-img">
          <img
            src={require("../../../assets/imgs/imgsJava/funcaoParametro.png")}
            alt="funcaoParametro"
          />
        </div>
      </div>
      <div className="filter">
        <h2>POO (classe e objetos)</h2>
        <p>
          O POO (programação orientada a objetos), vai nos permitir criar
          abstrações do mundo real para nosso código. Podemos pensar que classes
          são classes de algum coisa do mundo real como um cachorro.
        </p>
        <p>
          Um cachorro não é um Poodle ou um hottwweiler. Cachorro é um animal
          com algumas caracteristicas. Como por exeplo: quatro patas, fucinho
          entre outros...
        </p>
        <p>Um hottwweiler seria nesse caso um objeto da classe cachorro.</p>
        <h3>Criando uma classe</h3>
        <p>
          Para criar uma classe, vamos criar no src da aplicação que estamos
          trabalhando um package nomeado animais. Basta clicar com o segundo
          botão do mouse, selecionar new e selecionar package.
        </p>
        <p>
          Agora dentro desse package vamos criar uma classe. Clicamos com o
          segundo botão novamente, em seguida new e agora a primeira opção da
          lista, classe. Pronto é só dar o nome da classe, que nesse caso será
          cachorro.
        </p>
        <p>
          A classe já estará criado quando fizermos esses passos. Vamos apenas
          nomea-la de Cachorro. E passar publicamente as caracteristicas.
        </p>
        <div className="div-img">
          <img
            src={require("../../../assets/imgs/imgsJava/classe.png")}
            alt="classe"
          />
        </div>
        <p>
          Estamos colocando a palavra public antes de cada atributo, para que
          possamos alterar fora do escopo da classe. Chamamos esse mecânismo de
          modificadores de acesso, vamso ver mais afrente nas anotações.
        </p>
        <p>
          Agora para criar um objeto dessa classe vamos voltar para nossa pasta
          main e simplesmente fazer assim:
        </p>
        <div className="div-img">
          <img
            src={require("../../../assets/imgs/imgsJava/objeto.png")}
            alt="objeto"
          />
        </div>
        <p>
          Veja que primeiro estamos passando o nome da classe, em seguida
          estamos dando um nome para o objeto e por último instanciando com a
          palavra reservada new a classe Cachorro.
        </p>
        <p>
          Para passar as caracteristicas estamos usando a notação ponto. Basta
          colocar o nome do objeto que criamos, colocar um ponto e em seguida a
          nossa ide já irá nos fornecer todos os atributos.
        </p>
        <p>
          Quando vamos ver o que retorna esse objeto, veremos onde ele ficou na
          mémoria.
        </p>
      </div>
      <div id="getter&Setter" className="filter">
        <h2>Métodos</h2>
        <p>
          Métodos são funções que estarão disponiveis dentro das nossas classe,
          são atributos das classe, mas funcionais. Continuando com o exemplo do
          cachorro. Nos poderiamos adicionar um método para ele latir, correr,
          brincar, entre outros...
        </p>
        <p>
          Vamos adicionar os métodos latir e buscarBolinha na nosso classe
          Cachorro. É uma boa prática adicionar os métodos após as declarações
          de variáveis.
        </p>
        <div className="div-img">
          <img
            src={require("../../../assets/imgs/imgsJava/metodos.png")}
            alt="metodos"
          />
        </div>
        <p>
          O método latir é void, pois não vai ter nenhum retorno, simplesmente
          irá dar um print. Já o buscarBolinha é método sem a palavrinha
          reservada void, então ela vai obrigatoriamente precisar de retorno.
        </p>
        <p>
          Para chamar esses métodos tabém ultilizamos da notação ponto. Basta
          usarmos a referência da nossa classe e chamar o método. Para chamar é
          só por os parêntesis no final. Veja:
        </p>
        <div className="div-img">
          <img
            src={require("../../../assets/imgs/imgsJava/chamandoMetodos.png")}
            alt="chamandoMetodos"
          />
        </div>
        <article>
          <h3>Observação</h3>
          <p>
            Esses métodos padrões getters e setters podem ser criado com
            fácilmente com um atalho do inteliJ. Vamos clicar no segundo botão,
            escolhar a opção generate, depois getter e setter ou pode escolhar
            uma opção só. Agora basta informar qual das variáveis você vai
            querer criar esses métodos.
          </p>
        </article>
      </div>
      <div className="filter">
        <h2>Emcapsulamento</h2>
        <p>
          Como forma de assegurar que sua classe vai ficar com dados mais
          coesos, é importante deixar dados inalteraveis ou alterar se tiver
          alguma condição.
        </p>
        <p>
          Para isso vamos ultilizar do emcapsulamento e dar aos atributos os
          modificadores de acesso. Veja quais são e como vão deixar ser visível:
        </p>
        <div className="div-img">
          <img
            src={require("../../../assets/imgs/imgsJava/emcapsulamento.png")}
            alt="emcapsulamento"
          />
        </div>
        <p>
          Continuando com o exemplo do cachorro, vamos trocar os atributos que
          deixamos public e deixa-los private. Assim vamos impedir que qualquer
          um posso alterar seus valores. Para alterar vai ser preciso de alguma
          condição usando de uma função que vamos criar.
        </p>
        <p>
          Vamos ter dois métodos que são padrão em uma classe. Nesse exemplo vai
          ser o setNome que vai servir para alterar o nome e o getNome que vai
          servir para vermos.
        </p>
        <p>Veja como vai ficar:</p>
        <div className="div-img">
          <img
            src={require("../../../assets/imgs/imgsJava/metodosEmcapsulamento.png")}
            alt="metodosEmcapsulamento"
          />
        </div>
        <p>
          Antes quando os atributos erem public conseguiamos altera-los apenas
          com a notação ponto. Agora como esses atributos estão private, criamos
          os métodos acima. O setNome pata setar um novo nome, mas apenas se o
          nome for diferente de null ou que não seja uma string vazia. Caso seja
          o nome será Toto.
        </p>
        <p>
          Já o método getNome só irá retornar o nome do cacho caso o nome do
          usuário seja igual a Fernanda ou Humberto. Se não será retornado um
          usuário invalido.
        </p>
        <p>
          Esse é apenas um exemplo de como poderiamos dar regras de como
          proteger ou condicionar mudanças no nosso código.
        </p>
        <article>
          <h3>Observação</h3>
          <p>
            Perceba que os métodos que criamos usa a palavra nome, mas para
            referênciar o atributo da classe vamos usar o this.nome, assim o
            java entende que o nome que vamos receber no nosso método é
            diferente do nome do objeto que estamos criando.
          </p>
        </article>
      </div>
      <div className="filter">
        <h2>Construtor</h2>
        <p>
          O construtor vai fazer com nossa criação de objetos seja mais simples.
          Até agora vimos que basta criar uma referência para nossa classe e
          atribuir um instânciar com o new.
        </p>
        <p>
          Dessa forma vamos ter que passar coda atribuito individualmente para
          nosso objeto. Isso acontece por que não criamos o construtor, e assim
          será usado um construtor padrão por de baixo dos panos.
        </p>
        <h3>Criando um Construtor</h3>
        <p>
          Para criarmos um construtor é bem simples, vamos na nossa classe, e
          entre as variaveis e os métodos vamos criar o contrutor. Essa ordem é
          padronizada.
        </p>
        <p>Veja como criamos:</p>
        <div className="div-img">
          <img
            src={require("../../../assets/imgs/imgsJava/classeAnimais.png")}
            alt="metodosEmcapsulamento"
          />
        </div>
        <p>
          O primeiro constructor que aparece é apenas para que o cachorro1 que
          criamos anteriormente continue funcionando.
        </p>
        <p>
          Perceba que é bem prático criar um constructor. Vamos apenas colocar
          como public para podemos chamar em outro arquivo, em seguida vamos
          colocar o nome da nossa classe, até mesmo a primeira letra maiúscula.
          Então basta passar como parâmetros os atributos que vamos setar.
          Dentro do constructor vamos atribuir a cada atributo seu respequitivo
          valor.
        </p>
        <article>
          <h3>Obeservação</h3>
          <p>
            Para criar facilmente com o inteliJ um construtor, basta clicar com
            o segundo botão no código e clicar em generate e constructor. Agora
            você irá selecionar todas as variáveis que vai querer. Para
            selecionar mais atributos bastar ficar precionando o alt.
          </p>
        </article>
        <h3>Referência de objetos</h3>
        <p>
          Quando criamos um objeto com nossa classe, armazenamos esse objeto em
          um espaço da memória do java. Se fizermos um print nos dois objetos
          que criamos o cachorro1 e cachorro2, o java vai nos retornar o
          seguinte:
        </p>
        <pre>
          <code>
            {`
nimais.Cachorro@6acbcfc0
Animais.Cachorro@5f184fc6
            `}
          </code>
        </pre>
        <p>Essas são as referências onde estão armazenados cada objeto.</p>
        <p>
          O java permite que possamos atribuir um objeto a outras variáveis de
          referência. Então vai permitir que façamos uma atribuição de cachorro1
          = cachorro2.
        </p>
        <p>
          Fazendo isso, vamos agora passar as duas variaveis de referência para
          o primeiro o objeto o cachorro1. E como consequência, o objeto
          cachorro dois não vai ter como ser encontrado, já que a forma de
          acha-lo foi passado para outro objeto.
        </p>
        <p>
          Esse objeto que está perdido na memória do java, vai algum momento ser
          apagado pelo próprio java.
        </p>
        <h3>toString</h3>
        <p>
          Para darmos uma referência mais legivel para humanos, podemos usar o
          toString na nossa classe. É bem simples, vamos clicar com o segundo
          botão, clicar em generate, depois em toString() e por último vamos
          informar qual será a variável que vamos usar para dar a referência do
          objeto.
        </p>
        <p>
          O dado que é passado para servir de referência tem que ser únido de
          cada objeto. Se fosse um objeto de pessoas, iriamos usar por exemplo o
          cpf, pois cada pessoa tem um cpf diferente da outra.
        </p>
        <p>
          Nesse caso vamos escolher o nome do cachorro. Veja o que é retornado
          quando usamos o toString na classe ao darmos um print:
        </p>
        <h3>Variáveis estaticas</h3>

        <p>
          Podemos criar variáveis estaticas para uma classe, que engloba todos
          os objetos. Para exemplificar, vamos imaginar que queira saber quantos
          objetos já criamos com essa classe.
        </p>
        <p>
          Para isso vamos nas nossa variáves, e criar uma estatica. Dessa forma:
        </p>
        <pre>
          <code>
            {`
static int contandoCachorro;
            `}
          </code>
        </pre>
        <p>
          Agora vamos criar os métodos getter e setter. Caso não saiba{" "}
          <a href="#getter&Setter">cliqui aqui</a>
          para ver um atalho para criar.
        </p>
        <p>Agora vamos chamar nosso método get e o resultado será:</p>
      </div>
      <div className="filter">
        <h2>Herança</h2>
        <p>
          Já criamos a classe cachorro, mas imagina que fossemos criar classes
          para vários animais, teriamos que usar muito código repetido. A
          herança resolve isso de uma forma bem prática. Vamos criar uma classe
          Animais que contém todos os atributos que qualquer animais tem.
        </p>
        <p>
          Vamos usar os atributos simples como: nome, cor, altura e peso. E
          métodos simples também, como: dormir, comer e soar.
        </p>
        <p>
          Também vamos criar um construcor na nossa classe animais para vermos o
          uso do super.
        </p>
        <div className="div-img">
          <img
            src={require("../../../assets/imgs/imgsJava/classeAnimais.png")}
            alt="classeAnimais"
          />
        </div>
        <p>
          Perceba que os modificadores de acesso estão como protected, para que
          assim filhos de pacotes diferentes sejam alcançados.
        </p>
        <p>Agora para criar uma classe Cachorro, vamos fazer assim:</p>
        <div className="div-img">
          <img
            src={require("../../../assets/imgs/imgsJava/classeFilha.png")}
            alt="classeFilha"
          />
        </div>
        <p>
          Esta classe está informando que é filha da classe Animais por
          simplesmente passar a palavra extends e o nome da classe pai. A forma
          de criar o constructor é bem fácil também. Estamos colocando
          normalmente os atributos que o cachorro terá, mas na hora de atribuir
          esses valores, vamos somente usar o super, que indica que vamos passar
          para a classe pai esses atributos.
        </p>
        <p>
          Agora podemos criar um objeto cachorro com todos os atributos e
          métodos que tem na classe pai.
        </p>
        <h3>@Override</h3>
        <p>
          Colocamso o método soar na classe pai, mas como barulho colocamos cri
          cri. Cada animal vai soar de uma forma diferente. Para que possamos
          fazer essa mudança, vamos usar o @Override.
        </p>
        <p>Vai nos permitir herdar um método, e alterar-lo como quisermos.</p>
        <p>
          Se formos na classe Cachorro e escrevermos soar, o inteliJ já irá nos
          mostrar um atalho para criar esse override. Basta darmos enter que irá
          ficar assim:
        </p>
        <div className="div-img">
          <img
            src={require("../../../assets/imgs/imgsJava/override.png")}
            alt="override"
          />
        </div>
        <p>
          Agora vamos alterar o que esse método faz, apenas vamos apagar o
          super.soar() e dar um print de uma string: au au.
        </p>
        <article>
          <h3>Observação</h3>
          <p>
            Para impedirmos de que métodos sejam sobrescritos, podemos usar a
            palavra reservada final dentro dos parêntesis do método. Veja o
            exemplo:
          </p>
          <pre>public void test(final String nome);</pre>
        </article>
      </div>
      <div className="filter">
        <h2>Polimorfismo</h2>
        <p>
          O código se torna mais flexível, pois você pode tratar diferentes
          tipos de objetos como se fossem do mesmo tipo. Isso facilita a
          reutilização de código, evitando a necessidade de escrever código
          específico para cada tipo de objeto.
        </p>
        <p>
          O foco está nas características e comportamentos comuns aos objetos,
          abstraindo as diferenças entre eles. Isso torna o código mais fácil de
          entender, manter e modificar.
        </p>
        <p>
          O Polimorfismo vai nos permitir dar referências de classes pai para
          filhos. Para exemplificar vamos criar um outra classe chamada Petshop.
          Veja:
        </p>
        <div className="div-img">
          <img
            src={require("../../../assets/imgs/imgsJava/polimorfismo.png")}
            alt="polimorfismo"
          />
        </div>
        <p>
          Essa classe tem dois métodos: darBanho e tosar. Veja que estamos
          importando a classe Animais e Cachorro nesse arquivo. O método
          darBanho vai servir para todos os animais, então dentro dos parêntesis
          vamos colocar a referência que queremos.
        </p>
        <p>Já no método tosar, apenas o cachorro vai poder usar.</p>
        <h3>Referências de classes</h3>
        <p>Quando vamos criar um objeto temos o seguinte código:</p>
        <pre>
          <code>
            {`
Cachorro cachorro1 = new Cachorro;
            `}
          </code>
        </pre>
        <p>
          Primeiro escrevemos a referência da classe, depois a referência do
          objeto e por último vamos atribuir a referência do objeto uma
          instância da classe verdadeira do objeto.
        </p>
        <p>
          Poderiamos criar uma classe cochorro passando como classe de
          referência a classe animal, já que todo cachorro é um animal (Cachorro
          extends classe Animal). Então esse código aqui também vai funcionar:
        </p>
        <pre>
          <code>
            {`
Animal cachorro1 = new Cachorro;
            `}
          </code>
        </pre>
        <p>Outra forma que iria funcionar, mas não faz sentido é:</p>
        <pre>
          <code>
            {`
Animal cachorro1 = new Animal
            `}
          </code>
        </pre>
        <p>
          No código acima, estariamos criando um objeto de animal, mas isso não
          faz sentido nenhum. Para evitarmos que isso ocorra, podemos
          trnasformar nossa classe animal em uma classe abstrata. Isso vai
          impedir que tal erro ocorra.
        </p>
        <p>Para transformar uma classe em abstrata vamos fazer assim:</p>
        <pre>
          <code>
            {`
public abstract class Animais() {}
            `}
          </code>
        </pre>
      </div>
      <div className="filter">
        <h2>Interface</h2>
        <p>
          Uma interface é similar a um contrato, através dela podemos
          especificar quais métodos as classes que implementam esta interface
          são obrigados a implementar.
        </p>
        <p>
          Vamos criar uma interface como criamos uma classe, mas na hora de
          escolher classe, vamos escolher interface.
        </p>
        <p>
          Para implementar uma interface na nossa classe, vamos usar a palavra
          reservada implements e em seguida o nome da interface.
        </p>
        <p>
          Assim como criamos uma interface não abstrata, esse classe vai nos
          obrigar a implementar todos os métodos.
        </p>
      </div>
      {/* <div className="filter">
        <h2>Estrutura de dados</h2>
        <p>
          Estruturas de dados são métodos para armazenar, organizar e acessar
          coleções de dados de maneira eficiente. Elas fornecem um arcabouço
          para gerenciar informações, facilitando a manipulação e recuperação de
          dados em diversos cenários.
        </p>
        <h3>Lista ligada</h3>
        <p>
          Lista ligada ou lista encadeada é uma estrutura de dados dinâmica,
          linear, formada por nós. Cada nó é capaz de armazenar uma informação e
          referênciar o próximo nó.
        </p>
        <h4>Principais operações:</h4>
        <ol className="list-ol">
          <li>
            Adicionar item
            <ol type="a">
              <li>No inicio (prepend)</li>
              <li>No fim (append)</li>
              <li>Em uma determinada posição (insert)</li>
            </ol>
          </li>

          <li>
            Ler item
            <ol type="a">
              <li>Do inicio (getHead)</li>
              <li>Do fim (getTall)</li>
              <li>Do uma determinada posição (get)</li>
            </ol>
          </li>

          <li>
            Remover item
            <ol type="a">
              <li>No inicio (removeFirst)</li>
              <li>No fim (removeLast)</li>
              <li>Em uma determinada posição (delete)</li>
            </ol>
          </li>

          <li>
            Imprimir
            <ol type="a">
              <li>Listar elementos na lista</li>
            </ol>
          </li>

          <li>
            Operações opcionais:
            <ol type="a">
              <li>Tamanho atual (getLength)</li>
              <li>Esta vazia? (isEmpty)</li>
              <li>Esvaziar lista (makeEmpty)</li>
            </ol>
          </li>
        </ol>
      </div> */}
    </div>
  );
}
