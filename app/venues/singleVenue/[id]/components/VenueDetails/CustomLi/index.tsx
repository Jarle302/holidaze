export const CustomLi = ({
  category,
  children,
  index = 0,
}: {
  category: string;
  children: React.ReactNode;
  index?: number;
}) => {
  const altBackground = "bg-white";

  const isOdd = index % 2 === 1;

  return (
    children && (
      <li className={"flex px-2 justify-between " + (isOdd && altBackground)}>
        <span className="max-w-[100px]">{category}</span>{" "}
        <span className="max-w-[200px] overflow-hidden font-bold">
          {children}
        </span>
      </li>
    )
  );
};
