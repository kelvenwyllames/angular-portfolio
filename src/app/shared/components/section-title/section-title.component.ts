import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section-title',
  templateUrl: './section-title.component.html',
  styleUrl: './section-title.component.sass',
})
export class SectionTitleComponent {
  @Input()
  numberPage: string = '';

  @Input()
  titlePage: string = '';
}
