import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocumentationRoutingModule } from './documentation-routing.module';
import { DocumentationComponent } from './documentation.component';
import { ButtonModule } from '../shared/button/button.module';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    DocumentationComponent
  ],
  imports: [
    CommonModule,
    DocumentationRoutingModule,
    ButtonModule,
    MatIconModule
  ]
})
export class DocumentationModule { }
