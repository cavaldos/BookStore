import { Rate } from "antd";

interface Props {
  title: string;
  rating: number;
  price: number;
  image: string;
  _id: string;
  author: string;
}

const Book: React.FC<Props> = (props: Props) => {
  // console.log("props", props);
  return (
    <>
      <div
        style={{ border: "solid 1px black" }}
        className="relative flex-grow bg-[#F6F7F6] text-dark  h-[450px] min-w-[300px] max-w-[300px] m-[2px] rounded	p-[5px]"
      >
        <img
          src={props.image || "https://picsum.photos/300/300"}
          className="mx-auto rounded h-[300px] w-[300px]"
          onClick={() => {
            alert("clicked");
          }}
        />

        <div className="p-4">
          <h2 className="text-lg font-bold whitespace-nowrap overflow-hidden text-ellipsis">
            {props.title || "Title"}
          </h2>

          <div className="flex justify-between items-center mt-3">
            <span className="text-lg font-bold ">${props.price || 0}</span>
            <button className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600">
              Add to Card
            </button>
          </div>
          <Rate
            className="mt-2 float-left"
            allowHalf
            defaultValue={props.rating}
          />
        </div>
      </div>
    </>
  );
};
export default Book;
