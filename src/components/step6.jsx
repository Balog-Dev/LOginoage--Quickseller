
const LoginStep6 = ({ onNext, onPrev }) => {

    return (

        <>
            <div>
                <h3>Enter New Password</h3>
            </div>


            <form action="#" className="mt-8 grid grid-cols-6 gap-6">


                <div className="col-span-6">
                    <label htmlFor="Email" className="block text-sm font-medium text-gray-700"> New Password </label>

                    <input
                        type="password"
                        id="Password"
                        name="password"
                        className="p-2 mt-1 w-full rounded-md border-gray-200 focus:outline-none outline-none border bg-white text-sm text-gray-700 shadow-sm"
                    />
                </div>
                <div className="col-span-6">
                    <label htmlFor="Password" className="block text-sm font-medium text-gray-700">Confirm Password </label>

                    <input
                        type="password"
                        id="Password"
                        name="password"
                        className="p-2 mt-1 w-full rounded-md border-gray-200 focus:outline-none outline-none border bg-white text-sm text-gray-700 shadow-sm"
                    />
                </div>


                <div className="col-span-6 sm:flex sm:items-center sm:gap-4 justify-center mt-5">
                    <button
                        onClick={onNext}
                        className="w-full inline-block shrink-0 rounded-md border border-green-600 bg-green-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-green-600 focus:outline-none focus:ring active:text-green-500"
                    >
                        Reset Password
                    </button>

                </div>

                <div className="mt-4 col-span-6 sm:flex sm:items-center sm:gap-4 justify-center">

                    <p className="mt-4 text-sm text-gray-500 sm:mt-0 ">
                        <a href="#" className="text-gray-700  text-green-500">Back to Login</a>
                    </p>
                </div>




                <div className="col-span-6 sm:flex sm:items-center sm:gap-4 justify-center mt-8">

                    <p className="mt-4 text-sm text-gray-500 sm:mt-0 ">
                        Don't have an Account Yet ?
                        <a href="#" className="text-gray-700 underline text-green-500">Create Account</a>.
                    </p>
                </div>

            </form>

        </>

    );
}

export default LoginStep6;