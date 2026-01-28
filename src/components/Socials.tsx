 import { SiLeetcode } from 'react-icons/si'
import { Github, Linkedin } from 'lucide-react'
const Socials = () => {
    return (
        <>
            <a
                href="https://github.com/ShubhamRaut280"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-full backdrop-blur-xl bg-[#111111]/70 border border-white/[0.08] hover:border-cyan-400/50 transition-all flex items-center gap-2"
            >
                <Github className="w-4 h-4" />
            </a>
            <a href='https://www.linkedin.com/in/rautshubham280/'
                target='_blank'
                rel='noopener noreferrer'
                className="px-8 py-4 rounded-full backdrop-blur-xl bg-[#111111]/70 border border-white/[0.08] hover:border-cyan-400/50 transition-all flex items-center gap-2"
            >
                <Linkedin className="w-4 h-4" />
            </a>
            <a href='https://leetcode.com/u/Shubham223/'
                target='_blank'
                rel='noopener noreferrer'
                className="px-8 py-4 rounded-full backdrop-blur-xl bg-[#111111]/70 border border-white/[0.08] hover:border-cyan-400/50 transition-all flex items-center gap-2"
            >
                <SiLeetcode className="w-4 h-4" />
            </a>
        </>
    )
}

export default Socials