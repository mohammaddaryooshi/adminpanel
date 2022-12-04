import { useFormik } from "formik";
import * as Yup from "yup";
import { useState, useEffect } from "react";
import { loginUser } from "../services/loginService";
import { useAuthActions, useAuth } from "../Providers/AuthProvider";
import { useQuery } from "../../../shared/hooks/useQuery";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const initialValues = {
  username: "",
  password: "",
};
// 2.

// 3.
const validationSchema = Yup.object({
  username: Yup.string().required("Email is required"),
  password: Yup.string().required("Password is required"),
});
const LoginPage = () => {
  const setAuth = useAuthActions();
  const auth = useAuth();
  const [error, setError] = useState(null);
  const query = useQuery();
  const redirect = query.get("redirect") || "/dashboard";
  const navigate = useNavigate();
  useEffect(() => {
    if (auth) navigate(redirect);
  }, [redirect, auth]);

  const onSubmit = async (values) => {
    toast("Login", { type: "success" });
    try {
      const { data } = await loginUser(values);
      setAuth(data);
      localStorage.setItem("authState", JSON.stringify(data));
      setError(null);
      navigate(redirect);
    } catch (error) {
      if (error.response && error.response.data.message)
        setError(error.response.data.message);
    }
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
  });
  return (
    <section className="h-full gradient-form bg-gray-200 md:h-screen flex items-center justify-center">
      <div className="container py-12 px-6 h-full ">
        <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
          <div className="xl:w-10/12">
            <div className="block bg-white shadow-lg rounded-lg">
              <div className="lg:flex lg:flex-wrap g-0">
                <div className="lg:w-6/12 px-4 md:px-0">
                  <div className="md:p-12 md:mx-6">
                    <div className="text-center pt-3">
                      <h4 className="text-xl font-semibold  mt-1 mb-12 pb-1">
                        Login To App
                      </h4>
                    </div>
                    <form onSubmit={formik.handleSubmit}>
                      <p className="mb-4">Please login to your account</p>
                      <div className="mb-4">
                        <input
                          {...formik.getFieldProps("username")}
                          type="text"
                          className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                          id="username"
                          placeholder="Username"
                          name="username"
                        />
                        {error && <p style={{ color: "red" }}>{error}</p>}
                        {formik.errors["username"] &&
                          formik.touched["username"] && (
                            <div className="text-red-500">
                              {formik.errors["username"]}
                            </div>
                          )}
                      </div>
                      <div className="mb-4">
                        <input
                          {...formik.getFieldProps("password")}
                          type="password"
                          className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                          id="password"
                          placeholder="Password"
                          name="password"
                        />
                        {error && <p style={{ color: "red" }}>{error}</p>}
                        {formik.errors["password"] &&
                          formik.touched["password"] && (
                            <div className="text-red-500">
                              {formik.errors["password"]}
                            </div>
                          )}
                      </div>
                      <div className="text-center pt-1 mb-12 pb-1">
                        <button
                          className="inline-block cursor-pointer bg-blue-700 hover:bg-blue-900 px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md  hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3"
                          type="submit"
                          disabled={!formik.isValid}
                          data-mdb-ripple="true"
                          data-mdb-ripple-color="light"
                        >
                          Log in
                        </button>
                        <a className="text-gray-500" href="#!">
                          Forgot password?
                        </a>
                      </div>
                      <div className="flex items-center justify-between pb-6">
                        <p className="mb-0 mr-2">Don't have an account?</p>
                        <button
                          type="button"
                          className="inline-block px-6 py-2 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                          data-mdb-ripple="true"
                          data-mdb-ripple-color="light"
                        >
                          Create an account
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="lg:w-6/12 flex items-center lg:rounded-r-lg rounded-b-lg lg:rounded-bl-none">
                  <div className="text-gray-800 px-4 py-6 md:p-12 md:mx-6">
                    <h4 className="text-xl font-semibold mb-6">
                      We are more than just a company
                    </h4>
                    <p className="text-sm">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
