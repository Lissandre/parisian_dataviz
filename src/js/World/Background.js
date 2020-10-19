import * as THREE from 'three'

export default class Background {
  constructor(_options) {
    // Set options
    this.debug = _options.debug

    // Set up
    this.container = new THREE.Object3D()
    this.params = {
      color: 0x545454,
    }

    this.setFloor()
    this.setDebug()
  }
  setFloor() {
    this.floor = new THREE.Mesh(
      new THREE.PlaneBufferGeometry(40, 20, 10),
      new THREE.MeshStandardMaterial({
        color: this.params.color,
        metalness: 0.3,
        roughness: 0.8,
        wireframe: false,
      })
    )
    this.floor.rotation.x = Math.PI/2
    this.container.add(this.floor)
  }
  setDebug() {
    this.debugFolder = this.debug.addFolder('Floor')
    this.debugFolder.open()

    this.debugFolder
      .addColor(this.params, 'color')
      .name('Color')
      .onChange(() => {
        this.floor.material.color = new THREE.Color(this.params.color)
      })
  }
}
