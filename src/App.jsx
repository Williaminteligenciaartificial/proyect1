import { useState } from 'react'
import './App.css'
import quotes from './data/phrases.json'
import photos from './data/photos.json'
import GetRandomNumber from './utils/GetRandomNumber';
import Phrase from './componentes/Phrase';
import BtnPhrase from './componentes/BtnPhrase';


function App() {
  
  
  const indexRandom = GetRandomNumber(quotes.length)
  
  const [phraseSelected, setPhraseSelected] = useState(quotes[indexRandom])
  const [bgSelected, setBgSelected]= useState(photos[GetRandomNumber(photos.length)])

  console.log(phraseSelected)
  const objStyle ={
    backgroundImage:`url(/images/fondo${bgSelected}.png)`
  } 

  return (

    <div  className='min-h-screen flex justify-center items-center bg-cover'style={objStyle}>
      <h1 className='absolute top-5 text-2xl uppercase font-bold'>fortunos</h1>
      <article className='max-w-[400px] p-6 bg-violet-700 bg-opacity-90 rounded-xl'>    
      
      <Phrase 
      phraseSelected={phraseSelected}
      />
      <BtnPhrase 
      setPhraseSelected={setPhraseSelected}
      setBgSelected={setBgSelected}
      />
      </article>

    </div>

  )
}

export default App
