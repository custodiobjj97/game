export default class ScrollAnimation{
  constructor(element){
    this.element=document.querySelectorAll(element)
    this.activeVisible='visible'
  }

  eventScroll(){
    for(let i =0 ;i< this.element.length; i++){
      const top = this.element[i].getBoundingClientRect().top
      const haftHeight = window.innerHeight * 0.5
      const isVisible =(top - haftHeight) < 0
      if(isVisible){
        this.element[i].classList.add(this.activeVisible)
      }
    }
  }

  addEvent(){
    window.addEventListener('scroll', this.eventScroll)
  }

  bindEvent(){
    this.eventScroll = this.eventScroll.bind(this)
  }

  init(){
    if(this.element){
      this.bindEvent()
      this.addEvent()
      this.eventScroll()
    }
    return this
  }
}