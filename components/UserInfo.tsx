import SettingIcon from "@/public/icons/SettingIcon";
import Image from "next/image";

interface UserInfoProps {
  user: {
    name: string;
    email: string;
    photofileId?: string;
  };
}

const UserInfo = ({user}: UserInfoProps) => {
  const {name = "Alice Herta", email = "alice@gmail.com", photofileId = ""} = user || {};

  return (
    <div className="bg-alice-300 flex h-16 w-full flex-row justify-center gap-4 *:flex *:h-full *:flex-col *:justify-center">
      <div>
        {photofileId ? (
          <Image
            width={28}
            height={28}
            className="size-7 rounded-full"
            src={photofileId}
            alt={"user profile image"}
          />
        ) : (
          <div className="h-12 w-12 rounded-full bg-gray-400" />
        )}
      </div>
      <div className="w-full pb-2 pt-1">
        <p className="text-lg font-semibold">{name}</p>
        <p className="text-sm font-medium">{email}</p>
      </div>
      <div className="px-3">
        <SettingIcon />
      </div>
    </div>
  );
};

export default UserInfo;
