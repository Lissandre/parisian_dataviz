import * as THREE from 'three'

export default class Piedestal {
  constructor() {
    // Set options

    // Set up
    this.container = new THREE.Object3D()

    this.setPiedestal()
  }
  setPiedestal() {
    this.bottom = new THREE.Mesh(
      new THREE.CylinderBufferGeometry(1, 1, 0.3, 50, 10),
      new THREE.MeshLambertMaterial({
        color: 0x767676,
        metalness: 0,
        roughness: 0.7,
        wireframe: false,
      })
    )
    this.top = new THREE.Mesh(
      new THREE.CylinderBufferGeometry(0.8, 0.8, 0.4, 50, 10),
      new THREE.MeshLambertMaterial({
        color: 0x767676,
        metalness: 0,
        roughness: 0.7,
        wireframe: false,
      })
    )

    // this.geometry = new THREE.CylinderBufferGeometry(1, 1, 0.3, 50, 10),
    // this.edges = new THREE.EdgesGeometry( this.geometry );
    // this.line = new THREE.LineSegments( this.edges, new THREE.LineBasicMaterial( { color: 0xffffff } ) );
    this.container.add(this.bottom)
    this.container.add(this.top)
  }
}
