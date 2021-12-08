import { Menu, Transition } from '@headlessui/react'
import { Fragment, useEffect, useRef, useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import Link from 'next/link'

export default function Example() {
  return (
    <div className="w-56 text-right z-40">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="cursor-pointer flex items-center rounded ml-1 px-4 py-2 text-md font-semibold whitespace-nowrap bg-white text-blue hover:text-blue-dark">
            Mon compte
            <ChevronDownIcon
              className="w-5 h-5 ml-2 -mr-1 text-violet-200 hover:text-violet-100"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
              <Menu.Item>
                <Link href="/app" >
                    <a className={'text-black group flex rounded-md items-center w-full px-2 py-2 text-sm hover:bg-blue-dark hover:text-white'}>
                        <EditActiveIcon
                            className="w-5 h-5 mr-2"
                            aria-hidden="true"
                        />
                    Dashboard
                    </a>
                </Link>
              </Menu.Item>
              <Menu.Item>
                <Link href="/api/crypto" >
                    <a className={'text-black group flex rounded-md items-center w-full px-2 py-2 text-sm hover:bg-blue-dark hover:text-white'}>
                    <ArchiveActiveIcon
                        className="w-5 h-5 mr-2"
                        aria-hidden="true"
                      />
                    API crypto
                    </a>
                </Link>
              </Menu.Item>
            </div>
            <div className="px-1 py-1">
                <Link href="/api/auth/signout" >
                    <a className={'text-black group flex rounded-md items-center w-full px-2 py-2 text-sm hover:bg-blue-dark hover:text-white'}>
                    <MoveActiveIcon
                        className="w-5 h-5 mr-2"
                        aria-hidden="true"
                      />
                    Déconnexion
                    </a>
                </Link>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  )
}

// Icons
function EditActiveIcon(props: any) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 13V16H7L16 7L13 4L4 13Z"
        fill="#8B5CF6"
        stroke="#C4B5FD"
        strokeWidth="2"
      />
    </svg>
  )
}

function ArchiveActiveIcon(props: any) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="5"
        y="8"
        width="10"
        height="8"
        fill="#8B5CF6"
        stroke="#C4B5FD"
        strokeWidth="2"
      />
      <rect
        x="4"
        y="4"
        width="12"
        height="4"
        fill="#8B5CF6"
        stroke="#C4B5FD"
        strokeWidth="2"
      />
      <path d="M8 12H12" stroke="#A78BFA" strokeWidth="2" />
    </svg>
  )
}

function MoveActiveIcon(props: any) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M10 4H16V10" stroke="#C4B5FD" strokeWidth="2" />
      <path d="M16 4L8 12" stroke="#C4B5FD" strokeWidth="2" />
      <path d="M8 6H4V16H14V12" stroke="#C4B5FD" strokeWidth="2" />
    </svg>
  )
}