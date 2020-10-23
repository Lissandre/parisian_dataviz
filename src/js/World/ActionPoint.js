import * as THREE from 'three'

export default class ActionPoint {
  constructor(_options) {
    // Set options
    this.name = _options.name
    this.position = _options.position
    this.camera = _options.camera
    this.sizes = _options.sizes
    this.time = _options.time
    this.model = _options.model
    this.childrenValue = _options.childrenValue
    this.container = _options.container

    // Set up
    this.createPoint()
    this.createButton()
  }
  createPoint() {
    this.sphere = new THREE.Mesh(
      new THREE.SphereGeometry(0.01, 1, 1),
      new THREE.PointsMaterial()
    )
    this.sphere.position.x = this.position.x
    this.sphere.position.y = this.position.y
    this.sphere.position.z = this.position.z
    this.model.add(this.sphere)
  }
  createButton() {
    this.infos = document.querySelectorAll('.listInfos ul li')
    this.button = document.createElement('div')
    this.button.classList.add('ball')
    this.button.classList.add(this.name)
    document.body.append(this.button)
    this.button.addEventListener('click', () => {
      this.infos.forEach((info) => {
        if (info.classList.contains(this.name)) {
          info.classList.toggle('disp')
        }
      })
    })
    this.moveButton()
  }
  moveButton() {
    this.time.on('tick', () => {
      // console.log(this.human.container.children[1].getWorldPosition())
      // console.log(this.human.container.children[2].getWorldPosition())
      this.vector = new THREE.Vector3()
      this.vector = this.vector.setFromMatrixPosition(
        this.model.children[this.childrenValue].matrixWorld
      )
      this.vector.project(this.camera.children[0])

      this.vector.x =
        (this.vector.x * this.sizes.viewport.width) / 2 +
        this.sizes.viewport.width / 2
      this.vector.y =
        -((this.vector.y * this.sizes.viewport.height) / 2) +
        this.sizes.viewport.height / 2
      this.button.style.transform = `translate(${this.vector.x}px, ${this.vector.y}px)`
    })
    // this.button.addEventListener('click', () =>{
    //   console.log(this.name)
    // })
  }
}
