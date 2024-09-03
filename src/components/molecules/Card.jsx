import Image from "../atoms/Image";
import "./Card.css"
function Card({name, race, gender, ki, maxKi, affiliation, image})
{
    return(
        <>
        <div className="cardTotal">
        <div className="colorUp">
            <Image direction={image}></Image>
        </div>
        <div className="colorBelow">
            <p className="pName">{name}</p>
            <p className="pYellow">{race}-{gender}</p>
            <p className="pNormal">Base Ki</p>
            <p className="pYellow">{ki}</p>
            <p className="pNormal">Total Ki</p>
            <p className="pYellow">{maxKi}</p>
            <p className="pNormal">Affiliation</p>
            <p className="pYellow">{affiliation}</p>
        </div>
        </div>
        </>
      
    )
}
export default Card;