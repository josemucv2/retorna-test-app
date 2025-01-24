import { ITask } from '@/interfaces/ITask'
import { create } from 'zustand'

interface IStoreTask {
    list: ITask[]
    setList: (list: ITask[]) => void
}


export const useStoreTask = create<IStoreTask>((set) => ({
    list: [],
    setList: (list: ITask[]) => set({ list })
}));