function onoff(element) {
  if (element.innerHTML === 'Gaming/on') {
    element.innerHTML = 'Gaming/off';
    element.classList.add('ap4');
  } else {
    element.innerHTML = 'Gaming/on';
    element.classList.remove('ap4');
  }
}
function onoff2(element) {
  if (element.innerHTML === 'Music/on') {
    element.innerHTML = 'Music/off';
    element.classList.add('ap4');
  } else {
    element.innerHTML = 'Music/on';
    element.classList.remove('ap4');
  }
}
function onoff3(element) {
  if (element.innerHTML === 'Tech/on') {
    element.innerHTML = 'Tech/off';
    element.classList.add('ap4');
  } else {
    element.innerHTML = 'Tech/on';
    element.classList.remove('ap4');
  }
}