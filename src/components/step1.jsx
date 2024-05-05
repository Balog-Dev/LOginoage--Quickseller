
const LoginStep1 = ({ onNext }) => {

  return (



    <>

      <div>
        <h3>Create Account</h3>
      </div>
      <form action="#" className="mt-1 grid grid-cols-6 gap-6">

        <div className="col-span-6 sm:col-span-3">

          <label htmlFor="FirstName" className="block text-sm font-medium text-gray-700">
            First Name
          </label>

          <input
            type="text"
            id="FirstName"
            name="first_name"
            placeholder="Esther"
            className="mt-1 w-full rounded-md border-gray-200 focus:outline-none outline-none border bg-transparent text-sm text-gray-700  p-2 "
          />
        </div>

        <div className="col-span-6 sm:col-span-3">
          <label htmlFor="LastName" className="block text-sm font-medium text-gray-700">
            Last Name
          </label>

          <input
            type="text"
            id="LastName"
            name="last_name"
            placeholder="Obi"
            className="mt-1 w-full rounded-md border-gray-200  focus:outline-none outline-none border bg-white text-sm text-gray-700 shadow-sm p-2"
          />
        </div>

        <div className="col-span-6">
          <label htmlFor="Email" className="block text-sm font-medium text-gray-700 p-2"> Email  Address</label>

          <input
            type="email"
            id="Email"
            name="email"
            placeholder="Email Address"
            className="mt-1 w-full rounded-md border-gray-200  focus:outline-none outline-none border bg-white text-sm text-gray-700 shadow-sm p-2"
          />
        </div>

        <div className="col-span-6">
          <label htmlFor="Number" className="block text-sm font-medium text-gray-700"> Phone Number </label>

          <input
            type="number"
            id="Number"
            name="number"
            placeholder="08137942788"
            className="mt-1 w-full rounded-md border-gray-200  focus:outline-none outline-none border bg-white text-sm text-gray-700 shadow-sm p-2"
          />
        </div>

        <div className="col-span-6">
          <label htmlFor="Password" className="block text-sm font-medium text-gray-700 p-2" > Password </label>

          <input
            type="password"
            id="Passworrd"
            name="password"
            placeholder="56fghjk67hjk"
            className="mt-1 w-full rounded-md border-gray-200  focus:outline-none outline-none border bg-white text-sm text-gray-700 shadow-sm p-2"
          />
        </div>
        <div className="col-span-6">
          <label htmlFor="Confirm-password" className="block text-sm font-medium text-gray-700"> Confirm Password</label>

          <input
            type="password"
            id="Password"
            name="password"
            placeholder="56fghjk67hjk"
            className="mt-1 w-full rounded-md border-gray-200  focus:outline-none outline-none border bg-white text-sm text-gray-700 shadow-sm p-2  "
          />
        </div>


        <div className="col-span-6">
          <label htmlFor="MarketingAccept" className="flex gap-4">
            <inputss
              type="checkbox"
              id="MarketingAccept"
              name="marketing_accept"
              className="size-5 rounded-md border-gray-200 bg-green shadow-sm"
            />

            <span className="text-sm text-gray-700">
              I agree to the terms of use
            </span>
          </label>
        </div>

        <div className="col-span-6">

          <button
            onClick={onNext}
            className="w-full inline-block shrink-0 rounded-md border border-green-600 bg-green-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-green-600 focus:outline-none focus:ring active:text-green-500"
          >
            Create Account
          </button>

        </div>


        {/* social Login */}
        <div className="gap-4 mx-auto flex items-center w-full p-4  relative col-span-6 ">

          <button
            type="button"
            className="flex rounded px-6 py-2.5 text-xs font-medium uppercase leading-normal text-black shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
            style={{ backgroundColor: "white" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mr-1.5 h-4 w-4"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
            </svg>
            <span className="mr-1 inline-block whitespace-nowrap rounded bg-danger px-1.5 py-1 text-center align-baseline text-xs font-bold leading-none text-white">
              1
            </span>
          </button>

          <button
            type="button"
            className="flex rounded px-6 py-2.5 text-xs font-medium uppercase leading-normal text-black shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
            style={{ backgroundColor: "white" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mr-1.5 h-4 w-4"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
            </svg>
            <span className="mr-1 inline-block whitespace-nowrap rounded bg-danger px-1.5 py-1 text-center align-baseline text-xs font-bold leading-none text-white">
              1
            </span>
          </button>

          <button
            type="button"
            className="flex rounded px-6 py-2.5 text-xs font-medium uppercase leading-normal text-black shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
            style={{ backgroundColor: "white" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mr-1.5 h-4 w-4"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
            </svg>
            <span className="mr-1 inline-block whitespace-nowrap rounded bg-danger px-1.5 py-1 text-center align-baseline text-xs font-bold leading-none text-white">
              1
            </span>
          </button>




        </div>
        {/*End of social login  */}


        <div className="col-span-6 sm:flex sm:items-center sm:gap-4 justify-center">

          <p className="mt-4 text-sm text-gray-500 sm:mt-0 ">
            Already have an account?
            <a href="#" className="text-gray-700 underline">Log in</a>.
          </p>
        </div>
        <div className="h-11 w-full border border-red-500">

        </div>
      </form>

    </>

  );
}

export default LoginStep1;