import { FaEnvelope, FaFacebook, FaGithub } from "react-icons/fa";


const Footer = () => {
    return (
        <div>
             <div className="relative bg-card/25 text-sm py-6 border-t border-t-card z-40">
      <div className="container mx-auto px-4 text-center">
        <p className="text-gray-300">
          &copy; 2024 Asad Atik | Front-end Developer. All rights reserved.
        </p>
        <div className="flex w-fit px-10 mx-auto border-t border-card pt-2 mt-2 text-gray-400 justify-center gap-4 z-10">
          <a
            href="https://www.facebook.com/profile.php?id=100085206032914"
            target="_blank"
            aria-label="Facebook"
          >
            <FaFacebook className="text-xl hover:text-primary transition-colors z-10" />
          </a>
         
          <a
            href="https://github.com/asadatik"
            target="_blank"
            aria-label="GitHub"
          >
            <FaGithub className="text-xl hover:text-primary transition-colors z-10" />
          </a>
          <a href="mailto:asadatik1995@gmail.com" aria-label="Email">
            <FaEnvelope className="text-xl hover:text-primary transition-colors z-10" />
          </a>
        </div>
      </div>
    </div>
        </div>
    );
};

export default Footer;