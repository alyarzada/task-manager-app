import { Outlet } from "react-router-dom";
import Header from './header/Header'

const Layout = ({setData}) => {
    return (
        <div >
            <Header setData={setData}/>
            <Outlet />
        </div>
    )
}

export default Layout
