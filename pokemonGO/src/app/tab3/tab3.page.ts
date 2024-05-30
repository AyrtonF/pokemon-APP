import { Component, OnInit } from '@angular/core';
import { PokemonDataService } from '../services/pokemon-data-service.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
  capturedPokemons: any[] = [];
  selectedPokemonMessage: string = '';
  showMessage: boolean = false;

  constructor(private pokemonDataService: PokemonDataService) {}

  ngOnInit() {
    this.capturedPokemons = this.pokemonDataService.getCapturedPokemons();
  }

  getBadgeColor(value: number): string {


    if (value > 0) {
      return 'success'; // verde para vitórias
    } else if (value > 0) {
      return 'danger'; // vermelho para derrotas
    } else {
      return 'warning'; // amarelo para empates
    }
  }

  selectPokemon(pokemon: any) {
    this.pokemonDataService.selectPokemonForBattle(pokemon);
    this.selectedPokemonMessage = `Você selecionou ${pokemon.name} para a batalha!`;
    this.showMessage = true;

    setTimeout(() => {
      this.showMessage = false;
    }, 3000); 
  }
}
