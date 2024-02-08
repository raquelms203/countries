import { Component } from '@angular/core';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { ListCountriesComponent } from '../list-countries/list-countries.component';
import { Country } from '../../models/country.model';
import { CountriesService } from '../../services/countries.service';
import { Subscription, timeout } from 'rxjs';
import { CountryDetailsComponent } from '../country-details/country-details.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  standalone: true,
  imports: [SearchBarComponent, ListCountriesComponent, CountryDetailsComponent]
})
export class HomeComponent {

  constructor(private service: CountriesService) { }

  listCountries: Array<Country> = [];
  selectedCountry: string = '';
  subs?: Subscription;

  ngOnInit() {
    this.fetchCountries('republic');
  }

  setSelectedCountry(country: Country) {
    this.selectedCountry = country.name;
  }

  fetchCountries(value: string) {
    this.subs = this.service.fetchClients(value).subscribe({
      next: (response: any) => {
        this.listCountries = response.map((item: any) => new Country(
          item.name.common,
          item.flags.png,
          item.coatOfArms.png,
          item.population,
          item.area
        )
        )
      },
      error: (err) => console.log(err)
    }
    );
  }

  ngOnDestroy() {
    this.subs?.unsubscribe();
  }

}
