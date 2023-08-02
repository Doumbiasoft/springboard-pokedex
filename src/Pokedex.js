import React from 'react';
import Pokemon from './Pokemon.js';
import Pokecard from './Pokecard.js';

const Pokedex =({list=Pokemon})=>{
    return (
      <>
      {
        list.map(Pokemon => <Pokecard key={Pokemon.id} id={Pokemon.id} name={Pokemon.name} type={Pokemon.type} base_experience={Pokemon.base_experience} /> )
      }
      </>
    )  
  }
  export default Pokedex;