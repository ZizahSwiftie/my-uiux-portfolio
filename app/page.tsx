import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section className="text-white">
      {/* Header Tengah */}
      <div className="text-center mb-16">
        <h2 className="text-purple-400 text-3xl font-bold mb-2">About Me</h2>
        <p className="text-sm text-neutral-400">✨ Transforming ideas into digital experiences ✨</p>
      </div>

      {/* Konten Utama: Teks & Foto */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16">
        <div>
          <h3 className="text-xl mb-2">Hello, I'm</h3>
          <h1 className="text-4xl font-bold mb-6 tracking-tighter">
            Nur Azizah Ulinnuha
          </h1>
          <p className="text-neutral-400 leading-relaxed mb-8">
            Seorang desainer UI/UX yang berfokus pada menciptakan pengalaman digital
            yang menarik dan fungsional. Saya senang memecahkan masalah kompleks
            melalui desain yang berpusat pada manusia.
          </p>

          <div className="flex gap-4">
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg transition-all flex items-center gap-2">
              <span>📄</span> Download CV
            </button>
            <button className="border border-neutral-700 hover:bg-neutral-800 px-6 py-2 rounded-lg transition-all">
              View Projects
            </button>
          </div>
        </div>

        {/* Foto Profil Bulat */}
        <div className="flex justify-center md:justify-end">
          <div className="relative w-64 h-64 rounded-full border-4 border-purple-500/30 p-2">
            <div className="w-full h-full rounded-full bg-neutral-800 overflow-hidden shadow-[0_0_50px_rgba(168,85,247,0.2)]">
              https://i.postimg.cc/YC9n0Rr4/profile.jpg
              <img
                src="https://i.postimg.cc/YC9n0Rr4/profile.jpg"
                alt="Nur Azizah Ulinnuha"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Baris Statistik */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-20">
        <div className="bg-neutral-900/50 border border-neutral-800 p-6 rounded-2xl hover:border-purple-500/50 transition-colors">
          <div className="text-3xl font-bold mb-1">05</div>
          <div className="text-sm text-neutral-500">TOTAL PROJECTS</div>
        </div>
        <div className="bg-neutral-900/50 border border-neutral-800 p-6 rounded-2xl hover:border-purple-500/50 transition-colors">
          <div className="text-3xl font-bold mb-1">03</div>
          <div className="text-sm text-neutral-500">CERTIFICATES</div>
        </div>
        <div className="bg-neutral-900/50 border border-neutral-800 p-6 rounded-2xl hover:border-purple-500/50 transition-colors">
          <div className="text-3xl font-bold mb-1">1+</div>
          <div className="text-sm text-neutral-500">YEARS EXP.</div>
        </div>
      </div>

      {/* Mockup Ungu Kamu */}
      <div className="mb-20">
        <h3 className="text-xl font-bold mb-8">Featured Work</h3>
        <img
          src="https://postimg.cc/your-link-here"
          alt="Mockup Utama"
          className="w-full rounded-3xl shadow-2xl border border-white/5"
        />
      </div>

      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}