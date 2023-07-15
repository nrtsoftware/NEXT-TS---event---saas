import Image from 'next/image';
import React, { useState } from 'react';
import data from './index.data';
import '@/app/globals.css';
import lineup from './lineup.data';
import EventLiveInfo from '@/components/EventLiveInfo';
import Timer from '@/components/Timer';
import ArtistList from '@/components/ArtistList';
import CanOrCantList from '@/components/CanOrCantList';
import Title from '@/components/Title';
import Weather from '@/components/Weather';


export default function Index() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-black text-white">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <div className="fixed left-0 top-0 flex w-full justify-center border-neutral-800 bg-zinc-800/30 from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:bg-zinc-800/30">
          { data.components.littleBarTimer.description }


          <code id="timer" className="font-mono font-bold">
             <Timer data={data.components.littleBarTimer.data} />
          </code>
        </div>
        <EventLiveInfo data={lineup} />          
        <Weather city="Guarulhos" />
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-black via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="invert"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className="relative 
      h-[50vw] 
      flex 
      place-items-center 
      before:absolute 
      sm:before:h-[300px] 
      sm:before:w-[480px] 
      before:-translate-x-1/2 
      before:rounded-full 
      before:bg-gradient-to-br 
      before:from-transparent 
      before:to-blue-700
      before:opacity-10 
      before:blur-2xl 
      before:content-[''] 
      after:absolute 
      after:-z-20 
      sm:after:h-[180px] 
      sm:after:w-[240px] 
      after:translate-x-1/3 
      after:bg-gradient-conic 
      after:from-sky-900 
      after:via-[#0141ff]
      after:blur-2xl
      before:bg-gradient-to-br 
      before:from-transparent 
      before:to-blue-700 
      before:opacity-10 
      after:from-sky-900 
      after:via-[#0141ff] 
      after:opacity-40 
      before:lg:h-[360px]">
        <div className="relative">
          <Image
            className="invert"
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
        />

        <p className='text-wh'>DIA 23 A 25 DE FEVEREIRO</p>
        </div>
      </div>

      <div className="">
        <div>
          <Title title='Line[UP]'/>
          <ArtistList />
        </div>
        <div>
          <Title title='Pode ou [Não pode]' />
          <CanOrCantList />
        </div>
      </div>
    </main>
  )
}
