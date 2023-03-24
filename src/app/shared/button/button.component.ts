import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {

  @Input() theme: 'primary' | 'secondary' = 'primary';
  @Input() outline: boolean = false;
  @Input() width: string = 'auto';

}
