import { Button } from '@/components/component/ui/button'
import Link from 'next/link'
// import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center space-y-6 p-8 bg-white rounded-lg shadow-xl max-w-md w-full">
        <div className="relative">
          <h1 className="text-9xl font-bold text-gray-300">404</h1>
          <p className="text-2xl font-bold text-gray-800 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            Oops!
          </p>
        </div>
        <h2 className="text-3xl font-semibold text-gray-800">Page not found</h2>
        <p className="text-gray-600">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link href="/" passHref>
          <Button className="px-6 mt-10 py-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition duration-300">
            Go to Homepage
          </Button>
        </Link>
      </div>
    </div>
  )
}