export default function MySQL() {
  return (
    <div className="pages-notes-text">
      <div className="filter">
        <h2>Banco relacional</h2>
        <p>
          No mySql podemos criar tabelas com dados, esses dados podem ter
          restrições para serem adicionados, como não poder repetir um valor já
          adicionado anteriormente.
        </p>
        <p>
          A primer key ou chave primária tem esse tipo de restrição, pois ela
          vai funcionar como id de cada tupla. (é uma linha da tabela do banco
          de dados) Vamos poder usar esse id como formas de relacionar tabelas
          do banco de dados.
        </p>
        <p>
          A primer key tem como caracteristicas: ser única, não vazia e
          imutavel. Podemos mudar o valor, mas é muito trabalhoso e sem sentido.
        </p>
        <p>
          Essa chave pode ser um valor não relacionado aos dados da tupla, ou
          seja um valor sintético que é chamado de surrogate key, ou podemos
          criar uma chave natural key. Seria como se fossemos cadastrar uma
          pessoa em um banco de dados e usassemos o cpf ou algo que se restrinja
          a pessoa cadastrada.
        </p>
        <p>É mais comum ser usada a surrogate key.</p>
      </div>
      <div className="filter">
        <h2>Relacionamento</h2>
        <p>
          Já vimos a primer key, e para relacionar tabelas ela será usada em
          outra e passa a ser chamada de foreign key. Caso tenhamos uma tabela
          de mães e outra filhos. Dessa forma:
        </p>
        <div className="div-img">
          <img src={require("../../../assets/imgs/imgsMySQL/1.png")} alt="" />
        </div>
        <p>
          Para saber qual a mãe de cada filho vamos relacionar as tabelas usando
          a primer key da mãe na tabela filho em uma nova coluna. Veja:
        </p>
        <h3>Relação um para muitos</h3>
        <div className="div-img">
          <img src={require("../../../assets/imgs/imgsMySQL/2.png")} alt="" />
        </div>
        <p>
          A relação que fizemos entre as tabelas chamamos de um para muitos.
          Também podemos fazer uma relação de um para um.
        </p>
        <p>
          Para escolher a tabela que irá receber a chave estrangeira você vai se
          basear no que é mais fácil a busca pelo dado.
        </p>
        <h3>Relação um para um</h3>
        <p>
          Se tivermos outras duas tabelas: Homem e mulher, para que cada homem
          tenha como relação apenas sua respequiva esposa, poderiamos dar a essa
          coluna uma restrição unique, assim não será permitido repetição.
        </p>
        <p>
          Em relações um pra um vamos usar apenas uma das tabelas para receber a
          chave estrangeira, o banco não vai aceitar ter relações bilaterais.
        </p>
        <h3>Relação muitos para muitos</h3>
        <p>
          A última relação que teremos é a de muitos para muitos. Vamos agora
          imaginar outras duas tabelas que serão uma para tio e outra para
          sobrinho. E todos são relacionados com todos.
        </p>
        <div className="div-img">
          <img src={require("../../../assets/imgs/imgsMySQL/3.png")} alt="" />
        </div>
        <p>
          Aqui precisariamos adicionar duas colunas de tios, e ainda assim não
          ficaria organizado.
        </p>
        <p>
          Então a forma mais simples de resolver é criando uma terceira tabela
          relacionando os ids de cada um. Veja:
        </p>
        <div className="div-img">
          <img src={require("../../../assets/imgs/imgsMySQL/4.png")} alt="" />
        </div>
        <p>
          Então teriamos duas foreign keys uma em cada coluna relacionando cada
          tio com cada sobrinho. E essas duas foreign keys serão a primer key
          desse tabela nova.
        </p>
      </div>
      <div className="filter">
        <h2>Instalar MySQL server</h2>
        <p>Assista esse vídeo para instalar corretamente:</p>
        <div className="div-video">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/laLWx2bMWcg"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <div className="filter">
        <h2>Conectando com seu banco</h2>
        <p>
          Vamos criar uma conexão com o nosso banco usando uma extenção no vs
          code chamada vscode_database. Em seguida usarmos o atalho{" "}
          <strong>ctrl shift p</strong>e digitamos <strong>mysql</strong>, irá
          aparecer essa tela:
        </p>
        <div className="div-img">
          <img src={require("../../../assets/imgs/imgsMySQL/5.png")} alt="" />
        </div>
        <p>
          Deixaremos na opção MySql e vamos digitar a senha do banco que
          criamos.
        </p>
        <p>
          Em seguida vamos na parde inferior do nosso vscode e clicar no
          <strong>Database not selected</strong> e selecionar o nome que você
          deu ao seu banco.
        </p>
      </div>

      <div>
        <h2>Criar tabelas</h2>
        <p>
          O próximo passo é criar um arquivo sql, que nosso nosso caso vamos
          nomear de estados.sql e dentro do arquivo vamos digitar o nosso
          código.
        </p>
        <div className="div-img">
          <img src={require("../../../assets/imgs/imgsMySQL/6.png")} alt="" />
        </div>
        <h3>Códigos usados </h3>
        <ul>
          <li>
            <strong>CREATE table</strong> - Criar tabela
          </li>
          <li>
            <strong>INT</strong> - Número inteiro
          </li>
          <li>
            <strong>UNSIGNED</strong> - Sem sinal
          </li>
          <li>
            <strong>NOT NULL</strong> - valor não pode ser nulo
          </li>
          <li>
            <strong>AUTO_INCREMENT</strong> - Vai incrementar o valor
            automaticamente
          </li>
          <li>
            <strong>VARCHAR</strong> - Caracteres e dentro dos parêntesis a
            quantidade permitida de caracteres
          </li>
          <li>
            <strong>ENUM</strong> - Valores obrigatórios, e dentro dos
            parêntesis os valores
          </li>
          <li>
            <strong>DECIMAL</strong> - Valores decimais
          </li>
          <li>
            <strong>PRIMARY KEY</strong> - Chave primária
          </li>
          <li>
            <strong>UNIQUE</strong> - Nâo pode havar duplicidade no campo.
          </li>
        </ul>
        <p>
          O sql é uma linguagem insensitiva, podemos usar letras maiúsculas e
          minúsculas que ele irá interpretar normalmente.
        </p>
        <p>
          É uma linguagem declarativa, apenas informamos o que queremos e o sql
          faz todo o trabalho.
        </p>
        <p>
          Para rodarmos esses códigos vamos selecionar a parte que queremos,
          isso mesmo podemos rodar apenas as linhas de códigos que quisermos.
          Depois de selecionar vamos usar o atalho <strong>ctrl shift e</strong>
        </p>
      </div>
      <div id="add" className="filter">
        <h2>Inserir dados</h2>
        <div className="div-img">
          <img src={require("../../../assets/imgs/imgsMySQL/7.png")} alt="" />
        </div>
        <h3>Códigos usados </h3>
        <ul>
          <li>
            <strong>insert into</strong> - Inserir dados dentro, nos parêntisis
            os dados que serão adicionados.
          </li>
          <li>
            <strong>values</strong> - Informamos os valores respequivos.
          </li>
        </ul>
        <p>
          Vamos adicionar dados apenas em uma tupla no primeiro insert, e no
          segundo estamos adicionando várias tuplas, basta que separemos com
          vírgula os dados. E sempre no final de cada instrução temos que
          escrever o ponto e vírgula.
        </p>
        <h3>Importando dados de um csv</h3>
        <p>
          Para importar dados de csv, precisamos ter esse documento csv na nossa
          máquina.
        </p>
        <p>
          Então o código sql que vamos usar será: copy nome da tabela (as
          colunas) from o caminho do arquivo entre aspas delimiter é o que esta
          separando os dados, normalmente é uma virgula entre aspas também e por
          último vamos usar o csv header
        </p>
      </div>
      <div className="filter">
        <h2>Consultar banco</h2>
        <div className="div-img">
          <img src={require("../../../assets/imgs/imgsMySQL/8.png")} alt="" />
        </div>
        <p>
          Na primeira linha de código vamos buscar todos os dados da tabela, na
          terceira linha vamos buscar todos, mas mostrar apenas a sigla e nome e
          se selecionarmos a linha 3 e 4 vamos receber como resposta apenas as
          siglas e nomes que são da região Sul.
        </p>
        <p>
          Se selecionarmos a linha 8 e 9 vamos receber o nome e a região dos
          estados que tem população maior que 10 milhões.
        </p>
        <h3>Códigos usados </h3>
        <ul>
          <li>
            <strong>select</strong> seleciona as tabelas que serão escritas em
            seguida (o asterisco quer dizer todas as colunas da tabela)
          </li>
          <li>
            <strong>from</strong> de qual tabela será a pesquisa
          </li>
          <li>
            <strong>where</strong> filtro de dados
          </li>
          <li>
            <strong>as</strong> muda o cabeçalho da coluna
          </li>
          <li>
            <strong>order by</strong> orderna de forma crescente ou alfabetica
          </li>
          <li>
            <strong>desc</strong> muda a ordem para decrescente
          </li>
        </ul>
        <article>
          <h3>Observação</h3>
          <p>
            No caso de atualização e deleção de dados no banco, vamos sempre
            usar o where para filtrar o que queremo alterar ou apagar, pois caso
            não seja especificado, toda a tabela será alterada.
          </p>
        </article>
      </div>
      <div className="filter">
        <h2>Atualizar dados</h2>
        <div className="div-img">
          <img src={require("../../../assets/imgs/imgsMySQL/9.png")} alt="" />
        </div>
        <p>
          Primeiro vamos usar o update com a tabela que queremos alterar, em
          seguida setar qual será a alteração e por último informar qual será o
          filtro para não alterarmos a tabela inteira.
        </p>
        <p>
          Perceba que para fazer mais de uma alteração em uma tupla basta que
          separemos por vírgula, como está sendo desmonstrado nas linhas 6 e 7.
        </p>
        <h3>Códigos usados </h3>
        <ul>
          <li>
            <strong>update</strong> - Informar qual tebala será atualizada
          </li>
          <li>
            <strong>set</strong> - Passar qual será a alteração
          </li>
        </ul>
        <article>
          <h3>Observação</h3>
          <p>
            Podemos criar novas linhas na tabela passando o id, mesmo ele sendo
            auto incrementado, tendo em vista que não podemos repetir ids já
            existentes. Vamos adicionar o estado um estado novo com o id 1000.
          </p>
          <div className="div-img">
            <img
              src={require("../../../assets/imgs/imgsMySQL/10.png")}
              alt=""
            />
          </div>
        </article>
      </div>
      <div className="filter">
        <h2>Deletar dados</h2>
        <p>Vamos deletar o estado criado no exemplo anterior.</p>
        <div className="div-img">
          <img src={require("../../../assets/imgs/imgsMySQL/11.png")} alt="" />
        </div>
        <p>
          Muito simples, vamos delete from para informar de qual tabela vamos
          deletar algo, e o filtro.
        </p>
      </div>
      <div className="filter">
        <h2>Consultas agregadas</h2>
        <p>
          Podemos fazer selects com complexidades incriveis, as consultas
          agregadas são muito importantes. Veja um exemplo:
        </p>
        <div className="div-img">
          <img src={require("../../../assets/imgs/imgsMySQL/12.png")} alt="" />
        </div>
        <p>
          Como já vimos o <strong>as</strong> dá apelidos, e estamos dando
          apelidos para região e para a soma das populações.
        </p>
        <p>
          Na linha 3 o comando <strong>sum</strong> soma os valores passados em
          parêntesis.
        </p>
        <p>
          A linha 4 referência qual tabela vamos usar e na linha 5 estamos
          agrupando por região e para terminar na linha 6 estamos usando a ordem
          decrescente.
        </p>
        <h3>Códigos usados </h3>
        <ul>
          <li>
            <strong>sum</strong> - Soma os valores das colunas
          </li>
          <li>
            <strong>group</strong> - Agrupa pelo parâmetro usado nos parêntesis
          </li>
        </ul>
        <div className="div-img">
          <img src={require("../../../assets/imgs/imgsMySQL/13.png")} alt="" />
        </div>
        <p>
          Já aqui estamos usando uma função para dar a média da população. Essa
          função soma os valores de população e divide pela quantidade de
          linhas.
        </p>
        <h3>Códigos usados </h3>
        <ul>
          <strong>avg</strong> - Dá a média do parâmetro passado para a função.
        </ul>
      </div>
      <div className="filter">
        <h2>Chaves estrangeiras</h2>
        <p>
          Para vermos como usar chaves estrangeiras vamos criar outra tabela. O
          nome será cidades. Veja como será criada:
        </p>
        <div className="div-img">
          <img src={require("../../../assets/imgs/imgsMySQL/14.png")} alt="" />
        </div>
        <p>
          Dessa vez estamos criando de uma forma diferente. Vamos usar o comando{" "}
          <strong>if not exists</strong> para caso tentarmos sar esse comando
          mais uma vez, não dará erro, apenas não criará outra, pois o comando
          tem essa função.
        </p>
        <p>
          O outro código que ainda não vimos é o da chave estrangeira. Vamos
          criar ela e na linha 7 estamos usando o comando{" "}
          <strong>foreign key</strong>
          para referênciar a chave estrangeira e o comando{" "}
          <strong>references</strong>
          seguido da tabela e estre parêntesis o dado que será a referência.
        </p>
        <p>
          Para inserirmos o id do estado correto, precisariamos primerio
          consultar o id com um select, ou vamos usar o select dentro do insert.
          Veja as duas formas:
        </p>
        <div className="div-img">
          <img src={require("../../../assets/imgs/imgsMySQL/15.png")} alt="" />
        </div>
        <p>
          No primeiro insert para descobrirmos o id do estado teriasmos que
          antes olhar ou fazer um select, já no segundo caso estamos fazendo a
          consulta dentro do insert.
        </p>
      </div>
      <div className="filter">
        <h2>Consultar múltiplas tabelas</h2>
        <p>
          Vamos fazer uma consulta para vermos as cidades os estados e a região,
          e para isso geralmente usamos apelidos para as tabelas, pois assim
          fica muito mais fácil consultar. Veja:
        </p>
        <div className="div-img">
          <img src={require("../../../assets/imgs/imgsMySQL/16.png")} alt="" />
        </div>
        <p>
          Nesse código estamos dando no final da linha 1 apelidos para as
          tabelas, perceba como é simples, basta colocar o apelido do lado da
          tabela.
        </p>
        <p>
          Podemos usar os apelidos antes mesmo de serem dados, é o que está
          acontecendo no começo da primeira linha. A tabela que será retornada
          vai mostrar o nome do estado, o nome da cidade e a região do estado.
        </p>
        <p>
          Na linha dois é que vamos identificar quando os id dos estados são
          iguais as chaves estrangeiras das cidades.
        </p>
        <h3>Agora usando o Join</h3>
        <p>
          O inner join vai ser feito como no exemplo anterior. Vamos buscar
          tabelas em tabelas. Veja como podemos fazer o mesmo exemplo acima com
          o inner join:
        </p>
        <div className="div-img">
          <img src={require("../../../assets/imgs/imgsMySQL/17.png")} alt="" />
        </div>
      </div>
      <div className="filter">
        <h2>Consultar com join</h2>
        <p>
          Já vimos o inner join que vai nos fornecer os dados que estamos
          pedindo. Temos tambem o left join que irá nos retornar o valor que
          estamos solicitando e os dados da tabela que está sendo introduzida
          primeiro.
        </p>
        <p>
          Tambem temos a right join que irá trazer todos os dados da segunda
          tabela que seria a tabela da direita.
        </p>
      </div>
    </div>
  );
}
