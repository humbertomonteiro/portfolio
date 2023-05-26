import '../pagesNotes.css'

import { SiFirebase } from 'react-icons/si'

import { motion } from 'framer-motion'

import PagesNotesLinks from '../../../components/PagesNotesLinks'
import Search from '../../../components/Search'

import ExempleFirestore from '../../../components/ExemplesFirestore'

export default function Firebase() {
    return (
        <motion.div
        initial={{ y: 150 }}
        animate={{ y: 0 }}
        transition={{ duration: .5 }}
        className="pages-notes-container">

            <PagesNotesLinks />

            <div className="div-bg">
                <SiFirebase className='div-bg-icon' />    
            </div>

            <Search />

            <h1>Firebase + React</h1>
            <div className='pages-notes'>
                <div className='pages-notes-text'>
                    <div className="filter">
                        <div className="filter">
                            <h2>Criar projeto</h2>
                            <p>
                                Para usar você precisa ter uma conta no google.
                                Basta entrar no <a target='_blank' href="https://firebase.google.com/?hl=pt">Firebase</a> e
                                fazer seu login. Vamos criar um projeto na nossa conta para treinar.
                                Veja como fazer:
                            </p>
                            <div className="div-img">
                                <img src={require('../../../assets/imgs/imgsFirebase/createProject.png')} alt="" />
                            </div>
                            <p>
                                Vecê vai procurar esse parte e clicar. A próxima página irá abrir
                                solicitando o nome do seu projeto. Dê o nome que quiser e clique em
                                continuar. Aqui vamos dar o nome de exemple:
                            </p>
                            <div className="div-img">
                                <img src={require('../../../assets/imgs/imgsFirebase/nameProject.png')} alt="" />
                            </div>
                            <p>
                                Em seguida será perguntado se quer usar o Analytics. Podemos deixar
                                ativado. A próxima parte é selecionar o Default account for Firebase
                                e continuar.
                            </p>
                            <div className="div-img">
                                <img src={require('../../../assets/imgs/imgsFirebase/defaultAcount.png')} alt="" />
                            </div>
                            <p>
                                Pronto, o projeto vai carregar para ser criado. Quando carregar basta
                                clicar em continuar e já seremos encaminhados para nosso projeto.
                            </p>
                            <div className="div-img">
                                <img src={require('../../../assets/imgs/imgsFirebase/addFirebase.png')} alt="" />
                            </div>
                            <p>
                                O próximo passo é definir para qual processador vamos programar. Temos o
                                nativo para Android, o nativo para IOS e para Web.
                            </p>
                            <div className="div-img">
                                <img src={require('../../../assets/imgs/imgsFirebase/selecionarTipe.png')} alt="" />
                            </div>
                            <p>
                                No nosso caso vamos selecionar o Web e vamos ser direcionados para 
                                uma página que irá solicitar o nome da nossa aplicação. (Pode dar 
                                qualquer nome) vou dar o nome de exempleApp e vamos prosseguir.
                            </p>
                            <div className="div-img">
                                <img src={require('../../../assets/imgs/imgsFirebase/addFirebaseWeb.png')} alt="" />
                            </div>
                            <p>
                                Vai ser gerado as suas configurações para poder usar tudo na nossa plicação.
                            </p>
                            <div className="div-img">
                                <img src={require('../../../assets/imgs/imgsFirebase/settings.png')} alt="" />
                            </div>
                        </div>
                        <div className="filter">
                            <h2>Cloud Firestore</h2>
                            <div className="div-img">
                                <img src={require('../../../assets/imgs/imgsFirebase/cloudFirestore.png')} alt="" />
                            </div>   
                            <p>
                                Esse é o nosso banco de dados, que para ativarmos vamos ter que clicar no 
                                Criar banco de dados, e vão aparecer duas opções: start in Production mode e start 
                                in test mode.
                            </p>
                            <div className="div-img">
                                <img src={require('../../../assets/imgs/imgsFirebase/mode.png')} alt="" />
                            </div>
                            <p>
                                No nosso caso vamos usar o start in test mode. Vamos clicar em próximo e vai
                                aparecer uma tela pedindo para selecionarmos onde vai ser hospedado nosso banco.
                                Aqui vamos procurar pelo de São Paulo, pois é o único no Brasil até o dia que
                                estou escrevendo aqui. Precisamos escolher o mais proximo de onde vai ser ultilizado 
                                para que tenhamos o minimo de latencia possivel.
                            </p>
                            <div className="div-img">
                                <img src={require('../../../assets/imgs/imgsFirebase/createDb.png')} alt="" />
                            </div>
                            <p>
                                Essa opção não vai poder ser mudada.
                            </p>
                            <p>
                                Escolhendo isso podemos prosseguir e vai ser criado nosso banco. Pode demorar um
                                pouco, mas quando for criado será esse nosso Cloud Firestore:
                            </p>
                            <div className="div-img">
                                <img src={require('../../../assets/imgs/imgsFirebase/dashBord.png')} alt="" />
                            </div>
                            <h2>Entendendo o Cloud Firebase</h2>
                            <p>
                                Dentro do Cloud firebase vamos ter collections que terão documents. Podemos 
                                ter várias collections e dentro 
                                das collections podemos ter vários documents.
                            </p>
                            <p>
                                Para exemplificar vamos criar uma nova collection clicando em iniciar 
                                coleção e dentro da aba que abrirá vamos primerio dar o nome da coleção, que 
                                será o caminho pai do documento e em seguida vamos dar o id do documento, esse 
                                vai ser o documento dentro da coleção. Veja o exemplo:
                            </p>
                            <div className="div-img">
                                <img src={require('../../../assets/imgs/imgsFirebase/createCollection.png')} alt="" />
                            </div>
                            <p>
                                posts é o nome da coleção e dentro estamos criando um documento com o id que 
                                colocamos como 1 e podemos criar campos para esse documento. Nesse caso 
                                estamos criando dois campos: post e autor.
                            </p>
                            <div className="div-img">
                                <img src={require('../../../assets/imgs/imgsFirebase/showCollection.png')} alt="" />
                            </div>
                            <p>
                                Se quisermos adicionar mais um document nessa coleção basta clicar em adicionar 
                                documento.
                            </p>
                            <div className="div-img">
                                <img src={require('../../../assets/imgs/imgsFirebase/newDoc.png')} alt="" />
                            </div>
                            <p>
                                Para criar uma nova coleção é da mesma forma que criamos um novo documento.
                            </p>
                            <div className="div-img">
                                <img src={require('../../../assets/imgs/imgsFirebase/newCollection.png')} alt="" />
                            </div>
                            <p>
                                Veja que o campo id do documento esta vazio, pois aqui vamos usar o id automático 
                                clicando em código automático, assim ele sempre sera setado um id 
                                diferente.
                            </p>
        
                        </div>

                        <div className="filter">
                            <h2>Configurando Firestore</h2>
                            <p>
                                Vamos criar um projeto React e baixar o firestore nele com o 
                                comando <strong>npm i firebase</strong>.
                            </p>
                            <p>
                                No firebase vamos no menu lateral e procurar por uma engrenagem 
                                para pegarmos nossas configurações.
                            </p>
                            <div className="div-img">
                                <img src={require('../../../assets/imgs/imgsFirebase/menuLeft.png')} alt="" />
                            </div>
                            <p>
                                Clicar em configurações do prejeto e buscar na parte de baixo da
                                página uma constante chamada <strong>firebaseConfig</strong>. Nessa
                                constante vamos ter as credenciais do projeto. 
                            </p>
                            <p>
                                Com essa constante copiada vamos no nosso projeto react novamente e 
                                criar dentro da pasta src um arquivo. Podemos dar qualquer nome, nesse 
                                caso vou dar o nome de firebaseConnection.js e dentro vamos colar nossas 
                                credenciais.
                            </p>

                            <p>
                                No topo desse arquivo vamos importar o <strong>initializeApp</strong> de 
                                firebase/app e importar tambem o <strong>getFirestore</strong> do 
                                firebase/Firestore.
                            </p>
                            <p>
                                Para inicializar nosso banco de dados vamos criar uma constante passando 
                                para ela o initializeApp com as nossas credenciais como parâmetro. Veja:
                            </p>
                            <div className="div-img">
                                <img src={require('../../../assets/imgs/imgsFirebase/settingsInitialize.png')} alt="" />
                            </div>
                            <p>
                                Nosso próximo passo agora é referenciar nosso banco de dados com o getFirestore.
                                Então vamos criar outra constante e atribuir a ela o nosso getFirestore passando 
                                como parâmetro nossa inicialização que acabamos de criar.
                                E em seguida vamos exportar essa constate:
                            </p>
                            <div className="div-img">
                                <img src={require('../../../assets/imgs/imgsFirebase/exportDb.png')} alt="" />
                            </div>
                        </div>
                        <div className="filter">
                            <h2>Consumindo banco de dados</h2>
                            <p>
                                Vamos no app da nossa aplicação react e importar nosso banco que nomeamos 
                                como db, e fazer um componente que tenha dois inputs para pegarmos dois valores 
                                e adicionarmos cada um a uma useState. Veja o código:
                            </p>
                            <div className="div-img">
                                <img src={require('../../../assets/imgs/imgsFirebase/componentFirebase.png')} alt="" />
                            </div>
                            
                        </div>
                    </div>
                    <div className="filter">
                        <h2>Cadastrar novo documento</h2>
                        <p>
                            Para conseguirmos adicionar um novo documento na nossa collection 'posts' vamos 
                            ter que importar alguns métodos do firebase/firestore: o AddDoc e o collection.
                        </p>
                        <p>
                            Na nossa função que criamos para o botão vamos transforma-la em asincrona. 
                            Vamos usar o addDoc, pois assim não vamos precisar passar o id do documento, seria 
                            o mesmo que clicar no botão código automático na hora de criar manualmente o documento.
                        </p>
                        <p>
                            Para o addDoc vamos passar o collection que importamos, esse collection vai receber 
                            dois parâmetros o db para fazer conecção com nosso banco e o nome da coleção que queremos adicionar
                            o documento. E o addDoc 
                            vai receber um segundo parâmetro que será um objeto com os campos do documento que está
                            sendo criado. Veja:
                        </p>
                        <div className="div-img">
                            <img src={require('../../../assets/imgs/imgsFirebase/functionAdddoc.png')} alt="" />
                        </div>
                        <p>
                            O addDoc é uma promisse que quando for realizada vamos deixar os campos dos inputs vazios
                            e se der erro vamos dar um console log dele.
                        </p>
                    </div>
                    <div className="filter">
                        <h2>Buscar documento</h2>
                        <p>
                            Vamos primeiramento criar um botão de buscar no nosso projetinho com evento de onClick para 
                            passarmos uma função para ele.
                        </p>
                        <p>
                            Para buscar documentos vamos precisar importar o doc e o getDoc do firebase/firestore.
                        </p>
                        <p>
                            Dentro da função do botão vamos primeiro criar uma referência para usarmos com o getDoc.
                            Para fazer vamos criar  uma constante que vai receber o método doc que vai ter como parâmetro 
                            três informações: O banco de dados, o nome da collection e o id do documento. 
                        </p>
                        <p>
                            O getDoc vai receber uma resposta do banco, vamos usar o then para mostrar a resposta. Veja:
                        </p>
                        <div className="div-img">
                            <img src={require('../../../assets/imgs/imgsFirebase/searchDoc.png')} alt="" />
                        </div>
                        <p>
                            O then tem uma callback que tem um parâmetro snapshot, que não é um nome obrigatório, mas
                            comumento vamos esse nome por aqui. Estamos passando para cada useState o valor que está 
                            sendo retornado no then com o data() que são os dados do documento e o campo de cada useState.
                        </p>
                    </div>
                    <div className="filter">
                        <h2>Buscar vários documentos</h2>
                        <p>
                            Para buscarmos vários documentos vamos precisar do método getDocs. Esse método vai usar uma
                            referência tambem, onde vamos atribuir a uma constante o banco e a collection.
                        </p>
                        <p>
                            A referência será obtida do collection(db, 'posts')
                        </p>
                        <p>
                            Vamos passar essa referência para o getDocs e a promisse que vamos receber será todos os documentos 
                            da collection passada.
                        </p>
                        <p>
                            Para conseguirmos percorrer todos os documentos vamos primeiramento criar uma uma constante chamada 
                            list que será atribuido a ela um array vazio. Logo em seguida vamos usar o foreach. Veja:
                        </p>
                        <div className="div-img">
                            <img src={require('../../../assets/imgs/imgsFirebase/searchDocs.png')} alt="" />
                        </div>
                        <p>
                            Veja que estamos passando para nossa list um objeto com três propriedades. O id que podemos 
                            pegalo a partir do doc.id e os outros dados que estão dentro do documento precisamos passar 
                            o data() e o nome do campo.
                        </p>
                        <p>
                            Para conseguirmos ver essa lista vamos criar mais um botão que vai ter essa função no onClick. Tambem 
                            vamos precisar de mais uma useState para atribuirmos essa lista que terá como valor padrão um array 
                            vazio.
                        </p>
                        <p>
                            Então depois do foreach vamos passar para nossa useState posts, com o setPosts essa lista que criamos.
                        </p>
                        <div className="div-img">
                            <img src={require('../../../assets/imgs/imgsFirebase/jsxList.png')} alt="" />
                        </div>
                    </div>
                    <div className="filter">
                        <h2>Atualizar banco</h2>
                        <p>
                            Editar documentos é algo que tambem podemos fazer com o firebase. E para editarmos temos outro
                            método para ultilizar, o updateDoc que vamos ultizlizar passando um button para cada li que
                            estamos criando.
                        </p>
                        <p>
                            Nesse button vamos usar o evento onClick com uma errow function que passaremos como parâmetro o 
                            id, pois vamos precisar para buscar no banco de dados qual documento queremos editar, o post e o 
                            autor.
                        </p>
                        <p>
                            Essa função vai servir para setar os valores que queremos nas useStates. Já temos a useState de 
                            post e autor. Agora vamos criar mais duas: id e edit.
                        </p>
                        <p>
                            A useState edit vai servir para mudarmos o button de postar e de editar. Vamos deixar com o
                            valor padrão de false e fazer da seguite forma no antigo button de postar:
                        </p>
                        <div className="div-img">
                            <img src={require('../../../assets/imgs/imgsFirebase/buttonPostEdit.png')} alt="" />
                        </div>
                        <p>
                            O botão de editar vamos passar para a li dos posts, esse button vai ter um eventpo onClick
                            que vai ter uma função apenas para alterar as useStates. Veja o botão:
                        </p>
                        <div className="div-img">
                            <img src={require('../../../assets/imgs/imgsFirebase/functionEdit.png')} alt="" />
                        </div>
                        <p>
                            A função passada vai apenas setar as states para que possamos editar. Veja a função:
                        </p>
                        <div className="div-img">
                            <img src={require('../../../assets/imgs/imgsFirebase/functionSetStetesEdit.png')} alt="" />
                        </div>
                        <p>
                            Como setamos para o edit o true o botão de editar vai aparecer no logar do batão
                            pronto. Esse botão editar tem a função handleEdit. Veja essa função:
                        </p>
                        <div className="div-img">
                            <img src={require('../../../assets/imgs/imgsFirebase/functionEditBase.png')} alt="" />
                        </div>
                        <p>
                            Nessa função primeiramente estamos construindo uma referência com o doc passando nosso 
                            banco de dados, a collection e o id.
                        </p>

                        <p>
                            Vamos então usar o updateDoc, passando dois parâmetros: a referência e um objeto com 
                            as adições que vamos passar. No caso foi a do post e a do autor.
                        </p>
                        <p>
                            Passamos um .then e um .catch com console logs para informar erro ou success.
                        </p>
                        <p>
                            E por último vamos setar os valores do post e autor para aspas vazias, assim nosso campos
                            valtarão a ficar vazios e para o edit o valor false false 
                            para que o botão editar volte a ser o de postar.
                        </p>
                    </div>
                    <div className="filter">
                        <h2>Deletar documento</h2>
                        <p>
                            Vamos criar para esse projeto um botão para conseguirmos deletar em cada post.
                        </p>
                        <p>
                            Nesse button vamos adicionar uma arrow function que vai receber o id como parâmetro.
                            Vamos precisar importar do firebase/firestore o deleteDoc e dentro da função que
                            criamos para deletar vamos primeiro fazer uma referência com o método doc passando
                            nosso db, a collection e por último nosso is que estamos recebendo na função.
                        </p>
                        <p>
                            Pronto. Veja como ficou a função:
                        </p>
                        <div className="div-img">
                            <img src={require('../../../assets/imgs/imgsFirebase/functionDelete.png')} alt="" />
                        </div>
                    </div>
                    <div className="filter">
                        <h2>Monitorando lista</h2>
                        <p>
                            Até agora para conseguirmos ver os posts, atualizar e sair da tela os deletados 
                            presisariamos clicar no botão buscar todas as postagens. 
                        </p>
                        <p>
                            Para que possamos atualizar em tempo real nossa lista vamos usar outro método 
                            do firebase, o onSnapshot que vamos usar com o useEffect para mostrar os posts 
                            assim que a página for carregada. Vamos lá ver como fazer isso.
                        </p>
                        <p>
                            Vamos começar criando uma nova ul que será igual a que estavamos usando anteriormente,
                            mas não vamos precisar do botão de buscar os posts.
                        </p>
                        <p>
                            Tambem vamos criar mais uma useState para renderizar na ul nova, vamos chamar ela 
                            de postsRealTime.
                        </p>
                        <p>
                            Finalmente vamos importar nosso onSnapshot e nosso useEffect para criarmos uma 
                            função para ficar observando nosso banco de dados. Primeiro veja como ficou nossa 
                            ul nova:
                        </p>
                        <div className="div-img">
                            <img src={require('../../../assets/imgs/imgsFirebase/ulPostsRealTime.png')} alt="" />
                        </div>
                        <p>
                            Veja que estamos renderizando a useState nova. Agora veja o nosso useEffect:
                        </p>
                        <div className="div-img">
                            <img src={require('../../../assets/imgs/imgsFirebase/useEffectRealTime.png')} alt="" />
                        </div>
                        <p>
                            Estamos criando uma função asincrona, pois estamos criando uma conexão com o banco e 
                            pode demorar um pouco.
                        </p>

                        <p>
                            Para usar o onSnapshot é diferendo dos outros métodos que vimos até agora. Vamos 
                            criar uma constante e atribuir a ela nosso onSnapshot passando como primerio 
                            parâmetro a referência, e no segundo parâmetro vamos criar uma arrow function que 
                            vai receber como argumento o snapshot.
                        </p>
                        <p>
                            Nossa referência vai ser identificada usando o método collection, que vai receber 
                            o banco e a coleção.
                        </p>
                        <p>
                            Já a nossa arrow function vai ser igual a de renderizar a lista que vimos anteriomente.
                            Primeiro criamos um array vazio, em seguida vamos fazer um foreach no nosso snapshot.
                            Dentro do nosso foreach vamos dar um push na nosso lista vazia passando o que queremos 
                            usar em formato de objeto.   
                        </p>
                        <p>
                            Agora é só usar o sePostsRealTime para atualizar nossa lista. Veja como ficou nossa 
                            pequena aplicação:
                        </p>
                        <ExempleFirestore />
                    </div>
                </div>
            </div>
        </motion.div>
    )
}