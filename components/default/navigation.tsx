import * as React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'

import { AiOutlineSearch } from 'react-icons/ai'
import { signIn, signOut, useSession } from "next-auth/react"

import Profile from './profileButton'

const Nav: React.FC = () => {
  const { data: session, status } = useSession()
  const loading = status === "loading"
  const router = useRouter()

  let [open, setOpen] = React.useState(false)

  React.useEffect(() => {
    // Dom load -> Grab input
    const input = document.querySelector('#search')
    // Key pressed = event
    input?.addEventListener("keypress", (e: any) => {
      let v;
      if(e.key != "Enter") {
        v = e.target.value+e.key
      } else {
        v = e.target.value
      }
      // Add input value + Key Pressed
      if(v.length >= 2) return router.push(`?v=${escape(v)}`)
    })
    // Delete update
    input?.addEventListener("keydown", (e: any) => {
      let v = input.value.substring(0, input.value.length - 1)
      if(e.key === "Backspace") return router.push(`?v=${v}`)
    })
  }, [])


  return (
    <>
    <nav className="w-full bg-blue h-10 md:h-16">
      <div className="m-auto flex items-center justify-center lg:justify-between max-w-5xl px-1 h-full">
        <Link href="/">
          <a>
            <div className="w-24 md:w-36">
              <img src="/images/logotype.png" />
            </div>
          </a>
        </Link>
        <div className="hidden lg:flex w-2/5 ml-10 mr-9">
          <input id="search" className="w-full bg-white rounded-l p-2" type="search" placeholder="Rechercher" />
          <button className="bg-blue-dark rounded-r w-12 h-10 flex items-center justify-center text-2xl text-white"><AiOutlineSearch /></button>
        </div>
        <div className="hidden lg:flex">
          {/* If connected <Profile /> else <a> */}
          {session 
            ?
            <Profile />
            :
            <a onClick={() => setOpen(true)} className="cursor-pointer rounded ml-1 px-4 py-2 text-md font-semibold whitespace-nowrap bg-white text-blue hover:text-blue-dark" >
              Mon compte
            </a>
          }
        </div>
      </div>
    </nav>
    {/* Slice menu */}
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="aside" className="fixed z-50 inset-0 overflow-hidden" onClose={setOpen}>
        <div className="absolute inset-0 overflow-hidden">
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="absolute inset-0 bg-black bg-opacity-75 transition-opacity" />
          </Transition.Child>
          <div className="fixed inset-y-0 right-0 pl-10 max-w-full flex">
            <Transition.Child
              as={Fragment}
              enter="transform transition ease-in-out duration-500 sm:duration-700"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transform transition ease-in-out duration-500 sm:duration-700"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <div className="relative w-screen max-w-md">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-500"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-500"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute top-0 left-0 -ml-8 pt-4 pr-2 flex sm:-ml-10 sm:pr-4">
                    <button
                      type="button"
                      className="rounded-md text-pink-dark hover:text-pink focus:outline-none focus:ring-2 focus:ring-pink-dark"
                      onClick={() => setOpen(false)}
                    >
                      <span className="sr-only">Close panel</span>
                      <XIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                </Transition.Child>
                <div className="h-full flex flex-col justify-top py-6 bg-white shadow-xl overflow-y-scroll">
                  <div className="px-4 sm:px-6">
                    <Dialog.Title className="text-lg font-medium text-blue">Connexion</Dialog.Title>
                  </div>
                  <div className="h-full mt-6 relative px-4 sm:px-6">
                    <div className="h-full px-4 sm:px-6">
                      <div className="h-full" aria-hidden="true">
                        <p className="mb-5">Le site est actuellement en bêta.</p>
                        <p className="mb-5">Dans une prochaine mises à jour nous mettrons directement les différents types de connexion ici.</p>
                        <p className="mb-5">Nous traduirons aussi les messages, qui pour certains sont en anglais.</p>
                        <a className="bg-blue-dark rounded py-2 px-4 flex items-center justify-center text-xl text-white" href="/api/auth/signin">Continuer</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
    </>
  )
}

export default Nav
