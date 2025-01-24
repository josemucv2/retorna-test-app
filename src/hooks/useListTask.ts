import { useEffect, useState } from "react"

import { listTaskServices } from "@/services/task-services"
import { useStoreTask } from "@/stores/list-task"
import { toast } from "react-toastify"

export const useListTask = () => {
    const { setList } = useStoreTask()

    const [load, setLoad] = useState(false)

    const getListTask = async (completed?: boolean | string) => {

        setLoad(true)

        try {

            const data = await listTaskServices(completed)

            setList(data)
            setLoad(false)


        } catch (error: any) {
            toast(error.message ? error.message : 'error in get list task')

            setLoad(false)

        }
    }


    useEffect(() => {
        getListTask('')
    }, [])

    return {
        load,
        getListTask
    }
}