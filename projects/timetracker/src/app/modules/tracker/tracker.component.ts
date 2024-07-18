import { Component } from '@angular/core';
import { LabelsComponent } from '../labels/labels.component';

@Component({
  selector: 'app-tracker',
  standalone: true,
  imports: [
    LabelsComponent
  ],
  templateUrl: './tracker.component.html',
  styleUrl: './tracker.component.sass'
})
export class TrackerComponent {

}
