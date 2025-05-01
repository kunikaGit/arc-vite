import { useState } from "react"
import Joi from "joi";
import { useNavigate } from "react-router-dom";

import { API_ENDPOINTS } from "../../constants/endPoints";
import useApiRequest from "../../hook/useApiRequest";
import { validateFormData } from "../../utlis/validation";
import { successMsg } from "../../utlis/customFn";

const useSignupUtils = () => {
    const [formErrors, setFormErrors] = useState({});
    const { loading, fetchData } = useApiRequest();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        confirmPassword: "",
        phone_number: "",
    })

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



    const submitForm = async (e) => {
        e.preventDefault();

        try {
            const validationSchema = Joi.object({
                first_name: Joi.string().required().label("First Name"),
                last_name: Joi.string().required().label("Last Name"),
                email: Joi.string()
                    .email({ tlds: { allow: false } })
                    .required()
                    .label("Email")
                    .messages({
                        "string.email": "Please enter a valid email address.",
                        "string.empty": "This Field is required."
                    }),
                password: Joi.string().min(6).required().label("Password"),
                confirmPassword: Joi.string()
                    .required()
                    .valid(Joi.ref('password'))
                    .messages({
                        "any.only": "Confirm Password must match Password",
                        "string.empty": "Confirm Password is required."
                    })
                    .label("Confirm Password"),
                phone_number: Joi.string().pattern(/^[0-9]{10}$/).label("Phone Number"),
            }).options({ abortEarly: false, allowUnknown: true });

            const { errors, status } = await validateFormData(
                formData,
                validationSchema
            );

            console.log("errors", errors);
            setFormErrors(errors);

            if (!status) return;

            const url = API_ENDPOINTS.signup;
            const response = await fetchData(url, navigate, "POST", formData);
            console.log("response",response)
            if (response) {
                successMsg(response?.message);
                navigate("/login");
                setFormData({})
            }
        } catch (err) {
            console.error("Error during form submission:", err);
        }
    }


    return {
        submitForm,
        handleChange,
        formErrors,
        formData,
        loading,
    }
}

export default useSignupUtils
