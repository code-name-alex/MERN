import React, { useState } from 'react';

const Pokemon = () => {

    let [pokemonList, setPokemonList] = useState([])

    const getPokemon = () => {
        console.log("Fetching Pokemon...");

        fetch('https://pokeapi.co/api/v2/pokemon?limit=1000&offset=0')
            .then(response => {
                return response.json();
            })
            .then(convertedResponse => {
                console.log("caught them all...", convertedResponse.results);
                setPokemonList(convertedResponse.results);
            })
            .catch(err => {
                console.log("Something went wrong!", err)
            });
    }

    return (
        <div>
            <button onClick={getPokemon}>Fetch Pokemon</button>
            {
                pokemonList.map((pokemon, i) => {
                    return (
                        <div>
                            <h1>{pokemon.name}</h1>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Pokemon;