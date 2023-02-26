import { PageProps } from "../functions/types"

const Main = (props: PageProps) => {
  return (
    <>
      <img src="/images/logo.jpg" alt="logo.jpg"/>
      <h1>LostButFound</h1>
      <div className="app-options">
        <div className="app-option" onClick={() => props.switchTo("lost")}> I lost an item</div>
        <div className="app-option" onClick={() => props.switchTo("found")}>I found an item</div>
      </div>
    </>
  )
}

export { Main }