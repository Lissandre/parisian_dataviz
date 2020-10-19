import * as THREE from 'three'

import AmbientLight from './AmbientLight.js'
import PointLight from './PointLight.js'
import Cube from './Cube.js'
import Background from './Background.js'

export default class World {
  constructor(_options) {
    // Set options
    this.time = _options.time
    this.debug = _options.debug
    this.mouse = _options.mouse

    // Set up
    this.container = new THREE.Object3D()

    if (this.debug) {
      this.debugFolder = this.debug.addFolder('World')
      this.debugFolder.open()
    }

    this.setAmbientLight()
    this.setPointLight()
    this.setCube()
    this.setBackground()
  }
  setAmbientLight() {
    this.light = new AmbientLight({
      debug: this.debugFolder,
    })
    this.container.add(this.light.container)
  }
  setPointLight() {
    this.light = new PointLight({
      debug: this.debugFolder,
    })
    this.container.add(this.light.container)
  }
  setCube() {
    this.cube = new Cube({
      time: this.time,
      mouse: this.mouse,
      debug: this.debugFolder,
    })
    this.container.add(this.cube.container)
  }
  setBackground() {
    this.background = new Background({
      debug: this.debug,
    })
    this.container.add(this.background.container)
  }
}
