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
      before:h-[300px] 
      before:w-[480px] 
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
      after:h-[180px] 
      after:w-[240px] 
      after:translate-x-1/3 
      after:bg-gradient-conic 
      after:from-sky-900 
      after:via-[#0141ff]
      after:blur-2xl 
      after:content-['']
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
            className=""
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
        <div className='text-center flex lg:text-left py-3'>
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Docs{' '}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Find in-depth information about Next.js features and API.
            </p>
          </a>

          <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Learn{' '}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Learn about Next.js in an interactive course with&nbsp;quizzes!
            </p>
          </a>

          <a
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Templates{' '}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Explore the Next.js 13 playground.
            </p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Deploy{' '}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Instantly deploy your Next.js site to a shareable URL with Vercel.
            </p>
          </a>
        </div>

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
