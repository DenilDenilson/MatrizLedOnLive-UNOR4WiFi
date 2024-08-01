// import Image from 'next/image'

export default function NavBar () {
  return (
    <nav className="bg-black text-white">
      <div className="flex items-center justify-between p-4">
        <h1 className="text-xl font-semibold">
          Controlador Matriz led Arduino UNO R4 global
        </h1>
        {/* <Image src="/Images/MMJ-Branding.png" alt="Logo" width={128} height={40} /> */}
        <a className="text-xl font-semibold px-4  border-2 border-white rounded-lg transition hover:bg-slate-900 cursor-pointer" href="/api/signout">Salir</a>
      </div>
    </nav>
  )
}
