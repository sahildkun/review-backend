import { NavLink } from "react-router-dom";

const Register = () => {
    return (
        <section className="bg-gradient-to-r from-emerald-400 to-cyan-400 min-h-screen flex items-center justify-center">
            <div className="w-full max-w-md p-6 rounded-lg shadow-xl bg-white">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
                    Register
                </h2>
                <form className="space-y-4" action="#">
                    <div>
                        <label htmlFor="name" className="block mb-2 text-base font-medium text-black">Name</label>
                        <input type="text" name="name" id="name" className=" border bg-slate-100 text-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 border-gray-600 placeholder-gray-400  focus:ring-blue-500 focus:border-blue-500" placeholder="Name" required />
                    </div>
                    <div>
                        <label htmlFor="email" className="block mb-2 text-base font-medium text-black">Email</label>
                        <input type="email" name="email" id="email" className=" border bg-slate-100  text-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 border-gray-600 placeholder-gray-400  focus:ring-blue-500 focus:border-blue-500" placeholder="example@mail.com" required />
                    </div>
                    <div>
                        <label htmlFor="password" className="block mb-2 text-base font-medium text-black">Password</label>
                        <input type="password" name="password" id="password" className=" border bg-slate-100  text-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 border-gray-600 placeholder-gray-400  focus:ring-blue-500 focus:border-blue-500" placeholder="••••••••" required />
                    </div>
                    <div>
                        <label htmlFor="confirm-password" className="block mb-2 text-base font-medium text-black">Confirm password</label>
                        <input type="password" name="confirm-password" id="confirm-password" className=" border bg-slate-100 text-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 border-gray-600 placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500" placeholder="••••••••" required />
                    </div>
                    <div className="pt-6">
                        <button type="submit" className="w-full text-white bg-black hover focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center focus:ring-primary-800 hover:text-[#646cff]">
                            Create an account
                        </button>
                    </div>
                    <p className="text-sm text-gray-700">
                        Already have an account?{" "}
                        <NavLink
                            to="/login"
                            className="font-medium text-primary-600 hover:underline text-primary-500"
                        >
                            Login here
                        </NavLink>
                    </p>
                </form>
            </div>
        </section>
    );
};

export default Register;
