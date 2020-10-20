import * as THREE from 'three'

import AmbientLight from './AmbientLight.js'
import PointLights from './PointLights.js'
import Human from './Human.js'
import Floor from './Floor.js'
import SceneColor from './SceneColor.js'
import Piedestal from './Piedestal.js'

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
    this.setPointLights()
    this.setFloor()
    this.setPiedestal()
    this.setHuman()
    this.setSceneColor()
    // this.setDebug()
  }
  setAmbientLight() {
    this.light = new AmbientLight({
      debug: this.debugFolder,
    })
    this.container.add(this.light.container)
  }
  setPointLights() {
    this.lights = new PointLights({
      debug: this.debugFolder,
    })
    this.container.add(this.lights.container)
  }
  setPiedestal() {
    this.piedestal = new Piedestal()
    this.container.add(this.piedestal.container)
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
  setSceneColor() {
    this.sceneColor = new SceneColor({
      renderer: this.renderer,
      fog: this.fog,
      lights: this.lights,
    })
    this.sceneColor.changeColor(1)
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
