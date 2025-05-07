import { useEffect, useState } from "react";
import Joi from "joi";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import useApiRequest from "../../hook/useApiRequest";
import { API_ENDPOINTS } from "../../constants/endPoints";
import { validateFormData } from "../../utlis/validation";
import { successMsg,errorMsg } from "../../utlis/customFn";

const useProfileUtils = () => {
  const navigate = useNavigate();
  const { fetchData, loading } = useApiRequest();
  const { auth_token } = useSelector((state) => state.auth);

  const [formErrors, setFormErrors] = useState({});
  const [countries, setCountries] = useState([]);
  const [professions, setProfessions] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    contact_number: "",
    gender: "",
    age: "",
    country_id: "",
    profession_id: "",
  });

  const fetchProfileData = async () => {
    const profileRes = await fetchData(API_ENDPOINTS.profile_get, null, "GET");
    if (profileRes?.data) setFormData(profileRes.data);

    const countryRes = await fetchData(API_ENDPOINTS.countries, null, "GET" );
    if (countryRes?.data) setCountries(countryRes.data);

    const profRes = await fetchData(API_ENDPOINTS.professions, null, "GET");
    if (profRes?.data) setProfessions(profRes.data);
  };

  useEffect(()=>{fetchProfileData()}, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setFormErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const submitProfile = async (e) => {
    e.preventDefault();
    const schema = Joi.object({
      name: Joi.string().required(),
      surname: Joi.string().required(),
      email: Joi.string().email().required(),
      contact_number: Joi.string().required(),
      gender: Joi.string().required(),
      age: Joi.string().required(),
      country_id: Joi.string().required(),
      profession_id: Joi.string().required(),
    });

    const { errors, status } = await validateFormData(formData, schema);
    if (!status) {
      setFormErrors(errors);
      return;
    }
    const headers = { Authorization: `Bearer ${auth_token}` };
    const res = await fetchData(API_ENDPOINTS.profile_update, navigate, "POST", formData, headers);
    if (res) successMsg(res.message);
  };

  return { formData, formErrors, countries, professions, handleChange, submitProfile, loading };
};

export default useProfileUtils;
