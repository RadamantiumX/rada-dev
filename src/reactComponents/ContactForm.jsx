import { useRef, useState } from "react"

export default function ContactForm ({name, message, send}) {
    const [messageResponse, setMessageResponse ] = useState('')
    const emailRef = useRef(null)
    const nameRef = useRef(null)
    const messageRef = useRef(null)

    const handleSubmit = (event) => {
        event.preventDefault()
        const payload = {
            email: emailRef.current.value,
            name: nameRef.current.value,
            message: messageRef.current.value
        }
        fetch('http://localhost:3000/api/messages', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        })
        .then(response => response.json())
        .then((result) => {
            setMessageResponse(result.message)
        })
         
    }
    return (
    <form className="flex flex-col gap-y-2" onSubmit={handleSubmit}>

     {messageResponse.length > 0 &&<div className="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400" role="alert">
     <span className="font-medium">Success!</span> {messageResponse}
     </div>}
   
    <label for="email">Email</label>
    <input className="bg-gray-600 p-1 rounded-md hover:bg-gray-500" name="email" ref={emailRef} type="email" placeholder="mail@example.com" required/>
    <label for="name">{name}</label>
    <input className="bg-gray-600 p-1 rounded-md hover:bg-gray-500" name="name" ref={nameRef} type="text" placeholder="John Doe" required/>
    <label for="message">{message}</label>
    <textarea className="bg-gray-600 p-1 rounded-md hover:bg-gray-500 resize-none focus:border-sky-500" name="message" ref={messageRef} id="" cols="30" rows="5" required></textarea>
    <button type="submit" className="flex flex-row justify-center gap-2 rounded-full cursor-pointer text-2xl bg-green-700 mt-11 p-1 px-5 hover:bg-yellow-500 hover:scale-110 transition">
    <i className="fa-regular fa-paper-plane"></i> {send}
    </button>
</form>
    )
}