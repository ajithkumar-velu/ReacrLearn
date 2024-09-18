import { assets } from "../assets/assets"

const About = () => {
  return (
    <div>

      <div className="text-center text-2xl pt-10 text-gray-500" >
        <p>ABOUT <span className="text-gray-700 font-medium" >US</span></p>
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-12" >
        <img className="w-full md:max-w-[360px]" src={assets.about_image} alt="" />
        <div className="flex flex-col justify-center gap-5 md:w-2/4 text-sm text-gray-600" >
          <p>Welcome to Prescripto, your trusted partner in managing your healthcare needs conveniently and effciently. At Prescripto, we understand the challanges individuals face when if comes to scheduling doctor appointments and managing their health records.</p>
          <p>Prescripto is committed to excellents in healthcare technology. We continuously Strive to enhance our platform, integrating the latest advancements to improve user experience and delive superior service. Whether you're booking your first appointment or managing angoing core, prescripto is here to support you every step of the way.</p>
          <b className="text-gray-800" >Our Vistion</b>
          <p>Our vistion at prescripto is to create a seamless heathcare experience for every user. We aim to bridge the gap between patients and healthcare provdrs, making if easier for you to access the care you need, when you it.</p>
        </div>
      </div>
      <div className="text-xl my-4" >
        <p>WHY <span className="text-gray-700 font-semibold" >CHOOSE US</span></p>
      </div>

      <div className="flex flex-col md:flex-row mb-20" >
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer" >
          <b>Efficiency:</b>
          <p>Streamlined appointment scheduling that fits into your busy lifestyle.</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>Convenience:</b>
          <p>Access to a network of trusted healthcare professionals in your area.</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>Presonalization:</b>
          <p>Tailored recommendations and reminders to help you stay on top of your health.</p>
        </div>
      </div>
    </div>
  )
}

export default About
