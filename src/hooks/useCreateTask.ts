import { toast } from "react-toastify"

import { createTaskServices } from "@/services/task-services"

export const useCreateTask = () => {

    const createTask = async ({ title }: { title: string }) => {
        try {

            await createTaskServices({ title })

            toast("task created")

        } catch (error: any) {

            toast(error.message ? error.message : 'error in create task')

        }
    }

    return {
        createTask
    }
}