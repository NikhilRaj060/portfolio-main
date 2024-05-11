import { SiLeetcode , SiCodechef } from "react-icons/si";
import { FaGithub , FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Socials: React.FC<{ hidden: boolean }> = ({ hidden }) => {
  const linkStyle =
    "cursor-pointer text-gray-300 hover:text-white transition-all delay-100";
  return (
    <ul className={`text-xl ${hidden ? "hidden" : "flex"} md:flex gap-4`}>
      <li className={linkStyle}>
        <a
          href="https://github.com/NikhilRaj060"
          target="_blank"
          aria-label="github profile"
        >
          <FaGithub />
        </a>
      </li>
      <li className={linkStyle}>
        <a
          href="https://www.linkedin.com/in/nikhil-raj-mfp3001/"
          target="_blank"
          aria-label="linkedin profile"
        >
          <FaLinkedin />
        </a>
      </li>
      <li className={linkStyle}>
        <a
          href="https://leetcode.com/u/codedreamer_nr3001/"
          target="_blank"
          aria-label="instagram profile"
        >
          <SiLeetcode />
        </a>
      </li>
      <li className={linkStyle}>
        <a
          href="https://www.codechef.com/users/peace12345"
          target="_blank"
          aria-label="instagram profile"
        >
          <SiCodechef />
        </a>
      </li>
      <li className={linkStyle}>
        <a
          href="https://twitter.com/NikhilR2061"
          target="_blank"
          aria-label="twitter profile"
        >
          <FaXTwitter />
        </a>
      </li>
    </ul>
  );
};

export default Socials;
