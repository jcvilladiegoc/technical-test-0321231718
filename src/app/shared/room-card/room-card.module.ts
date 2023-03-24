import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomCardComponent } from './room-card.component';
import { ButtonModule } from '../button/button.module';



@NgModule({
  declarations: [
    RoomCardComponent
  ],
  imports: [
    CommonModule,
    ButtonModule
  ],
  exports: [
    RoomCardComponent
  ]
})
export class RoomCardModule { }
