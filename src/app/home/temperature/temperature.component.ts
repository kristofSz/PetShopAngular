import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../shared/service/api.service';
import {TempData} from '../../shared/models/TempData';

@Component({
  selector: 'app-temperature',
  templateUrl: './temperature.component.html',
  styleUrls: ['./temperature.component.scss']
})
export class TemperatureComponent implements OnInit {

  query: string = '?q=Kapuvár&APIKEY=93e1b611039c3bb0567f03e9bcf187bf';
  tempText: string = '???';

  constructor(private api: ApiService) {}

  ngOnInit() {
   this.api.get(this.query).subscribe((response: TempData)=> {
     //jó válasz//
      console.log(JSON.stringify(response));
  //    console.log(response['main']['temp']);//
     console.log(response.main.temp);
      this.tempText = (response['main']['temp']-273).toFixed(2) + '°C';
   }, error => {
     //rossz/nincs válasz//
     this.tempText = 'Szerver hiba!';
   });
  }
}
