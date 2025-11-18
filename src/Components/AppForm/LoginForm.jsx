import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import CommonInput from "../Element/AppInput";
import { asyncLoginUser } from "../../store/user/userAction";
import { useNavigate } from "react-router-dom";

const LoginForm = ({ onSignup, closeModal }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        const { success } = await dispatch(asyncLoginUser(data)).unwrap();
        if (success) {
            navigate('/dashboard');
            closeModal();
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <CommonInput
                label="Email"
                type="email"
                placeholder="Enter your email"
                name="email"
                register={register}
                errors={errors}
                rules={{
                    required: "Email is required",
                    pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Please enter a valid email address",
                    },
                }}
            />

            <CommonInput
                label="Password"
                type="password"
                placeholder="Enter your password"
                name="password"
                register={register}
                errors={errors}
                rules={{ required: "Password is required" }}
            />

            <button type="submit" className="btn btn-success w-100">
                Login
            </button>

            <p className="dont-hve-ac text-center mt-2">
                Don’t have an account?{" "}
                <a
                    href="#"
                    onClick={onSignup}
                    className="text-primary fw-semibold text-decoration-none"
                >
                    Sign Up
                </a>
            </p>
        </form>
    );
};

export default LoginForm;
