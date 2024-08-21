import quotes from '../data/phrases.json'
import GetRandomNumber from '../utils/GetRandomNumber'
import photos from '../data/photos.json'

const BtnPhrase = ({setPhraseSelected, setBgSelected }) => {

    const changePhrase = () => {
        const indexRandom = GetRandomNumber(quotes.length)
        const phraseRandom = quotes[indexRandom]
       // setPhraseSelected(phraseRandom)
        

        setPhraseSelected(quotes[indexRandom])
        setBgSelected(photos[GetRandomNumber(photos.length)])


    }
        
  return ( 
    
    <button  className="ml-auto block  bg-cyan-400 py-2 px-4 text-white rounded-md text-sm hover:p-10 transition-all overflow-hidden cursor-pointer border-white" onClick={changePhrase}>se other</button>
    
  )
}

export default BtnPhrase