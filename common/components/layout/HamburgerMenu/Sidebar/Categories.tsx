import { getCategories } from "common/selectors/categories";
import Link from "next/link";

interface Props {
  previousMenu: () => void;
}

export const Categories = ({ previousMenu }: Props) => {
  const categories = getCategories();

  return (
    <>
      <div className="flex align-center ">
        <button
          className="font-medium h-11 w-11 text-3xl text-center bg-slate-200 pb-2"
          onClick={() => previousMenu()}
        >
          &lsaquo;
        </button>
        <h2 className="text-center my-auto p-2 font-medium text-xl">
          Categories
        </h2>
      </div>
      <ul className="p-1 pl-11 mt-0 list-none">
        {categories.map((category) => (
          <li key={category}>
            <Link
              className=" font-normal text-lg capitalize"
              href={`/category/${category}`}
            >
              {category}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};
