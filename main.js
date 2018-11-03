let current = 1, pos = 0;
let oddArray = [];

document.querySelectorAll(".btn").forEach((el)=>{
	el.addEventListener("click", (e)=>{
		switch(true){
			
			// CHANGE BACKGROUND
			case e.target.classList.contains("background"):
				document.querySelector("body").style.background = '#'+Math.random().toString(16).slice(-6);
				break;
				
			// CHANGE VALUE FROM BUTTON TO ODD NUMBERS
			case e.target.classList.contains("number"):
				
				for (let i = 0; i < 999; i++){
					if(getOdd(i)){
						oddArray.push(i);
					}
				}				
				pos = pos + 1;
				e.target.childNodes[0].nodeValue = oddArray[pos];		
				break;
				
			// CHANGE TITLE
			case e.target.classList.contains("titleText"):	
						
				
				setInterval(()=>{
					let title = document.querySelector(".title");
					let title_text = title.innerHTML;
					let newTitle = title_text.slice(1) + title_text.slice(0,1);
					title.innerHTML = newTitle;
				}, 500);
				
				break;
				
			// SAY HI
			case e.target.classList.contains("sayHi"):
				document.querySelector(".title").innerHTML = "Hello World";
				break;
			
			// FORM LOGIC
			case e.target.classList.contains("formButton"):
				let name = document.querySelector(".name").value;
				let age = document.querySelector(".age").value;
				let color = document.querySelector(".color").value;
				
				if(name == "" & age == ""){
					return false;
				}
				
				alert("Hola mi nombre es " +name + " y tengo " + age + " años de edad, y me gusta el color: "+color);
				break;
			
			// CLEAR FORM
			case e.target.classList.contains("clear"):
				document.querySelector(".name").value = "";
				document.querySelector(".age").value = "";
				document.querySelector(".color").value = "";
				
				break;
		}
	})
});


function getOdd(n) {
    if (n < 2) return false;

    var q = Math.floor(Math.sqrt(n));

    for (var i = 2; i <= q; i++) {
        if (n % i === 0) {
            return false;
        }
    }

    return true;
}