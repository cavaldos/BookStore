import Book from "./book";

const Swiper: React.FC = () => {
  return (
    <>
      <div className="leading-[90px] h-[90px]  ">
        <h1 className="text-dark bg-red-200 pl-2 text-left h-[90px] ">
          Tittle
        </h1>
      </div>
      <div className="relativ  h-[400px] mb-4 flex gap-1 group-5 ">
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
      </div>
    </>
  );
};

export default Swiper;
