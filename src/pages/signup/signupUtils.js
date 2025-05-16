import { useEffect, useState } from "react"
import Joi from "joi";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from 'jwt-decode';
import { API_ENDPOINTS } from "../../constants/endPoints";
import useApiRequest from "../../hook/useApiRequest";
import { validateFormData } from "../../utlis/validation";
import { errorMsg, successMsg } from "../../utlis/customFn";
import { useLocation } from 'react-router-dom'; // add this
import { isloginSuccess } from "../../redux/slice/authSlice";
import { useDispatch } from "react-redux";

const useSignupUtils = () => {


    const dispatch = useDispatch();


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
        // age: "",
        referred_by: "",
        country_id: "",
        // profession_id: "",
        auth_type: "email",
        isNotUsCitizen: false
    });




    const [isRefFromUrl, setIsRefFromUrl] = useState(false)

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const ref = searchParams.get('ref');
        if (ref) {
            setIsRefFromUrl(true)
            setFormData((prev) => ({ ...prev, referred_by: ref }));
        }
    }, [location.search]);


    const handleChange = (e) => {
        const { name, type, value, checked } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
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

            // const profRes = await fetchData(API_ENDPOINTS.professions, null, "GET");
            // if (profRes?.data) setProfessions(profRes.data);
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
                //age: Joi.number().integer().min(1).required().label("Age"),
                country_id: Joi.string().required().label("Country").messages({ "string.empty": "This Field is required." }).strict(false),
                //profession_id: Joi.string().required().label("Profession").messages({ "string.empty": "This Field is required." }).strict(false),
                referred_by: Joi.string().optional().allow("").label("Referred By"),
                isNotUsCitizen: Joi.boolean().valid(true).required().label("Not US Citizen").messages({
                    "any.only": "You must confirm you are not a US citizen."
                }),

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
       if(!formData.isNotUsCitizen){   
        errorMsg("Please check not US Citizen")    
            setFormErrors({isNotUsCitizen:"You must confirm you are not a US citizen."});
            return
        }
        const decoded = jwtDecode(credentialResponse.credential);
        let payload = JSON.stringify({
            email: decoded.email,
            name: decoded.given_name,
            surname: decoded.family_name,
            referred_by: formData.referred_by,
            auth_type: 'google',
            isNotUsCitizen:formData.isNotUsCitizen
        })

        const url = API_ENDPOINTS.signup;
        const response = await fetchData(url, navigate, "POST", payload);
        if (response) {
            localStorage.setItem("auth_token", response?.data.token);

            dispatch(isloginSuccess());
            navigate("/")
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
        //professions,
        isPasswordVisible,
        setIsPasswordVisible,
        isConfirmPasswordVisible,
        setIsConfirmPasswordVisible,
        handleGoogleSuccess,
        isRefFromUrl

    };
}

export default useSignupUtils
