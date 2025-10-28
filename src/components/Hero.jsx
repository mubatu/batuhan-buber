import { Fragment } from 'react';
import { FaLinkedin, FaGithub, FaXTwitter, FaInstagram, FaSteam } from 'react-icons/fa6';
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
    <section className="flex justify-start h-screen max-w-4xl mx-auto px-6 pt-50">
      <div className="flex flex-col md:flex-row items-start gap-12">
        <div className="md:flex-1">
          <h1 className="text-4xl mb-6" style={{ color: 'var(--color-text-primary)' }}>
            About
          </h1>
          <p className="text-lg leading-relaxed mb-12" style={{ color: 'var(--color-text-primary)' }}>
          I believe my greatest strengths are always asking questions, never doing things halfway, and having an eye for design.<br /><br />
          Outside of work, I love games, sports, movies, and photography.
          </p>
          <div className="flex items-center gap-4 flex-wrap">
            {socialLinks.map((social, index) => {
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
                  {index < socialLinks.length - 1 && (
                    <span style={{ color: 'var(--color-text-secondary)' }}>-</span>
                  )}
                </Fragment>
              );
            })}
          </div>
        </div>
        <div className="shrink-0 mx-auto md:mx-0">
          <img 
            src={meImage.src} 
            alt="Batuhan Buber" 
            className="rounded-full w-70 h-70 object-cover"
          />
        </div>
      </div>
    </section>
  );
}
  