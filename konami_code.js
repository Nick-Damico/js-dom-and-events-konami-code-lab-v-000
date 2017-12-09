const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  // Write your JavaScript code inside the init() function
  const elBody = document.getElementsByTagName('body')[0];
  const userArr = [];
  let i = 0;

  function onKeyPress(e) {
  	e.stopPropagation()
  	let keyValue = parseInt(e.detail || e.which);
console.log(keyValue);
  	if (keyValue === code[i]){  		
  		userArr.push(keyValue);
  		
  		i++;
  	} else {  		
  		userArr.length = 0;
  		i = 0;
  	}
  	
  	if (userArr.length === code.length) {  		
  		if (JSON.stringify(userArr)==JSON.stringify(code)){
  			alert('Great Job!')
  		}
  	}
  }

  elBody.addEventListener('keydown', onKeyPress);

}