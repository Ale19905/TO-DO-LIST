export default async function post(task){
   try{
        const res = await window.fetch(`product.json`,{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            }, 
            body:JSON.stringify(task)
        })

        const data = await res.json()
        if(res.ok){
            console.log(data);
        }
        

   }catch(error){
        throw new Error(error)
   }
}