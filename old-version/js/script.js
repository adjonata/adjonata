const h1width = () => {
   const x = $('.infos .title h1').width()
   $('.infos .title h4').width(x)
}

const languageTime = v => {
   const time = v * 130;
   const years = v == 1.5 ? '1 ANO E MEIO' : v+' ANOS'
   $('.languages .time li').html(years).animate({'width': time}, 1000)
}


$(document).ready(function()  {
   h1width()

   $('.languages .items li').on('click', function() {
      languageTime($(this).attr('time'))
   })

   $('.projetos article').hover(function(){
      $(this).children().animate({
         'height': '70px',
         'marginTop': '250px'
      }, 700)
   })
})

$(window).resize(() => h1width())