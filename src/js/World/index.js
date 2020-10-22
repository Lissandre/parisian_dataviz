import * as THREE from 'three'

import AmbientLight from './AmbientLight.js'
import PointLight from './PointLight.js'
import Human from './Human.js'
import Floor from './Floor.js'
import Wall from './Wall.js'
import ChangeDistrict from './ChangeDistrict.js'
import SpotLight from './SpotLight.js'
import DirectionalLight from './DirectionalLight.js'

export default class World {
  constructor(_options) {
    // Set options
    this.time = _options.time
    this.sizes = _options.sizes
    this.debug = _options.debug
    this.mouse = _options.mouse
    this.camera = _options.camera
    this.fog = _options.fog
    this.renderer = _options.renderer

    // Set up
    this.container = new THREE.Object3D()
    this.params = {
      color: 0xffffff,
    }

    if (this.debug) {
      this.debugFolder = this.debug.addFolder('World')
      this.debugFolder.open()
    }

    this.setAmbientLight()
    // this.setSpotLight()
    this.setPointLight()
    this.setDirectionalLight()
    this.setFloor()
    this.setWall()
    this.setHuman()
    this.setChangeDistrict()
    // this.setDebug()
  }
  setAmbientLight() {
    this.light = new AmbientLight({
      debug: this.debugFolder,
    })
    this.container.add(this.light.container)
  }
  setDirectionalLight() {
    this.directionallight = new DirectionalLight({
      debug: this.debugFolder,
    })
    this.container.add(this.directionallight.container)
  }
  setSpotLight() {
    this.spotlight = new SpotLight({
      debug: this.debugFolder,
    })
    this.container.add(this.spotlight.container)
  }
  setPointLight() {
    this.pointlight = new PointLight({
      debug: this.debugFolder,
    })
    this.container.add(this.pointlight.container)
  }
  setHuman() {
    this.human = new Human({
      time: this.time,
      sizes: this.sizes,
      mouse: this.mouse,
      camera: this.camera,
    })
    this.container.add(this.human.container)
  }
  setFloor() {
    this.floor = new Floor({
      params: this.params,
      debug: this.debug,
    })
    this.container.add(this.floor.container)
  }
  setWall() {
    this.wall = new Wall({
      params: this.params,
      debug: this.debug,
    })
    this.container.add(this.wall.container)
  }
  setChangeDistrict() {
    this.changeDistrict = new ChangeDistrict({
      floor: this.floor,
      wall: this.wall
    })
    this.changeDistrict.changeActive(0)
  }
  setDebug() {
    this.debugFolder = this.debug.addFolder('Background')
    this.debugFolder.open()

    this.debugFolder
      .addColor(this.params, 'color')
      .name('Color')
      .onChange(() => {
        // this.floor.container.children[0].material.color = new THREE.Color(
        //   this.params.color
        // )
        // this.background.container.children[0].material.color = new THREE.Color(
        //   this.params.color
        // )
        this.fog.color = new THREE.Color(this.params.color)
        this.renderer.setClearColor(new THREE.Color(this.params.color))
      })
  }
}
