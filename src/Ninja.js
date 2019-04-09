import React from 'react';

const Ninja = ({ninjas}) => {   // ({ninjas, age, shop})

  const ninjaList = ninjas.map(ninja => {
    console.log(ninja)
    return (
      <div className="ninja" key={ninja.id}>
      <h2>Name: {ninja.name}</h2>
      <p>Age: {ninja.age}</p>
      <p>belt: {ninja.belt}</p>
      </div>
    )
  } 
  )
    
		
  return (
    <div>
      <li>{ninjaList}</li>
    </div>
      
  )	
}

 export default Ninja;