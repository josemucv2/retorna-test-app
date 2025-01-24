import { InputItem, Card, Filters } from "@/components"

import { useListTask } from "@/hooks/useListTask"
import { useTaskDelete } from "@/hooks/useDeleteTask";
import { debounce } from "lodash";
import { useMemo, useState } from "react";
import { useCreateTask } from "@/hooks/useCreateTask";
import { useUpdateTask } from "@/hooks/useUpdateTask";
import { useStoreTask } from "@/stores/list-task";



export const Home = () => {
    const [newTask, setNewTask] = useState('')
    const { list } = useStoreTask()

    const { getListTask, load } = useListTask()
    const { createTask } = useCreateTask()
    const { updateTask } = useUpdateTask()
    const { deleteTask } = useTaskDelete()



    const debouncedCreateTask = useMemo(
        () =>
            debounce(async (taskName: string) => {
                await createTask({ title: taskName });
                setNewTask('')
                getListTask('')
            }, 1500),
        []
    );

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const taskName = e.target.value;
        setNewTask(taskName);
        debouncedCreateTask(taskName);
    };

    return (
        <div className="text-white space-y-5 h-full w-full">
            <Card>
                <InputItem
                    taskName={newTask}
                    onChange={handleInputChange}
                />
            </Card>
            {load && <div>Cargando...</div>}
            {list.length === 0 && !load && <div className="text-center">No ha registrado ninguna tarea</div>}
            {!load && <Card>
                {list.map((item, i) => {

                    const isLastItem = i === list.length - 1

                    return (
                        <div key={item.id} className={`${!isLastItem ? 'border-b-[0.6px] border-slate-600' : ''}`}>
                            <InputItem
                                taskName={item.title}
                                isCompleted={item.completed}
                                onToggleComplete={async () => {
                                    await updateTask(item.id, item.completed)
                                    getListTask('')
                                }
                                }
                                onDelete={async () => {
                                    await deleteTask(item.id)
                                    getListTask('')
                                }}
                            />
                        </div>
                    )
                })}
            </Card>}
            <Filters />

        </div>
    )
}
