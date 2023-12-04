import {useAppDispatch, useAppSelector} from "../../hooks";
import {fetchUsers, usersSlice} from "../../slices/users.slice";
import {useEffect, useState} from "react";
export const useFetchUsers = () => {
    const dispatch = useAppDispatch();
    const { users, status } = useAppSelector(state => state.users);
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        dispatch(fetchUsers());
    }, []);

    useEffect(() => {
        if(status === 'loading'){
            setIsLoading(true);
        }else{
            setIsLoading(false);
        }
    }, [status]);

    return {
        users,
        isLoading
    }
}