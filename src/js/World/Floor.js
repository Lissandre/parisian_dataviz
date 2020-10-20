import * as THREE from 'three'

export default class Floor {
  constructor(_options) {
    // Set options
    this.debug = _options.debug
    this.params = _options.params

    // Set up
    this.container = new THREE.Object3D()

    this.setFloor()
  }
  setFloor() {
    this.floor = new THREE.Mesh(
      new THREE.PlaneBufferGeometry(50, 20, 10),
      new THREE.MeshStandardMaterial({
        color: this.params.color,
        metalness: 0.3,
        roughness: 0.8,
        wireframe: false,
      })
    )
    this.floor.rotation.x = - Math.PI / 2
    this.container.add(this.floor)
  }
}
