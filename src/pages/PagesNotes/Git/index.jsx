export default function Git() {
  return (
    <div className="pages-notes-text">
      <div className="filter">
        <h2>Para que surgiu o git?</h2>
        <p>
          A ferramenta Git surgiu para que projetos fossem commitados, ou seja
          termos como versionar qualquer aplicação que estiver produzindo.
        </p>
        <p>
          Quando vamos melhorando ou adicionando funcionalidades a nossas
          aplicações, podemos ter alguns imprevistos que precisamos voltar a
          maneira antiga do projeto.
        </p>
        <p>
          O git surgiu justamente para resolver esse problema, com comandos
          simples podemos voltar projetos como eram e se não tivessemos essa
          ferramenta teriamos muitos problemas. Quando um projeto é pequeno,
          ainda dá pra resolver com umas mudancinhas, mas quando temos uma
          grande aplicação, temos que ter esse recurso para sermos mais práticos
          e eficientes.
        </p>
        <p>
          Para baixar o Git é muito simples{" "}
          <a
            href="https://www.git-scm.com/downloads"
            target="_blank"
            rel="noreferrer"
          >
            Clique aqui.
          </a>
        </p>
      </div>

      <div className="filter">
        <h2>Se apresentando</h2>
        <p>
          Para começar vamos adicionar algumas informações suas no seu git, pois
          quando estivermos trabalhando com alguem em um projeto, precisamos
          saber com quem estamos falando. O primeiro comando no seu git então é
          o <strong>git confg --global usar.name ""</strong>e dentro das aspas
          vamos digitar nosso nome. Depois vamos usar o
          <strong>git confg --global user.email ""</strong> e novamente dentro
          das aspas coloque seu e-mail de contato.
        </p>
      </div>

      <div className="filter">
        <h2>Clonando repositórios</h2>
        <p>
          Teremos duas formas de usar o git. Podemos clonar um repositório já
          existente, ou criar um na nossa maquina. Agora veja como clonar um
          repositório.
        </p>
        <p>
          Para clonar repositórios é muito simples. Basta que crie uma pasta na
          sua maquina, pegue o repositório que quer clonar. A forma mais
          utilizada é usando o GitHub.
        </p>
        <p>
          Entraremos no projeto, vamos clicar no botão <strong>code</strong> e
          copiar o HTTPS que o repositório fornece.
        </p>
        <p>
          Agora vamos no prompt de comando, ou no teminal usando o vs code e
          dentro da pasta que criamos dar o comando git clone e colar o
          repositório que copiamos.
        </p>
      </div>

      <div className="filter">
        <h2>Para iniciar</h2>
        <p>
          Agora vamos criar um repositório na nossa maquina. Basta criar uma
          pasta e entrar nela, com o cmd ou no vs code.
        </p>
        <p>
          No visual studio code vamos dar nosso primeiro comando para
          inicializarmos o git. Para abrir o terminal usamos as teclas{" "}
          <strong>ctrl j</strong>. E no terminal vamos digitar o comando
          <strong>git init</strong> dentro da pasta que criamos. Nessa hora vai
          aparecer uma mensagem informando que o repositório git foi criado e
          irá aparecer uma pasta nomeada como .git dentro da pasta que estamos
          trabalhando.
        </p>
        <article>
          <h3>Observação</h3>
          <p>
            A pasta .git é uma pasta oculta. Então, caso seu explorador de
            arquivos esteja com a opção deixar oculto ativada, não irá aparecer
            essa a pasta .git.
          </p>
          <p>
            Caso esteja ocultando, é só clicar no visualizar, depois mostrar e
            por ultimo clicar em itens ocultos.
          </p>
        </article>
      </div>

      <div className="filter">
        <h2>Preparar para commit</h2>
        <p>
          Para usar como exemplo vamos criar duas páginas, index.html e
          script.js. No terminal vamos usar o comando
          <strong>git status</strong>. Esse comando mostrará todos os arquivos
          da sua aplicação. Se eles estão commitados (Unmodifield), preparados
          para commitar (Staged) ou não preparados para commitar (Modifield). No
          caso como esses arquivos foram recem criados, com o comando git status
          veremos que eles não estão preparados para commit, e para podermos
          preparalos temos duas formas.
        </p>
        <article>
          <h3>Observação</h3>
          <p>
            O git vai ter três principais estágios:
            <ul>
              <li>
                <h5>Unmodifield</h5>
                <p>
                  Estado de quando foi clonado algum repositório, ou arquivo ja
                  commitado (Sem mudanças.)
                </p>
              </li>
              <li>
                <h5>Modifield</h5>
                <p>Estado de mudança adicionada. (Quando usamos o ctrl s)</p>
              </li>
              <li>
                <h5>Staged</h5>
                <p>Esta preparado para commitar (Quando usamos o git add .)</p>
              </li>
            </ul>
          </p>
        </article>
        <p>
          Podemos usar um comando para preparar um de cada vez. Dessa forma:
          <strong>git add index.html</strong>. Se quisermos preparar todos os
          arquivos que sofreram mudanças de uma vez, usamos o comando
          <strong>git add .</strong>.
        </p>
        <article>
          <h3>Observação</h3>
          <h4>Alguns comandos comuns:</h4>
          <ul>
            <li>
              <h5>git diff</h5>
              <p>
                O comando git diff vai nos mostrar exatamente as linhas que
                foram modificadas.
              </p>
            </li>
            <li>
              <h5>git log</h5>
              <p>Mostra o historico dos dos últimos commits.</p>
            </li>
            <li>
              <h5>git restore</h5>
              <p>
                Pode restaurar arquivos que foram apenas salvos, usando o crlt
                s, ou podemos usar para voltar arquivos que usamos o git add.
              </p>
              <p>
                Para desfazer o crlt s, basta usar o comando git restore e o
                nome do arquivo. Já para desfazer o git add . (chamamos isso de
                staged). Vamos usar o comando git --staged e o nome do arquivo.
              </p>
            </li>
          </ul>
        </article>
      </div>

      <div className="filter">
        <h2>Primeiro commit</h2>
        <p>
          Com os arquivos preparados para commit usaremos o comando{" "}
          <strong>git commit -m ""</strong>
          (dentro das aspas vamos adicionar uma descrição). Nesse exemplo vamos
          colocar exatamente assim:
          <strong>
            git commit -m "Primeira verção com index.html e script.js"
          </strong>
        </p>
        <p>
          Pronto! Vizemos nosso primeiro commit, para visualizarmos todos os
          commits podemos usar o comando
          <strong>git log</strong>.
        </p>
      </div>

      <div className="filter">
        <h2>Ignore Aquivos</h2>
        <p>
          Alguns arquivos da sua aplicação podem ter algo que você não queira
          deixar visivel. Senhas, dados pessoais, entre outros dados. Para não
          commitar alguma pasta, basta não preparar o arquivo para commit né?
          Não! No dia a dia vamos trabalhar com muitos arquivos, então fica
          inviavel preparar de um por um, o mais fácil é usar um recurso do git
          para colocarmos os arquivos que não queresmos commitar. Tudo que vamos
          commitar irémos deixar no github, e não é uma boa prática deixar dados
          sensiveis como público.
        </p>
        <p>
          Então a forma mais simples de resolver esse problema é criar um
          arquivo nomeado assim:
          <strong>.gitignore</strong> Em seguida dentro desse arquivo
          escrevermos o nome dos arquivos que não vamos commitar. Dessa forma
          resolvemos muito simplesmente o problema.
        </p>
      </div>

      <div className="filter">
        <h2>Branch</h2>
        <p>
          Um conceito muito importante é o de branch, note que quando você abre
          o terminal com o bash do git, vai aparecer um nome entre colchetes
          "(master)". Normalmente uma aplicação tem dois ambientes, o de
          produção que é o ambiente que o cliente ta usando e o de
          desenvolvimento, que é onde nós vamos trabalhar.
          {/*Vamos colocar como
          exemplo um app, o que o cliente fica usando fica no branch master. O
          outro ambiente é o de desenvolvimento, que vai ficar o código que está
          sendo testado, um ambiente onde os desenvolvedores estão mudando o
          código constantimente. */}
        </p>
        <p>
          Vamos supor que recebemos uma tarefa de adicionar uma funcionalidade
          de cadastro em um app, não podemos mandar para o ambiente de produção
          (do cliente) funcionalidades que não sabemos se tem algum erro ou
          coisa do tipo. Então temos que ter outro ambiente para trabalharmos o
          código até termos certeza que a funcionalidade nova não irá quebrar a
          aplicação.
        </p>
      </div>

      <div className="filter">
        <h2>Criando uma branch development</h2>
        <p>
          Para criar uma nova branch é muito simples, só escrever o comando
          <strong>git branch development</strong>. Você não notará nada de
          diferente, mas se usar o comando <strong>git branch</strong> o
          terminal mostrará todas as branchs existentes e qual está em uso.
        </p>
        <p>
          Pensem em branch como se fossem pequenas pastas dentro do nosso
          repositório. Para podermos mudar de branch usamos o comando
          <strong>git checkout development</strong>. Nesse caso foi o
          development, mas você vai usar o nome da branch para qual você quer
          ir. Se quiser voltar para o master é só colocar o mesmo comando com o
          nome master <strong>git checkout master</strong>.
        </p>
        <p>
          Para exemplificar melhor vamos ao terminal e vamos criar uma branch
          com o comando
          <strong>git branch cadastro-cliente</strong> Em seguida vamos vê os
          ambientes que temos com o comando:
          <strong>git branch</strong>, então vamos entrar nesse ambiente com o
          comando:
          <strong>git checkout cadastro-cliente</strong>. No exemplo vamos criar
          uma pasta cadastro-cliente e dentro dessa pasta um arquivo com mesmo
          nome.
        </p>
        <p>
          Se usarmos o comando git status veremos que temos a pasta criada não
          preparada para commitar, então vamos preparar e commitar. Os comandos
          são <strong>git add .</strong> para preparar todo que tiver que
          preparar e
          <strong>git commit -m "cadastro de cliente adicionado"</strong>
        </p>
        <h2>Git merge</h2>
        <p>
          Pronto, agora que você viu como funciona essa mudança de ambientes na
          prática, vamos mudar de branch mais uma vez com o comando
          <strong>git checkout development</strong>. Se olhar nos seus arquivos,
          vai notar que a pasta cadastro-cliente não está mais lá, pois estão
          apenas da branch de produção. Agora vamos supor que terminamos a
          funcionalidade de cadastro de clientes e queremos colocar na branch do
          development. É simples! Iremos entrar no ambiente que irá receber o
          outro, nesse caso o<strong>git checkout development</strong> e usar o
          comando <strong>git merge cadastro-cliente</strong>. Pronto! Já está
          integrado com a branch development. Agora vamos supor que está tudo
          testado e queremos mandar para o cliente. Vamos entrar no
          <strong>git checkout master</strong> e aqui vamos usar o comando
          <strong>git merge development</strong> assim todo os commits da branch
          de development estará no branch master.
        </p>
      </div>
    </div>
  );
}
