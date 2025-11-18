import React from "react";
import { useForm } from "react-hook-form";
import CommonInput from "../Element/AppInput";
import { useDispatch } from "react-redux";
import { asyncSignupUser } from "../../store/user/userAction";

const CustomerSignupForm = ({ closeModal, onBack }) => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    delete data.confirmPassword;
    const { success } = await dispatch(asyncSignupUser({
      ...data,
      role: 'customer'
    })).unwrap();
    if (success) {
      reset();
      closeModal();
    }
  };

  const password = watch("password");

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="row">
        <div className="col-md-6">
          <CommonInput
            label="First Name"
            name="firstName"
            register={register}
            errors={errors}
            placeholder="Enter your First Name"
            validation={{ required: "First name is required" }}
          />
        </div>

        <div className="col-md-6">
          <CommonInput
            label="Last Name"
            name="lastName"
            register={register}
            errors={errors}
            placeholder="Enter your Last Name"
            validation={{ required: "Last name is required" }}
          />
        </div>

        <div className="col-12">
          <CommonInput
            type="email"
            label="Email Address"
            name="email"
            register={register}
            errors={errors}
            placeholder="Enter your Email"
            validation={{
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Enter a valid email address",
              },
            }}
          />
        </div>

        <div className="col-12">
          <CommonInput
            type="tel"
            label="Phone Number"
            name="phoneNumber"
            register={register}
            errors={errors}
            placeholder="Enter your Phone Number"
            validation={{
              required: "Phone number is required",
            }}
          />
        </div>

        <div className="col-md-6">
          <CommonInput
            type="password"
            label="Password"
            name="password"
            register={register}
            errors={errors}
            placeholder="Enter your password"
            validation={{
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            }}
          />
        </div>

        <div className="col-md-6">
          <CommonInput
            type="password"
            label="Confirm Password"
            name="confirmPassword"
            register={register}
            errors={errors}
            placeholder="Confirm your password"
            validation={{
              required: "Confirm password is required",
              validate: (value) =>
                value === password || "Passwords do not match",
            }}
          />
        </div>
      </div>

      <button type="submit" className="btn btn-primary w-100 mt-2">
        Sign Up
      </button>

      <p className="dont-hve-ac mt-2">
        Already have an account?{" "}
        <a
          href="#"
          className="text-primary fw-semibold text-decoration-none"
          onClick={onBack}
        >
          Login
        </a>
      </p>
    </form>
  );
};

export default CustomerSignupForm;
