import Link from "next/link"
import Combobox1 from "./ComboBox1"
import { Button } from "./button"
import Image from "next/image"

const Calculator = () => {
  return (
    <div className='p-2 space-y-8'>
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">ECE Semester Difficulty Calculator</h1>

        <div>
          <Link href="https://catalog.gmu.edu/courses/ece/">
            <Button className="font-bold leading-7 [&:not(:first-child)]:mt-6">A calculator for GMU ECE students to determine semester difficulty.</Button>
          </Link>
        </div>
        <hr />

        <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0">Your Classes</h2>
        <p className="[&:not(:first-child)]:mt-6">Select your classes for this semester:</p>

        <Combobox1 />
    </div>
  )
}

export default Calculator