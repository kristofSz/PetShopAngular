import { Component, OnInit } from '@angular/core';
import {privateDecrypt} from 'crypto';
import {SpeciesService} from '../../shared/service/species.service';
import {Species} from '../../shared/models/Species';
import {User} from '../../shared/models/User';
import {Router} from '@angular/router';
import {ApiService} from '../../shared/service/api.service';

@Component({
  selector: 'app-species-detail',
  templateUrl: './species-detail.component.html',
  styleUrls: ['./species-detail.component.scss']
})
export class SpeciesDetailComponent implements OnInit {

  selected: Species;
  users: User[] = [];

  constructor(private speciesService: SpeciesService, private router: Router, private api: ApiService) {
    this.speciesService.selectedSpeciesSubject.subscribe(value => {
      this.selected = value;
      if (this.selected == null){
        this.router.navigateByUrl("");
      }
    })
  }

  ngOnInit() {
    /*let u: User = new User();
    u.name = "Mike";
    u.age = 28;
    u.count = 5000;
    this.users.push(u);*/

    for (let i = 0; i < 6; i ++ ){
      this.api.getUser("/?name="+"Mike").subscribe((user: User)=>{
        this.users.push(user);
      });
    }
  }
}
