const container = document.querySelector('#container');
const sBubble = document.querySelector('#small-bubble');
container.addEventListener('mousemove', function (event) {
  const random_hex_color_code = () => {
    let n = (Math.random() * 0xfffff * 1000000).toString(16);
    return '#' + n.slice(0, 6);
  };
  const randNum = Math.floor(Math.random() * 150), randClr = '#'+Math.floor(Math.random()*16777215).toString(16);
  sBubble.style.opacity = 1;
sBubble.style.top = `${event.pageY}px`;
sBubble.style.right = `${event.pageX}px`;
sBubble.style.left = `${event.pageX}px`;
 const bubbleDiv = document.createElement('div');
 bubbleDiv.id = 'exist';
 bubbleDiv.style.opacity = 1;
 bubbleDiv.style.top = `${event.pageY}px`;
 bubbleDiv.style.right = `${event.pageX}px`;
 bubbleDiv.style.left = `${event.pageX}px`;
 bubbleDiv.style.width = `${randNum}px`;
 bubbleDiv.style.height = `${randNum}px`;
 bubbleDiv.style.border = `2px solid ${randClr}`;
   bubbleDiv.style.animationName = 'move';   
 setTimeout(() => {
   bubbleDiv.style.opacity = 0
 }, 0);
 container.appendChild(bubbleDiv);
})