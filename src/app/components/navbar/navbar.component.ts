import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass'],
})
export class NavbarComponent implements AfterViewInit {
  scrollToElement(elementId: string) {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
      });
    }
  }

  ngAfterViewInit(): void {
    const toggleBtn: HTMLElement | null = document.querySelector('.toggle_btn');
    const toggleBtnIcon: HTMLElement | null =
      document.querySelector('.toggle_btn i');
    const dropDownMenu: HTMLElement | null =
      document.querySelector('.dropdown_menu');

    if (toggleBtn && toggleBtnIcon && dropDownMenu) {
      toggleBtn.onclick = function () {
        dropDownMenu.classList.toggle('open');
        const isOpen: boolean = dropDownMenu.classList.contains('open');

        toggleBtnIcon.className = isOpen
          ? 'fa-solid fa-xmark'
          : 'fa-solid fa-bars';
      };
    }
  }
}
