import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { IUserForm } from "../lib/types"
import { useForm } from "react-hook-form"
import { getUserById, updateUser } from "../lib/Api"

export const User = () => {
    const { id } = useParams<{ id: number | string }>()
    const [value, SetValue] = useState<IUserForm | undefined>(undefined)
    const { register, handleSubmit, reset, formState: { errors } } = useForm<IUserForm>();
    const navigate = useNavigate();

    useEffect(() => {
        const getUser = async () => {
            if (id) {
                const user = await getUserById(Number(id));
                SetValue(user);
                reset();
            }
        };
        getUser();
    }, [id, reset]);

    const handleUpdateUser = async (data: IUserForm) => {
        if (id) {
            await updateUser(Number(id), { ...data, id: Number(id) });
            navigate("/");
        }
    };

    return <div className="container" >
        <form onSubmit={handleSubmit(handleUpdateUser)}>
            <input
                type="text"
                placeholder="Add your name"
                defaultValue={value?.name}
                {
                ...register("name", {
                    required: "Please enter your name",

                })} />
            {errors.name && <p style={{ color: "red" }}>{errors.name.message}</p>}
            <input
                type="text"
                placeholder="Add your surname"
                defaultValue={value?.surname}
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
                defaultValue={value?.age}
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
                defaultValue={value?.salary}
                {
                ...register("salary", {
                    required: "Please enter  your salary"
                })
                }
            />
            {errors.salary && <p style={{ color: "red" }} >{errors.salary.message}</p>}
            <button>Update User</button>

        </form>
    </div>
}
