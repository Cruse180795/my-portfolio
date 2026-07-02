type DesktopNavLinkProps = {
  children: React.ReactNode;
  href: string;
}

function DesktopNavLink({children, href}: DesktopNavLinkProps) {
  return (
    <li>
      {/** TODO: Add active state later and hover states*/}
      <a href={href} className="p-1.5 border-2 rounded-button flex items-center gap-x-2 bg-neutral border-neutral transition-all ease-in-out duration-500">
        {children}
      </a>
    </li>
  )
}

export default DesktopNavLink;
