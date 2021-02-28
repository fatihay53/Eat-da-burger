


async function showEaten(){
    await fetch (`/api/eaten`).then(res => res.json())
    
}
