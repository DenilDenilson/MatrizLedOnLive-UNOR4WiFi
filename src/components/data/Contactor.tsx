/* eslint-disable @typescript-eslint/no-floating-promises */
'use client'

import { type RealtimeChannel } from 'ably'
import { useEffect, useState } from 'react'

const Elementos = Array.from({ length: 96 }, (_, i) => ({
  id: i,
  className: 'w-8 h-8 bg-slate-900'
}))

export default function Contactor({
  channel,
  isChecked,
}: {
  channel: RealtimeChannel
  isChecked: string
}) {
  const [elementos, setElementos] = useState(Elementos)

  useEffect(() => {
    console.log(isChecked)
    const indice = parseInt(isChecked, 10)
    if (!isNaN(indice) && indice >= 0 && indice < elementos.length) {
      // Aquí podrías cambiar la clase si es necesario, o dejarlo para el toggle
    }
  }, [isChecked])

  const handleInputChange = (id: number) => {
    channel.publish({ data: id.toString() })
  }

  const handleClick = (id: number) => {
    const nuevoEstado = elementos.map(elemento =>
      elemento.id === id
        ? { ...elemento, className: elemento.className === 'w-8 h-8 bg-slate-900' ? 'w-8 h-8 bg-red-500' : 'w-8 h-8 bg-slate-900' }
        : elemento
    )
    setElementos(nuevoEstado)
    handleInputChange(id)
  }

  return (
    <section className='grid grid-rows-8 grid-cols-12 gap-2'>
      {
        elementos.map((elemento) => (
          <div
            key={elemento.id}
            className={elemento.className}
            onClick={() => { handleClick(elemento.id) }}
          />
        ))
      }
    </section>
  )
}
