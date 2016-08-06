document.addEventListener('keydown', toggleNotation)

var settings = {
  fontSize: '44',
  alpha: '0.75',
  lineHeight: '88',
  lBottom: '29',
  lRight: '50',
  letterSpacing: '80',
  bBottom: '77',
  bRight: '11'
}

function toggleNotation(keyEvent) {
  if (keyEvent.key != 'n'){ return }
  if (document.getElementById('l-notation')){
    if (localStorage.getItem('notation_on') === 'true'){
      document.getElementById('l-notation').style.display="none"
      document.getElementById('b-notation').style.display="none"
      localStorage.setItem('notation_on', false)
    } else {
      document.getElementById('l-notation').style.display="initial"
      document.getElementById('b-notation').style.display="initial"
      localStorage.setItem('notation_on', true)
    }
    return
  }
  buildLeftNotation()
  buildBottomNotation()
  localStorage.setItem('notation_on', true)
}

function buildLeftNotation() {
  var leftRegion = document.getElementById('app-game-left-region')
  var lNotation = document.createElement("div")
  lNotation.setAttribute('id','l-notation')
  lNotation.appendChild(document.createTextNode("abcde"))

  lNotation.style.fontSize=getStyle('fontSize')+"px"
  lNotation.style.width="1px"
  lNotation.style.wordBreak="break-word"
  lNotation.style.lineHeight=getStyle('lineHeight')+"px"
  lNotation.style.color="rgba(255, 255, 255, " + getStyle('alpha') + ")"
  lNotation.style.position="absolute"
  lNotation.style.bottom=getStyle('lBottom')+"%"
  lNotation.style.right=getStyle('lRight')+"%"
  lNotation.style.transform="rotateZ(7deg)"
  lNotation.style.textShadow="black 0px 0px 12px"

  leftRegion.appendChild(lNotation)
}

function buildBottomNotation() {
  var bottomRegion = document.getElementById('app-game-bottom-region')
  var bNotation = document.createElement("div")
  bNotation.setAttribute('id','b-notation')
  bNotation.appendChild(document.createTextNode("123456789"))

  bNotation.style.fontSize=getStyle('fontSize')+"px"
  bNotation.style.letterSpacing=getStyle('letterSpacing')+"px"
  bNotation.style.color="rgba(255, 255, 255, "+getStyle('alpha')+")"
  bNotation.style.position="absolute"
  bNotation.style.bottom=getStyle('bBottom')+"%"
  bNotation.style.right=getStyle('bRight')+"%"
  bNotation.style.textShadow="black 0px 0px 12px"

  bottomRegion.appendChild(bNotation)
}

function getStyle(style) {
  notationSettings = localStorage.getItem('notation_settings')
  if (notationSettings){
    return JSON.parse(notationSettings)[style]
  } else {
    return settings[style]
  }
}

function updateNotation(notationSettings) {
  settings = notationSettings
  localStorage.setItem('notation_settings', JSON.stringify(notationSettings))
  lNotation = document.getElementById('l-notation')
  if (lNotation){
    lNotation.style.fontSize=getStyle('fontSize')+"px"
    lNotation.style.width="1px"
    lNotation.style.wordBreak="break-word"
    lNotation.style.lineHeight=getStyle('lineHeight')+"px"
    lNotation.style.color="rgba(255, 255, 255, " + getStyle('alpha') + ")"
    lNotation.style.position="absolute"
    lNotation.style.bottom=getStyle('lBottom')+"%"
    lNotation.style.right=getStyle('lRight')+"%"
    lNotation.style.transform="rotateZ(7deg)"
    lNotation.style.textShadow="black 0px 0px 12px"
  }

  bNotation = document.getElementById('b-notation')
  if (bNotation){
    bNotation.style.fontSize=getStyle('fontSize')+"px"
    bNotation.style.letterSpacing=getStyle('letterSpacing')+"px"
    bNotation.style.color="rgba(255, 255, 255, "+getStyle('alpha')+")"
    bNotation.style.position="absolute"
    bNotation.style.bottom=getStyle('bBottom')+"%"
    bNotation.style.right=getStyle('bRight')+"%"
    bNotation.style.textShadow="black 0px 0px 12px"
  }
}
