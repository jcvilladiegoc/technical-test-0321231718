import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingPageRoutingModule } from './landing-page-routing.module';
import { LandingPageComponent } from './landing-page.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RoomCardModule } from '../shared/room-card/room-card.module';
import { MatPaginatorModule } from '@angular/material/paginator'
import { ButtonModule } from '../shared/button/button.module';


@NgModule({
  declarations: [
    LandingPageComponent
  ],
  imports: [
    CommonModule,
    LandingPageRoutingModule,
    MatIconModule,
    MatButtonModule,
    RoomCardModule,
    MatPaginatorModule,
    ButtonModule
  ]
})
export class LandingPageModule { }
