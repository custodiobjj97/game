export default function scrollTop(){
   const top=document.querySelector('.btn-top')


   
   function scrollTop(){
    if(document.body.scrollTo > 20 && document.documentElement.scrollTop > 20){
        top.style.display='block'
    }else{
      top.style.display='block'
    }
   }
   window.addEventListener('scroll', scrollTop)

   function topScroll(){
      window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
     
   }

   top.addEventListener('click', topScroll)
}