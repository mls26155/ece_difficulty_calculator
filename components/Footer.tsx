import Image from "next/image"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className="bg-green-600 flexBetween max-container padding-container relative z-10 py-10">
        <div className="flex flex-col justify-center pr-24">
            <div className="grid grid-cols-2 divide-x-2 gap-x-4">
                <Link href="https://ece.gmu.edu/" className="justify-self-end">
                <Image src="/logo.png" height="100" width="100" alt="logo large" />
                </Link>
                <div className="flex flex-col justify-center">
                    <h3 className="text-white text-xl font-semibold tracking-tight pl-4 pt-2">Volgenau School of Engineering</h3>
                </div>
            </div> 
        </div>
    </footer>
  )
}

export default Footer