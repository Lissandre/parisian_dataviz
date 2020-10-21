import * as THREE from 'three'

export default class SceneColor {
  constructor(_options) {
    // Set options
    this.fog = _options.fog
    this.floor = _options.floor
    this.renderer = _options.renderer
    this.lights = _options.lights
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
    this.leftColor = [
      0xa2a2ff,
      0xa2a2ff,
      0xa2a2ff,
      0xa2a2ff,
      0xa2a2ff,
      0xa2a2ff,
      0xa2a2ff,
      0xa2a2ff,
      0xa2a2ff,
      0xa2a2ff,
      0xa2a2ff,
      0xa2a2ff,
      0xa2a2ff,
      0xa2a2ff,
      0xa2a2ff,
      0xa2a2ff,
      0xa2a2ff,
      0xa2a2ff,
      0xa2a2ff,
      0xa2a2ff,
    ]
    this.rightColor = [
      0xffdcdc,
      0xffdcdc,
      0xffdcdc,
      0xffdcdc,
      0xffdcdc,
      0xffdcdc,
      0xffdcdc,
      0xffdcdc,
      0xffdcdc,
      0xffdcdc,
      0xffdcdc,
      0xffdcdc,
      0xffdcdc,
      0xffdcdc,
      0xffdcdc,
      0xffdcdc,
      0xffdcdc,
      0xffdcdc,
      0xffdcdc,
      0xffdcdc,
    ]

    this.selectDistrict()
  }
  selectDistrict() {
    this.districts = document.querySelectorAll('li.district')
    this.districts.forEach((district, index) => {
      district.addEventListener('click', () => {
        this.changeActive(index)
        this.changeColor(index)
      })
    })
  }
  changeColor(district) {
    this.renderer.setClearColor(new THREE.Color(this.backgroundColor[district]))
    this.fog.color = new THREE.Color(this.backgroundColor[district])
    // this.floor.container.children[0].material.color = new THREE.Color(this.backgroundColor[district])
    this.lights.container.children[1].color = new THREE.Color(
      this.leftColor[district]
    )
    this.lights.container.children[0].color = new THREE.Color(
      this.rightColor[district]
    )
  }
  changeActive(district) {
    document.querySelector('.active').classList.remove('active')
    this.districts[district].classList.add('active')
  }
}
