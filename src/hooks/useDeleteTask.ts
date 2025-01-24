import { deleteTaskCompletedServices, deleteTaskServices } from "@/services/task-services"
import { toast } from "react-toastify"


export const useTaskDelete = () => {

    const deleteTask = async (taskId: number) => {
        try {

            await deleteTaskServices({ taskId })

            toast("task deleted")

        } catch (error: any) {

            toast(error.message ? error.message : 'error in create task')

        }
    }

    const deletedCompleteTask = async () => {
        try {

            await deleteTaskCompletedServices()

            toast("all task completed cleared")

        } catch (error: any) {

            toast(error.message ? error.message : 'error in create task')

        }
    }

    return {
        deleteTask,
        deletedCompleteTask
    }
}