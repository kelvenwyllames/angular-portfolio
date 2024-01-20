import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.sass',
})
export class HeaderComponent {
  typewriter: string = '';
  phrases: string[] = [
    'DESENVOLVEDOR FRONT-END.',
    'PROGRAMADOR FRONT-END.',
    'FRONT-END DEVELOPER.',
    'DESENVOLVEDOR FULL-STACK',
  ];
  currentPhraseIndex: number = 0;
  index: number = 0;
  isTyping: boolean = true;
  intervalId: any;

  ngOnInit() {
    this.showNextPhrase();
  }

  showNextPhrase() {
    const phrase = this.phrases[this.currentPhraseIndex];

    this.intervalId = setInterval(() => {
      if (this.isTyping) {
        this.typewriter = phrase.substring(0, this.index);
        this.index++;

        if (this.index > phrase.length) {
          this.isTyping = false;
        }
      } else {
        this.typewriter = phrase.substring(0, this.index);
        this.index--;

        if (this.index === 0) {
          this.isTyping = true;
          this.currentPhraseIndex =
            (this.currentPhraseIndex + 1) % this.phrases.length;
          clearInterval(this.intervalId);
          setTimeout(() => this.showNextPhrase(), 1000);
        }
      }
    }, 120); // Ajuste a velocidade de digitação/apagamento conforme necessário
  }
}
