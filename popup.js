function updateStyle(){
  getNewStyles()
  var notation = {code: "updateNotation("+localStorage.getItem('notation_settings')+"); 1;"}
  chrome.tabs.executeScript(undefined, notation, getNewStyles)
}

function reset(){
  localStorage.removeItem('notation_settings')
}

function getNewStyles(){
  var settings = {
    lineHeight: document.getElementById('lineHeight').value,
    lBottom: document.getElementById('lBottom').value,
    lRight: document.getElementById('lRight').value,
    letterSpacing: document.getElementById('letterSpacing').value,
    bBottom: document.getElementById('bBottom').value,
    bRight: document.getElementById('bRight').value,
    fontSize: document.getElementById('fontSize').value,
    alpha: document.getElementById('alpha').value
  }
  localStorage.setItem('notation_settings', JSON.stringify(settings))
}

function setValues(){
  var settings = JSON.parse(localStorage.getItem('notation_settings'))
  if (!settings){ return; }
  Object.keys(settings).forEach(function(setting){
    document.getElementById(setting).value = settings[setting]
  })
}

document.addEventListener('DOMContentLoaded', function(){
  setValues()
  getNewStyles()
  var inputs = document.getElementsByTagName('input')
  for (var i=0; i < inputs.length; i++) {
    inputs[i].oninput = updateStyle
  }
  document.getElementById('reset').onclick = reset
});
