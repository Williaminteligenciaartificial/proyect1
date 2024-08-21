

const Phrase = ({phraseSelected}) => {

    console.log(phraseSelected)

  return (
    <p className="italic text-white md-5">{phraseSelected.phrase}</p>
  )
}

export default Phrase 