import Image from "next/image";

const Comments = () => {
  return (
    <div className="">
      {/* WRITE */}
      <div className="flex items-center gap-4">
        <Image
          src="https://img.freepik.com/free-photo/anime-moon-landscape_23-2151645804.jpg?size=626&ext=jpg"
          alt=""
          width={32}
          height={32}
          className="w-8 h-8 rounded-full"
        />
        <div className="flex-1 flex items-center justify-between bg-slate-100 rounded-xl text-sm px-6 py-2 w-full">
          <input
            type="text"
            placeholder="Write a comment..."
            className="bg-transparent outline-none flex-1"
          />
          <Image
            src="/emoji.png"
            alt=""
            width={16}
            height={16}
            className="cursor-pointer"
          />
        </div>
      </div>
      {/* COMMENTS */}
      <div className="">
        {/* COMMENT */}
        <div className="flex gap-4 justify-between mt-6">
          {/* AVATAR */}
          <Image
            src="https://img.freepik.com/free-photo/anime-moon-landscape_23-2151645804.jpg?size=626&ext=jpg"
            alt=""
            width={40}
            height={40}
            className="w-10 h-10 rounded-full"
          />
          {/* DESCRIPTION */}
          <div className="flex flex-1 flex-col gap-2">
            <span className="font-medium">James Cameroon</span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
              et deserunt perferendis minima, placeat dolores fuga. Neque sed
              fugit quo quaerat doloremque architecto nulla? Soluta, velit.
              Deleniti nulla quasi nisi.
            </p>
            <div className="flex items-center gap-8 text-xs text-gray-500 mt-2">
              <div className="flex items-center gap-4">
                <Image
                  src="/like.png"
                  alt=""
                  width={12}
                  height={12}
                  className="w-3 h-3 cursor-pointer"
                />
                <span className="text-gray-300">|</span>
                <span className="text-gray-500">123 Likes</span>
              </div>
              <div>Reply</div>
            </div>
          </div>
          {/* ICON */}
          <Image
            src="/more.png"
            alt=""
            width={16}
            height={16}
            className="w-4 h-4 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default Comments;
