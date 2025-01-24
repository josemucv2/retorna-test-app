import { ITask } from '@/interfaces/ITask'
import { Fetchify } from '@jmfetchify/fetchify'

const API = Fetchify.create({ baseURL: 'http://localhost:3000/api' })

export const createTaskServices = async ({ title }: { title: string }) => {
    return await API.POST({ endpoint: 'tasks/create', body: { title } })
}

export const listTaskServices = async (completed?: boolean | string) => {
    return await API.GET<ITask[]>({ endpoint: `tasks?completed=${completed}` })
}

export const updateTaskServices = async ({ id, completed }: Partial<ITask>) => {
    return await API.PUT({ endpoint: `task?id=${id}`, body: { completed } })
}

export const deleteTaskServices = async ({ taskId }: { taskId: number }) => {
    return await API.DELETE({ endpoint: `task?id=${taskId}` })
}

export const deleteTaskCompletedServices = async () => {
    return await API.DELETE({ endpoint: 'tasks' })
}

