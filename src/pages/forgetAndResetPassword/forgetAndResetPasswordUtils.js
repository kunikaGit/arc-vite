import { useState, useEffect } from "react";
import { validateFormData } from "../../utlis/validation";
import Joi from "joi";
import { useNavigate } from "react-router-dom";
import useApiRequest from "../../hook/useApiRequest";
import { API_ENDPOINTS } from "../../constants/endPoints";
import { successMsg, errorMsg } from "../../utlis/customFn";


const useForgetResetPasswordUtils = () => {

  const navigate = useNavigate();
  const { fetchData } = useApiRequest();

  const [emailForget, setEmailForget] = useState("")
  const [emailForgetError, setEmailForgetError] = useState("")
  const [formDataReset, setFormDataReset] = useState({ newPassword: "", confirmPassword: "", resetToken: "" });
  const [formErrorsReset, setFormErrorsReset] = useState({});
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);
  const [loading, setLoading] = useState(false)
  // ✅ Fetch token from URL and set it in formDataReset.resetToken
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");

    if (token) {
      setFormDataReset((prev) => ({
        ...prev,
        resetToken: token
      }));
    }
  }, []);


  const handleChangeReset = (e) => {
    const { name, value } = e.target;
    setFormDataReset((prev) => ({
      ...prev,
      [name]: value,
    }));
    setFormErrorsReset((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const handleSubmitReset = async (e) => {
    e.preventDefault();
    try {
      setLoading(true)
      const validationSchema = Joi.object({
        newPassword: Joi.string().required().messages({
          "any.required": "Password is required.",
        }),
        confirmPassword: Joi.string()
          .required()
          .valid(Joi.ref('newPassword'))
          .messages({
            "any.required": "Confirm Password is required.",
            "any.only": "Passwords do not match.",
          }),
      }).unknown(true); // Allows extra fields like resetToken  

      const validationResponse = await validateFormData(
        formDataReset,
        validationSchema
      );
      if (!validationResponse.status) {
        console.log(validationResponse.errors)
        setFormErrorsReset(validationResponse.errors);
        setLoading(false)

        return;
      }

      const resetRes = await fetchData(API_ENDPOINTS.resetPassword, navigate, "POST", formDataReset);

      if (resetRes.status || resetRes.success) {
        successMsg(resetRes.message)
        navigate("/login")

      } else {
        errorMsg(resetRes.message)
        setLoading(false)

      }

    } catch (error) {
      errorMsg(error)
      setLoading(false)
    }

  };

  const handleSubmitForget = async (e) => {
    e.preventDefault();
    try {
      setLoading(true)

      const validationSchema = Joi.object({
        email: Joi.string()
          .email({ minDomainSegments: 2, tlds: { allow: ["com", "org", "net"] } })
          .required()
          .messages({
            "string.email": "Please enter a valid email address.",
            "any.required": "Email is required.",
          }),
      }).unknown(true);

      const validationResponse = await validateFormData(
        {email:emailForget},
        validationSchema
      );
      if (!validationResponse.status) {
        setEmailForgetError(validationResponse.errors.email);
        setLoading(false)

        return;
      }

      const forgetRes = await fetchData(API_ENDPOINTS.forgotPassword, navigate, "POST", { email: emailForget });


      if (forgetRes.status || forgetRes.success) {
        successMsg(forgetRes.message)
        navigate("/login")
      } else {
        errorMsg(forgetRes.message)
        setLoading(false)

      }

    } catch (error) {
      errorMsg(error)
      setLoading(false)


    }

  };

  return {
    formDataReset,
    formErrorsReset,
    isPasswordVisible,
    handleChangeReset,
    setIsPasswordVisible,
    handleSubmitReset,
    isConfirmPasswordVisible,
    setIsConfirmPasswordVisible,
    emailForget, setEmailForget,
    handleSubmitForget,
    emailForgetError,
    loading
  };
};

export default useForgetResetPasswordUtils;
