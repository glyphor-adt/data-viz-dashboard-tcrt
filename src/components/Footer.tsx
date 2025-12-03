import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <p className="text-gray-600">&copy; 2024 Data Visualization Dashboard. All rights reserved.</p>
          </div>
          <div>
            <ul className="flex space-x-4">
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-500">Product</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-500">Company</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-500">Resources</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-500">Legal</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
