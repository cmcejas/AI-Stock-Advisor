import Image from 'next/image'

export default function Home() {
  return (
    <div className="flex min-h-screen min-w-screen items-center justify-center">
      <div
        id="rounded-window"
        className="h-[90vh] w-[90vw] rounded-4xl bg-[#11492D] shadow-2xl"
      >
        <div
          id="left-side"
          className="flex w-1/2 items-center justify-center px-10 py-10"
        >
          <h1 className="text-8xl font-extrabold text-[#FFFFE4] text-shadow-black">
            AI Stock Analyzer
          </h1>
        </div>
      </div>
    </div>
  )
}
