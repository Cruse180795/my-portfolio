type MobileNavLinkProps = {
  children: React.ReactNode;
  href: string;
}



function MobileNavLink({children , href}: MobileNavLinkProps) {
  return (
    <li>
      {/** TODO: Add active state later */}
      <a href={href} className="p-2 border rounded-button flex items-center bg-neutral border-neutral">
        {children}
      </a>
    </li>
  )
}


export default MobileNavLink;
