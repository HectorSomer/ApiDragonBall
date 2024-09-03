import { useState, useEffect } from "react";
import Card from "../molecules/Card";
import "./AllCards.css"
function AllCards(){
    const [personages, setPersonages]= useState([])
    useEffect(() => {
        fetch('https://dragonball-api.com/api/characters').then(response => {
            if(response.ok){
                return response.json()
            }
        }).then(data =>{
          setPersonages(data.items); 
        }).catch(error=> {
            console.log("Error" + error);
        })},[])
        return(<>
        <div className="styleCards">
        {personages.map(personage =><Card name={personage.name} race= {personage.race} maxKi={personage.maxKi} gender={personage.gender} image={personage.image} ki={personage.ki} affiliation={personage.affiliation}/> )}
        </div>
        </>)
}
export default AllCards;