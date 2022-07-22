import classes from "./Header.module.scss"

function Header() {
  return (
    <>
        <div className={`${classes.headerContainer}`}>
            <h1 className={`${classes.header}`}>To Be Done 📃📃</h1>
        </div>
    </>
  )
}

export default Header