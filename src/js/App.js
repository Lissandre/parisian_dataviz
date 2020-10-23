import * as THREE from 'three'
import * as dat from 'dat.gui'
import datas from '../data.json'

import Sizes from './Tools/Sizes.js'
import Time from './Tools/Time.js'
import Mouse from './Tools/Mouse.js'

import Camera from './Camera.js'
import World from './World/index.js'

export default class App {
  constructor(_options) {
    // Set options
    this.canvas = _options.canvas
    this.config = _options.config

    // Set up
    this.time = new Time()
    this.sizes = new Sizes()
    this.mouse = new Mouse()

    this.setConfig()
    this.setStartScreen()
    this.setRenderer()
    this.setCamera()
    this.setWorld()
  }
  setStartScreen() {
    document
      .querySelector('.startScreen button')
      .addEventListener('click', () => {
        document.querySelector('.startScreen').style.zIndex = '0'
        document.querySelector('canvas').style.transform = 'translateY(0)'
      })
  }
  setRenderer() {
    // Set scene
    this.scene = new THREE.Scene()
    // Set renderer
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      alpha: true,
      antialiasing: true,
    })
    this.renderer.shadowMap.Type = THREE.PCFSoftShadowMap
    this.renderer.shadowMap.enabled = true
    // Set background color
    this.renderer.setClearColor(0x000000, 0)
    // Set renderer pixel ratio & sizes
    this.renderer.setPixelRatio(window.devicePixelRatio)
    this.renderer.setSize(this.sizes.viewport.width, this.sizes.viewport.height)
    // Resize renderer on resize event
    this.sizes.on('resize', () => {
      this.renderer.setSize(
        this.sizes.viewport.width,
        this.sizes.viewport.height
      )
    })
    // Set RequestAnimationFrame with 60ips
    this.time.on('tick', () => {
      this.renderer.render(this.scene, this.camera.camera)
    })
  }
  setCamera() {
    // Create camera instance
    this.camera = new Camera({
      sizes: this.sizes,
      renderer: this.renderer,
      debug: this.debug,
    })
    // Add camera to scene
    this.scene.add(this.camera.container)
  }
  setWorld() {
    // Create world instance
    this.world = new World({
      time: this.time,
      sizes: this.sizes,
      camera: this.camera.container,
      debug: this.debug,
      mouse: this.mouse,
      fog: this.scene.fog,
      renderer: this.renderer,
      datas: datas,
    })
    // Add world to scene
    this.scene.add(this.world.container)
  }
  setConfig() {
    if (window.location.hash === '#debug' || this.config === 'dev') {
      this.debug = new dat.GUI({ width: 420 })
    }
  }
}
