import "../css/nav.css"
import { PageProps } from "../functions/types"

const Nav = (props: PageProps) => {
  return (
    <div className="nav" onClick={() => props.switchTo("main")}>
      <img src="/images/logo.jpg" alt="Logo"></img>
      <div className="nav-name">LostButFound</div>
    </div>
  )
}

export { Nav }