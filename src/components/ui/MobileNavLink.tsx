type MobileNavLinkProps = {
  children: React.ReactNode;
  href: string;
}



function MobileNavLink({children , href}: MobileNavLinkProps) {
  return (
    <li>
      {/** TODO: Add active state later */}
      <a href={href} className='p-2 border rounded-button flex items-center  transition-all ease-in-out duration-300 bg-secondary/20 border-secondary'>
        {children}
      </a>
    </li>
  )
}


export default MobileNavLink;
