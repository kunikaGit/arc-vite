import useApiRequest from "../../hook/useApiRequest";

import { useNavigate } from "react-router-dom";
import { API_ENDPOINTS } from "../../constants/endPoints";


const useStatusUtils = () => {

  const navigate = useNavigate();
  const { loading, fetchData } = useApiRequest();

  const updateStatusApi=async(status,data)=>{
    try{
      let id= localStorage.getItem("session_id")
      let payload={status,id,data}

            const updateStatusRes = await fetchData(API_ENDPOINTS.updateStatus, navigate, "POST",payload);
            if (updateStatusRes?.success || updateStatusRes?.status) {
              localStorage.removeItem("session_id"); // ✅ Correct way to remove it
              // optionally show a success message or trigger any state update
            }
          
          }catch(error){
console.log(error)
    }
  }

  return{updateStatusApi}
};

export default useStatusUtils;
