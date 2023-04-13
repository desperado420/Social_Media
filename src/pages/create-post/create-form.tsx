import {useForm} from "react-hook-form"
import * as yup from "yup"
import {yupResolver} from "@hookform/resolvers/yup"
import {addDoc, collection} from "firebase/firestore"
import { auth,db } from "../../config/firebase"
import { useAuthState } from "react-firebase-hooks/auth"
import {useNavigate,Link} from "react-router-dom"

interface CreateFormData{
    title: string
    description: string
}

export const CreateForm=()=>{
    const [user]=useAuthState(auth)
    const navigate = useNavigate()

    const schema= yup.object().shape({
        title: yup.string().required("Add something fucker"),
        description: yup.string().required("Add desc fucker...")
    })

    const {register, handleSubmit,formState:{errors}} = useForm<CreateFormData>({
        resolver: yupResolver(schema),

    })

    const postsRef=collection(db,"posts")

    const onCreatePost=async(data:CreateFormData)=>{
        console.log(data)
        await addDoc(postsRef,{
            ...data,
            username: user?.displayName,
            userId: user?.uid
        })
        navigate('/')
    }   

    return (
        <div>
            <form onSubmit={handleSubmit(onCreatePost)}>
                <input placeholder="Title" {...register("title")} />
                <p style={{color:"red"}} >{errors.title?.message}</p>
                {/* //TypeScript helped me locate an error */}
                <textarea placeholder="Description" {...register("description")} />
                <p style={{color:"red"}} >{errors.description?.message}</p>
                <input type="submit" className="submitForm"/>
            </form>
        </div>
    )
}