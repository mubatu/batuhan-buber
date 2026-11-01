import { SiReact, SiDotnet, SiThreedotjs, SiUnity, SiHtml5, SiJavascript } from 'react-icons/si';
import { VscTerminalPowershell } from 'react-icons/vsc';
import { TbBrandCSharp, TbDatabase } from 'react-icons/tb';
import { type IconType } from 'react-icons';
import { PiFileSql } from 'react-icons/pi';
import { DiIllustrator, DiPhotoshop } from 'react-icons/di';
import pixijsLogo from '../assets/pixijs.jpg?url';
import polygunArenaLogo from '../assets/polygun-arena.png?url';

// Technology icon mapping
const techIcons: Record<string, IconType> = {
  'React': SiReact,
  '.NET Core': SiDotnet,
  'MS SQL Server': TbDatabase,
  'PowerShell': VscTerminalPowershell,
  'SQL': PiFileSql,
  'Adobe Photoshop': DiPhotoshop,
  'Adobe Illustrator': DiIllustrator,
  'HTML/CSS': SiHtml5,
  'JavaScript': SiJavascript,
  'Three.js': SiThreedotjs,
  'Unity': SiUnity,
  'C#': TbBrandCSharp,
};

// Image icons for tags without a matching react-icon
const techImages: Record<string, string> = {
  'PixiJS': pixijsLogo,
  'Polygun Arena': polygunArenaLogo,
};

export default function TechTag({ name }: { name: string }) {
  const Icon = techIcons[name];
  const image = techImages[name];
  return (
    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium text-(--color-text-primary) bg-(--color-bg-secondary) rounded transition-transform duration-200 hover:scale-[1.03]">
      {Icon && <Icon className="w-3 h-3" />}
      {image && <img src={image} alt="" className="w-3 h-3 rounded-xs" />}
      {name}
    </span>
  );
}
