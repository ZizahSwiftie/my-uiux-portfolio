import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Nur Azizah Ulinnuha
      </h1>
      <p className="mb-4">
        {`A creative problem solver specializing in crafting user-centered digital experiences. 
        I believe that great design is not just about how it looks, but more importantly,
         about how it works and feels for the human on the other side of the screen.
         Expertise: Figma, Figjam, Prototyping, and User Research.`}
      </p>
      <img src="https://i.postimg.cc/HnsxMCDQ/utama.png" alt="Mockup" className="w-full h-auto rounded-xl mt-8" />
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
