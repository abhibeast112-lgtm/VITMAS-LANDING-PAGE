function App() {
  return (
    <div className="min-h-screen bg-[#12001f] text-white">

      {/* Navbar */}
      <nav className="flex items-center justify-between px-10 py-6">
        <div className="w-10 h-10 border border-white rounded-full"></div>

        <div className="flex gap-6 text-sm">
          <span>ABOUT</span>
          <span>PROJECTS</span>
          <span>EVENTS</span>
          <span>BLOGS</span>
          <span>TEAM</span>
          <span>FAQ</span>
        </div>

        <button className="bg-purple-600 px-5 py-2 rounded-md">
          CONTACT
        </button>
      </nav>

      {/* Hero */}
      <section className="relative flex flex-col items-center justify-center h-[80vh]">

        {/* Glow */}
        <div className="absolute w-[500px] h-[500px] bg-purple-700 rounded-full blur-[150px] opacity-40"></div>

        <h1 className="z-10 text-8xl font-black tracking-[12px]">
          VITMAS
        </h1>

        <p className="z-10 text-center uppercase tracking-[3px] mt-4">
          Bridging The Gap Between Mathematical Theory
          <br />
          And Technological Innovation
        </p>

      </section>

    </div>
  )
}

export default App