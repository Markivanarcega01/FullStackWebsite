import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faPenToSquare,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import axios from "axios";

const Tasks = () => {
  //Content of the Unordered list
  const [data, setData] = useState([]);
  const Displayer = ({ data }) => {
    const [taskDone, setTaskDone] = useState(false);
    const onclick = () => {
      setTaskDone(true)
      taskCompleted(data._id)};
    return (
      <div className={data.completed?'line-through':null}>
        {data.name}
        {/* Check Button */}
        <div className="absolute top-0 right-9 w-8 h-8 bg-blue-500 rounded">
          <button className="absolute inset-0">
            <FontAwesomeIcon
              icon={faCheck}
              className="text-white"
              onClick={onclick}
            />
          </button>
        </div>
        {/* Delete Button */}
        <div className="absolute top-0 right-0 h-8 w-8 bg-red-500 rounded">
          <button
            className="absolute inset-0"
            onClick={(e) => deleteTask(data._id, e)}>
            <FontAwesomeIcon icon={faTrash} className="text-white" />
          </button>
        </div>
      </div>
    );
  };
  //Popup input field for edit
  // const InputField = ({ data, setResults }) => (
  //   <div className="flex mt-2">
  //     <form className="border m-1 flex-initial">
  //       <input type="text" placeholder=" e.g. Wash dishes" className="p-1" />
  //     </form>
  //     <button
  //       type="submit"
  //       className="bg-violet-500 px-2.5 my-1 rounded flex-non"
  //     >
  //       <FontAwesomeIcon icon={faCheck} className="text-white" />
  //     </button>
  //   </div>
  // );
  //Show all tasks
  useEffect(async() => {
    await axios
      .get("https://to-do-app-1p9h.onrender.com/api/v1/tasks")
      .then((res) => {
        console.log(res.data);
        setData(res.data); // sets the data to the useState
      })
      .catch((err) => console.log(err));
  }, []);
  const deleteTask = async(id, e) => {
    //e.preventDefault() pang prevent para hindi mangyare yung event pag hindi kailangan
    await axios
      .delete(`https://to-do-app-1p9h.onrender.com/api/v1/tasks/${id}`)
      .catch((error) => console.log(error));
    window.location.reload(false)
  };
  const deleteAll = async() =>{
    await axios
      .delete(`https://to-do-app-1p9h.onrender.com/api/v1/tasks`)
      .catch((error) => console.log(error));
    window.location.reload(false)
  }
  const taskCompleted = async(data) => {
    //e.preventDefault() pang prevent para hindi mangyare yung event pag hindi kailangan
    //alert(data._id)
    await axios
      .patch(`https://to-do-app-1p9h.onrender.com/api/v1/tasks/${data}`, {
        completed: true,
      })
      .catch((error) => console.log(error));
      window.location.reload(false);
  };
  const allTasks = data.map((data) => {
    return (
      <li key={data._id} className="my-1 bg-slate-200 p-1 relative">
        <Displayer data={data}></Displayer>
      </li>
    );
  });
  //show all tasks end
  return (
    <>
      <div className="container">
        <ul className="text-left p-1">{allTasks}</ul>
        <div className="flex gap-2 text-xs ">
          <p className="p-2 m-1 ">You have {data.length} pending tasks</p>
          <button className=" text-white bg-violet-500 px-2 rounded my-2" onClick={deleteAll}>
            Clear all
          </button>
        </div>
      </div>
    </>
  );
};

export default Tasks;
