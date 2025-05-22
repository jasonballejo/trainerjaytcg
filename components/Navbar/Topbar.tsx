import React from "react";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import Image from "next/image";
import logo from "@/images/logo/logo.png";
import Link from "next/link";
import page from "@/app/japanese/page";

export default function Topbar() {
  return (
    <div>
      <div className="flex justify-between p-2 bg-blue-500">
        {/* LEFT */}
        <div className="flex justify-start">
          <Image src={logo} width={75} height={75} alt="logo" />
        </div>
        {/* CENTER */}
        <div className="flex justify-center items-center w-full gap-8 bg-red-500">
          <Popover>
            <PopoverButton className="block text-sm/6 font-semibold text-white/50 focus:outline-none data-active:text-white data-focus:outline data-focus:outline-white data-hover:text-white">
              Shop
            </PopoverButton>
            <PopoverPanel
              transition
              anchor="bottom"
              className="divide-y divide-white/5 rounded-xl bg-white/5 text-sm/6 transition duration-200 ease-in-out [--anchor-gap:--spacing(5)] data-closed:-translate-y-1 data-closed:opacity-0"
            >
              <div className="p-3">
                <a
                  className="block rounded-lg px-3 py-2 transition hover:bg-white/5"
                  href="#"
                >
                  <p className="font-semibold text-white">
                    <Link href="/japanese">Japanese</Link>
                  </p>
                  {/* <p className="text-white/50">Measure actions your users take</p> */}
                </a>
                <a
                  className="block rounded-lg px-3 py-2 transition hover:bg-white/5"
                  href="#"
                >
                  <p className="font-semibold text-white">
                    <Link href="/singles">Singles</Link>
                  </p>
                  {/* <p className="text-white/50">Create your own targeted content</p> */}
                </a>
                <a
                  className="block rounded-lg px-3 py-2 transition hover:bg-white/5"
                  href="#"
                >
                  <p className="font-semibold text-white">
                    <Link href="/graded">Graded Slabs</Link>
                  </p>
                  {/* <p className="text-white/50">Keep track of your growth</p> */}
                </a>
              </div>
              {/* <div className="p-3">
                <a className="block rounded-lg px-3 py-2 transition hover:bg-white/5" href="#">
                  <p className="font-semibold text-white">Documentation</p>
                  <p className="text-white/50">Start integrating products and tools</p>
                </a>
              </div> */}
            </PopoverPanel>
          </Popover>
          <div className="text-sm/6 font-semibold text-white/50">Contact</div>
        </div>
        {/* RIGHT */}
        <div className="flex justify-center items-center bg-amber-500">
          <h1>RIGHT</h1>
        </div>
        {/* <div className="text-sm/6 font-semibold text-white/50">Shop</div> */}
      </div>
    </div>
  );
}
