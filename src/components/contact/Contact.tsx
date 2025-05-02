import { AiFillMail, AiFillPhone } from "react-icons/ai";
import { FaLinkedin, FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import Reveal from "../util/Reveal";

export const Contact = () => {
  return (
    <section className="section-wrapper" id="contact">
      <div className="max-w-xl mx-auto bg-zinc-800 px-8 py-12 rounded-xl">
        <Reveal width="w-full">
          <h4 className="text-4xl md:text-5xl text-center font-black">
            Contact<span className="text-indigo-500">.</span>
          </h4>
        </Reveal>
        <Reveal width="w-full">
          <p className="text-center my-8 text-zinc-300 leading-relaxed">
            Feel free to reach out to me through any of these channels:
          </p>
        </Reveal>
        <Reveal width="w-full">
          <div className="flex flex-col gap-4 items-center">
            <Link 
              href="https://www.linkedin.com/in/amrut-amarshetty-2b259b200/"
              target="_blank"
              className="flex items-center justify-center gap-2 w-fit text-lg md:text-2xl whitespace-normal hover:text-indigo-300 transition-colors"
            >
              <FaLinkedin className="text-2xl" />
              <span>LinkedIn</span>
            </Link>
            <Link 
              href="mailto:amrut.amarshetty2001@gmail.com"
              target="_blank"
              className="flex items-center justify-center gap-2 w-fit text-lg md:text-2xl whitespace-normal hover:text-indigo-300 transition-colors"
            >
              <AiFillMail className="text-2xl" />
              <span>amrut.amarshetty2001@gmail.com</span>
            </Link>
            <Link 
              href="tel:+918762775681"
              className="flex items-center justify-center gap-2 w-fit text-lg md:text-2xl whitespace-normal hover:text-indigo-300 transition-colors"
            >
              <AiFillPhone className="text-2xl" />
              <span>+91 8762775681</span>
            </Link>
            <Link 
              href="https://wa.me/918762775681"
              target="_blank"
              className="flex items-center justify-center gap-2 w-fit text-lg md:text-2xl whitespace-normal hover:text-indigo-300 transition-colors"
            >
              <FaWhatsapp className="text-2xl" />
              <span>WhatsApp</span>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
