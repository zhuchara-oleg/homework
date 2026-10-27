export default class HeaderFixed {
  constructor(config) {
    this.headerTypes = config;
    this.header = document.querySelector(`.${this.headerTypes.HEADER}`);

    if (!this.header) {
      throw new Error("Header element is missing.");
    }

    this.initDropdowns(); 
    this.initEvents();
  }


initDropdowns() {
  const dropdownItems = this.header.querySelectorAll('.menu-visible');

  dropdownItems.forEach(item => {
    const submenu = item.querySelector('.menu__submenu');
    if (!submenu) return;


    item.addEventListener('mouseenter', () => {
      submenu.classList.add('menu__submenu--open');
    });


    item.addEventListener('mouseleave', (e) => {

      if (submenu.contains(e.relatedTarget)) {
        return;
      }

      submenu.classList.remove('menu__submenu--open');
    });


    submenu.addEventListener('mouseleave', () => {
      submenu.classList.remove('menu__submenu--open');
    });
  });
}

  initEvents() {
    window.addEventListener("scroll", this.updateFixedClass.bind(this));
  }

  updateFixedClass() {
    if (window.scrollY > 0) {
      this.header.classList.add(this.headerTypes.HEADER_FIXED);
    } else {
      this.header.classList.remove(this.headerTypes.HEADER_FIXED);
    }
  }

  removeFixedClass() {
    this.header.classList.remove(this.headerTypes.HEADER_FIXED);
  }
}

