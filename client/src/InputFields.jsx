import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useState,useEffect } from "react";

const InputField = () => {
  const [data,setData] = useState('')
  const postData = (e) =>{
    //alert('Button clicked')
    e.preventDefault();
    axios.post("http://localhost:5000/api/v1/tasks",{
      name:data
    })
    setData('')
    window.location.reload(false)
  }
  return (
    <>
      <div className="flex">
        <form className="border m-1 flex-initial">
          <input
            type="text"
            value={data}
            onChange={(e)=>setData(e.target.value)}
            placeholder=" e.g. Wash dishes"
            className="p-1"
          />
        </form>
        <button type="submit" onClick={postData} className="bg-violet-500 px-2.5 my-1 rounded flex-non">
          <FontAwesomeIcon icon={faPlus} className="text-white" />
        </button>
      </div>
    </>
  );
};

export default InputField;
