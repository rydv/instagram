import "../styles/navigation.scss";
import {ReactComponent as Logo} from "../images/instagramLogo.svg";
import searchIcon from "../images/searchIcon.webp";
import Menu from "./Menu.js"

function Navigation() {
    return (
        <div className="navigation">
            <div className="container">
                <Logo className="Logo"/>
                <div className="search">
                    <img className="search" src={searchIcon} alt="search icon" />
                    <span className="searchText">Search</span>
                </div>
                <Menu />
            </div>
        </div>
    )
}

export default Navigation;