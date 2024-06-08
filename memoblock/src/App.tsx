import { useState,useEffect } from 'react'
import './App.css'
import {Tablero} from './components/Tablero/Tablero'

function App() {
  const [card,setCard]=useState([]);
  const [animating,setAnimating]=useState(false);
  const [selectedMemoBlock, setselectedMemoBlock] = useState(null)
  const emojiList = [..."💀👻🧛🌮🎱🍬🍕🦖"]; //Tranforma una string a  una array
  useEffect(() => {

const barajadoEmojiLista = barajearArray([...emojiList, ...emojiList]);
  setCard(
    barajadoEmojiLista.map((emoji:any, i:number) => ({
      index: i,
      emoji,
      flipped: false ,
    }))
  );
}, []);

const barajearArray = (a:any) => {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  console.log(a)
  return a;
};

const handleMemoClick = (memoBlock:any) => {
  console.log("first")
  let MemoBlockinvertido:any = { ...memoBlock, flipped: true };
  let memobloquesbarajadosCopy = [...card];
  memobloquesbarajadosCopy.splice(memoBlock.index, 1, MemoBlockinvertido);

  setCard(memobloquesbarajadosCopy);
  if(selectedMemoBlock===null){
    setselectedMemoBlock(memoBlock)

  }else if (selectedMemoBlock.emoji ===memoBlock.emoji){
    setselectedMemoBlock(null);
  }else{
    setAnimating(true)
    setTimeout(()=>{
      memobloquesbarajadosCopy.splice(memoBlock.index,1,memoBlock)
      memobloquesbarajadosCopy.splice(selectedMemoBlock.index,1,selectedMemoBlock)
      setCard(memobloquesbarajadosCopy)
      setselectedMemoBlock(null);
      setAnimating(false);

    },1000)
  }


  return (
    <>
    <Tablero memoBlocks={card}></Tablero>
    
      
    </>
  )
}

  return (
    <>
    <Tablero memoBlocks={card} handleMemoClick={handleMemoClick}  animating={animating}></Tablero>
    
      
    </>
  )
}

export default App
