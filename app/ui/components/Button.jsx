export default function Button({ children, onClick }) {
  return (
    <div className=" sm:ml-16 sm:mt-0 sm:flex-none">
      <button
        onClick={() => onClick()}
        type="button"
        className="block rounded-md
         bg-indigo-600 px-3 py-2 text-center 
         text-sm font-semibold text-white shadow-sm
          hover:bg-indigo-500 focus-visible:outline 
          focus-visible:outline-2 focus-visible:outline-offset-2
           focus-visible:outline-indigo-600"
      >
        {children}
      </button>
    </div>
  );
}
