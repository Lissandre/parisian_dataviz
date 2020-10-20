import * as THREE from 'three'

export default class SceneColor{
  constructor(_options){
    // Set options
    this.fog = _options.fog
    this.renderer = _options.renderer
    this.lights = _options.lights
    this.arrondissement = _options.arrondissement

    // Set up
    this.backgroundColor = [0xededed, 0x00ff00, 0x00ff]
    this.leftColor = [0x597fff, 0x00ffff, 0xff00ff]
    this.rightColor = [0xff828b, 0xffffff, 0x00ffff]
  }
  changeColor(arrondissement) {
    this.renderer.setClearColor(new THREE.Color(this.backgroundColor[arrondissement-1]))
    this.fog.color = new THREE.Color(this.backgroundColor[arrondissement-1])
    this.lights.container.children[1].color = new THREE.Color(this.leftColor[arrondissement-1])
    this.lights.container.children[0].color = new THREE.Color(this.rightColor[arrondissement-1])
  }
}