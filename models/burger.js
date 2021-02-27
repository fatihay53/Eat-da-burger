
function callBurgerlist(){
   const burgerGetData = {
      headers: { 'Content-Type': 'application/json' },
      method: 'get',

  }
    
  let result = await fetch('/api/eaten',burgerGetData).then(r => r.json())


  document.querySelector('#BurgerList').innerHTML = ''
  
   result.forEach(burger =>{
      document.querySelector('#BurgerList').innerHTML +=`

      <ul class="list-group mb-5">
				<li class="list-group-item">
				${burger.burger_name}

			</li>
		</ul>`
   })
   


}
callBurgerlist()