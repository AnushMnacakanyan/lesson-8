import { useNavigate } from "react-router-dom"
import { createAddUser } from "../lib/Api"
import { IUser, IUserForm } from "../lib/types"
import { useForm } from "react-hook-form"


export const AddUser = () => {
    const { register,  handleSubmit, formState: { errors } } = useForm<IUserForm>()
    const navigate = useNavigate()

    const handleAddUser = async (data: IUser) => {
        await createAddUser(data)
        navigate("/")
    }
    return <div>
        <form onSubmit={handleSubmit(handleAddUser)}>
            <input
                type="text"
                placeholder="Add your name"
                {
                ...register("name", {
                    required: "Please enter your name"
                })} />
            {errors.name && <p style={{ color: "red" }}>{errors.name.message}</p>}
            <input
                type="text"
                placeholder="Add your surname"
                {
                ...register("surname", {
                    required: "Please enter your surname"
                })
                }
            />
            {errors.surname && <p style={{ color: "red" }} >{errors.surname.message}</p>}
            <input
                type="number"
                placeholder="Add your age"
                {
                ...register("age", {
                    required: "Please enter your age"
                })
                }
            />
            {errors.age && <p style={{ color: "red" }} >{errors.age.message}</p>}
            <input
                type="number"
                placeholder="Add your salary"
                {
                ...register("salary", {
                    required: "Please enter  your salary"
                })
                }
            />
            {errors.salary && <p style={{ color: "red" }} >{errors.salary.message}</p>}
            <button>Add User</button>

        </form>
    </div>
}
