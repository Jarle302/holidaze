type inputProps = {
  label: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  type?: string;
};

export const AuthInput = ({
  label = "test",
  handleChange = (e) => e.target.name,
  name = "test",
  type = "text",
}: inputProps) => {
  return (
    <div className="border-b-2 border-red-300 flex gap-2 items-end w-full text-white font-bold">
      <label htmlFor={name}>
        {label[0].toUpperCase() + label.slice(1) + ":"}
      </label>
      <input
        className="bg-transparent outline-none h-[21px]"
        onChange={handleChange}
        type={type}
        name={name}
        id={name}
      />
    </div>
  );
};
