export async function getServer(url) {
   const response = await fetch(url)
   if(response.ok){
      const result = await response.json()
      return result
   }
   throw Error("SXAL BANA !!!")
}

