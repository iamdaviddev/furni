import Image from "next/image";

import chair from "/public/chair5.png";
import chair2 from "/public/chair2.png";
import chair6 from "/public/chair6.png";
import chair8 from "/public/chair8.png";
import torresDipa from "/public/torresDipa.jpg";
import hotel from "/public/imgA.jpg";

import { Disc2, Repeat2, ShoppingBag, Truck } from "lucide-react";

export default function Home() {
  return (
    <main className="">
      <section className="bg-[#3B5D4F] h-[480px]">
        <div className="max-w-[1080px] mx-auto flex items-center justify-between">
          <div className="w-[400px] mt-12">
            <h1 className="text-5xl text-white font-semibold mb-10">
              Modern Interior <br />
              Design Studio
            </h1>
            <p className="text-[#7D9D90] text-justify mb-10">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur error cupiditate sit explicabo nulla! Sapiente perferendis quam nulla quisquam nihil, ullam amet cum hic soluta placeat. Voluptatibus dolores quis qui.
            </p>
            <div className="flex items-center gap-10">
              <button className="w-32 h-11 p-2 bg-[#F8C11E] rounded-full text-[#3B5D4F] font-semibold hover:bg-opacity-90 delay-100 transition-all">Shop now</button>
              <button className="w-32 h-11 p-2 border-2 border-[#DCE5E4] rounded-full text-[#DCE5E4] font-semibold hover:bg-white hover:text-[#3B5D4F] hover:border-white delay-100 transition-all">Explore</button>
            </div>
          </div>
          <div className="mt-12"> 
            <Image src={chair} alt="cadeira" width={470}/>
          </div>
        </div>
      </section>

      <section className="mt-36">
        <div className="max-w-[1080px] mx-auto flex items-center gap-8">
          <div className="w-[290px]">
            <h3 className="text-3xl text-[#3B5D4F] font-semibold mb-6">Crafted with <br /> Excellent <br />  material.</h3>
            <p className="text-justify text-zinc-400 mb-6">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus, voluptatibus. Aliquid aspernatur.
            </p>
            <button className="w-32 h-11 p-2 bg-[#2E302F] text-white rounded-full hover:bg-[#3B5D4F]">
              Explore
            </button>
          </div>
          <div className="flex flex-col items-center gap-4 w-[290px] hover:bg-[#DCE5E4] hover:rounded-lg transition-all delay-75">
            <Image src={chair} alt="chair2"/>
            <p className="font-bold">Nordic Chair</p>
            <strong>$50.00</strong>
          </div>
          <div className="flex flex-col items-center gap-4 w-[290px] hover:bg-[#DCE5E4] hover:rounded-lg transition-all delay-75">
            <Image src={chair6} alt="chair2"/>
            <p className="font-bold">Nordic Chair</p>
            <strong>$50.00</strong>
          </div>
          <div className="flex flex-col items-center gap-4 w-[290px] hover:bg-[#DCE5E4] hover:rounded-lg transition-all delay-75">
            <Image src={chair8} alt="chair2"/>
            <p className="font-bold">Nordic Chair</p>
            <strong>$50.00</strong>
          </div>
        </div>
      </section>

      <section className="mt-40">
        <div className="max-w-[1080px] mx-auto flex items-center justify-between">
          <div className="w-[400px]">
            <h3 className="text-3xl text-[#3B5D4F] font-bold mb-6">Why choose us</h3>
            <p className="text-sm text-justify text-zinc-400 mb-6">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum vel eius ab error sit, nisi eos eaque unde veniam aperiam.
            </p>
            <div className="w-full">
              <div className="flex items-center justify-between gap-4 mb-4">
                <div className="w-[200px] p-2">
                  <Truck className="mb-2 text-zinc-500"/>
                  <h4 className="font-semibold text-gray-600 mb-6">
                    Fast & free shipping
                  </h4>
                  <p className="text-sm text-justify text-zinc-400">
                    Lorem ipsum dolor, ah dm sit amet consectetur adipisicing elit.
                  </p>
                </div>
                <div className="w-[200px] p-2">
                  <ShoppingBag className="mb-2 text-zinc-500"/>
                  <h4 className="font-semibold text-gray-600 mb-6">
                    Easy to shop
                  </h4>
                  <p className="text-sm text-justify text-zinc-400">
                    Lorem ipsum dolor, ah dm sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between gap-4">
                <div>
                  <Disc2 className="mb-2 text-zinc-500"/>
                  <h4 className="font-semibold text-gray-600 mb-6">
                    24/7 support
                  </h4>
                  <p className="text-sm text-justify text-zinc-400">
                    Lorem ipsum dolor, ah dm sit amet consectetur adipisicing elit.
                  </p>
                </div>
                <div>
                  <Repeat2 className="mb-2 text-zinc-500"/>
                  <h4 className="font-semibold text-gray-600 mb-6">
                    Hassie free returns
                  </h4>
                  <p className="text-sm text-justify text-zinc-400">
                    Lorem ipsum dolor, ah dm sit amet consectetur adipisicing elit. Optio alias
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <Image src={torresDipa} alt="room" width={470} className="rounded-xl"/>
          </div>
        </div>
      </section>

      <section className="mt-40">
        <div className="max-w-[1080px] mx-auto flex items-center justify-between">
          <div className="">
            <Image src={hotel} alt="room" width={600} height={300} className="rounded-xl"/>
          </div>
          <div className="w-[400px]">
            <h3 className="text-3xl text-[#3B5D4F] font-semibold mb-6">We help you make Modern Interior Design</h3>
            <p className="text-sm text-zinc-400 text-justify mb-8">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam similique laudantium velit, optio incidunt consequuntur? Eligendi dolorum nulla, atque voluptatibus alias tempore natus suscipit deleniti unde placeat sit, quisquam ex?
            </p>
            <div className="mb-8">
              <ul className="list-disc flex items-center gap-8 mb-4">
                <li className="text-zinc-400 text-sm text-justify">
                  Lorem ipsum, dolor sit abcm row hak amet consectetur adipisicing elit. Illum, blanditiis.
                </li>
                <li className="text-zinc-400 text-sm text-justify">
                  Lorem ipsum, dolor sit abcm row hak amet consectetur adipisicing elit. Illum, blanditiis.
                </li>
              </ul>
              <ul className="list-disc flex items-center gap-8 mb-4">
                <li className="text-zinc-400 text-sm text-justify">
                  Lorem ipsum, dolor sit abcm row hak amet consectetur adipisicing elit. Illum, blanditiis.
                </li>
                <li className="text-zinc-400 text-sm text-justify">
                  Lorem ipsum, dolor sit abcm row hak amet consectetur adipisicing elit. Illum, blanditiis.
                </li>
              </ul>
            </div>
            <button className="w-32 h-11 p-2 bg-[#2E302F] text-white rounded-full hover:bg-[#3B5D4F]">
              Explore
            </button>
          </div>
        </div>
      </section>

      <section className="mt-40">
        <div className="max-w-[1080px] mx-auto flex items-center justify-between">
          <div className="flex items-center gap-28">
            <div className="flex items-center p-4 gap-7 w-[290px] hover:bg-[#DCE5E4] hover:rounded-lg transition-all delay-75">
              <Image src={chair} alt="chair2" width={80}/>
              <div className="flex flex-col gap-2">
                <h4 className="text-sm font-semibold">Nordic Chair</h4>
                <p className="text-sm text-zinc-400 text-justify">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla incidunt vel quis?
                </p>
                <p className="text-sm text-gray-600">Read more</p>
              </div>
            </div>

            <div className="flex items-center p-4 gap-7 w-[290px] hover:bg-[#DCE5E4] hover:rounded-lg transition-all delay-75">
              <Image src={chair6} alt="chair2" width={80}/>
              <div className="flex flex-col gap-2">
                <h4 className="text-sm font-semibold">Nordic Chair</h4>
                <p className="text-sm text-zinc-400 text-justify">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla incidunt vel quis?
                </p>
                <p className="text-sm text-gray-600">Read more</p>
              </div>
            </div>

            <div className="flex items-center p-4 gap-7 w-[290px] hover:bg-[#DCE5E4] hover:rounded-lg transition-all delay-75">
              <Image src={chair8} alt="chair2" width={80}/>
              <div className="flex flex-col gap-2">
                <h4 className="text-sm font-semibold">Nordic Chair</h4>
                <p className="text-sm text-zinc-400 text-justify">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla incidunt vel quis?
                </p>
                <p className="text-sm text-gray-600">Read more</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
