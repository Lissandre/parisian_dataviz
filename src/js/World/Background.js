import * as THREE from 'three'

export default class Background {
  constructor(_options) {
    // Set options
    this.debug = _options.debug

    // Set up
    this.container = new THREE.Object3D()
    this.params = {
      color: 0x9f94ff,
    }

    this.setFloor()
    this.setDebug()
  }
  setFloor() {
    this.background = new THREE.Mesh(
      new THREE.PlaneBufferGeometry(50, 50, 10),
      new THREE.MeshStandardMaterial({
        color: this.params.color,
        metalness: 0.3,
        roughness: 0.8,
        wireframe: false,
      })
    )
    this.background.position.z = -12
    this.container.add(this.background)
  }
  setDebug() {
    this.debugFolder = this.debug.addFolder('Background')
    this.debugFolder.open()

    this.debugFolder
      .addColor(this.params, 'color')
      .name('Color')
      .onChange(() => {
        this.background.material.color = new THREE.Color(this.params.color)
      })
  }
}
