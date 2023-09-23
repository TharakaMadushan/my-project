import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 text-center">
      <div className='bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl'>
        <div className='w-3/5 p-5'><p>sign in section</p></div>
        <div className='w-2/5  bg-blue-600 text-white rounded-tr-2xl rounded-br-2xl py-36 px-12'>
          <h2 className='text-3xl font-bold mb-2'>Hello,Friend!</h2>
          <div className="border-2 w-10 border-white inline-block mb-2"></div>
          <p>Fill up personal information and start journey with us.</p>
        </div>
      </div>
    </main>
  )
}
