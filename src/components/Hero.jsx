import { Fragment } from 'react';
import { FaLinkedin, FaGithub, FaXTwitter, FaInstagram, FaSteam, FaBehance } from 'react-icons/fa6';
import { SiLetterboxd } from 'react-icons/si';
import meImage from '../assets/me.jpg';

const socialLinks = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/batuhanbuber/",
    Icon: FaLinkedin
  },
  {
    name: "GitHub",
    url: "https://github.com/mubatu",
    Icon: FaGithub
  },
  {
    name: "X",
    url: "https://twitter.com/batububer",
    Icon: FaXTwitter
  },
  {
    name: "Instagram",
    url: "https://instagram.com/batuhanbuber",
    Icon: FaInstagram
  },
  {
    name: "Behance",
    url: "https://www.behance.net/mubatu",
    Icon: FaBehance
  },
  {
    name: "Steam",
    url: "https://steamcommunity.com/id/mubatu",
    Icon: FaSteam
  },
  {
    name: "Letterboxd",
    url: "https://letterboxd.com/mubatu",
    Icon: SiLetterboxd
  }
];

export default function Hero() {
  return (
    <section className="flex justify-start h-screen max-w-4xl mx-auto px-6 pt-40">
      <div className="flex flex-col md:flex-row items-start gap-12">
        <div className="md:flex-1">
          <p className="text-lg leading-relaxed mb-12" style={{ color: 'var(--color-text-primary)' }}>
          I believe my greatest strengths are always keep asking questions, never doing things halfway, and having an eye for design.<br /><br />
          Outside of work, I love games, sports, movies, and photography.
          </p>
          <div className="flex flex-col gap-4">
            {/* First row: 4 links */}
            <div className="flex items-center justify-center gap-4">
              {socialLinks.slice(0, 4).map((social, index) => {
                const IconComponent = social.Icon;
                return (
                  <Fragment key={social.name}>
                    <a 
                      href={social.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="social-icon" 
                      aria-label={social.name}
                    >
                      <IconComponent size={25} />
                    </a>
                    {index < 3 && (
                      <span style={{ color: 'var(--color-text-secondary)' }}>│</span>
                    )}
                  </Fragment>
                );
              })}
            </div>
            {/* Second row: 3 links */}
            <div className="flex items-center justify-center gap-4">
              {socialLinks.slice(4, 7).map((social, index) => {
                const IconComponent = social.Icon;
                return (
                  <Fragment key={social.name}>
                    <a 
                      href={social.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="social-icon" 
                      aria-label={social.name}
                    >
                      <IconComponent size={25} />
                    </a>
                    {index < 2 && (
                      <span style={{ color: 'var(--color-text-secondary)' }}>│</span>
                    )}
                  </Fragment>
                );
              })}
            </div>
          </div>
        </div>
        <div className="shrink-0 mx-auto md:mx-0">
          <img 
            src={meImage.src} 
            alt="Batuhan Buber" 
            className="rounded-full w-75 h-75 object-cover mb-20 md:mb-0 profile-image"
          />
        </div>
      </div>
    </section>
  );
}
  