import { Component, Input } from '@angular/core';
import { Country } from '../../models/country.model';
import { CountriesService } from '../../services/countries.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/internal/Subscription';
import { CommonModule } from '@angular/common';
import { GoBackArrowComponent } from '../go-back-arrow/go-back-arrow.component';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrl: './country-details.component.css',
  standalone: true,
  imports: [CommonModule, GoBackArrowComponent]
})
export class CountryDetailsComponent {

  constructor(private service: CountriesService, private activatedRoute: ActivatedRoute) { }

  subs?: Subscription;
  country?: Country;
  name?: string;

  ngOnInit() {
    this.name = this.activatedRoute.snapshot.paramMap.get('name') || undefined;

    if (this.name) {
      this.subs = this.service.fetchClients(this.name).subscribe({
        next: (value: any) => this.country = new Country(
          value[0].name.common,
          value[0].flags.png,
          value[0].coatOfArms.png,
          value[0].population,
          value[0].area
        ),
        error: (_) => this.name = undefined
      },
      )
    }
  }

  ngOnDestroy() {
    this.subs?.unsubscribe();
  }
}
