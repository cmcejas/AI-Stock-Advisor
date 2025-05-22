import Image from 'next/image'
import DividerWithCircles from '../app/components/DividerWithCircles'

export default function Home() {
  return (
    <div className="flex min-h-screen min-w-screen items-center justify-center">
      <div
        id="rounded-window"
        className="h-[90vh] w-[90vw] rounded-4xl bg-[#11492D] p-6 shadow-2xl"
      >
        <DividerWithCircles />

        {/* New horizontal layout container */}
        <div className="flex h-full">
          {/* Left side */}
          <div
            id="left-side"
            className="flex w-1/2 items-start justify-center px-10 py-10"
          >
            <div className="flex w-3/4 flex-col items-center">
              <h1 className="text-8xl font-extrabold text-[#FFFFE4] text-shadow-black">
                AI Stock Analyzer
              </h1>
              <p className="pt-10 text-left text-3xl text-white">
                Using our industry researched AI, GOLD LEAF can help you make
                <span className="text-[#DCBB57]"> faster</span> decisions and
                more <span className="text-[#DCBB57]">informed</span> decision.
                For a small price, you can set your future.
              </p>
            </div>
          </div>

          {/* Right side */}
          <div
            id="right-side"
            className="flex w-1/2 items-start justify-center px-10 py-10"
          >
            <div className="flex items-center gap-6 rounded-lg bg-[#FFFFE4] shadow-lg">
              <p className="max-w-md text-xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                tincidunt, sapien nec congue porta, nisl risus aliquam odio, non
                scelerisque lacus justo at nulla.
              </p>
            </div>
            <div className="flex items-center gap-6 rounded-lg bg-[#FFFFE4] shadow-lg">
              <p className="max-w-md text-xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                tincidunt, sapien nec congue porta, nisl risus aliquam odio, non
                scelerisque lacus justo at nulla.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
