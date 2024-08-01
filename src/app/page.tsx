import { auth } from '@/auth'
import Image from 'next/image'
import Link from 'next/link'
import { redirect } from 'next/navigation'

export default async function Home() {
  const session = await auth()
  if (session === null) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-between bg-neutral-100 p-8 px-4">
        <h1 className="text-pretty text-center text-4xl font-bold text-[#091834]">
          Matriz led Arduino UNO R4 global
        </h1>
        <div className="my-4 flex w-full max-w-5xl justify-center rounded-xl bg-white border-2 border-black px-4 py-4">
          <Image
            src="/Images/CapsulaBranding.jpg"
            alt="Logo de MMJ"
            width={256}
            height={108}
          />
        </div>
        <section className="flex flex-col items-center justify-center gap-4">
          <Image
            src="/Images/ArduinoUNOR4.webp"
            alt="Foto del plc iot industrial de MMJ"
            width={764}
            height={764}
            className="max-w-80 border-2 border-[#091834] p-4 md:max-w-2xl lg:max-w-5xl"
          />
          <p className="max-w-3xl text-pretty text-center text-sm font-medium leading-5 tracking-wide text-neutral-500 md:text-base lg:text-lg lg:font-normal lg:leading-6">
            Este es una web que busca sincronizar cualquier tarjeta de Arduino UNO R4 con una matriz led de 8x8, para poder mostrar edición en tiempo real.
          </p>
        </section>

        <div className="mt-4 flex flex-col items-center gap-2">
          <p className="text-center text-xs font-semibold text-[#091834] lg:text-base">
            Para acceder al dashboard, inicia sesión
          </p>
          <Link
            className="cursor-pointer border-2 border-black px-8 py-2 hover:bg-slate-100 md:mb-4"
            href="/api/auth/signin"
          >
            Iniciar sesión
          </Link>
        </div>
      </main>
    )
  } else {
    return redirect('/dashboard')
  }
}
