import * as THREE from 'three'

export default class Background {
  constructor(_options) {
    // Set options
    this.debug = _options.debug
    this.params = _options.params

    // Set up
    this.container = new THREE.Object3D()

    this.setFloor()
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
}
