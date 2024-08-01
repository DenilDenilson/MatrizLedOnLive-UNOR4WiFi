/* eslint-disable @typescript-eslint/no-misused-promises */
'use client'

import { useState } from 'react'
import { signInServer } from '../server/authsFunctions'
import { redirect } from 'next/navigation'
import Image from 'next/image'

export default function Page() {
  const [error, setError] = useState(false)

  return (
    <main className="grid min-h-screen flex-col place-content-center p-24">
      <Image
        src="/Images/bg-desktop.jpg"
        alt="Logo"
        width={2048}
        height={2048}
        className="absolute left-0 top-0 z-[-1] h-screen w-screen object-cover"
      />
      <form
        className="relative flex flex-col gap-2 rounded-3xl bg-slate-700  px-12 pb-12 pt-16 shadow-lg backdrop-blur-2xl"
        action={async (formData) => {
          const credentials = Object.fromEntries(formData)
          const errorState = await signInServer(credentials)
          console.log('* Error: ', errorState.error)
          if (errorState.error === 'CredentialsSignin') {
            // Auth js lanza este error al no encontrar el usuario
            setError(true)
          } else if (errorState.error === 'Error') {
            // Auth js lanza este error al encontrar el usuario
            redirect('/dashboard')
          } else {
            // Caso para errores desconocidos
            console.log('* Error al iniciar sesión: ', errorState.error)
            setError(true)
          }
        }}
      >
        <div className="absolute -top-20 left-0 right-0 mx-auto grid w-min place-content-center rounded-full bg-slate-700 p-4 backdrop-blur-2xl ">
          <div className="grid h-32 w-32 place-content-center rounded-full bg-white">
            <Image
              src="/Images/CapsulaBranding-C.png"
              alt="Logo"
              width={96}
              height={48}
              className='rounded-full'
            />
          </div>
        </div>
        <label className="font-semibold text-neutral-50" htmlFor="username">
          Username
        </label>
        <input
          type="text"
          name="username"
          className="min-w-80 rounded-full border-b-2 border-neutral-50 bg-transparent text-neutral-50 focus:border-neutral-50 focus:outline-none focus:ring-0 focus:ring-neutral-50"
          id="username"
        />
        <label className="font-semibold text-neutral-50" htmlFor="password">
          Password
        </label>
        <input
          type="password"
          name="password"
          className="min-w-80 rounded-full border-b-2 border-neutral-50 bg-transparent text-neutral-50 focus:border-neutral-50 focus:outline-none focus:ring-0 focus:ring-neutral-50"
          id="password"
        />
        <button
          className="mt-4 w-full rounded-full bg-blue-500 py-2 font-semibold text-neutral-50"
          type="submit"
        >
          Inicia sesión
        </button>
        {error && (
          <p className="font-semibold text-red-500">Error al iniciar sesión</p>
        )}
      </form>
    </main>
  )
}
