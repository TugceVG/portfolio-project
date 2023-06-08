import "./menu.scss";


export default function Menu({ menuOpen, setMenuOpen, sideBar }) {
    return (
        <div className={"menu " + (menuOpen && "active")}>
            <ul>
                {sideBar.map((menuItem) => (<li key={menuItem.id} onClick={() => setMenuOpen(!menuOpen)}>
                    <a href={menuItem.id}>{menuItem.title}</a>
                </li>))}
            </ul>
        </div>
    )
}
