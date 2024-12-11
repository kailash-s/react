import Menu from "./Menu"

export default function Header({
  children
}) {
  return <header>
    <div>this is my header</div>
    <div className="bg-yellow-500 p-4">
      {children}
    </div>
  </header>
}