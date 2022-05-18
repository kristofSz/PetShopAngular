import {ModuleWithProviders, NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TranslateModule} from '@ngx-translate/core';
import {HttpModule} from '@angular/http';
import {SharedModule} from '../shared';
import {SuiCheckboxModule, SuiSelectModule} from 'ng2-semantic-ui';
import {MainComponent} from './main/main.component';
import { SpeciesListComponent } from './species-list/species-list.component';
import { SpeciesEditorComponent } from './species-editor/species-editor.component';
import { TemperatureComponent } from './temperature/temperature.component';
import { SpeciesDetailComponent } from './species-detail/species-detail.component';


const homeRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: 'detail',
    component: SpeciesDetailComponent
  },
  {
    path: '**',
    component: MainComponent
  }
]);

@NgModule({
  imports: [
    homeRouting,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    HttpModule,
    SharedModule,              // ha ide új module bekerül, újra 'ng serve' kell!!!
    SuiCheckboxModule,
    SuiSelectModule
  ],
  declarations: [
    MainComponent,
    SpeciesListComponent,
    SpeciesEditorComponent,
    TemperatureComponent,
    SpeciesDetailComponent,
  ],
  providers: []
})
export class HomeModule {
}
