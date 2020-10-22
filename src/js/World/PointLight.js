import * as THREE from 'three'

export default class PointLight {
  constructor(_options) {
    // Set options
    this.debug = _options.debug

    // Set up
    this.container = new THREE.Object3D()
    this.params = {
      positionX: -1.5,
      positionY: 3.6,
      positionZ: 3.5,
    }

    this.createPointLight()

    if (this.debug) {
      this.setDebug()
    }
  }
  createPointLight() {
    this.light = new THREE.PointLight(0xffffff, 0.2, 14)
    this.light.castShadow = true
    this.light.shadow.mapSize.width = 2048
    this.light.shadow.mapSize.height = 2048
    this.light.position.set(
      this.params.positionX,
      this.params.positionY,
      this.params.positionZ
    )
    this.container.add(this.light)
  }
  setDebug() {
    // Color debug
    this.debugFolder = this.debug.addFolder('Point Light')
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
