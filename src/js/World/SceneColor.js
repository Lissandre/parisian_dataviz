import { TweenMax } from 'gsap'

export default class SceneColor {
  constructor(_options) {
    // Set options
    this.arrondissement = _options.arrondissement

    // Set up
    this.backgroundColor = [
      '#ffa4dc',
      '#82f4a5',
      '#ffd3b3',
      '#e9ffab',
      '#e097ff',
      '#43d1c6',
      '#ff9880',
      '#ffeea6',
      '#ff66c5',
      '#c2ffc2',
      '#683eff',
      '#80a4f1',
      '#d4ccf8',
      '#ffe3e3',
      '#b8e7ff',
      '#7788aa',
      '#ffabbf',
      '#ff5a5a',
      '#ff944a',
      '#f4c3f0',
    ]
    this.background = document.querySelector('.background')

    this.selectDistrict()
    this.hoverDistrict()
  }
  selectDistrict() {
    this.districts = document.querySelectorAll('li.district')
    this.districts.forEach((district, index) => {
      district.addEventListener('click', () => {
        this.changeActive(index)
        this.changeColor(index)
      })
    })
    for (let index = 0; index <= 19; index++) {
      document
        .querySelector(`#_${index + 1}-2`)
        .addEventListener('click', () => {
          this.changeActive(index)
          this.changeColor(index)
        })
    }
  }
  hoverDistrict() {
    this.districts.forEach((district, index) => {
      district.addEventListener('mouseenter', () => {
        this.setHover(index)
      })
    })
    for (let index = 0; index <= 19; index++) {
      document
        .querySelector(`#_${index + 1}-2`)
        .addEventListener('mouseenter', () => {
          this.setHover(index)
        })
    }
    this.districts.forEach((district, index) => {
      district.addEventListener('mouseleave', () => {
        this.removeHover(index)
      })
    })
    for (let index = 0; index <= 19; index++) {
      document
        .querySelector(`#_${index + 1}-2`)
        .addEventListener('mouseleave', () => {
          this.removeHover(index)
        })
    }
  }
  changeColor(district) {
    TweenMax.to(this.background.style, {
      duration: 1.5,
      background: this.backgroundColor[district],
    })
    document.documentElement.style.setProperty('--color', `${this.backgroundColor[district]}`)
    //this.renderer.setClearColor(new THREE.Color(this.backgroundColor[district]))
    //this.fog.color = new THREE.Color(this.backgroundColor[district])
  }
  changeActive(district) {
    document.querySelectorAll('.active').forEach((active) => {
      active.classList.remove('active')
    })
    this.districts[district].classList.add('active')
    document.querySelector(`#_${district + 1}-2`).classList.add('active')
  }
  setHover(district) {
    this.districts[district].classList.add('hover')
    document.querySelector(`#_${district + 1}-2`).classList.add('hover')
  }
  removeHover(district) {
    this.districts[district].classList.remove('hover')
    document.querySelector(`#_${district + 1}-2`).classList.remove('hover')
  }
  hexToRGB(h) {
    this.r = 0
    this.g = 0
    this.b = 0
    // 3 digits
    if (h.length === 4) {
      this.r = "0x" + h[1] + h[1];
      this.g = "0x" + h[2] + h[2];
      this.b = "0x" + h[3] + h[3];
  
    // 6 digits
    } else if (h.length === 7) {
      this.r = "0x" + h[1] + h[2];
      this.g = "0x" + h[3] + h[4];
      this.b = "0x" + h[5] + h[6];
    }
  }
}
