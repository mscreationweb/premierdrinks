import Link from "next/link"
// import { useRouter } from "next/router"

export default function Menu() {
    // const router = useRouter()


    return (
        <>


            <ul className="navigation right-nav clearfix">
                <li className="dropdown">
                    <Link href="#about">About</Link>
        
                </li>
                <li className="dropdown">
                    <Link href="#gallery">Gallery</Link>
        
                </li>
                <li>
                    <Link href="#contact">Contact</Link>
                </li>
            </ul>
        </>
    )
}
