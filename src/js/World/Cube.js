import * as THREE from 'three'

export default class Cube {
  constructor(_options) {
    // Options
    this.time = _options.time
    this.mouse = _options.mouse
    this.debug = _options.debug

    // Set up
    this.container = new THREE.Object3D()
    this.params = {
      color: 0xfafafa,
    }

    this.createCube()
    this.setMovement()

    if (this.debug) {
      this.setDebug()
    }
  }
  createCube() {
    this.cube = new THREE.Mesh(
      new THREE.BoxGeometry(1, 1, 1),
      new THREE.MeshStandardMaterial({
        color: this.params.color,
        metalness: 0.3,
        roughness: 0.8,
        wireframe: false,
      })
    )
    this.cube.position.y = 0
    this.container.add(this.cube)
  }
  setMovement() {
    this.mouse.on('mousemove', () => {
      if (this.mouse.grab === true) {
        this.deltaRotationQuaternion = new THREE.Quaternion().setFromEuler(
          new THREE.Euler(
            this.toRadians(this.mouse.delta.y * 0.1),
            this.toRadians(this.mouse.delta.x * 0.1),
            0,
            'XYZ'
          )
        )
        this.container.quaternion.multiplyQuaternions(
          this.deltaRotationQuaternion,
          this.container.quaternion
        )
      }
    })
  }
  toRadians(angle) {
    return angle * (Math.PI / 180)
  }
  setDebug() {
    this.debugFolder = this.debug.addFolder('Cube')
    this.debugFolder.open()

    this.debugFolder.add(this.cube.material, 'wireframe').name('Wireframe')
    this.debugFolder
      .add(this.cube.material, 'metalness')
      .step(0.05)
      .min(0)
      .max(1)
      .name('Metalness')
    this.debugFolder
      .add(this.cube.material, 'roughness')
      .step(0.05)
      .min(0)
      .max(1)
      .name('Roughness')
    this.debugFolder
      .addColor(this.params, 'color')
      .name('Color')
      .onChange(() => {
        this.cube.material.color = new THREE.Color(this.params.color)
      })
  }
}
