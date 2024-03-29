import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.sass',
})
export class HomeComponent {
  projects: any[] = [
    {
      imgproject: 'assets/img-projects/img-portfolio.png',
      altimgproject: 'Imagem do site',
      titleproject: 'Portfólio',
      imgskills1: 'assets/img-skills-projects/html5.svg',
      altskills1: 'HTML5',
      imgskills2: 'assets/img-skills-projects/sass.svg',
      altskills2: 'Sass',
      imgskills3: 'assets/img-skills-projects/angular.svg',
      altskills3: 'Angular',
      imgskills4: 'assets/img-skills-projects/typescript.svg',
      altskills4: 'TypeScript',
      imgskills5: 'assets/img-skills-projects/figma.svg',
      altskills5: 'Figma',
      technology1: 'HTML5',
      technology2: 'Sass',
      technology3: 'Angular',
      technology4: 'TypeScript',
      technology5: 'Figma',
    },
    {
      imgproject: 'assets/img-projects/img-weather.png',
      altimgproject: 'Imagem do site',
      titleproject: 'Clima News 1.0',
      imgskills1: 'assets/img-skills-projects/html5.svg',
      altskills1: 'HTML5',
      imgskills2: 'assets/img-skills-projects/css.svg',
      altskills2: 'CSS3',
      imgskills3: 'assets/img-skills-projects/javascript.svg',
      altskills3: 'JavaScript',
      imgskills4: 'assets/img-skills-projects/figma.svg',
      altskills4: 'Figma',
      imgskills5: 'assets/img-skills-projects/github.svg',
      altskills5: 'GitHub',
      technology1: 'HTML5',
      technology2: 'CSS3',
      technology3: 'JavaScript',
      technology4: 'Figma',
      technology5: 'GitHub',
    },
    {
      imgproject: 'assets/img-projects/placeholder.png',
      altimgproject: 'Imagem do site',
      titleproject: 'Em Construção...',
      imgskills1: 'assets/img-skills-projects/html5.svg',
      altskills1: 'HTML5',
      imgskills2: 'assets/img-skills-projects/sass.svg',
      altskills2: 'Sass',
      imgskills3: 'assets/img-skills-projects/angular.svg',
      altskills3: 'Angular',
      imgskills4: 'assets/img-skills-projects/typescript.svg',
      altskills4: 'TypeScript',
      imgskills5: 'assets/img-skills-projects/figma.svg',
      altskills5: 'Figma',
      technology1: 'HTML5',
      technology2: 'Sass',
      technology3: 'Angular',
      technology4: 'TypeScript',
      technology5: 'Figma',
    },
    {
      imgproject: 'assets/img-projects/placeholder.png',
      altimgproject: 'Imagem do site',
      titleproject: 'Em Construção...',
      imgskills1: 'assets/img-skills-projects/html5.svg',
      altskills1: 'HTML5',
      imgskills2: 'assets/img-skills-projects/sass.svg',
      altskills2: 'Sass',
      imgskills3: 'assets/img-skills-projects/angular.svg',
      altskills3: 'Angular',
      imgskills4: 'assets/img-skills-projects/typescript.svg',
      altskills4: 'TypeScript',
      imgskills5: 'assets/img-skills-projects/figma.svg',
      altskills5: 'Figma',
      technology1: 'HTML5',
      technology2: 'Sass',
      technology3: 'Angular',
      technology4: 'TypeScript',
      technology5: 'Figma',
    },
    {
      imgproject: 'assets/img-projects/placeholder.png',
      altimgproject: 'Imagem do site',
      titleproject: 'Em Construção...',
      imgskills1: 'assets/img-skills-projects/html5.svg',
      altskills1: 'HTML5',
      imgskills2: 'assets/img-skills-projects/sass.svg',
      altskills2: 'Sass',
      imgskills3: 'assets/img-skills-projects/angular.svg',
      altskills3: 'Angular',
      imgskills4: 'assets/img-skills-projects/typescript.svg',
      altskills4: 'TypeScript',
      imgskills5: 'assets/img-skills-projects/figma.svg',
      altskills5: 'Figma',
    },
    {
      imgproject: 'assets/img-projects/placeholder.png',
      altimgproject: 'Imagem do site',
      titleproject: 'Em Construção...',
      imgskills1: 'assets/img-skills-projects/html5.svg',
      altskills1: 'HTML5',
      imgskills2: 'assets/img-skills-projects/sass.svg',
      altskills2: 'Sass',
      imgskills3: 'assets/img-skills-projects/angular.svg',
      altskills3: 'Angular',
      imgskills4: 'assets/img-skills-projects/typescript.svg',
      altskills4: 'TypeScript',
      imgskills5: 'assets/img-skills-projects/figma.svg',
      altskills5: 'Figma',
      technology1: 'HTML5',
      technology2: 'Sass',
      technology3: 'Angular',
      technology4: 'TypeScript',
      technology5: 'Figma',
    },
    {
      imgproject: 'assets/img-projects/placeholder.png',
      altimgproject: 'Imagem do site',
      titleproject: 'Em Construção...',
      imgskills1: 'assets/img-skills-projects/html5.svg',
      altskills1: 'HTML5',
      imgskills2: 'assets/img-skills-projects/sass.svg',
      altskills2: 'Sass',
      imgskills3: 'assets/img-skills-projects/angular.svg',
      altskills3: 'Angular',
      imgskills4: 'assets/img-skills-projects/typescript.svg',
      altskills4: 'TypeScript',
      imgskills5: 'assets/img-skills-projects/figma.svg',
      altskills5: 'Figma',
      technology1: 'HTML5',
      technology2: 'Sass',
      technology3: 'Angular',
      technology4: 'TypeScript',
      technology5: 'Figma',
    },
    {
      imgproject: 'assets/img-projects/placeholder.png',
      altimgproject: 'Imagem do site',
      titleproject: 'Em Construção...',
      imgskills1: 'assets/img-skills-projects/html5.svg',
      altskills1: 'HTML5',
      imgskills2: 'assets/img-skills-projects/sass.svg',
      altskills2: 'Sass',
      imgskills3: 'assets/img-skills-projects/angular.svg',
      altskills3: 'Angular',
      imgskills4: 'assets/img-skills-projects/typescript.svg',
      altskills4: 'TypeScript',
      imgskills5: 'assets/img-skills-projects/figma.svg',
      altskills5: 'Figma',
      technology1: 'HTML5',
      technology2: 'Sass',
      technology3: 'Angular',
      technology4: 'TypeScript',
      technology5: 'Figma',
    },
    {
      imgproject: 'assets/img-projects/placeholder.png',
      altimgproject: 'Imagem do site',
      titleproject: 'Em Construção...',
      imgskills1: 'assets/img-skills-projects/html5.svg',
      altskills1: 'HTML5',
      imgskills2: 'assets/img-skills-projects/sass.svg',
      altskills2: 'Sass',
      imgskills3: 'assets/img-skills-projects/angular.svg',
      altskills3: 'Angular',
      imgskills4: 'assets/img-skills-projects/typescript.svg',
      altskills4: 'TypeScript',
      imgskills5: 'assets/img-skills-projects/figma.svg',
      altskills5: 'Figma',
      technology1: 'HTML5',
      technology2: 'Sass',
      technology3: 'Angular',
      technology4: 'TypeScript',
      technology5: 'Figma',
    },
  ];
  projectsToShow = 3;

  loadMoreProjects() {
    this.projectsToShow += 3;
  }
}
