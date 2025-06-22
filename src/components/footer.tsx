import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-secondary text-white dark:bg-slate-900 py-12">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <div className="text-3xl font-bold mb-4 gradient-text animate-float">Rakesh Sharma</div>
          <p className="text-muted-foreground mb-6">Backend Developer passionate about building scalable solutions</p>

          <div className="flex justify-center space-x-6 mb-8">
            <a
              href="https://www.linkedin.com/in/rakesh-sharma-517589231/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-110"
            >
              <FaLinkedin className="text-2xl" />
            </a>
            <a
              href="https://github.com/Rakesh919"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-110"
            >
              <FaGithub className="text-2xl" />
            </a>
            <a
              href="https://leetcode.com/u/CodingWitha/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-110"
            >
              <SiLeetcode className="text-2xl" />
            </a>
            <a
              href="https://www.instagram.com/rakeshsharma.30"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-110"
            >
              <FaInstagram className="text-2xl" />
            </a>
            <a
              href="mailto:rakesh88577@gmail.com"
              className="text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-110"
            >
              <Mail className="text-2xl" />
            </a>
          </div>

          <div className="border-t border-border pt-8">
            <p className="text-muted-foreground">&copy; 2024 Rakesh Sharma. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
