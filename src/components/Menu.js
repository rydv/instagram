import "../styles/menu.scss"
import {ReactComponent as Home} from "../images/home.svg";
import {ReactComponent as Inbox} from "../images/inbox.svg";
import {ReactComponent as Explore} from "../images/explore.svg";
import {ReactComponent as Notification} from "../images/notifications.svg";

function Menu () {
    return (<div className="menu">
        <Home className='icon' />
        <Inbox className="icon" />
        <Explore className="icon" />
        <Notification className="icon" />
    </div>)
}

export default Menu;