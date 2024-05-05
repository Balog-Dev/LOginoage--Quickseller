import africa from './africa.png';
import './App.css';
import LoginPage from './components/loginpage';

function App() {
  return (
    <div className="">

      <section className="relative flex flex-wrap lg:h-screen lg:items-center py-8 lg:py-0 ">


        <div className=" banner-bg relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2
        hidden md:hidden lg:block xl:block
        ">

          {/* <img src={'/cart-removebg-preview.png'} alt="" /> */}

          <h1 className='mt-80 text-[47px]  flex justify-center text-white  font-bold  '>
            Become a Vendor with <br /> Quiuckseller

          </h1>
        </div>


        <div className="w-full px-4 py-8 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-8 h-[100vh] overflow-y-auto">
          <LoginPage />
        </div>
      </section>
    </div>
  );
}

export default App;
