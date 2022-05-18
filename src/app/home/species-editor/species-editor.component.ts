import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Species} from '../../shared/models/Species';
import {SpeciesService} from '../../shared/service/species.service';

@Component({
  selector: 'app-species-editor',
  templateUrl: './species-editor.component.html',
  styleUrls: ['./species-editor.component.scss']
})
export class SpeciesEditorComponent implements OnInit {

  form: FormGroup;
  selected: Species;

  constructor(private speciesService: SpeciesService, private fb: FormBuilder) {
    this.form = this.fb.group({

      speciesName: ['', Validators.required],
      speciesInStock: ['', Validators.required],
      speciesExotic: ['', Validators.required]

    });
    this.speciesService.selectedSpeciesSubject.subscribe(value => {
      this.selected = value;

      if (this.selected) {
        this.form.controls['speciesName'].patchValue(this.selected.name);
        this.form.controls['speciesInStock'].patchValue(this.selected.inStock);
        this.form.controls['speciesExotic'].patchValue(this.selected.exotic);

      } else {
        this.form.controls['speciesName'].patchValue(null);
        this.form.controls['speciesInStock'].patchValue(null);
        this.form.controls['speciesExotic'].patchValue(false);
      }
    });
  }

  ngOnInit() {
  }

  onSave() {

  }

  onNew() {
    this.speciesService.selectedSpeciesSubject.next(null);
  }
}
