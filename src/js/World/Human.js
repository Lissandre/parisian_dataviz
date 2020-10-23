import * as THREE from 'three'
import { TweenMax } from 'gsap'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'
import texture from '../../textures/images.jpeg'
import HumanModel from '../../models/personnage-processed.glb'
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
    // this.loader = new GLTFLoader()
    this.textureloader = new THREE.TextureLoader()

    this.setInfos()
    this.setLoader()
    this.loadModel()
    this.setMovement()
  }
  setLoader() {
    // Draco
    this.dracoLoader = new DRACOLoader()
    this.dracoLoader.setDecoderPath('./static/draco/')
    this.dracoLoader.setDecoderConfig({ type: 'js' })
    // GLTF
    this.gltfLoader = new GLTFLoader()
    this.gltfLoader.setDRACOLoader(this.dracoLoader)
  }
  loadModel() {
    this.gltfLoader.load(HumanModel, (model) => {
      model.scene.traverse((child) => {
        child.castShadow = true
      })
      model.scene.traverse((child) => {
        if (child.name === 'veste') {
          child.material = new THREE.MeshBasicMaterial({
            map: this.textureloader.load(texture),
          })
          child.material.map.wrapT = THREE.RepeatWrapping
          child.material.map.wrapS = THREE.RepeatWrapping
          child.material.side = THREE.DoubleSide
        }
      })
      model.scene.scale.set(0.005, 0.005, 0.005)
      model.scene.position.y = 2.4
      model.scene.rotation.y = 0.1
      model.scene.rotation.y = -Math.PI / 2
      this.container.add(model.scene)
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
        new THREE.Euler(0, this.toRadians(this.speed), 0, 'XYZ')
      )
      this.container.quaternion.multiplyQuaternions(
        this.deltaRotationQuaternion,
        this.container.quaternion
      )
    })
  }
  change() {
    TweenMax.to(this.container.position, {
      duration: 0.57,
      x: 7,
    })
    setTimeout(() => {
      this.container.position.x = -9
    }, 600)
    TweenMax.to(this.container.position, {
      delay: 0.7,
      duration: 0.57,
      x: 0,
    })
  }
  setInfos() {
    this.setRevenus()
    this.setPopulation()
    this.setPolitique()
    this.setProfessionnel()
    this.setProprete()
    this.setPollution()
    this.setSonore()
    this.setStup()
    this.setAmour()
    this.setAlcoolisme()
    this.setHashtag()
    this.setHappiness()
  }
  setRevenus() {
    this.revenus = new ActionPoint({
      name: 'revenus',
      position: {
        x: 0.26,
        y: 0.8,
        z: -0.18,
      },
      camera: this.camera,
      time: this.time,
      model: this.container,
      sizes: this.sizes,
      childrenValue: 0,
    })
    // this.container.add(this.revenus.container.children[0])
  }
  setPopulation() {
    this.population = new ActionPoint({
      name: 'population',
      position: {
        x: 0.22,
        y: 1.4,
        z: -0.18,
      },
      camera: this.camera,
      time: this.time,
      model: this.container,
      sizes: this.sizes,
      childrenValue: 1,
    })
    // this.container.add(this.population.container)
  }
  setPolitique() {
    this.politique = new ActionPoint({
      name: 'politique',
      position: {
        x: 0.18,
        y: 2,
        z: -0.18,
      },
      camera: this.camera,
      time: this.time,
      model: this.container,
      sizes: this.sizes,
      childrenValue: 2,
    })
    // this.container.add(this.politique.container)
  }
  setProfessionnel() {
    this.professionnel = new ActionPoint({
      name: 'professionnel',
      position: {
        x: -0.28,
        y: 2,
        z: -0.18,
      },
      camera: this.camera,
      time: this.time,
      model: this.container,
      sizes: this.sizes,
      childrenValue: 3,
    })
    // this.container.add(this.professionnel.container)
  }
  setProprete() {
    this.proprete = new ActionPoint({
      name: 'proprete',
      position: {
        x: -0.32,
        y: 1.4,
        z: -0.18,
      },
      camera: this.camera,
      time: this.time,
      model: this.container,
      sizes: this.sizes,
      childrenValue: 4,
    })
    // this.container.add(this.proprete.container)
  }
  setPollution() {
    this.pollution = new ActionPoint({
      name: 'pollution',
      position: {
        x: -0.36,
        y: 0.8,
        z: -0.18,
      },
      camera: this.camera,
      time: this.time,
      model: this.container,
      sizes: this.sizes,
      childrenValue: 5,
    })
    // this.container.add(this.pollution.container)
  }
  setSonore() {
    this.sonore = new ActionPoint({
      name: 'sonore',
      position: {
        x: -0.06,
        y: 2.5,
        z: -0.18,
      },
      camera: this.camera,
      time: this.time,
      model: this.container,
      sizes: this.sizes,
      childrenValue: 6,
    })
    // this.container.add(this.sonore.container)
  }
  setStup() {
    this.stup = new ActionPoint({
      name: 'stup',
      position: {
        x: -0.06,
        y: 3.2,
        z: -0.18,
      },
      camera: this.camera,
      time: this.time,
      model: this.container,
      sizes: this.sizes,
      childrenValue: 7,
    })
    // this.container.add(this.stup.container)
  }
  setAmour() {
    this.amour = new ActionPoint({
      name: 'amour',
      position: {
        x: 0.7,
        y: 3,
        z: -0.13,
      },
      camera: this.camera,
      time: this.time,
      model: this.container,
      sizes: this.sizes,
      childrenValue: 8,
    })
    // this.container.add(this.amour.container)
  }
  setAlcoolisme() {
    this.alcoolisme = new ActionPoint({
      name: 'alcoolisme',
      position: {
        x: 1.5,
        y: 2.8,
        z: -0.1,
      },
      camera: this.camera,
      time: this.time,
      model: this.container,
      sizes: this.sizes,
      childrenValue: 9,
    })
    // this.container.add(this.alcoolisme.container)
  }
  setHashtag() {
    this.hashtag = new ActionPoint({
      name: 'hashtag',
      position: {
        x: -1.6,
        y: 2.8,
        z: -0.1,
      },
      camera: this.camera,
      time: this.time,
      model: this.container,
      sizes: this.sizes,
      childrenValue: 10,
    })
    // this.container.add(this.hashtag.container)
  }
  setHappiness() {
    this.happiness = new ActionPoint({
      name: 'happiness',
      position: {
        x: -0.8,
        y: 3,
        z: -0.13,
      },
      camera: this.camera,
      time: this.time,
      model: this.container,
      sizes: this.sizes,
      childrenValue: 11,
    })
    // this.container.add(this.happiness.container)
  }
  toRadians(angle) {
    return angle * (Math.PI / 180)
  }
}
