import { LuPencilLine, LuTrash2 } from "react-icons/lu";

function BookItemTailwind() {
  return (
    <article className="border-1 border-black font-roboto shadow-custom">
      <img
        src="https://images.cdn2.buscalibre.com/fit-in/520x520/a6/ce/a6cee3390585e27d1258944ed98ad960.jpg"
        alt="el perfume book cover"
      />
      <section className="p-4">
        <h1 className="text-lg font-bold text-gray-800">El Perfume</h1>

        <div className="flex justify-between items-center mt-2">
          <h2 className="text-sm text-gray-600 italic">Patrick Suskind</h2>

          <span className="inline-block bg-purple-300 text-gray-800 text-xs px-3 py-1 rounded-full">
            Novela
          </span>
        </div>

        <section className="flex justify-between items-center mt-3">
          <h3 className="text-blue-600 font-bold text-base">19.94€</h3>
          <div className="flex gap-2 me-2">
            <button >
                  <LuPencilLine />
                </button>
                <button>
                  <LuTrash2 color="red" />
                </button>
          </div>
        </section>
      </section>
    </article>
  );
}

export default BookItemTailwind;
