import React, {useState, useEffect} from "react";
import Tile from "./Tile";

function HogTiles({hogs}) {

const [greased, setGreased] = useState(false)
const [data, setData] = useState([]);
const [sortType, setSortType] = useState('');

function filterPigs(){
    setGreased((greased) => !greased)
}

useEffect(() => {
    const sortArray = type => {
      const types = {
        name: 'name',
        weight: 'weight',
      };
      const sortProperty = types[type];
      const sorted = [...hogs].sort((b, a) => b[sortProperty] > a[sortProperty] ? 1 : -1);
      setData(sorted);
    };
    sortArray(sortType);
  }, [sortType]); 

    const hogTiles = data.map((hog, index) => {
    return (
        <Tile key={index} hogInfo={hog} />
    )
    })

    const filteredPigs = data.filter((hog) => hog.greased === true)

    const greasedHogTiles = filteredPigs.map((hog, index) => {
        return (
            <Tile key={index} hogInfo={hog} />
        )
    })

    return (
        <>
            <div>
                <p>Toggle the switch to only see greased piggies</p>
                <label class="switch" onChange={filterPigs}>
                    <input type="checkbox" />
                    <span class="slider round"></span>
                </label>
            </div>

            <select onChange={(e) => setSortType(e.target.value)}> 
                <option value="name">Name</option>
                <option value="weight">Weight</option>
            </select>

            <div className="ui grid container">
                {greased===true ? greasedHogTiles : hogTiles}
            </div>
        </>
    );
}

export default HogTiles;