import { copyrightSign } from "../assets/icons"
import { footerLogo } from "../assets/images"
import { footerLinks, socialMedia } from "../constants"

const Footer = () => {
  return (
    <footer className="max-container">
      <div
        className="flex flex-col justify-between
            items-start gap-20 flex-wrap max-lg:flex-col"
      >
        <div className="flex flex-col items-start">
          <a href="/">
            <img src={footerLogo} width={150} height={46} />
          </a>
          <p
            className="font-montserrat text-white-400 leading-7 sm:max-w-sm
          text-base"
          >
            Get shoes ready for the new term at your nearest Nike store. Find
            Your perfect Size In Store. Get Rewards
          </p>
          <div className="flex gap-5 mt-8 items-center">
            {socialMedia.map((media) => (
              <div
                className="flex justify-center items-center
                w-12 h-12 bg-white rounded-full"
              >
                <img src={media.src} alt={media.alt} width={24} height={24} />
              </div>
            ))}
          </div>
        </div>
        <div
          className="flex flex-1 justify-between
         lg:gap-10 gap-20 flex-wrap"
        >
          {footerLinks.map((part) => (
            <div>
              <h3
                className="text-white font-medium text-2xl font-montserrat leading-normal
                    mb-6"
              >
                {part.title}
              </h3>
              <ul>
                {part.links.map((link) => (
                  <li
                    className="mt-3 text-base hover:text-slate-gray
                            text-white-400 cursor-pointer"
                    key={link.name}
                  >
                    <a href={link.link}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div
        className="flex justify-between flex-1
      max-sm:flex-col max-sm:gap-2 max-sm:items-center mt-24 text-white-400"
      >
        <div
          className="flex flex-1 justify-start items-center gap-2
        font-montserrat cursor-pointer"
        >
          <img
            src={copyrightSign}
            width={20}
            height={20}
            className="rounded-full m-0"
            alt="copy right sign"
          />
          <p>Copyright. All rights reserved.</p>
        </div>
        <p className="font-montserrat cursor-pointer">Terms & Conditions</p>
      </div>
    </footer>
  )
}

export default Footer
