import Footer from '@/components/Footer'
import NavBar from '@/components/NavBar'
import dynamic from 'next/dynamic'

const DashboardAbly = dynamic(
  async () => await import('@/components/dashboardAbly'),
  { ssr: false },
)
// const VoltageProvider = dynamic(
//   async () => await import('@/components/VoltageProvider'),
//   { ssr: false },
// )
// const Leds = dynamic(async () => await import('@/components/data/Leds'), {
//   ssr: false,
// })
const Control = dynamic(async () => await import('@/components/data/Control'), {
  ssr: false,
})

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-200">
      <NavBar />
      <DashboardAbly>
        <section className='bg-white grid place-content-center min-h-screen'>
            <Control />
        </section>
        {/* <section className="grid grid-cols-1 grid-rows-1 gap-2 p-4 lg:grid-cols-1 lg:grid-rows-1"> */}
          {/* <VoltageProvider /> */}
          {/* <section className="flex flex-col items-center gap-1 lg:flex-row"> */}
            {/* <Leds /> */}
          {/* </section> */}
        {/* </section> */}
        {/* <MessageReceived /> */}
      </DashboardAbly>
      <Footer />
    </main>
  )
}
