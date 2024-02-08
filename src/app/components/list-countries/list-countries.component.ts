import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Country } from '../../models/country.model';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-countries',
  templateUrl: './list-countries.component.html',
  styleUrl: './list-countries.component.css',
  standalone: true,
  imports: [RouterLink, CommonModule]
})
export class ListCountriesComponent {
  @Input({ required: true }) listCountries: Array<Country> = [];
  @Output() selectedCountry: EventEmitter<Country> = new EventEmitter();

  clickCountry(country: Country) {
    debugger;

    this.selectedCountry.emit(country);
  }

}
