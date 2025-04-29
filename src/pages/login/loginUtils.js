import { useState } from "react";
import { validateFormData } from "../../utlis/validation";

import { useDispatch, useSelector } from "react-redux";

import Joi from "joi";
import { useNavigate } from "react-router-dom";
import { login } from "../../redux/action/authAction";

const useLoginUtils = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error } = useSelector((state) => state.auth);

  const [formData, setFormData] = useState({ email: "", password: "" });
  const [formErrors, setFormErrors] = useState({});
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationSchema = Joi.object({
      email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ["com", "org", "net"] } })
        .required()
        .messages({
          "string.email": "Please enter a valid email address.",
          "any.required": "Email is required.",
        }),
      password: Joi.string().required().messages({
        "any.required": "Password is required.",
      }),
    });

    const validationResponse = await validateFormData(
      formData,
      validationSchema
    );

    // If validation fails, set the errors
    if (!validationResponse.status) {
      setFormErrors(validationResponse.errors);
      return;
    }
    dispatch(login({ formData  , navigate}));
  
  };

  return {
    formData,
    formErrors,
    isPasswordVisible,
    loading,
    error,
    handleChange,
    setIsPasswordVisible,
    handleSubmit,
  };
};

export default useLoginUtils;
