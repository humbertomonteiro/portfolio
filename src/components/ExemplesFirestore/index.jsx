import { db } from "../../firebaseConnection";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  onSnapshot,
} from "firebase/firestore";

import { useState, useEffect } from "react";

export default function ExempleFirestore() {
  const [post, setPost] = useState("");
  const [autor, setAutor] = useState("");
  const [posts, setPosts] = useState([]);
  const [postsRealTime, setPostsRealTime] = useState([]);
  const [id, setId] = useState("");
  const [edit, setEdit] = useState(false);

  useEffect(() => {
    async function showPostRealTime() {
      onSnapshot(collection(db, "posts"), (snapshot) => {
        let listRealTime = [];

        snapshot.forEach((doc) => {
          listRealTime.push({
            id: doc.id,
            post: doc.data().post,
            autor: doc.data().autor,
          });
        });

        setPostsRealTime(listRealTime);
      }).catch((error) => console.log(error));
    }

    showPostRealTime();
  }, []);

  async function handleSetPost() {
    await addDoc(collection(db, "posts"), {
      post: post,
      autor: autor,
    })
      .then((e) => {
        setPost("");
        setAutor("");
      })
      .catch((error) => console.log(error));
  }

  async function handleSearch() {
    const docRef = doc(db, "posts", "1");

    getDoc(docRef).then((snapshot) => {
      setPost(snapshot.data().post);
      setAutor(snapshot.data().autor);
    });
  }

  async function handleSearchPosts() {
    const docRef = collection(db, "posts");

    await getDocs(docRef)
      .then((snapshot) => {
        let list = [];

        snapshot.forEach((doc) => {
          list.push({
            id: doc.id,
            post: doc.data().post,
            autor: doc.data().autor,
          });
        });

        setPosts(list);
      })
      .catch((error) => console.log(error));
  }

  function handleEditDoc(id, post, autor) {
    setPost(post);
    setAutor(autor);
    setId(id);
    setEdit(true);
  }

  async function handleEdit() {
    const docRef = doc(db, "posts", id);

    await updateDoc(docRef, {
      post: post,
      autor: autor,
    })
      .then((e) => console.log("Post Atualizado"))
      .catch((error) => console.log(error));

    setEdit(false);
    setPost("");
    setAutor("");
  }

  async function handleDeleteDoc(id) {
    const docRef = doc(db, "posts", id);

    await deleteDoc(docRef).then(() => {
      alert("Deletado com sucesso!");
    });
  }

  return (
    <div className="exemple">
      <h3>Criar Posts</h3>
      <label htmlFor="">Post</label>
      <input
        type="text"
        placeholder="O que você está pensando?"
        value={post}
        onChange={(e) => setPost(e.target.value)}
      />

      <label htmlFor="">Autor</label>
      <input
        type="text"
        placeholder="Nome"
        value={autor}
        onChange={(e) => setAutor(e.target.value)}
      />

      {edit ? (
        <button onClick={handleEdit}>Editar</button>
      ) : (
        <button onClick={handleSetPost}>Pronto</button>
      )}

      <button onClick={handleSearch}>Buscar</button>

      <ul>
        <h2>Posts</h2>
        <li>
          <div>
            <strong>Autor</strong>
            <strong>Post</strong>
          </div>
        </li>
        {posts.map((e) => (
          <li key={e.id}>
            <div>
              <span>{e.autor}</span>
              <span>{e.post}</span>
            </div>
            <div>
              <button onClick={() => handleEditDoc(e.id, e.post, e.autor)}>
                Editar
              </button>
              <button onClick={() => handleDeleteDoc(e.id)}>Deletar</button>
            </div>
          </li>
        ))}
      </ul>
      <button onClick={handleSearchPosts}>Bucar todas as postagens</button>

      <ul>
        <h2>Posts Real Time</h2>
        <li>
          <div>
            <strong>Autor</strong>
            <strong>Post</strong>
          </div>
        </li>

        {postsRealTime.map((e) => (
          <li key={e.id}>
            <div>
              <span>{e.autor}</span>
              <span>{e.post}</span>
            </div>
            <div>
              <button onClick={() => handleEditDoc(e.id, e.post, e.autor)}>
                Editar
              </button>
              <button onClick={() => handleDeleteDoc(e.id)}>Deletar</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
