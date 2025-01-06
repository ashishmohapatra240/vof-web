import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container-padding">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Image
              src="/images/logo.png"
              alt="Valley of Flower"
              width={120}
              height={40}
              className="object-contain invert"
            />
            <p className="mt-4">
              Valley of Flowers in Koraput is a hidden gem nestled in the heart of Odisha, India.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#what-we-do" className="hover:text-gray-300">
                  What We Do
                </Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-gray-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-gray-300">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Contact Info</h4>
            <ul className="space-y-2">
              <li>Email: info@valleyofflower.com</li>
              <li>Phone: +1 234 567 890</li>
              <li>Address: Valley Street, Koraput, Odisha, India</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Valley of Flower. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer 