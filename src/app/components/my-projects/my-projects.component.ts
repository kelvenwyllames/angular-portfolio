import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-my-projects',
  templateUrl: './my-projects.component.html',
  styleUrl: './my-projects.component.sass',
})
export class MyProjectsComponent {
  @Input() imgproject: string = '';
  @Input() altimgproject: string = '';
  @Input() titleproject: string = '';
  @Input() imgskills1: string = '';
  @Input() imgskills2: string = '';
  @Input() imgskills3: string = '';
  @Input() imgskills4: string = '';
  @Input() imgskills5: string = '';
  @Input() altskills1: string = '';
  @Input() altskills2: string = '';
  @Input() altskills3: string = '';
  @Input() altskills4: string = '';
  @Input() altskills5: string = '';
  @Input() technology1: string = '';
  @Input() technology2: string = '';
  @Input() technology3: string = '';
  @Input() technology4: string = '';
  @Input() technology5: string = '';
}
