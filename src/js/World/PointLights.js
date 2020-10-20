import * as THREE from 'three'

export default class PointLights {
  constructor(_options) {
    // Set options
    this.debug = _options.debug

    // Set up
    this.container = new THREE.Object3D()
    this.params = {
      colorRight: 0xffffff,
      colorLeft: 0xffffff,
      positionX: 4,
      positionY: 2,
      positionZ: 5,
    }

    this.createPointLights()

    if (this.debug) {
      this.setDebug()
    }
  }
  createPointLights() {
    this.lightRight = new THREE.PointLight(this.params.colorRight, 1, 15)
    this.lightRight.castShadow = true
    this.lightRight.position.set(
      this.params.positionX,
      this.params.positionY,
      this.params.positionZ
    )
    this.container.add(this.lightRight)
    this.lightLeft = new THREE.PointLight(this.params.colorLeft, 1, 15)
    this.lightLeft.castShadow = true
    this.lightLeft.position.set(
      -this.params.positionX,
      this.params.positionY,
      this.params.positionZ
    )
    this.container.add(this.lightLeft)
  }
  setDebug() {
    // Color debug
    this.debugFolder = this.debug.addFolder('Point Light')
    this.debugFolder.open()
    this.debugFolder
      .addColor(this.params, 'colorRight')
      .name('Color Right')
      .onChange(() => {
        this.lightRight.color = new THREE.Color(this.params.colorRight)
      })
    this.debugFolder
      .addColor(this.params, 'colorLeft')
      .name('Color Left')
      .onChange(() => {
        this.lightLeft.color = new THREE.Color(this.params.colorLeft)
      })
    // Position debug
    this.debugFolder
      .add(this.params, 'positionX')
      .step(0.1)
      .min(-10)
      .max(10)
      .name('Position X')
      .onChange(() => {
        this.lightLeft.position.x = -this.params.positionX
        this.lightRight.position.x = this.params.positionX
      })
    this.debugFolder
      .add(this.params, 'positionY')
      .step(0.1)
      .min(-10)
      .max(10)
      .name('Position Y')
      .onChange(() => {
        this.lightLeft.position.y = this.params.positionY
        this.lightRight.position.y = this.params.positionY
      })
    this.debugFolder
      .add(this.params, 'positionZ')
      .step(0.1)
      .min(-10)
      .max(10)
      .name('Position Z')
      .onChange(() => {
        this.lightLeft.position.z = this.params.positionZ
        this.lightRight.position.z = this.params.positionZ
      })
  }
}
