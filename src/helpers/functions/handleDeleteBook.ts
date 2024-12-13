import { toast } from "react-toastify";


export default function handleDeleteBook (id:number) {
    toast.error(`book with id ${id} has been deleted` )
}