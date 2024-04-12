import { footerItems } from '../constants'
import FooterItems from './FooterItems'
import logo from '../images/logo.png'
import { AiOutlineFacebook, AiOutlineLinkedin } from 'react-icons/ai'
import { FaInstagram, FaTwitterSquare } from 'react-icons/fa'

const Footer = () => {
  return (
    <div id="#footer" className="pt-[8rem] -mt-[2.25rem] md:-mt-[1.25rem]">
      <div className="container mx-auto max-w-full md:px-12 p-4 bg-primary-color">
        {/* footer top */}
        <div className="flex flex-col lg:flex-row py-8 lg:py-12">
          <div className="w-full lg:w-5/12">
            <div className="lg:mb-16 lg:w-[85%]">
              <div className="mb-10 flex items-center">
                <img
                  className="w-10 md:w-14 inline-block items-center mr-6"
                  src={logo}
                  alt="logo"
                />
                <span className="text-white font-bold text-2xl">XYZ</span>
              </div>
              <p className="text-white text-lg font-normal opacity-70 mb-12">
                A simple paragraph is comprised of three major components. The
                first sentence, which is often a declarative sentence.
              </p>
            </div>
            <form id="news">
              <div className="bg-[#373089] flex items-center lg:w-3/4 rounded-2xl border border-primary-color">
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full bg-transparent py-4 px-4 text-white text-base border-none outline-none"
                />
                <button className="bg-secondary-color hover:bg-indigo-600 text-white text-lg font-semibold py-3 px-4 sm:px-10 rounded-2xl focus:outline-none transition-all duration-200">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
          <div className="mt-14 lg:w-7/12">
            <div className="grid sm:grid-cols-3 lg:grid-flow-col lg:grid-col-3">
              {footerItems.map((item) => (
                <div className="text-white mb-4" key={item.id}>
                  <h4 className="mb-6 font-semibold">{item.name}</h4>
                  <FooterItems attr={item.attr} />
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* footer bottom */}
        <div className="p-0">
          <div className="border-t-2 border-white opacity-40"></div>
          <div className="flex flex-col items-center lg:flex-row text-white mt-8">
            <div className="lg:w-1/2 mb-4">
              <span className='opacity-70'>@ XYZ 20XX --- 20XX. All rights reserved.</span>
            </div>
            <div className="lg:w-1/2">
              <ul className="flex lg:flex-row lg:justify-end">
                <li className='px-2 text-3xl opacity-70 hover:opacity-100 cursor-pointer'>
                  <AiOutlineFacebook />
                </li>
                <li className='px-2 text-3xl opacity-70 hover:opacity-100 cursor-pointer'>
                  <FaInstagram />
                </li>
                <li className='px-2 text-3xl opacity-70 hover:opacity-100 cursor-pointer'>
                  <FaTwitterSquare />
                </li>
                <li className='px-2 text-3xl opacity-70 hover:opacity-100 cursor-pointer'>
                  <AiOutlineLinkedin />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
