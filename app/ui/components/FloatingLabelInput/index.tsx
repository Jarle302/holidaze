import { ChangeEvent } from "react";

export const FloatingLabelInput = ({
  label,
  name,
  type,
  width,
  handleChange,
  value,
}: {
  name: string;
  value: string | number;
  label?: string;
  type?: string;
  width?: string;
  handleChange: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}) => {
  const styling = "relative  h-[50px]   rounded-lg";
  const smallStyle = `w-[50px] ${styling}`;
  const mediumStyle = `w-[150px] ${styling}`;
  const defaultStyle = `w-[200px] ${styling}`;
  let divStyle = defaultStyle;

  if (width) {
    if (width === "s") {
      divStyle = smallStyle;
    }
    if (width === "m") {
      divStyle = mediumStyle;
    }
  }

  const id = name + "id";

  return (
    <div className={divStyle}>
      {type === "textArea" ? (
        <textarea
          onChange={handleChange}
          className="outline-none py-3 h-full w-full bg-transparent absolute z-10 border-2 border-zinc-500 rounded-lg h-[100px] "
          name={name}
          id={id}
          cols={30}
          value={value}
          rows={10}></textarea>
      ) : (
        <input
          onChange={handleChange}
          className="outline-none h-full w-full bg-transparent absolute z-10 border-2 border-zinc-500 rounded-lg "
          type={type ? type : "text"}
          name={name}
          id={id}
          value={value}
        />
      )}
      <label
        className="absolute z-20 bottom-[36px] bg-zinc-300 px-2 left-[17px] "
        htmlFor={id}>
        {label ? label : name}
      </label>
    </div>
  );
};
