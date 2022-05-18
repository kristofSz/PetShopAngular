import {Injectable} from '@angular/core';
import {Species} from '../models/Species';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpeciesService {

  public speciesListSubject: BehaviorSubject<Species[]> = new BehaviorSubject<Species[]>([]);
  public selectedSpeciesSubject: BehaviorSubject<Species> = new BehaviorSubject<Species>(null);

  constructor() {
    let list = [];
    list.push(new Species(100, 'monkey', 28, true));
    list.push(new Species(50, 'dog', 52, false));
    list.push(new Species(60, 'cat', 72, null));
    list.push(new Species(45, 'lion', 40, true));
    list.push(new Species(13, 'spider', 63, true));
    list.push(new Species(52, 'pig', 21, false));
    list.push(new Species(67, 'parrot', 24, true));
    list.push(new Species(34, 'bat', 98, true));
    list.push(new Species(34, 'mouse', 105, false));
    this.speciesListSubject.next(list);
  }
}
