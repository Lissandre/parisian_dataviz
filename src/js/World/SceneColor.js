import * as THREE from 'three'

export default class SceneColor {
  constructor(_options) {
    // Set options
    this.fog = _options.fog
    this.renderer = _options.renderer
    this.lights = _options.lights
    this.arrondissement = _options.arrondissement

    // Set up
    this.backgroundColor = [
      0xb5ebff,
      0xb5ebff,
      0xb5ebff,
      0xb5ebff,
      0xb5ebff,
      0xb5ebff,
      0xb5ebff,
      0xb5ebff,
      0xb5ebff,
      0xb5ebff,
      0xb5ebff,
      0xb5ebff,
      0xb5ebff,
      0xb5ebff,
      0xb5ebff,
      0xb5ebff,
      0xb5ebff,
      0xb5ebff,
      0xb5ebff,
      0xb5ebff,
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
