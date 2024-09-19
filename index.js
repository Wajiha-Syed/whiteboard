function updateWhiteboard() {
    const inputField = document.getElementById("inputField");
    const whiteboard = document.getElementById("whiteboard");
    whiteboard.textContent = inputField.value;
  }
  function changeFontSize(size) {
  const whiteboard = document.getElementById("whiteboard");
  whiteboard.style.fontSize = size + 'px';
}
function allowNumericInput(event) {

  const validCh = "0123456789+-*/.";
  if (!validCh.includes(event.key)) {
    event.preventDefault();
  }
}
function calculateExpression() {
  const inputField = document.getElementById("inputField");
  const whiteboard = document.getElementById("whiteboard");
  try {
    const result = eval(inputField.value);
    whiteboard.textContent = result;
  } 
  catch (error) 
  {
    whiteboard.textContent = "Error!";
  }
}

  