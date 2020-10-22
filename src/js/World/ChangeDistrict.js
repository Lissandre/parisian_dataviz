import { TweenMax } from 'gsap'
import SceneColor from './SceneColor.js'

export default class ChangeDistrict {
  constructor(_options) {
    // Set options

    // Set up
    this.districts = document.querySelectorAll('li.district')
    this.sceneColor = new SceneColor({
      districts: this.districts
    })

    this.selectDistrict()
  }
  selectDistrict() {
    this.districts.forEach((district, index) => {
      district.addEventListener('click', () => {
        this.changeActive(index)
        this.sceneColor.changeColor(index)
      })
    })
    for (let index = 0; index <= 19; index++) {
      document
        .querySelector(`#_${index + 1}-2`)
        .addEventListener('click', () => {
          this.changeActive(index)
          this.sceneColor.changeColor(index)
        })
    }
  }
  changeActive(district) {
    document.querySelectorAll('.active').forEach((active) => {
      active.classList.remove('active')
    })
    this.districts[district].classList.add('active')
    document.querySelector(`#_${district + 1}-2`).classList.add('active')
  }
}
