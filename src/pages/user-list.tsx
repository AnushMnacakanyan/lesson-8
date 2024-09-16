import { useEffect, useState } from "react"
import { IUser } from "../lib/types"
import { deleteUser, getUsers } from "../lib/Api";
import { Link } from "react-router-dom";

export const UserList = () => {
    const [users, setUsers] = useState<IUser[]>([])

    useEffect(() => {
        const getUser = async () => {
            const usersData = await getUsers();
            setUsers(usersData);
        };
        getUser();
    }, []);

    const handleDelete = async (id: number) => {
        await deleteUser(id)
        setUsers([...users.filter(user => user.id !== id)])
    }

    return <div>
        {
            users.map(user =>
                <div key={user.id}>
                    <h4>{user.name}</h4>
                    <h4>{user.surname}</h4>
                    <p>{user.age}</p>
                    <p>{user.salary}</p>
                    <button onClick={() => handleDelete(user.id)}>Delete</button>
                    <Link to={"/user/" + user.id}>EDIT</Link>
                </div>
            )
        }
    </div>
}
