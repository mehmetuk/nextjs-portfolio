import Link from 'next/link'
import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer id='contact' className='border-t border-amber-500 text-black dark:text-white py-8'>
      <div className='max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8'>

        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <p className="text-sm">123 Main Street</p>
          <p className="text-sm">City, State, ZIP</p>
          <p className="text-sm">Email: info@example.com</p>
          <p className="text-sm">Phone: (123) 456-7890</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>

          <div className='flex space-x-3'>
            <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF className="w-6 h-6 hover:text-blue-500" />
            </Link>
            <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="w-6 h-6 hover:text-blue-400" />
            </Link>
            <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="w-6 h-6 hover:text-pink-500" />
            </Link>
            <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn className="w-6 h-6 hover:text-blue-600" />
            </Link>
            <Link href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <FaYoutube className="w-6 h-6 hover:text-red-600" />
            </Link>

          </div>




        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Subscribe</h3>
          <p className="text-sm mb-4">Don  `&apos;` t miss our latest updates on YouTube!</p>
          <Link
            href="https://youtube.com/c/efegorkemumit"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded"
          >
            Subscribe
          </Link>

        </div>


      </div>

      <div className='mt-8 border-t border-gray-500 pt-4 text-center'>
        <p className="text-sm">
        &copy; {new Date().getFullYear()} efegorkemumit. All rights reserved.
        </p>
      </div>


    </footer>
  )
}

export default Footer