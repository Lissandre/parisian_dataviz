import * as THREE from 'three'

export default class DisctrictInfos{
  constructor(_options){
    // Set options
    this.human = _options.human
    this.data = _options.data

    // Set up
    this.container = new THREE.Object3D()
    this.name = document.querySelector('.infos h2')
    this.description = document.querySelector('.description')
  }
  changeInfos(district){
    this.name.innerHTML = this.data.districts[district+1].name
    this.description.innerHTML = this.data.districts[district+1].description
  }
}