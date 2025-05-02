import { AiFillMail, AiFillPhone } from "react-icons/ai";
import { FaLinkedin, FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import Reveal from "../util/Reveal";

export const Contact = () => {
  return (
    <section className="section-wrapper px-4 sm:px-6" id="contact">
      <div className="max-w-xl mx-auto bg-zinc-800 px-4 sm:px-8 py-8 sm:py-12 rounded-xl">
        <Reveal width="w-full">
          <h4 className="text-3xl sm:text-4xl md:text-5xl text-center font-black">
            Contact<span className="text-indigo-500">.</span>
          </h4>
        </Reveal>
        <Reveal width="w-full">
          <p className="text-center my-6 sm:my-8 text-zinc-300 leading-relaxed text-sm sm:text-base">
            Feel free to reach out to me through any of these channels:
          </p>
        </Reveal>
        <Reveal width="w-full">
          <div className="flex flex-col gap-3 sm:gap-4 items-center">
            <Link 
              href="https://www.linkedin.com/in/amrut-amarshetty-2b259b200/"
              target="_blank"
              className="flex items-center justify-center gap-2 w-full sm:w-fit text-base sm:text-lg md:text-2xl whitespace-normal hover:text-indigo-300 transition-colors px-4 py-2 rounded-lg hover:bg-zinc-700"
            >
              <FaLinkedin className="text-xl sm:text-2xl" />
              <span>LinkedIn</span>
            </Link>
            <Link 
              href="mailto:amrut.amarshetty2001@gmail.com"
              target="_blank"
              className="flex items-center justify-center gap-2 w-full sm:w-fit text-base sm:text-lg md:text-2xl whitespace-normal hover:text-indigo-300 transition-colors px-4 py-2 rounded-lg hover:bg-zinc-700"
            >
              <AiFillMail className="text-xl sm:text-2xl" />
              <span className="text-sm sm:text-base md:text-lg">amrut.amarshetty2001@gmail.com</span>
            </Link>
            <Link 
              href="tel:+918762775681"
              className="flex items-center justify-center gap-2 w-full sm:w-fit text-base sm:text-lg md:text-2xl whitespace-normal hover:text-indigo-300 transition-colors px-4 py-2 rounded-lg hover:bg-zinc-700"
            >
              <AiFillPhone className="text-xl sm:text-2xl" />
              <span>+91 8762775681</span>
            </Link>
            <Link 
              href="https://wa.me/918762775681"
              target="_blank"
              className="flex items-center justify-center gap-2 w-full sm:w-fit text-base sm:text-lg md:text-2xl whitespace-normal hover:text-indigo-300 transition-colors px-4 py-2 rounded-lg hover:bg-zinc-700"
            >
              <FaWhatsapp className="text-xl sm:text-2xl" />
              <span>WhatsApp</span>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
