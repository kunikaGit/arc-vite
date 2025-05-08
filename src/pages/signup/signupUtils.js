import { useEffect,useState } from "react"
import Joi from "joi";
import { useNavigate } from "react-router-dom";
import {jwtDecode} from 'jwt-decode';
import { API_ENDPOINTS } from "../../constants/endPoints";
import useApiRequest from "../../hook/useApiRequest";
import { validateFormData } from "../../utlis/validation";
import { successMsg } from "../../utlis/customFn";
import { useLocation } from 'react-router-dom'; // add this

const useSignupUtils = () => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);
const location = useLocation();
    const [formErrors, setFormErrors] = useState({});
    const { loading, fetchData } = useApiRequest();
    const navigate = useNavigate();
    const [countries, setCountries] = useState([]);
    const [professions, setProfessions] = useState([]);
    const [formData, setFormData] = useState({
        name: "",
        surname: "",
        email: "",
        password: "",
        confirm_password: "",
        contact_number: "",
        gender: "",
        age: "",
        referred_by: "",
        country_id: "",
        profession_id: "",
        auth_type: "email"
    });

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const ref = searchParams.get('ref');
        if (ref) {
            setFormData((prev) => ({ ...prev, referred_by: ref }));
        }
    }, [location.search]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
        setFormErrors((prev) => ({
            ...prev,
            [name]: "",
        }));
    };


    const fetchDropdownData = async () => {
        try {
            const countryRes = await fetchData(API_ENDPOINTS.countries, null, "GET");
            if (countryRes?.data) setCountries(countryRes.data);

            const profRes = await fetchData(API_ENDPOINTS.professions, null, "GET");
            if (profRes?.data) setProfessions(profRes.data);
        } catch (error) {
            console.error("Dropdown fetch error", error);
        }
    };

    useEffect(() => {
        fetchDropdownData();
    }, []);

    const submitForm = async (e) => {
        e.preventDefault();
    
        try {
            const validationSchema = Joi.object({
                name: Joi.string().required().label("First Name"),
                surname: Joi.string().required().label("Last Name"),
                email: Joi.string()
                    .email({ tlds: { allow: false } })
                    .required()
                    .label("Email")
                    .messages({
                        "string.email": "Please enter a valid email address.",
                        "string.empty": "This Field is required."
                    }),
                password: Joi.string().min(6).required().label("Password"),
                confirm_password: Joi.string()
                    .required()
                    .valid(Joi.ref('password'))
                    .messages({
                        "any.only": "Confirm Password must match Password",
                        "string.empty": "Confirm Password is required."
                    })
                    .label("Confirm Password"),
                contact_number: Joi.string()
                    .pattern(/^[0-9]{10}$/)
                    .required()
                    .label("Phone Number")
                    .messages({
                        "string.pattern.base": "Contact number must be exactly 10 digits."
                    }),
                gender: Joi.string().valid("male", "female", "other").required().label("Gender"),
                age: Joi.number().integer().min(1).required().label("Age"),
                country_id: Joi.string().required().label("Country").messages({"string.empty":"This Field is required."}).strict(false),
                profession_id: Joi.string().required().label("Profession").messages({"string.empty":"This Field is required."}).strict(false),
                referred_by: Joi.string().optional().allow("").label("Referred By"),
            }).options({ abortEarly: false, allowUnknown: true });
    
            const { errors, status } = await validateFormData(formData, validationSchema);
            setFormErrors(errors);
    
            if (!status) return;
    
            const payload = {
                ...formData,
                auth_type: "email", // fixed field
            };
    
            const url = API_ENDPOINTS.signup;
            const response = await fetchData(url, navigate, "POST", payload);
            if (response) {
                successMsg(response?.message);
                navigate("/login");
                setFormData({});
            }
        } catch (err) {
            console.error("Error during form submission:", err);
        }
    };

    const handleGoogleSuccess = async (credentialResponse) => {
        const decoded = jwtDecode(credentialResponse.credential);
        let payload = JSON.stringify({
            email: decoded.email,
            name: decoded.given_name,
            surname: decoded.family_name,
            referred_by:formData.referred_by,
            auth_type: 'google',
          })
        const url = API_ENDPOINTS.signup;
        const response = await fetchData(url, navigate, "POST", payload);
        if (response) {
            successMsg(response?.message);
            navigate("/dashboard/myprofile");
            setFormData({});
        }

      };
    
    return {
        submitForm,
        handleChange,
        formErrors,
        formData,
        loading,
        countries,
        professions,
        isPasswordVisible,
        setIsPasswordVisible,
        isConfirmPasswordVisible,
        setIsConfirmPasswordVisible,
        handleGoogleSuccess

    };
}

export default useSignupUtils
