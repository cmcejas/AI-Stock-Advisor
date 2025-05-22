import DividerWithCircles from '../app/components/DividerWithCircles'
import Header from '../app/components/Header'

export default function Home() {
  return (
    <div className="fixed top-0 left-0 flex h-screen w-screen items-center justify-center overflow-hidden">
      <div
        id="rounded-window"
        className="h-[90vh] w-[90vw] rounded-4xl bg-[#11492D] p-6 py-10 shadow-2xl"
      >
        <Header />
        <DividerWithCircles />

        <div className="flex h-full">
          {/* Left Side */}
          <div className="flex w-1/2 items-start justify-center px-10">
            <div className="flex w-3/4 flex-col items-center">
              <h1 className="text-8xl font-extrabold text-[#FFFFE4] text-shadow-black">
                AI Stock Analyzer
              </h1>
              <p className="pt-10 text-left text-3xl text-white">
                Using our industry-researched AI, GOLD LEAF can help you make
                <span className="text-[#DCBB57]"> faster</span> and more
                <span className="text-[#DCBB57]"> informed</span> decisions. For
                a small price, you can set your future.
              </p>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex w-1/2 items-start gap-8 pt-4">
            {['FREE TIER', 'GOLD TIER'].map((tier, index) => (
              <div
                key={tier}
                className={`rounded-2xl bg-[#FFFFE4] shadow-${index === 0 ? 'lg' : '2xl'} transition-transform duration-300 hover:-translate-y-2`}
              >
                <h1 className="pt-4 text-center text-2xl font-semibold">
                  {tier}
                </h1>
                <p className="max-w-md p-4 text-xl">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                  tincidunt, sapien nec congue porta, nisl risus aliquam odio,
                  non scelerisque lacus justo at nulla.
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
