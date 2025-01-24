import iconCheck from "@/assets/images/icon-check.svg";
import iconCross from "@/assets/images/icon-cross.svg";
import styles from './styles.module.scss';

interface InputItemProps {
    taskName: string;
    isCompleted?: boolean;
    onToggleComplete?: () => void;
    onDelete?: () => void;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputItem: React.FC<InputItemProps> = ({ taskName, isCompleted, onToggleComplete, onDelete, onChange }) => {
    return (
        <div className={styles.container_input}>
            <div onClick={onToggleComplete} className={`${isCompleted ? styles.icon_active : styles.icon_inActive} cursor-pointer`}>
                {isCompleted && <img src={iconCheck} alt="Check" />}
            </div>

            <input
                type="text"
                value={taskName}
                onChange={onChange}
                className={`${isCompleted ? 'line-through' : ''} ${styles.input}`}
                placeholder="Write your task here..."
            />

            {onDelete && (
                <div onClick={onDelete} className="cursor-pointer">
                    <img src={iconCross} width={15} height={15} alt="Delete" />
                </div>
            )}
        </div>
    );
};
