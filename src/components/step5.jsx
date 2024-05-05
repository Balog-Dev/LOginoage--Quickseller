
const LoginStep5 = ({ onNext , onPrev }) => {

    return (

        < div className="mt-7">
           
           <div className="justify-center text-center">
              <h3>Enter OTP</h3>
              <p className="text-sm">Please enter the OTP sent to your <br /> registered email to complete verification</p>
           </div>

           {/* OTP Input */}
           <form action="" method="post">
          <div class="flex flex-col space-y-16 mt-5">
            <div class="flex flex-row items-center justify-between mx-auto w-full max-w-xs">
              <div class="w-10 h-10 ">
                <input class="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-green-700" type="number" name="" id="" />
              </div>
              <div class="w-10 h-10 ">
                <input class="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-green-700" type="number" name="" id="" />
              </div>
              <div class="w-10 h-10 ">
                <input class="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-green-700" type="number" name="" id="" />
              </div>
              <div class="w-10 h-10 ">
                <input class="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-green-700" type="number" name="" id="" />
              </div>
              <div class="w-10 h-10 ">
                <input class="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-green-700" type="number" name="" id="" />
              </div>
              <div class="w-10 h-10 ">
                <input class="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-green-700" type="number" name="" id="" />
              </div>
            </div>

          </div>
        </form>


           <div className="col-span-6 sm:flex sm:items-center sm:gap-4 justify-center mt-8">
                <button
                    onClick={onNext}
                    className="w-60 inline-block shrink-0 rounded-md border border-green-600 bg-green-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-green-600 focus:outline-none focus:ring active:text-green-500"
                >
                    Verify
                </button>

            </div>

            <div className="mt-5 col-span-6 sm:flex sm:items-center sm:gap-4 justify-center">

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

        
        <div/>
    </div>    


    );
}

export default LoginStep5;