import React, {useState, useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {

  const [plantList, setPlantList] = useState([]);
  const [searchFilter, setSearchFilter] = useState("");

  useEffect(() => {
    fetch("http://localhost:6001/plants")
    .then(resp=>resp.json())
    .then(data => setPlantList(data))
  }, [])

  function addPlant(plant) {
    const newPlants = [...plantList, plant];
    setPlantList(newPlants);
  }

  return (
    <main>
      <NewPlantForm addPlant={addPlant}/>
      <Search onSearch={setSearchFilter}/>
      <PlantList plantList={plantList} searchFilter={searchFilter}/>
    </main>
  );
}

export default PlantPage;
