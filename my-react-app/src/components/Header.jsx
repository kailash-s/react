import Menu from "./Menu"

export default function Header(props) {
  const random = props.random;
  return <header>
      <p>Header coming from components</p>
      <Menu/>
      <p>Random number: {random}</p>
  </header>
}