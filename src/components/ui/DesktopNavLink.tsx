type DesktopNavLinkProps = {
  children: React.ReactNode;
  href: string;
}

function DesktopNavLink({children, href}: DesktopNavLinkProps) {
  return (
    <li>

      <a href={href}
        className='p-1.5 border-2 rounded-button flex items-center gap-x-2 transition-all ease-in-out duration-300 bg-secondary/20 border-secondary hover:bg-secondary/50 hover:-translate-y-0.5'>
        {children}
      </a>
    </li>
  )
}

export default DesktopNavLink;
