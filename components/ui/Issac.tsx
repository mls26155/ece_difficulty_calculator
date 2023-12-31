import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from "next/image"

const Issac = () => {
  return (
    <div>
        <hr />
        <div className="mt-4 space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Result</CardTitle>
              <div className="flex gap-2">
                <div className="grid m-2 my-4">
                  <div className="col-start-1 row-start-1">
                    <div className="h-full translate-x-1.5 translate-y-2.5 bg-green-600 rounded-md" /> 
                  </div>
                  <div className="col-start-1 z-10 row-start-1">
                    <Image src="/Issac.png" alt="Issac Photo" width="145" height="100" />
                  </div>
                </div>
                <div className="p-2 p-y-0">
                  <h2 className="scroll-m-20 text-xl font-semibold tracking-tight m-2">Difficulty Level</h2>
                  <h1 className="text-red-600 text-4xl font-extrabold m-2 my-3">6/10</h1>
                  <p className="italic text-sm m-2 my-3">&quot;You&apos;ve got this kid. Just don&apos;t get Vivadod...&apos; -Issac Putla</p>
                </div>
              </div>
            </CardHeader>
          </Card>
        </div>
    </div>
  )
}

export default Issac