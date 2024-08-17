import Image from "next/image";

const ProfileCard = async () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-6">
      <div className="h-20 relative">
        <Image
          src="https://images.pexels.com/photos/27573814/pexels-photo-27573814/free-photo-of-a-boat-traveling-on-the-water-in-the-middle-of-the-ocean.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
          alt=""
          fill
          className="rounded-md object-cover"
        />
        <Image
          src="https://images.pexels.com/photos/27665863/pexels-photo-27665863/free-photo-of-ice-cave-in-the-alps.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
          alt=""
          width={48}
          height={48}
          className="rounded-full object-cover w-12 h-12 absolute left-0 right-0 -bottom-6 m-auto ring-1 ring-white z-10"
        />
      </div>
      <div className="flex flex-col items-center gap-2 h-20">
        <span className="font-semibold">Arthur Morgan</span>
        <div className="flex items-center gap-4">
          <div className="flex">
            <Image
              src="https://images.pexels.com/photos/27665863/pexels-photo-27665863/free-photo-of-ice-cave-in-the-alps.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
              alt=""
              width={12}
              height={12}
              className="rounded-full object-cover w-3 h-3"
            />
            <Image
              src="https://images.pexels.com/photos/27665863/pexels-photo-27665863/free-photo-of-ice-cave-in-the-alps.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
              alt=""
              width={12}
              height={12}
              className="rounded-full object-cover w-3 h-3"
            />
            <Image
              src="https://images.pexels.com/photos/27665863/pexels-photo-27665863/free-photo-of-ice-cave-in-the-alps.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
              alt=""
              width={12}
              height={12}
              className="rounded-full object-cover w-3 h-3"
            />
          </div>
          <span className="text-xs text-gray-400">500 Followers</span>
        </div>
        <button className="bg-blue-500 text-white text-xs p-2 rounded-md">
          My Profile
        </button>
      </div>
    </div>
  );
};

export default ProfileCard;
