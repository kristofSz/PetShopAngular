import {Component, OnInit} from '@angular/core';
import {SpeciesService} from '../../shared/service/species.service';
import {Species} from '../../shared/models/Species';
import {Router} from '@angular/router';

@Component({
  selector: 'app-species-list',
  templateUrl: './species-list.component.html',
  styleUrls: ['./species-list.component.scss']
})
export class SpeciesListComponent implements OnInit {

  speciesList: Species[];
  selected: Species;

  constructor(private speciesService: SpeciesService, private router: Router) {
    this.speciesService.speciesListSubject.subscribe((value: Species[]) => {
      this.speciesList = value;
    });

    this.speciesService.selectedSpeciesSubject.subscribe(value => {
      this.selected = value;
    });

  }

  ngOnInit() {
  }

  onSelect(s: Species) {
    if (this.selected && s.id == this.selected.id) {
      s = null;
    }
    this.speciesService.selectedSpeciesSubject.next(s);
  }

  onDetailButton(s: Species) {
    this.speciesService.selectedSpeciesSubject.next(s);
    this.router.navigateByUrl("detail?name=" + s.name);
  }
}
