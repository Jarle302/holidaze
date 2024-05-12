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
    <li className={"flex px-2 justify-between " + (isOdd && altBackground)}>
      <span>{category}</span> <span className="font-bold">{children}</span>
    </li>
  );
};
