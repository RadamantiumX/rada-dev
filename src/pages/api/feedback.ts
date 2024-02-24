import type { APIRoute } from "astro"

export const POST: APIRoute = async ({ request }) => {
   const data = await request.formData();
   const name = data.get("name")?.toString();
   const email = data.get("email")?.toString();
   const message = data.get("message")?.toString();

   if (!name || !email || !message) {
    return new Response(
        JSON.stringify({ message: "Please fill in all fields" }),
        { status: 400 }
    )
   }
 try{
   const res = await fetch('https://minimal-server-six.vercel.app/api/messages',{
      method: "POST",
      headers: {
         "Content-Type": "application/json"
      },
      body: JSON.stringify({
         name,
         email,
         message
      }),
      mode: "no-cors"
   })
 const resData = await res.json()
 console.log(resData.message)
 return new Response(JSON.stringify({ message: resData.message }), {
    status: 200
 })
} catch (err){
    console.log(err.message)
    return new Response(JSON.stringify({ message: err.message }), {
        status: 500
    })
}
   
}