const swiper = new Swiper('.swiper', {
    autoplay:{
        delay: 2000,
        disableOnInteraction: false
    },
    // Optional parameters
    direction: 'vertical',
    loop: true,
  
   
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
   
  });

  //for scroll animation

  const cards = document.querySelectorAll("div")

  const observer = new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
      entry.target.classList.toggle("show", entry.isIntersecting)
      if(entry.isIntersecting) observer.unobserve(entry.target)
    })
  },
  {
    threshold: .8
  })

  cards.forEach(card=>{
    observer.observe(card)
  })