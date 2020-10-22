import * as THREE from 'three'

export default class PointLight {
  constructor(_options) {
    // Set options
    this.debug = _options.debug

    // Set up
    this.container = new THREE.Object3D()
    this.params = {
      positionX: -1.5,
      positionY: 1.2,
      positionZ: 5.9,
    }

    this.createPointLight()

    if (this.debug) {
      this.setDebug()
    }
  }
  createPointLight() {
    this.light = new THREE.DirectionalLight(0xffffff, 0.5)
    this.light.position.set(
      this.params.positionX,
      this.params.positionY,
      this.params.positionZ
    )
    this.container.add(this.light)
  }
  setDebug() {
    // Color debug
    this.debugFolder = this.debug.addFolder('Directional Light')
    this.debugFolder.open()
    // Position debug
    this.debugFolder
      .add(this.params, 'positionX')
      .step(0.1)
      .min(-10)
      .max(10)
      .name('Position X')
      .onChange(() => {
        this.light.position.x = this.params.positionX
      })
    this.debugFolder
      .add(this.params, 'positionY')
      .step(0.1)
      .min(-10)
      .max(10)
      .name('Position Y')
      .onChange(() => {
        this.light.position.y = this.params.positionY
      })
    this.debugFolder
      .add(this.params, 'positionZ')
      .step(0.1)
      .min(-10)
      .max(10)
      .name('Position Z')
      .onChange(() => {
        this.light.position.z = this.params.positionZ
      })
  }
}
