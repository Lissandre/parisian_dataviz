import { TweenMax } from 'gsap'
import SceneColor from './SceneColor.js'

export default class ChangeDistrict {
  constructor(_options) {
    // Set options
    this.floor = _options.floor
    this.wall = _options.wall
    this.human = _options.human

    // Set up
    this.districts = document.querySelectorAll('li.district')
    this.sceneColor = new SceneColor({
      districts: this.districts,
      floor: this.floor,
      wall: this.wall
    })

    this.selectDistrict()
  }
  selectDistrict() {
    this.districts.forEach((district, index) => {
      district.addEventListener('click', () => {
        this.changeActive(index)
        this.human.change()
      })
    })
    for (let index = 0; index <= 19; index++) {
      document
        .querySelector(`#_${index + 1}-2`)
        .addEventListener('click', () => {
          this.changeActive(index)
          this.human.change()
        })
    }
  }
  changeActive(district) {
    this.sceneColor.changeColor(district)
    document.querySelectorAll('.active').forEach((active) => {
      active.classList.remove('active')
    })
    this.districts[district].classList.add('active')
    document.querySelector(`#_${district + 1}-2`).classList.add('active')
  }
}
