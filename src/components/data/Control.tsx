'use client'

import { decodeMessage } from '@/utils/decodeMessage'
import { useChannel } from 'ably/react'
import dynamic from 'next/dynamic'
import { useState } from 'react'

// const Motor = dynamic(async () => await import('./Motor'), { ssr: false })
const Contactor = dynamic(async () => await import('./Contactor'), {
  ssr: false,
})

export default function Control() {
  const [isChecked, setIsChecked] = useState('')

  const { channel } = useChannel('mmj-plc/btns', (message) => {
    message = decodeMessage(message)
    setIsChecked(message.data as string)
    // if (message.data === 'contactor=on') {
    //   setIsChecked(true)
    // }
    // if (message.data === 'contactor=off') {
    //   setIsChecked(false)
    // }
  })

  return (
    <section className="flex h-full w-full flex-col items-center justify-center py-4 xl:flex-row xl:py-0 ">
      <Contactor channel={channel} isChecked={isChecked} />
      {/* <Motor channel={channel} /> */}
    </section>
  )
}
