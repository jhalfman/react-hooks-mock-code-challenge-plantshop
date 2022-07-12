import React, {useState} from "react";

function NewPlantForm({addPlant}) {

  const [newPlantForm, setNewPlantForm]= useState({
    name: "",
    image: "",
    price: "",
  })

  function updateForm(e) {
    const updatedPlantForm = {...newPlantForm, [e.target.name]: e.target.value};
    setNewPlantForm(updatedPlantForm);
  }

  function submitPlantForm(e) {
    e.preventDefault();
    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPlantForm),
    })
    .then(resp => resp.json())
    .then(data => addPlant(data))

  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={submitPlantForm}>
        <input type="text" name="name" placeholder="Plant name" onChange={updateForm}/>
        <input type="text" name="image" placeholder="Image URL" onChange={updateForm}/>
        <input type="number" name="price" step="0.01" placeholder="Price" onChange={updateForm}/>
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
