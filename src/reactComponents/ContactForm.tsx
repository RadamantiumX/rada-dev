import { useState } from "react"

export default function ContactForm ({name, message, send}) {
   

    const [messageResponse, setMessageResponse ] = useState('')
  

    async function handleSubmit (e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        const formData = new FormData(e.target as HTMLFormElement)
        const response = await fetch("/api/feedback",{
            method: "POST",
            body: formData
        })

        const data = await response.json()
        if (data.message){
            setMessageResponse(data.message)
        }
    }
    return (
    <form id="form" className="flex flex-col gap-y-2" onSubmit={handleSubmit}>

    <label htmlFor="name">{name}</label>
    <input className="bg-gray-600 p-1 rounded-md hover:bg-gray-500" name="name" type="text" placeholder="John Doe" required/>

    <label htmlFor="email">Email</label>
    <input className="bg-gray-600 p-1 rounded-md hover:bg-gray-500" name="email"  type="email" placeholder="mail@example.com" required/>

    
    <label htmlFor="message">{message}</label>
    <textarea className="bg-gray-600 p-1 rounded-md hover:bg-gray-500 resize-none focus:border-sky-500" name="message" id="message" autoComplete="off"  required></textarea>

    <button type="submit" className="flex flex-row justify-center gap-2 rounded-full cursor-pointer text-2xl bg-green-700 mt-11 p-1 px-5 hover:bg-yellow-500 hover:scale-110 transition">
    <i className="fa-regular fa-paper-plane"></i> {send}
    </button>

    {messageResponse.length > 0 &&<div className="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400" role="alert">
     <span className="font-medium">Success!</span> {messageResponse}
     </div>}
</form>
    )
}