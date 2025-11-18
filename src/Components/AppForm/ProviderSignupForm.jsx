import { useForm } from "react-hook-form";
import CommonInput from "../Element/AppInput";
import { useDispatch } from "react-redux";
import { asyncSignupUser } from "../../store/user/userAction";
import { useNavigate } from "react-router-dom";

const ProviderSignupForm = ({ closeModal, onBack }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
        reset,
    } = useForm();

    const onSubmit = async (data) => {
        console.log("Provider Signup:", data);
        delete data.confirmPassword;
        const { success } = await dispatch(asyncSignupUser({
            ...data,
            role: 'provider'
        })).unwrap();
        if (success) {
            closeModal();
            reset();
            navigate('/dashboard');
        }
    };

    const password = watch("password");

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {/* Service Selection */}
            <div className="mb-3 text-start">
                <label className="form-label fw-semibold">Select Service</label>
                <select
                    className={`form-select ${errors.service ? "is-invalid" : ""}`}
                    {...register("service", { required: "Service is required" })}
                >
                    <option value="">Select</option>
                    <option value="personal-chef">Personal Chef</option>
                    <option value="laundery-pickup">Laundry Pickup</option>
                    <option value="home-organizing">Home Organizing</option>
                </select>
                {errors.service && (
                    <small className="text-danger">{errors.service.message}</small>
                )}
            </div>

            <div className="row">
                <div className="col-md-6">
                    <CommonInput
                        label="First Name"
                        name="firstName"
                        placeholder="Enter your first name"
                        register={register}
                        errors={errors}
                        rules={{ required: "First name is required" }}
                    />
                </div>

                <div className="col-md-6">
                    <CommonInput
                        label="Last Name"
                        name="lastName"
                        placeholder="Enter your last name"
                        register={register}
                        errors={errors}
                        rules={{ required: "Last name is required" }}
                    />
                </div>

                <div className="col-md-12">
                    <CommonInput
                        label="Email"
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        register={register}
                        errors={errors}
                        rules={{
                            required: "Email is required",
                            pattern: {
                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                message: "Please enter a valid email",
                            },
                        }}
                    />
                </div>

                <div className="col-md-12">
                    <CommonInput
                        label="Phone"
                        name="phoneNumber"
                        placeholder="Enter your phone number"
                        register={register}
                        errors={errors}
                        rules={{
                            required: "Phone number is required",
                            pattern: {
                                value: /^[0-9]{10,15}$/,
                                message: "Please enter a valid phone number",
                            },
                        }}
                    />
                </div>

                <div className="col-md-6">
                    <CommonInput
                        label="Password"
                        type="password"
                        name="password"
                        placeholder="Enter password"
                        register={register}
                        errors={errors}
                        rules={{
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
                        label="Confirm Password"
                        type="password"
                        name="confirmPassword"
                        placeholder="Re-enter your password"
                        register={register}
                        errors={errors}
                        rules={{
                            required: "Confirm password is required",
                            validate: (value) =>
                                value === password || "Passwords do not match",
                        }}
                    />
                </div>
            </div>

            <button type="submit" className="btn btn-primary w-100">
                Sign Up
            </button>

            <p className="dont-hve-ac text-center mt-2">
                Already have an account?{" "}
                <a
                    href="#"
                    onClick={onBack}
                    className="text-primary fw-semibold text-decoration-none"
                >
                    Login
                </a>
            </p>
        </form>
    );
};

export default ProviderSignupForm;
