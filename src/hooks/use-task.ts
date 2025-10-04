import useLocalStorage from "use-local-storage";
import { TASKS_KEY, TaskState, type Task } from "../models/task";
import { delay } from "../helpers/utils";
import React from "react";

export default function usetask(){
    const [tasks, setTasks] = useLocalStorage<Task[]>(TASKS_KEY, []);
    const [isUpdatingTask, setIsUpdatingTask] = React.useState(false);
    const [isDeletingTask, setIsDeletingTask] = React.useState(false);
    function prepareTask(){
        setTasks([...tasks, {
            id: Math.random().toString(36).substring(2, 9),
             title:"" ,
             state: TaskState.Creating
        }]);
    }

    async function updateTask(id: string, payload:{ title: Task["title"]}){
        setIsUpdatingTask(true);
        await delay(1000);
        
        setTasks(
            tasks.map((item)=>(
                item.id === id? {...item, state: TaskState.Created, ...payload}: item
            ))
        );
        setIsUpdatingTask(false);
    }

    function updateTaskStatus(id: string, concluded: boolean){
        setTasks(
            tasks.map((item)=>(
                item.id === id ? {...item, concluded } : item
            ))
        );
    }
    
    async function deleteTask(id: string){
        setIsDeletingTask(true);
        await delay(1000);
        setTasks(tasks.filter((item)=> item.id !== id));
        setIsDeletingTask(false);
    }
  
    return{
        prepareTask,
        updateTask,
        updateTaskStatus,
        deleteTask,
        isUpdatingTask,
        isDeletingTask
    }
}