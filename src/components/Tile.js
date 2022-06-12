import {useState} from "react";

function Tile({hogInfo}) {

const {name, image, specialty, greased, weight} = hogInfo
const hma = hogInfo["highest medal achieved"]

const [details, setDetails] = useState(true)

function displayHogs(){
    setDetails((details) => !details)
}

    return (
        <div className="ui seven wide column pigTile" onClick={displayHogs}>
            <div>
                <h3>{"Name: " + name}</h3>
                <img src={image} alt="piggie"></img>
            </div>
            <div className={details===true ? "hidden" : ""}>
                <p>{"Specialty: " + specialty}</p>
                <p>{"Greased: " + greased}</p>
                <p>{"Weight: " + weight}</p>
                <p>{"Highest Medal Achieved: " + hma}</p>
            </div>
        </div>
    )
}

export default Tile