import Button from "../components/button";
import PlusIcon from "../assets/icons/plus.svg?react"
import TaskItem from "./task-item";
import useTasks from "../hooks/use-tasks";
import usetask from "../hooks/use-task";
import { TaskState, type Task } from "../models/task";

export default function TasksList(){
    const {tasks, isLoadingTasks} = useTasks();
    const {prepareTask} = usetask();
    
    return(
        <>
        <section>
        <Button disabled={tasks.some((task)=> task.state === TaskState.Creating) || isLoadingTasks } icon={PlusIcon} className="w-full" onClick={prepareTask}>Nova tarefa</Button>
        </section>
        <section className="space-y-2">
            {!isLoadingTasks && tasks.map((item)=>(
                <TaskItem key={item.id} task={item}/>
            ))}
            {isLoadingTasks && <>
                 <TaskItem task={{} as Task} loading/>
                 <TaskItem task={{} as Task} loading/>
                 <TaskItem task={{} as Task} loading/>
            </>}
         </section>
        </>
    );
}