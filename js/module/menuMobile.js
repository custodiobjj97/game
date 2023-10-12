export default class MenuMobile{
  constructor(menu,toggle,icon){
    this.menu=document.querySelector(menu)
    this.toggle=document.querySelector(toggle)
    this.icon=document.querySelector(icon)
    this.activeClass='open'
  }

  activeToggle(event){
    if(event.type === 'touchstart'){
      event.preventDefault()
    }
    this.menu.classList.toggle(this.activeClass)
    this.icon.classList.toggle(this.activeClass)
  }

  addEventMeneu(){
    this.toggle.addEventListener('click', this.activeToggle)
    this.toggle.addEventListener('touchstart', this.activeToggle)
  }

  bindEvent(){
    this.activeToggle = this.activeToggle.bind(this)
  }

  start(){
    if(this.menu){
      this.bindEvent()
      this.addEventMeneu()
    }
    return this
 
  }
}