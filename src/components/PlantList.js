import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plantList, searchFilter}) {
  return (
    <ul className="cards">{plantList.map(plant => {
      if (plant.name.toLowerCase().includes(searchFilter)) {
        return <PlantCard plant={plant} key={plant.name}/>
      }
      else return null;
    })}</ul>
  );
}

export default PlantList;
