import * as THREE from 'three'

export default class Wall {
  constructor(_options) {
    // Set options
    this.debug = _options.debug
    this.params = _options.params

    // Set up
    this.container = new THREE.Object3D()

    this.setWall()
  }
  setWall() {
    // this.floor = new THREE.Mesh(
    //   new THREE.PlaneBufferGeometry(50, 20),
    //   new THREE.ShadowMaterial({
    //     opacity: 0.2,
    //     transparent: true,
    //   })
    // )
    this.wall = new THREE.Mesh(
      new THREE.PlaneBufferGeometry(70, 70),
      new THREE.MeshStandardMaterial({
        color: new THREE.Color('#ffa4dc')
      })
    )
    this.wall.position.z = -8
    this.wall.receiveShadow = true
    this.container.add(this.wall)
  }
}
