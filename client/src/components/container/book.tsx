interface BookProps {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
  rating: number;
}

const Book: React.FC<BookProps> = (props) => {
  console.log(props);
  return (
    <>
      <div className="relative flex-grow bg-gray-300 text-dark">
        <img
          src="https://m.media-amazon.com/images/I/41H+ZQFGkVL._AC_UY327_FMwebp_QL65_.jpg"
          className="w-full h-56 object-cover"
        />

        <div className="p-4">
          <h2 className="text-lg font-bold">Book title</h2>

          <p className="text-gray-500">Description...</p>

          <div className="flex items-center my-2">
            <svg className="w-4 h-4 fill-current text-yellow-500" />
            <svg className="w-4 h-4 fill-current text-yellow-500" />
            <svg className="w-4 h-4 fill-current text-yellow-500" />
            <svg className="w-4 h-4 fill-current text-yellow-500" />
            <svg className="w-4 h-4 fill-current text-gray-300" />
          </div>

          <div className="flex justify-between items-center mt-3">
            <span className="text-lg font-bold text-blue-500">$49</span>
            <button className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600">
              Add to Card
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Book;
