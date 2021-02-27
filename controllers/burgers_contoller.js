


async function showEaten(){
    await fetch (`/api/eaten`).then(res => res.json())
    
}


// async function updateBurger(id){

//      await fetch(`/api/${id}`).then(res => res.json())

// }