import * as THREE from 'three'
import { TweenMax } from 'gsap'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import texture from '../../textures/images.jpeg'
import HumanModel from '../../models/personnage(1).glb'
import ActionPoint from './ActionPoint.js'

export default class Human {
  constructor(_options) {
    // Set options
    this.time = _options.time
    this.sizes = _options.sizes
    this.mouse = _options.mouse
    this.camera = _options.camera
    this.data = _options.data

    // Set up
    this.rotation = 0
    this.speed = 0
    this.deceleration = 0.05
    this.container = new THREE.Object3D()
    this.loader = new GLTFLoader()
    this.fontloader = new THREE.FontLoader()
    this.textureloader = new THREE.TextureLoader()

    this.loadModel()
    this.setMovement()
    // this.setInfos()
  }
  loadModel() {
    this.loader.load(HumanModel, (model) => {
      model.scene.traverse((child) => {
        child.castShadow = true
      })
      model.scene.traverse(( child ) => {
        if ( child.name === 'veste') {
          child.material = new THREE.MeshBasicMaterial({map: this.textureloader.load(texture)})
          child.material.map.wrapT = THREE.RepeatWrapping
          child.material.map.wrapS = THREE.RepeatWrapping
          child.material.side = THREE.DoubleSide
        }
      })
      this.container.add(model.scene)
      this.container.position.y = 2.4
      this.container.scale.set(0.005, 0.005, 0.005)
      this.container.rotation.y = 0.1
      this.container.rotation.y = -Math.PI / 2
    })
  }
  setMovement() {
    this.time.on('tick', () => {
      if (this.mouse.grab === true) {
        this.speed = 0
        this.speed = this.mouse.delta.x * 0.1
      } else if (this.mouse.grab === false && Math.abs(this.speed) > 0) {
        Math.sign(this.speed) * this.speed - this.deceleration > 0
          ? (this.speed -= Math.sign(this.speed) * this.deceleration)
          : (this.speed = 0)
      }
      this.deltaRotationQuaternion = new THREE.Quaternion().setFromEuler(
        new THREE.Euler(
          0,
          this.toRadians(this.speed),
          0,
          'XYZ'
        )
      )
      this.container.quaternion.multiplyQuaternions(
        this.deltaRotationQuaternion,
        this.container.quaternion
      )
    })
  }
  change(){
    TweenMax.to(this.container.position, {
      duration: 0.57,
      x: 5,
    })
    setTimeout(()=>{
      this.container.position.x = -7
    }, 600)
    TweenMax.to(this.container.position, {
      delay: 0.7,
      duration: 0.57,
      x: 0,
    })
  }
  setInfos() {
    // this.setRevenus()
    // this.setPopulation()
    // this.setPolitique()
    // this.setProfessionnel()
    // this.setProprete()
    // this.setPollution()
    // this.setSonore()
    // this.setStup()
    // this.setAmour()
    // this.setAlcoolisme()
    // this.setHashtag()
    // this.setHappiness()
  }
  setRevenus(){
    this.revenus = new ActionPoint({
      name: 'revenus',
      position: {
        x: 1,
        y: 1,
        z: 0,
      },
      camera: this.camera,
      time: this.time,
      model: this.container,
      sizes: this.sizes,
      childrenValue: 2,
    })
    this.container.add(this.revenus.container)
  }
  // setHand() {
  //   this.hand = new ActionPoint({
  //     name: 'hand',
  //     position: {
  //       x: 0.13,
  //       y: 0.1,
  //       z: 0,
  //     },
  //     camera: this.camera,
  //     time: this.time,
  //     model: this.container,
  //     sizes: this.sizes,
  //     childrenValue: 2,
  //   })
  //   this.container.add(this.hand.container)
  // }
  // setFoot() {
  //   this.foot = new ActionPoint({
  //     name: 'foot',
  //     position: {
  //       x: 1.55,
  //       y: 2.77,
  //       z: 0,
  //     },
  //     camera: this.camera,
  //     time: this.time,
  //     model: this.container,
  //     sizes: this.sizes,
  //     childrenValue: 1,
  //   })
  //   this.container.add(this.foot.container)
  // }
  toRadians(angle) {
    return angle * (Math.PI / 180)
  }
}
