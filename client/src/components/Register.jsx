import { useState } from "react";
import { NavLink } from "react-router-dom";

const Register = () => {

  const [formData, setFormData] = useState(
    {
      name: '',
      email: '',
      password: '',
      isAdmin: false
    }
    )


    const onChangeHandler = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
            
        })
        }


    const onSubmitHandler = async (e) => {  
        e.preventDefault();
       console.log('Form Data:', formData);
        try {
            const response = await fetch('http://localhost:5000/api/user/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            const responseData = await response.json();
            console.log(responseData);
        } catch (error) {
            console.error(error);
        }
        setFormData(
            {
                name: '',
                email: '',
                password: '',
                isAdmin: false
              }
        )
      
    }
  
    return (
        <section className="bg-gradient-to-r from-emerald-400 to-cyan-400 min-h-screen flex items-center justify-center">
            <div className="w-full max-w-md p-6 rounded-lg shadow-xl bg-white">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
                    Register
                </h2>
                <form className="space-y-4" onSubmit={onSubmitHandler} action="#">
                    <div>
                        <label htmlFor="name" className="block mb-2 text-base font-medium text-black">Name</label>
                        <input type="text"
                            value={formData.name}
                            onChange={onChangeHandler}
                        name="name" id="name" className=" border bg-slate-100 text-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 border-gray-600 placeholder-gray-400  focus:ring-blue-500 focus:border-blue-500" placeholder="Name" required />
                    </div>
                    <div>
                        <label htmlFor="email" className="block mb-2 text-base font-medium text-black">Email</label>
                        <input type="email"
                        value={formData.email}
                        onChange={onChangeHandler} name="email" id="email" className=" border bg-slate-100  text-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 border-gray-600 placeholder-gray-400  focus:ring-blue-500 focus:border-blue-500" placeholder="example@mail.com" required />
                    </div>
                    <div>
                        <label htmlFor="password" className="block mb-2 text-base font-medium text-black">Password</label>
                        <input type="password" 
                        value={formData.password}
                        onChange={onChangeHandler} name="password" id="password" className=" border bg-slate-100  text-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 border-gray-600 placeholder-gray-400  focus:ring-blue-500 focus:border-blue-500" placeholder="••••••••" required />
                    </div>
                    {/* <div>
                        <label htmlFor="confirm-password" className="block mb-2 text-base font-medium text-black">Confirm password</label>
                        <input type="password" name="confirm-password" id="confirm-password" className=" border bg-slate-100 text-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 border-gray-600 placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500" placeholder="••••••••" required />
                    </div> */}
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
