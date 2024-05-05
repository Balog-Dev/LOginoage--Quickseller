// import map from '../../src/group.png'


const LoginStep2 = ({ onNext, onPrev }) => {

    return (



        <>
            <div className="  flex justify-center items-center mx-auto flex-col gap-7">

                <h2 className="font-semibold text-[29px]">Enable Location</h2>

                <img src={'/group.png'} alt="" />

                <p>Grant System Access Location</p>


                <button
                    onClick={onNext}
                    className="w-[405px] inline-block shrink-0 rounded-md border border-green-600 bg-green-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-green-600 focus:outline-none focus:ring active:text-green-500" >
                    Enable Locatiom
                </button>



            </div>

        </>

    );
}

export default LoginStep2;