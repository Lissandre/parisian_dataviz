import * as THREE from 'three'

export default class DisctrictInfos {
  constructor(_options) {
    // Set options
    this.human = _options.human
    this.data = _options.data

    // Set up
    this.container = new THREE.Object3D()
    this.name = document.querySelector('.infos h2')
    this.description = document.querySelector('.description')
    this.age = document.querySelector('.age')
    this.listInfos = document.querySelectorAll('.listInfos ul li span')
  }
  changeInfos(district) {
    this.name.innerHTML = this.data.districts[district + 1].name
    this.description.innerHTML = this.data.districts[district + 1].description
    this.age.innerHTML = `${this.data.districts[district + 1].age} ans`
    this.listInfos[0].innerHTML = `${
      this.data.districts[district + 1].revenus
    } €`
    this.listInfos[1].innerHTML = `${
      this.data.districts[district + 1].population
    } %`
    this.listInfos[2].innerHTML = this.data.districts[district + 1].politique
    this.listInfos[3].innerHTML = this.data.districts[
      district + 1
    ].professionnel
    this.listInfos[4].innerHTML = this.data.districts[district + 1].proprete
    this.listInfos[5].innerHTML = `${
      this.data.districts[district + 1].pollution
    } %`
    this.listInfos[6].innerHTML = `${
      this.data.districts[district + 1].sonore
    } decibels`
    this.listInfos[7].innerHTML = `${this.data.districts[district + 1].stup} ‰`
    this.listInfos[8].innerHTML = this.data.districts[district + 1].amour
    this.listInfos[9].innerHTML = this.data.districts[district + 1].alcoolisme
    this.listInfos[10].innerHTML = this.data.districts[district + 1].hashtag
    this.listInfos[11].innerHTML = `${
      this.data.districts[district + 1].happiness
    } points`
  }
}
