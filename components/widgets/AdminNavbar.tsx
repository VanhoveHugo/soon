import Button from '@material-tailwind/react/Button';
import Icon from '@material-tailwind/react/Icon';
import NavbarInput from '@material-tailwind/react/NavbarInput';
import Image from '@material-tailwind/react/Image';
import Dropdown from '@material-tailwind/react/Dropdown';
import DropdownItem from '@material-tailwind/react/DropdownItem';
import { signIn, signOut, useSession } from "next-auth/react"

type Props = {
    showSidebar?: any,
    setShowSidebar?: any
}

export default function AdminNavbar<Props>({ showSidebar, setShowSidebar }) {
    const { data: session, status } = useSession()
    const loading = status === "loading"
    return (
        <nav className="bg-light-blue-500 md:ml-64 py-6">
            <div className="container max-w-full mx-auto flex items-center justify-between md:pr-8 md:pl-10">

                <div className="flex justify-between items-center w-full">
                    <h4 className="uppercase text-white text-sm tracking-wider mt-1">
                        DASHBOARD  
                    </h4>

                    <div className="flex">
                        <NavbarInput placeholder="Search" />

                        <div>
                            <Dropdown
                                color="transparent"
                                buttonText={
                                    <div className="h-10 w-10">
                                        <Image src={session?.user?.image} rounded />
                                    </div>
                                }
                                rounded
                                style={{
                                    padding: 0,
                                    color: 'transparent',
                                }}
                            >
                                <DropdownItem color="lightBlue">
                                    <a href="http://localhost:3000/api/auth/signout">Deconnexion</a>
                                </DropdownItem>
                            </Dropdown>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}
