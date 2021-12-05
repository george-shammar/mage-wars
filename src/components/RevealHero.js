import "../styles/RevealHero.css"
const RevealHero = () => {
    return (
        <div>
            <div className="mint">
                <div className="border card rounded shadow-lg mt-3">
                    <img alt="logo" src={question} className="unknown"/>
                </div>
                <div className="border">
                    <input 
                    className="name py-1 white" 
                    placeholder="Name your Hero"
                    required
                    onChange={e => updateFormInput({...formInput, name: e.target.value})}  
                    />
                    <div className="white mt-3">
                    <p>ID: To be revealed</p>
                    <p>DNA: To be revealed</p>
                    <p>Rarity: To be revealed</p>
                    <p>Level: To be revealed</p>
                    <p>Description/Powers: To be reveealed</p>
                    </div>
                </div>
      </div>

            <div className="mint-reveal">
                <a href="https://george-shammar.github.io/Legend_of_the_Seeker/"><button className="white rounded my-5 py-2 submit white">Play Now</button></a>
            </div>
           
        </div>
    )
}



export default RevealHero;