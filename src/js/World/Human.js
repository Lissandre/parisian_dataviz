import * as THREE from 'three'
import {OBJLoader} from 'three/examples/jsm/loaders/OBJLoader.js'
import HumanModel from '../../models/MaleLow.obj'

export default class Human{
  constructor(_options){
    // Set options
    this.time = _options.time
    this.mouse = _options.mouse

    // Set up
    this.rotation = 0
    this.speed = 0
    this.deceleration = 0.05
    this.container = new THREE.Object3D()
    this.OBJLoader = new OBJLoader()

    this.loadModel()
    this.setMovement()
  }
  loadModel(){
    this.OBJLoader.load(HumanModel, (model) => {
      model.scale.set(0.02,0.02,0.02)
      model.rotation.x = -Math.PI/2
      this.container.add(model)
    })
  }
  setMovement() {
    this.time.on('tick', ()=>{
      if (this.mouse.grab === true) {
        this.speed = 0
        this.speed = this.mouse.delta.x * 0.1
      } else if (this.mouse.grab === false && Math.abs(this.speed) > 0) {
        Math.sign(this.speed)*this.speed - this.deceleration > 0 ? this.speed -= Math.sign(this.speed)*this.deceleration : this.speed = 0
      }
      this.deltaRotationQuaternion = new THREE.Quaternion().setFromEuler(
        new THREE.Euler(
          // this.toRadians(this.mouse.delta.y * 0.1),
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
  toRadians(angle) {
    return angle * (Math.PI / 180)
  }
}