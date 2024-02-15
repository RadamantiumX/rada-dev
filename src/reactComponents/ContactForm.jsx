

export default function ContactForm ({name, message, send}) {
    return (
        <form className="flex flex-col gap-y-2" action="">
    <label for="email">Email</label>
    <input className="bg-gray-600 p-1 rounded-md hover:bg-gray-500" name="email" type="email" placeholder="mail@example.com"/>
    <label for="name">{name}</label>
    <input className="bg-gray-600 p-1 rounded-md hover:bg-gray-500" name="name" type="text" placeholder="John Doe"/>
    <label for="message">{message}</label>
    <textarea className="bg-gray-600 p-1 rounded-md hover:bg-gray-500 resize-none focus:border-sky-500" name="message" id="" cols="30" rows="5"></textarea>
    <button className="flex flex-row justify-center gap-2 rounded-full cursor-pointer text-2xl bg-green-700 mt-11 p-1 px-5 hover:bg-yellow-500 hover:scale-110 transition">
    <i class="fa-regular fa-paper-plane"></i> {send}
    </button>
</form>
    )
}