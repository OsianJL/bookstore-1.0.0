import { toast } from "react-toastify";

export default function handleEditBook (id:number) {
    toast.info(`book with id ${id} has been edited` )
}