import banner from '../images/banner2.png'

const Banner = () => {
  return (
    <div id="#banner" className="pt-[8rem] -mt-[2.25rem] md:-mt-[1.25rem]">
      <div className="container mx-auto max-w-full md:px-12 p-4">
        <div className="bg-gradient-to-r from-[#EE9AE5] to-[#5961F9] w-full md:p-9 py-8 px-4 rounded-3xl rounded-br-[8rem]">
          <div className="w-full flex flex-col-reverse lg:flex-row">
            <div className="lg:w-3/4">
              <h2 className='text-[29px] md:text-[55px] xl:text-[70px] leading-relaxed font-bold text-white mb-4'>Each student an share their discount code for friends</h2>
              <p className='text-sm font-semibold text-white lg:text-xl w-full lg:w-11/12 xl:w-9/12 mb-8 lg:mb-12'>
                A simple paragraph is comprised of three major components. The
                first sentence, which is often a declarative sentence, is called
                the “topic sentence.”
              </p>
              <button type='button' className='text-white font-medium rounded-2xl px-8 py-3 bg-secondary-color'>I have a code</button>
            </div>
            <div className="lg:w-1/4 mb-4">
              <img
                className='bg-[url("../images/banner2.png")] bg-no-repeat bg-blend-multiply mix-blend-multiply'
                src={banner}
                alt="banner"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
