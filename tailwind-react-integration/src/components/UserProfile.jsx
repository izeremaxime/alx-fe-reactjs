function UserProfile() {
  return (
    
    <div className="hover:shadow-xl bg-gray-100 max-w-sm mx-auto my-20 rounded-lg shadow-lg sm:p-4 md:p-8 sm:max-w-xs md:max-w-sm" >
      <img className="hover:scale-110 transition-transform duration-300 ease-in-out
       rounded-full md:w-36 md:h-36 sm:w-20
        sm:h-20 mx-auto" src="https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFufGVufDB8fDB8fHww " alt="User" />
      <h1 className="md:text-xl sm:text-lg text-blue-800 my-4" >Ash DIOP</h1>
      <p className="hover:text-blue-500 text-gray-600 md:text-base sm:text-sm">Developer at Bittwok loves to write code and explore new technologies.</p>
    </div>
  );
}

export default UserProfile;