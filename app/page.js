import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <main className="bg-purple-100 text-white">
      <section className="flex h-[50vh]">
        <div className=" w-[50vw] flex flex-col gap-5 items-center justify-center">
          <p className="text-3xl font-bold text-black">The best URL shortner in the Market</p>
          <p className="text-black px-25 text-center">We are the most straightforward URL shortner in the world.Most of the url shortners will track you or ask you to give your details for login.we understand your needs and hence we have created this URL shortner</p>
          <li className='flex gap-2 items-center'>
            <Link href="/generate" className='bg-purple-500 shadow-lg rounded-xl p-2'><button className='cursor-pointer font-bold '>Trynow</button></Link>
            <Link href="/github" className='bg-purple-500 shadow-lg rounded-xl p-2'><button className='cursor-pointer font-bold'>GitHub</button></Link>
          </li>
        </div>
        <div className=" w-[50vw] flex justify-start relative ">
          <Image className="mix-blend-darken" alt="an image of a vector" src={"/vector.jpg"} fill={true} />
        </div>

      </section>
    </main>
  );
}
