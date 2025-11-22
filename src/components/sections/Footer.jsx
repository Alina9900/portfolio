import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import {Link} from "react-router-dom"
import Home from "./Home.jsx"
const Footer = () => {
    return (
        <footer className="w-full py-8 mt-20 border-t border-white/10 bg-black/50 backdrop-blur">
            <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">

                {/* Logo / Name */}
                <Link to="/">
                <h2 className="text-lg font-semibold tracking-wide text-white">
                    Alina<span className="text-blue-500">.tech</span>
                </h2></Link>

                {/* Social Links */}
                <div className="flex gap-6 text-white text-2xl">

                    {/* LinkedIn */}
                    <a
                        href="https://www.linkedin.com/in/alina-khan-1543ab23b"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-400 transition"
                    >
                        <FaLinkedin />
                    </a>

                    {/* GitHub */}
                    <a
                        href="https://github.com/Alina9900"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-gray-300 transition"
                    >
                        <FaGithub />
                    </a>

                    {/* Email */}
                    <a
                        href="mailto:khana59665@gmail.com"
                        className="hover:text-red-400 transition"
                    >
                        <HiOutlineMail />
                    </a>

                </div>

                {/* Copyright */}
                <p className="text-gray-400 text-sm text-center md:text-right">
                    © {new Date().getFullYear()} — Made with <span className="text-red-500">❤️</span> by Alina
                </p>

            </div>
        </footer>
    );
};

export default Footer;
