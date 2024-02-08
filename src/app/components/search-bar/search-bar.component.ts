import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css',
  imports: [CommonModule, ReactiveFormsModule],
  standalone: true
})
export class SearchBarComponent {
  @Output() valueSearch: EventEmitter<string> = new EventEmitter();
  search: FormControl = new FormControl('', { updateOn: 'change', validators: Validators.minLength(3) });

  updateValueSearch() {
    if (this.search.value?.length > 2 || this.search.value?.length == 0) {
      this.valueSearch.emit(this.search.value);
    }
  }
}
