import Image from "next/image";
import { FC } from "react";
import { courier } from "@/app/fonts";

type SocialProofProps = {
  img: string;
  alt: string;
  description: string;
  host: string;
};

export const SocialProofCard: FC<SocialProofProps> = ({
  img,
  alt,
  description,
  host,
}) => {
  return (
    <div
      className={`h-[470px] w-[340px] ${courier.className} bg-white px-4 pt-4 pb-4`}>
      <Image
        width={1024}
        className="h-[300px] w-full"
        height={1024}
        src={img}
        alt={alt}
      />
      <div className="flex flex-col justify-between pt-1  h-[147px] leading-none">
        <p>{description}</p>
        <h3 className="text-xl font-bold">{host}</h3>
      </div>
    </div>
  );
};
