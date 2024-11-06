

const Error = () => {
    return (
        <div>
            <div className="w-10/12 mx-auto flex flex-col justify-center items-center gap-y-5 mt-48">
                <div>
                    <img src="https://img.icons8.com/?size=80&id=UeyMrVzY8vP0&format=png" alt="" />
                </div>

                <div className="flex flex-col justify-center items-center">
                    <h1 className="text-4xl text-red-600 font-bold mb-7">Opps! </h1>
                    <h1 className="text-4xl text-red-600 font-bold"><p>Sorry, an unexpected error has occurred.</p></h1>
                </div>
            </div>
        </div>
    );
};

export default Error;