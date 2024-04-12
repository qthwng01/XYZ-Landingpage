import { useState } from 'react'
import { navItems } from '../constants'
import { MdLanguage, MdMenu } from 'react-icons/md'
import { FaXmark } from 'react-icons/fa6'
import logo from '../images/logo.png'

const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <>
      <nav
        id="navbar"
        className="bg-white px-5 lg:px-14 py-5 w-full text-primary-color fixed top-0 right-0 left-0"
      >
        <div className="text-lg font-medium flex justify-between items-center">
          <div className="flex items-center">
            <a
              className="text-2xl md:text-4xl flex items-center text-primary-color mr-10 "
              href="#"
            >
              <img
                src={logo}
                alt="logo"
                className="w-10 md:w-14 inline-block items-center mr-6"
              />
              <span className="text-primary-color font-bold">XYZ</span>
            </a>
            <ul className="hidden lg:inline-flex lg:items-center">
              {navItems.map((item, index) => (
                <li key={index} className="px-6">
                  <a
                    className="block text-xl font-semibold hover:text-gray-300"
                    href={item.path}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="hidden lg:flex lg:items-center">
            <a
              href="#"
              className="md:flex items-center hover:text-secondary-color mr-12"
            >
              <MdLanguage className="mr-2" />
              Language
            </a>
            <button className="bg-secondary-color py-2 px-4 transition-all duration-300 rounded hover:text-white hover:bg-indigo-600 hidden md:block">
              Sign in
            </button>
          </div>

          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none focus:text-gray-300"
            >
              {isMenuOpen ? (
                <FaXmark className="w-6 h-6 text-primary-color" />
              ) : (
                <MdMenu className="w-6 h-6 text-primary-color text-lg" />
              )}
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`px-6 pt-24 pb-5 bg-secondary-color ${
          isMenuOpen ? 'navbar__mobile' : 'hidden'
        }`}
      >
        {navItems.map((item, index) => (
          <a
            key={index}
            href={item.path}
            className="block text-lg font-semibold text-white hover:text-gray-300 py-3"
          >
            {item.name}
          </a>
        ))}
      </div>
    </>
  )
}

export default Navbar
