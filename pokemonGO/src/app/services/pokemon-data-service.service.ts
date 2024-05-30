import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonDataService {
  private capturedPokemons: any[] = [];
  currentPokemon: any;
  private selectedPokemon: any = null;

  constructor() {}

  getCapturedPokemons() {
    return this.capturedPokemons;
  }

  changePokemon(pokemon: any) {
    this.currentPokemon = pokemon;
  }

  capturePokemon(pokemon: any) {
    this.capturedPokemons.push({
      ...pokemon,
      victories: 0,
      defeats: 0,
      draws: 0
    });
  }

  updatePokemonStatus(pokemonName: string, result: string) {
    const pokemon = this.capturedPokemons.find(p => p.name === pokemonName);
    if (pokemon) {
      if (result === 'Vitória') {
        pokemon.victories += 1;
      } else if (result === 'Derrota') {
        pokemon.defeats += 1;
      } else if (result === 'Empate') {
        pokemon.draws += 1;
      }
    }
  }

  selectPokemonForBattle(pokemon: any) {
    this.selectedPokemon = pokemon;
  }

  getSelectedPokemonForBattle() {
    return this.selectedPokemon;
  }
}
