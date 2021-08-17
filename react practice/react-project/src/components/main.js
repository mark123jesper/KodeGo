// import { useState } from 'react';
// import TaskAssignment from './TaskAssignment';
// import TaskDisplay from './TaskDisplay';
import InventoryTrack from "./InventoryTrack";

const Main = () => {

    // const [taskLog, setTaskLog] = useState([]);
    // const addTaskLog = (log) => {
    //     let Logs = [...taskLog, log];
    //     setTaskLog(Logs);
    // }

    return (
        <main className='container'>
            {/* <div className='row'>
                <TaskAssignment addTaskLog={addTaskLog} />
            </div>

            <div className='row'>
                <TaskDisplay list={taskLog} />
            </div> */}
            <InventoryTrack />
        </main>
    );
}

export default Main;