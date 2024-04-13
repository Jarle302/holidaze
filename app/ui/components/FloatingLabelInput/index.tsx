export const FloatingLabelInput = ({
  label,
  name,
  type,
}: {
  name: string;
  label?: string;
  type?: string;
}) => {
  const id = name + "id";
  return (
    <div className="relative w-[200px] h-[50px]   rounded-lg">
      <input
        className="outline-none h-full w-full bg-transparent absolute z-10 border-2 border-zinc-500 rounded-lg "
        type={type ? type : "text"}
        name={name}
        id={id}
      />
      <label
        className="absolute z-20 bottom-[36px] bg-zinc-300 px-2 left-[17px] "
        htmlFor={id}>
        {label ? label : name}
      </label>
    </div>
  );
};
