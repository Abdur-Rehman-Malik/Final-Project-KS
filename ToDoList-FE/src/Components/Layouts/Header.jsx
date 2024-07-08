const Header = ({ setHeader }) => {
  return (
    <>
      <div className="w-full h-16 absolute bg-blue-300 flex">
        <div className="h-full w-1/2  flex justify-center">
          <div className=" h-full w-2/3 flex items-center">
            <p
              className="text-lg font-semibold bg-pink-100 text-blue py-1 px-2 rounded-sm hover:cursor-pointer"
              onClick={() => {
                setHeader("Home");
              }}
            >
              ZAB
            </p>
          </div>
        </div>
        <div className="h-full w-1/2  flex justify-center">
          <div className="h-full w-3/4   flex justify-end">
            <div className="w-4/5  h-full flex items-center justify-between">
              <p
                className="text-lg font-semibold bg-pink-100 text-blue py-1 px-2 rounded-sm hover:cursor-pointer"
                onClick={() => {
                  setHeader("Home");
                }}
              >
                Home
              </p>
              <p
                className="text-lg font-semibold  bg-pink-100 text-blue py-1 px-2 rounded-sm hover:cursor-pointer"
                onClick={() => {
                  setHeader("Service");
                }}
              >
                Service
              </p>
              <p
                className="text-lg font-semibold bg-pink-100 text-blue py-1 px-2 rounded-sm hover:cursor-pointer"
                onClick={() => {
                  setHeader("About");
                }}
              >
                About
              </p>
              <p
                className="text-lg font-semibold bg-pink-100 text-blue py-1 px-2 rounded-sm hover:cursor-pointer"
                onClick={() => {
                  setHeader("Contact");
                }}
              >
                Contact
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
