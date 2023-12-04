import {useFetchUsers} from "../../../talons/Users/useFetchUsers";
import {useUserList} from "../../../talons/Users/useUserList";
import {TableSkeleton} from "../TableSkeleton/TableSkeleton";
import {Loading} from "../../Loading/Loading";

export const UsersTable = () => {
    const { users, isLoading } = useFetchUsers();
    const { handleClick } = useUserList();
    const headerStructure = ['name', 'height', 'mass', 'created', 'edited', 'homeworld'];
    const TableHead = () => {
        return (
            <thead className="bg-slate-600 text-white">
                <tr>
                    {headerStructure.map((item, index) =>
                            <th className="border border-slate-600 font-medium" key={index}>{item}</th>
                    )}
                </tr>
            </thead>
        )
    }

    const TableBody = () => {
        return (
            <tbody className="text-slate-500">
                {users.results.map((user, userIndex) => (
                    <tr className="hover:cursor-pointer hover:bg-slate-700" key={userIndex} onClick={() => handleClick(user.homeworld)}>
                        {headerStructure.map((item, index ) => {
                            const userKey = (item as keyof typeof user);
                            return (
                                <td className="border border-slate-600" key={`${user.name}_${index}`}>
                                    {user[userKey]}
                                </td>
                            )
                        })}
                    </tr>
                    )
                )}
            </tbody>
        )
    }

    return (
        <div className="min-h-[488px] overflow-x-auto">
            {!isLoading && users.results.length > 0 ?
                <table className="w-full bg-slate-800 border-separate border border-slate-500">
                <TableHead />
                <TableBody />
            </table> : <TableSkeleton />}
            <Loading isLoading={isLoading}></Loading>
        </div>
    )
}