import { Profile } from "@/app/ui/constants/types";
import SafeGetProp from "@/app/ui/utils/SafeGetProp";

const fallBackBanner =
  "https://images.unsplash.com/photo-1503480207415-fdddcc21d5fc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

export const ProfileInfo = (props: Profile & { rating: number }) => {
  let avatarUrl = props?.avatar?.url;
  let bannerUrl = props?.banner?.url;

  if (avatarUrl?.includes("photo-1579547945413-497e1b99dac0")) {
    avatarUrl = "";
  }

  if (bannerUrl?.includes("photo-1579547945413-497e1b99dac0")) {
    bannerUrl = "";
  }

  console.log({ props });
  const fallBackBannerAltText = !props.banner.url
    ? "blue sky with clouds"
    : "banner picture with no alt text supplied";
  const fallBackAvatarAltText = !props.avatar.url
    ? "Placeholder avatar image"
    : "Avatar Picture with no alt text supplied";
  return (
    <div className="flex flex-col h-[350px] relative">
      <div className="flex-1 relative h-2/4">
        <img
          className="w-full h-full object-cover z-10"
          src={SafeGetProp({ url: bannerUrl }, "url", fallBackBanner)}
          alt={SafeGetProp(props.banner, "alt", fallBackBannerAltText)}
        />
      </div>
      <div className="bg-zinc-200 flex-1 relative h-2/4 flex pb-[10px] justify-start sm:justify-center  items-end sm:items-start">
        <div className="pl-[40px]">
          <h1 className="text-2xl font-bold text-red-300">
            {" "}
            {SafeGetProp(props, "name", "Placeholder name")}
          </h1>
          <p> {SafeGetProp(props, "email", "")}</p>
          {props.venueManager && (
            <p>
              Managing{" "}
              {props?._count?.venues +
                " " +
                (props?._count?.venues === 1 ? "venue" : "venues")}{" "}
            </p>
          )}
        </div>
      </div>
      <img
        className="absolute top-2/4 translate-y-[-50%] left-[40px] rounded-full w-[175px] h-[175px]"
        src={SafeGetProp({ url: avatarUrl }, "url", "/profilePlaceholder.png")}
        alt={SafeGetProp(props.avatar, "alt", fallBackAvatarAltText)}
      />
    </div>
  );
};
