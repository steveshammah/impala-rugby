import Link from "next/link";

const SubHeader = ({ links }) => {
  return (
    <div className="articles-header text-whiteX flex justify-center">
      <ul className="flex sm:w-auto w-full rounded-md mt-2 bg-blackX  p-2 justify-between ">
        {links.map((link, index) => (
          <li key={index} className="mx-4">
            <Link href={link.url}>
              <div className="flex h-full items-center justify-around mx-2 cursor-pointer">
                {link.icon && <link.icon className="mr-2 text-xl" />}
                {link.label}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SubHeader;
