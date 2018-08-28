import { NgModule } from '@angular/core';

import {
  StoreRouterConnectingModule,
  RouterStateSerializer
} from '@ngrx/router-store';
import { StoreModule, MetaReducer, META_REDUCERS } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { getStorageSyncReducer } from './store/reducers';
import {
  reducerToken,
  CustomSerializer,
  reducerProvider
} from './store/reducers/router.reducer';
import { effects } from './store/effects/index';
import { ConfigService, StorageSyncType } from './config.service';

export function getMetaReducers(config: ConfigService): MetaReducer<any>[] {
  const metaReducers: MetaReducer<any>[] = [];
  if (config.storageSyncType !== StorageSyncType.NO_STORAGE) {
    const storageSyncReducer = getStorageSyncReducer(config);
    metaReducers.push(storageSyncReducer);
  }
  return metaReducers;
}

@NgModule({
  imports: [
    StoreModule.forRoot(reducerToken),
    EffectsModule.forRoot(effects),
    StoreRouterConnectingModule
  ],
  providers: [
    reducerProvider,
    {
      provide: RouterStateSerializer,
      useClass: CustomSerializer
    },
    {
      provide: META_REDUCERS,
      deps: [ConfigService],
      useFactory: getMetaReducers
    }
  ]
})
export class RoutingModule {
  static forRoot(config: any): any {
    return {
      ngModule: RoutingModule,
      providers: [
        {
          provide: ConfigService,
          useExisting: config
        }
      ]
    };
  }
}
