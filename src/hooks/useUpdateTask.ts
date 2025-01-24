import { updateTaskServices } from "@/services/task-services"
import { toast } from "react-toastify"


export const useUpdateTask = () => {


    const updateTask = async (taskId: number, completed: boolean) => {
        try {

            await updateTaskServices({ id: taskId, completed: !completed })

            toast("task updated")

        } catch (error: any) {

            toast(error.message ? error.message : 'error in create task')

        }
    }


    return {
        updateTask
    }
}