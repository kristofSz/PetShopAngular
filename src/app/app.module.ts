import {ModuleWithProviders, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppComponent} from './app.component';0

import * as $ from 'jquery';
import {HomeModule} from "./home/home.module";
import {SharedModule} from './shared';
//import {Kezelo} from './shared/service';

window["$"] = $;
window["jQuery"] = $;

const rootRouting: ModuleWithProviders = RouterModule.forRoot([], {useHash: true});

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    HomeModule,
    SharedModule,
    rootRouting,
    BrowserAnimationsModule
  ],
  providers: [
    // Kezelo,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
