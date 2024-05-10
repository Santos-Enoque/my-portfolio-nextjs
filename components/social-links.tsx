// Define the SocialLinkProps interface
interface SocialLinkProps {
  href: string;
  icon: React.ElementType;
  label: string;
}

// Define the SocialLink component
const SocialLink: React.FC<SocialLinkProps> = ({ href, icon: Icon, label }) => (
  <a
    href={href}
    target="_blank"
    className="flex items-center justify-center bg-white p-4 rounded-full focus:scale-110 hover:scale-110 active:scale-105 transition-all group broder border-black/10 hover:text-gray-950"
  >
    <Icon />
    <span className="sm:hidden ml-3">{label}</span>
  </a>
);

export default SocialLink;
