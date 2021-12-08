import * as React from 'react'
import Head from 'next/head'
import Image from 'next/image'

import Nav from './navigation'

type Props = {
    navigation?: boolean
}

const Layout: React.FC<Props> = ({ navigation, children }) => {
  return (
    <div className="w-full font-sans">
        { navigation && <Nav /> }
        <main className="w-full max-w-5xl m-auto flex flex-col justify-center items-center">
          {children}
        </main>
    </div>
  )
}

export default Layout
