import Menu from "./Menu"

export default function Header({
  name
}) {
  return <header>
    <Menu {...{ name }}/>
    {name}
  </header>
}