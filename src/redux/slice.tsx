import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface Pokemon {
  name: string;
  url: string;
}
export interface PokemonsState {

  busqueda: string;
  pokemon: Pokemon;
  allPokemons: any[];
}
const initialState: PokemonsState = {
  busqueda: "",
  pokemon: { name: "", url: "" },
  allPokemons: [],
};
/*
  - El reducer buscarPokemon debe guardar en el estado de búsqueda (state.busqueda) lo que le llegue por payload.
  - allPokemons debe pushear en el estado allPokemons todos los pokemons que le llegan por payload
*/
export const pokemonSlice = createSlice({
  name: "pokemons",
  initialState,
  reducers: {
    buscarPokemon: () => {
      
    },
    allPokemons: () => {

    },
  },
});

export const {  allPokemons, buscarPokemon } = pokemonSlice.actions;

export default pokemonSlice.reducer;
