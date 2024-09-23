import { Outlet } from "react-router-dom";


const Main = () => {
    return (
        <div>
            {/* Navbar */}
            <h2>Main</h2>
            {/* Outlet */}
            <Outlet></Outlet>
            {/* Footer */}
        </div>
    );
};

export default Main;