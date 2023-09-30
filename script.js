function volume_sphere(e) {
    //Write your code here
	e.preventDefault()
	
    const r = parseFloat(document.getElementById('radius').value);

    if(isNaN(r)){
        console.log("Please enter valid number");
        return;
    }

    const volume = Math.floor(parseFloat(4 * Math.PI * Math.pow(r, 3))/3)

    const result = document.getElementById('volume');

    result.value = volume;
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
