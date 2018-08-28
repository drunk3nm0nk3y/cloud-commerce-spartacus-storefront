import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID } from '@angular/core';

import { ConfigService } from './config.service';
import { AppRoutingModule } from './app-routing.module';
import { META_REDUCERS, MetaReducer } from '@ngrx/store';
import { environment } from '../environments/environment';

import {
  AuthModule,
  OccModule,
  UiModule,
  CmsLibModule,
  CmsModule,
  RoutingModule,
  UiFrameworkModule,
  SiteContextModule
} from 'storefrontlib';

// bootstrap
import { AppComponent } from './app.component';

import { storeFreeze } from 'ngrx-store-freeze';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  imports: [
    BrowserModule,
    AuthModule.forRoot(ConfigService),
    RoutingModule.forRoot(ConfigService),
    OccModule.forRoot(ConfigService),
    SiteContextModule.forRoot(ConfigService),

    AppRoutingModule,

    CmsLibModule,
    CmsModule.forRoot(ConfigService),
    UiModule,
    UiFrameworkModule,
    environment.production ? [] : StoreDevtoolsModule.instrument()
  ],

  providers: [
    ConfigService,
    {
      // TODO: configure locale
      provide: LOCALE_ID,
      useValue: 'en-US'
    },
    {
      provide: META_REDUCERS,
      useFactory: () => {
        const metaReducers: MetaReducer<any>[] = [];
        if (!environment.production) {
          metaReducers.push(storeFreeze);
        }
      }
    }
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
