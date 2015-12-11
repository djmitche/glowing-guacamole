var config = {
  inputId:  "input",
  outputId: "output"
};

function basicEval(text) {
  return text;
};

function processInput() {
  var result = basicEval(document.getElementById(config.inputId).value);
  var outputElement = document.getElementById(config.outputId);
  outputElement.innerHTML = result;
};

/* */


