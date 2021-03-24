function newElem(type, classes) {
  const elem = document.createElement(type)
  if(classes) {
    elem.classList.add(classes)
  }
  
  return elem
}

function moreAppends(feather, childrens = []) {
  for(children of childrens) {
    feather.appendChild(children)
  }

  return feather
}


function adicionarProjeto(projeto) {  
  const cartao = newElem('div', 'cartao')
  cartao.addEventListener('click', () => {
    window.open(projeto.link, '_blank')
  })

  const img = newElem('img', projeto.radius ? 'circle-radius-t3' : '')
  img.src = projeto.externalImg ? projeto.img : `img/projetos/${projeto.img}`
  
  const title = newElem('h3')
  title.textContent = projeto.nome

  const link = newElem('a', 'circle-radius-t1')
  link.href = projeto.link
  link.innerHTML = "<i class='material-icons'>navigate_next</i>"

  
  const full = moreAppends(cartao, [img, title, link])
  document.querySelector('.lista_de_cartoes').appendChild(full)
}

function adicionarDestaque(projeto) {
  const li = newElem('li')
  li.style.backgroundImage = projeto.externalScreenshot ? `url(${projeto.screenshot})` : `url(img/screenshots/${projeto.screenshot})`
  
  const info = newElem('div', 'info')
  info.textContent = projeto.nome

  li.appendChild(info)
  if(!projeto.dev) {
    li.addEventListener('click', () => {
      window.open(projeto.link, '_blank')
    })
  }

  const list = document.querySelector('.projetos-destaque .list')
  list.appendChild(li)
}

function adicionarRede(rede) {
  const redesList = document.querySelector('.redes')

  const li = newElem('li')
  const a = newElem('a')
  a.href = rede.link
  a.target = "_blank"

  const icon = newElem('i', rede.iconType)
  icon.classList.add(rede.icon)
  a.appendChild(icon)
  li.appendChild(a)

  redesList.appendChild(li)
}

function exibir(data, type) {
  if(type == 'projetos') {
    for(projeto of data) {
      if(projeto.recente) {
        adicionarProjeto(projeto)
      }
      if(projeto.destaque) {
        adicionarDestaque(projeto)
      }
    }
  }
  else if(type == 'redes') {
    data.forEach(rede => {
      adicionarRede(rede)
    })   
  }
}


function getInfos() {  
  const req = new XMLHttpRequest()

  req.open('GET', 'js/infos.json')
  req.responseType = 'json'
  req.send()
  
  req.onload = function() {
    for(res in req.response) {
      exibir(req.response[res], res)
    }
  }
}
getInfos()



function checkMobile() {
  const mobile = window.matchMedia("(max-width: 800px)")

  if (mobile.matches) {    
    const text = document.querySelector('.apresentacao h2')
    const alteredText = text.textContent.replace('/', '&')

    text.textContent = alteredText

    // Sobre Line
    // const sobreH = document.querySelector('.sobre').clientHeight
    // const sobreLine = document.querySelector('.sobre .line')
    // sobreLine.style.marginTop = `${sobreH/2}px`
  }
}

checkMobile()