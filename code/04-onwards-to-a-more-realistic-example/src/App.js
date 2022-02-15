import React, { useEffect, useState, useCallback } from 'react';

import Tasks from './components/Tasks/Tasks';
import NewTask from './components/NewTask/NewTask';
import useHttp from './hooks/use-http'

function App() {
  const [tasks, setTasks] = useState([]);

  const { isLoading, error, sendReq: fetchTasks } = useHttp();

  const transformTasks = (tasksObj) => {
    const loadedTasks = [];

    for (const taskKey in tasksObj) {
      loadedTasks.push({ id: taskKey, text: tasksObj[taskKey].text });
    }

    setTasks(loadedTasks);
  };

  const fetch = useCallback(() => {
    fetchTasks(
      { url: 'https://react-http-c381d-default-rtdb.firebaseio.com/tasks.json' },
      transformTasks
    );
  }, []);
  
  useEffect(() => {
    fetch()
  }, []);

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
      <button onClick={fetch}>reload</button>

    </React.Fragment>
  );
}

export default App;
