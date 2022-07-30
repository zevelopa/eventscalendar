import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div className={""}>
      <div className="flex flex-col justify-center items-start max-w-2xl border-white dark:border-black mx-auto pb-16">
        <div className="flex flex-col sm:flex-row items-start">
          <div className="flex flex-col">
            <h1 className="font-bold content-center text-3xl md:text-5xl mb-1 text-black dark:text-white">
              CSSA Events Calendar
            </h1>
            <h2 className="text-gray-700 dark:text-gray-200 mb-4">
              Developer, CompSci and CyberSec student
            </h2>
          </div>
        </div>
      </div>
    </div>
  )
}
