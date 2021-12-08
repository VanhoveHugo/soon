import * as React from 'react'
import StatusCard from '../widgets/StatusCard'
import PageVisitsCard from '../widgets/PageVisitsCard'
import TrafficCard from '../widgets/TrafficCard'
import Sidebar from '../widgets/Sidebar'

const Layout: React.FC = ({ children }) => {
  return (
    <div className="w-full font-sans">
      <Sidebar />
        <main className="w-full m-auto flex flex-col justify-center items-center">
        <div className="px-3 md:px-8 h-40" />
        <div className="px-3 md:px-8 -mt-24">
            <div className="container mx-auto max-w-full">
                <div className="grid grid-cols-1 xl:grid-cols-5">
                    <div className="xl:col-start-1 xl:col-end-4 px-4 mb-14">
                        {/* <ChartLine /> */}
                    </div>
                    <div className="xl:col-start-4 xl:col-end-6 px-4 mb-14">
                        {/* <ChartBar /> */}
                    </div>
                </div>
            </div>
        </div>

        <div className="px-3 md:px-8">
            <div className="container mx-auto max-w-full">
               
            </div>
        </div>

        <div className="px-3 md:px-8 h-auto">
            <div className="container mx-auto max-w-full">
                <div className="grid grid-cols-1 xl:grid-cols-5">
                    <div className="xl:col-start-1 xl:col-end-4 px-4 mb-14">
                        <PageVisitsCard />
                    </div>
                    <div className="xl:col-start-4 xl:col-end-6 px-4 mb-14">
                        <TrafficCard />
                    </div>
                </div>
            </div>
        </div>
        </main>
    </div>
  )
}

export default Layout
