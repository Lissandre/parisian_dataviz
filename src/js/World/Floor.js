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
    // this.floor = new THREE.Mesh(
    //   new THREE.PlaneBufferGeometry(50, 20),
    //   new THREE.ShadowMaterial({
    //     opacity: 0.2,
    //     transparent: true,
    //   })
    // )
    this.floor = new THREE.Mesh(
      new THREE.PlaneBufferGeometry(50, 50),
      new THREE.MeshStandardMaterial({
        color: new THREE.Color('#ffa4dc'),
        roughness: 0.2,
        metalness: 0,
      })
    )
    this.floor.receiveShadow = true
    this.floor.rotation.x = -Math.PI / 2.5
    this.container.add(this.floor)
  }
}
