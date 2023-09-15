

	


	const img =document.querySelectorAll("[data-app]")

	
	function alls() {

		img.forEach (e=>{
				e.classList.add("d-blocks")
				e.classList.remove("d-nones")
		})
	
	}






	function apps() {

		img.forEach (e=>{
			
			if (e.dataset.app=="web"||e.dataset.app=="card") {
				
				e.classList.add("d-nones")
				e.classList.remove("d-blocks")

				console.log("if")
			}
		
			else{
				e.classList.remove("d-nones")
				e.classList.add("d-blocks")
				console.log("else")
			}

		})
	}


	function cards() {
		
		img.forEach (e=>{
			
			if (e.dataset.app=="web"||e.dataset.app=="app") {
				
				e.classList.add("d-nones")
				e.classList.remove("d-blocks")
			}
		
			else{
				e.classList.remove("d-nones")
				e.classList.add("d-blocks")
			}

		})		

	}



	function webs() {
		
		img.forEach (e=>{
			
			if (e.dataset.app=="card"||e.dataset.app=="app") {
				
				e.classList.add("d-nones")
				e.classList.remove("d-blocks")
			}
		
			else{
				e.classList.remove("d-nones")
				e.classList.add("d-blocks")
			}

		})		

	}


