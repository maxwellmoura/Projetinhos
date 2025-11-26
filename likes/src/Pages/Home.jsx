import { useState, useEffect } from 'react';
import { AiFillLike, AiFillDislike } from "react-icons/ai";
import { FaHeart } from "react-icons/fa";


function loadReactions(key) {
  const saved = localStorage.getItem(key);

  if (!saved) {
    return { post1: 0, post2: 0, post3: 0 };
  }

  try {
    const parsed = JSON.parse(saved);
    return {
      post1: Number.isFinite(parsed.post1) ? parsed.post1 : 0,
      post2: Number.isFinite(parsed.post2) ? parsed.post2 : 0,
      post3: Number.isFinite(parsed.post3) ? parsed.post3 : 0,
    };
  } catch {
    return { post1: 0, post2: 0, post3: 0 };
  }
}

const Home = () => {

  const STORAGE_KEY_LIKES = "likesApp.likes";
  const STORAGE_KEY_HATE = "likesApp.hate";
  const STORAGE_KEY_HEART = "likesApp.heart";

  const [likes, setLikes] = useState(() => loadReactions(STORAGE_KEY_LIKES));
  const [hate, setHate] = useState(() => loadReactions(STORAGE_KEY_HATE));
  const [heart, setHeart] = useState(() => loadReactions(STORAGE_KEY_HEART));

  function addReaction(setter, postKey) {
    setter(prev => ({
      ...prev,
      [postKey]: prev[postKey] + 1
    }));
  }
  function resetAll() {
    const zeroState = { post1: 0, post2: 0, post3: 0 }
    setLikes(zeroState);
    setHate(zeroState);
    setHeart(zeroState);

    localStorage.removeItem(STORAGE_KEY_LIKES);
    localStorage.removeItem(STORAGE_KEY_HATE);
    localStorage.removeItem(STORAGE_KEY_HEART);
  }

  const addLike = (post) => addReaction(setLikes, post);
  const addHate = (post) => addReaction(setHate, post);
  const addHeart = (post) => addReaction(setHeart, post);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY_LIKES, JSON.stringify(likes));
  }, [likes]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY_HATE, JSON.stringify(hate));
  }, [hate]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY_HEART, JSON.stringify(heart));
  }, [heart]);

  return (
    <div className='container'>
      <h1>Sistema de Reações</h1>

      <AiFillLike className='like' onClick={() => addLike("post1")} /> ({likes.post1})
      <AiFillDislike className='like' onClick={() => addHate("post1")} /> ({hate.post1})
      <FaHeart className='like' onClick={() => addHeart("post1")} /> ({heart.post1})

      <br />

      <AiFillLike className='like' onClick={() => addLike("post2")} /> ({likes.post2})
      <AiFillDislike className='like' onClick={() => addHate("post2")} /> ({hate.post2})
      <FaHeart className='like' onClick={() => addHeart("post2")} /> ({heart.post2})

      <br />

      <AiFillLike className='like' onClick={() => addLike("post3")} /> ({likes.post3})
      <AiFillDislike className='like' onClick={() => addHate("post3")} /> ({hate.post3})
      <FaHeart className='like' onClick={() => addHeart("post3")} /> ({heart.post3})
      <br />
      <button onClick={resetAll}>Resetar Reações</button>
    </div>
      
  );
};

export default Home;
