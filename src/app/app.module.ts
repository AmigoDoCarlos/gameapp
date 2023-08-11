import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IconsModule } from './icons/icons.module';

import { AppComponent } from './app.component';
import { MainContainerComponent } from './main-container/main-container.component';
import { NumberOfTeamsComponent } from './number-of-teams/number-of-teams.component';
import { TeamHeaderComponent } from './team-header/team-header.component';
import { TeamSettingsComponent } from './team-settings/team-settings.component';
import { TeamResultsComponent } from './team-results/team-results.component';
import { NamesListComponent } from './names-list/names-list.component';
import { TeamDetailsComponent } from './team-details/team-details.component';
import { ServiceWorkerModule } from '@angular/service-worker';

@NgModule({
  declarations: [
    AppComponent,
    MainContainerComponent,
    NumberOfTeamsComponent,
    TeamHeaderComponent,
    TeamSettingsComponent,
    TeamResultsComponent,
    NamesListComponent,
    TeamDetailsComponent,
  ],
  imports: [
    BrowserModule,
    IconsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
