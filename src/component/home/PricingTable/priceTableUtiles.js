import { useEffect,useState } from "react"
import Joi from "joi";
import { useNavigate } from "react-router-dom";

import { API_ENDPOINTS } from "../../../constants/endPoints";
import useApiRequest from "../../../hook/useApiRequest";
import { successMsg } from "../../../utlis/customFn";
import { useLocation } from 'react-router-dom'; // add this

const usePricingTableUtils = () => {

const location = useLocation();
    
    const { loading, fetchData } = useApiRequest();
    const navigate = useNavigate();
  
    const [twoPhasePlans,setTwoPhasePlans] = useState([])
    const [instantFundingPlans,setInstantFundingPlans] = useState([])

    const fetchApiData = async () => {
        console.log("fetchApiData")
        try {
            const instantFundingRes = await fetchData(API_ENDPOINTS.instantFunding, null, "GET");
            if (instantFundingRes?.data) setInstantFundingPlans(instantFundingRes.data);

            const rwoPhaseRes = await fetchData(API_ENDPOINTS.twoPhase, null, "GET");
            if (rwoPhaseRes?.data) setTwoPhasePlans(rwoPhaseRes.data);
        } catch (error) {
            console.error("Dropdown fetch error", error);
        }
    };

    useEffect(() => {
        alert(3333)
        fetchApiData();
    }, []);

    return {
        twoPhasePlans,
        instantFundingPlans
    };
}

export default usePricingTableUtils
