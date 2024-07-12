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
          Filtro Smart POU
        </h1>
        <div className="my-4 flex w-full max-w-5xl justify-center rounded-xl bg-[#091834] px-4 py-4">
          <Image
            src="/Images/MMJ-Branding.png"
            alt="Logo de MMJ"
            width={256}
            height={108}
          />
        </div>
        <section className="flex flex-col items-center justify-center gap-4">
          <Image
            src="/Images/MMJ-plc-iot.png"
            alt="Foto del plc iot industrial de MMJ"
            width={764}
            height={764}
            className="max-w-80 border-2 border-[#091834] p-4 md:max-w-2xl lg:max-w-5xl"
          />
          <p className="max-w-3xl text-pretty text-center text-sm font-medium leading-5 tracking-wide text-neutral-500 md:text-base lg:text-lg lg:font-normal lg:leading-6">
            {/* Este es un PLC IoT diseñado y fabricado localmente por MMJ Smart
            Electronics SAC. Este cuenta con alimentación de 24V, 6 entradas
            digitales de 24V, 2 entradas de analógicas de 0 a 10V, 4 salidas
            tipo Rly,{' '}
            <span className="font-semibold text-[#091834]">
              conectividad Ethernet, RS485, WiFi y RF
            </span>
            . Tiene la capacidad de poder digitalizar tus datos en la nube
            mediante diversas comunicaciones alámbricas e inalámbricas y brindar
            un
            <span className="font-semibold text-[#091834]">
              monitoreo y control a tiempo real
            </span>
            . Hoy en día en un mundo cada vez más interconectados no solo los
            seres humanos tienen la necesidad de conectarse a internet sino
            también tus procesos, cosas, animales, activos, etc. */}
            Este es un filtro inteligente que monitorea la data a tiempo real para conocer en todo momento la calidad del agua que se está consumiendo. Este cuenta con un sistema de alertas que notifica al usuario cuando el filtro necesita mantenimiento o cuando la calidad del agua no es la adecuada. Además, cuenta con un sistema de monitoreo en tiempo real que permite al usuario conocer la calidad del agua en todo momento.
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
