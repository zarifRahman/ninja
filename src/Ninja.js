import React from 'react';

const Ninja = ({ninjas, deleteNinja}) => {   

  const ninjaList = ninjas.map(ninja => {
    if(ninja.age > 20){
      return (
        <div className="ninja" key={ninja.id}>
        <h2>Name: {ninja.name}</h2>
        <p>Age: {ninja.age}</p>
        <p>Belt: {ninja.belt}</p>
        <button onClick={() => {deleteNinja(ninja.id)}}> Delete </button> 
        </div>
      )
    } else {
      return null;
    }
    
  })
    
		
  return (
    <div>
      <li>{ninjaList}</li>
    </div>
      
  )	
}

 export default Ninja;