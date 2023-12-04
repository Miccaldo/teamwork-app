import {UsersTable} from "../../components/Users/UsersTable/UsersTable";
import {Outlet} from "react-router-dom";

const Users = () => {
    return (
        <div className="mt-10 w-fit mx-auto">
            <h1 className="header">Teamwork app</h1>
            <section className="relative w-fit">
                <UsersTable />
                <Outlet />
            </section>
        </div>
    );
}

export default Users;
