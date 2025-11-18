import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const CommonInput = ({
    label,
    type = "text",
    register,
    name,
    errors,
    placeholder,
    validation,
}) => {
    const [showPassword, setShowPassword] = useState(false);

    // Toggle password visibility
    const togglePassword = () => setShowPassword((prev) => !prev);

    // Determine input type (for password visibility)
    const inputType =
        type === "password" ? (showPassword ? "text" : "password") : type;

    return (
        <div className="mb-3 position-relative">
            {label && (
                <label className="form-label fw-semibold" htmlFor={name}>
                    {label}
                </label>
            )}

            <div className="input-group">
                <input
                    id={name}
                    type={inputType}
                    placeholder={placeholder}
                    className={`form-control ${errors?.[name] ? "is-invalid" : ""}`}
                    {...register(name, validation)}
                />

                {/* 👁 Eye Icon only for password fields */}
                {type === "password" && (
                    <span
                        className="input-group-text bg-transparent border-start-0"
                        style={{
                            cursor: "pointer",
                            position: "absolute",
                            right: "10px",
                            top: "50%",
                            transform: "translateY(-50%)",
                            border: "none",
                            background: "none",
                        }}
                        onClick={togglePassword}
                    >
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </span>
                )}
            </div>

            {errors?.[name] && (
                <small className="text-danger">{errors[name].message}</small>
            )}
        </div>
    );
};

export default CommonInput;
