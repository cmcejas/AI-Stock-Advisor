const DividerWithCircles = () => {
  return (
    <div className="relative my-8 flex items-center justify-center px-10 py-10 opacity-25">
      {/* Line */}
      <div className="h-[3px] w-full bg-white shadow-2xl" />

      {/* Left Circle */}
      <div className="absolute left-7 h-3 w-3 rounded-full bg-white shadow-2xl" />

      {/* Right Circle */}
      <div className="absolute right-7 h-3 w-3 rounded-full bg-white shadow-2xl" />
    </div>
  )
}

export default DividerWithCircles
