import { useState } from "react";
import { Card } from "../Card";

import { useListTask } from "@/hooks/useListTask";

import { useStoreTask } from "@/stores/list-task";
import { useDarkMode } from "@/context/dark-mode-provider";

import styles from './styles.module.scss';
import { useTaskDelete } from "@/hooks/useDeleteTask";

export const Filters = () => {
    const { getListTask, } = useListTask();
    const { deletedCompleteTask } = useTaskDelete()
    const [activeFilter, setActiveFilter] = useState<number>(0);
    const { list } = useStoreTask()
    const { isDarkMode } = useDarkMode()

    const filters = [
        { label: "All", value: 0, taskParam: '' },
        { label: "Active", value: 1, taskParam: false },
        { label: "Completed", value: 2, taskParam: true },
    ];

    const handleFilterClick = (filterValue: number, taskParam: any) => {
        setActiveFilter(filterValue);
        getListTask(taskParam);
    };

    return (
        <Card>
            <div className="flex  items-center w-full justify-between px-4">
                <div className={styles.item}>{list.length} Item Left</div>
                <ul className={styles.last_item}>
                    {filters.map(({ label, value, taskParam }) => (
                        <li
                            key={value}
                            className={`
                                ${value === activeFilter ? styles.active : ''} 
                                ${styles.item} 
                                ${isDarkMode ? 'hover:text-white' : 'hover:text-black'} 
                                cursor-pointer`
                            }
                            onClick={() => handleFilterClick(value, taskParam)}
                        >
                            {label}
                        </li>
                    ))}
                </ul>
                <div className={`
                    ${styles.item} 
                    ${isDarkMode ? 'hover:text-white' : 'hover:text-black'} 
                    cursor-pointer`}
                    onClick={async () => {
                        await deletedCompleteTask()
                        getListTask('')
                    }}
                >
                    Clear Completed
                </div>
            </div>
        </Card>
    );
};
