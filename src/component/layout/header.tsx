
interface HeaderProps {
  title: string,
}
const Header = (props: HeaderProps) => {
  return (
    <header className="layout-header" style={{margin: 0}}>
      <h2 className="layout-heading" style={{margin: 0}}>
      My App
      </h2>
    </header>
  )
}

export default Header;
