import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PcCardComponent } from './components/pc-card/pc-card.component';
import { SettingsComponent } from './components/settings/settings.component';
import { SettingsDialogComponent } from './components/settings-dialog/settings-dialog.component';

import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { ListPcCardsComponent } from './components/list-pc-cards/list-pc-cards.component';


@NgModule({
  declarations: [
    AppComponent,
    PcCardComponent,
    SettingsComponent,
    SettingsDialogComponent,
    ListPcCardsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatDialogModule,
    MatSlideToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
