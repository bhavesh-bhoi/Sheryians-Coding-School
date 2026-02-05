import { HugeiconsIcon } from "@hugeicons/react";
import {
  InstagramIcon,
  ThreadsIcon,
  NewTwitterIcon,
  Add01Icon,
} from "@hugeicons/core-free-icons";

const Card = () => {
  return (
    <div className="flex justify-evenly items-center min-h-screen bg-gray-100 select-none">
      <div className="grid grid-cols-2 gap-5 p-4">
        {/* Card 1 */}
        <div className="bg-white h-fit w-96 shadow-lg rounded-[40px] overflow-hidden">
          <div className="h-50 w-full p-1.5 inline-block relative rounded-[35px] overflow-hidden">
            <img
              src="cover-image.jpg"
              alt="Cover Image"
              className="rounded-[35px] object-cover h-full w-full"
            />
            <div className="bg-gray-200 px-3 py-3 rounded-full flex justify-center items-center absolute top-4.5 right-4.5 cursor-pointer hover:bg-gray-300 text-xl font-semibold">
              <h3 className="flex items-center justify-between gap-4">
                Follow{" "}
                <span>
                  <HugeiconsIcon strokeWidth={2} icon={Add01Icon} />
                </span>
              </h3>
            </div>
          </div>
          <div className="-mt-16 flex justify-center absolute">
            <img
              src="https://plus.unsplash.com/premium_photo-1738931679846-7e2c9e298709?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fHByb2ZpbGUlMjBjYXJ0b29ufGVufDB8fDB8fHww"
              alt="Profile"
              className="h-28 w-28 border-5 border-white rounded-full object-cover ml-7"
            />
          </div>
          <div className="flex items-center justify-center gap-3 mt-2 ml-20">
            <span className="text-gray-500 font-medium">exp.</span>

            <div className="flex gap-1">
              <span className="w-1 h-3 bg-purple-500 rounded-sm"></span>
              <span className="w-1 h-3 bg-indigo-500 rounded-sm"></span>
              <span className="w-1 h-3 bg-blue-500 rounded-sm"></span>
              <span className="w-1 h-3 bg-cyan-500 rounded-sm"></span>
              <span className="w-1 h-3 bg-green-500 rounded-sm"></span>
              <span className="w-1 h-3 bg-lime-400 rounded-sm"></span>
              <span className="w-1 h-3 bg-gray-200 rounded-sm"></span>
              <span className="w-1 h-3 bg-gray-200 rounded-sm"></span>
              <span className="w-1 h-3 bg-gray-200 rounded-sm"></span>
              <span className="w-1 h-3 bg-gray-200 rounded-sm"></span>
              <span className="w-1 h-3 bg-gray-200 rounded-sm"></span>
              <span className="w-1 h-3 bg-gray-200 rounded-sm"></span>
              <span className="w-1 h-3 bg-gray-200 rounded-sm"></span>
            </div>
          </div>

          {/* Name and Description */}
          <div className="p-1.5 text-left w-70 ml-7">
            <h2 className="text-3xl font-semibold mt-7">John Doe</h2>
            <p className="text-gray-600 font-normal text-normal mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing.
            </p>
          </div>
          {/* Stats & Social Media Links Section */}
          <div className="mt-4 grid grid-cols-3 border-t border-gray-100 divide-x divide-y divide-gray-100">
            <div className="px-2 py-5">
              <p className="text-center text-gray-800 text-2xl font-bold">
                72.9k
              </p>
              <p className="text-center text-gray-500 font-semibold">Likes</p>
            </div>
            <div className="px-2 py-5">
              <p className="text-center text-gray-800 text-2xl font-bold">
                828
              </p>
              <p className="text-center text-gray-500 font-semibold">Posts</p>
            </div>
            <div className="px-2 py-5">
              <p className="text-center text-gray-800 text-2xl font-bold">
                342.9k
              </p>
              <p className="text-center text-gray-500 font-semibold">Views</p>
            </div>
            <div className="px-2 py-5 flex items-center justify-center bg-gray-50">
              <a
                href="#"
                className="text-gray-800 hover:text-gray-500 text-3xl rounded-full"
              >
                <HugeiconsIcon icon={InstagramIcon} />
              </a>
            </div>
            <div className="px-2 py-5 flex items-center justify-center bg-gray-50">
              <a
                href="#"
                className="text-gray-800 hover:text-gray-500 text-3xl rounded-full"
              >
                <HugeiconsIcon icon={NewTwitterIcon} />
              </a>
            </div>
            <div className="px-2 py-5 flex items-center justify-center bg-gray-50">
              <a
                href="#"
                className="text-gray-800 hover:text-gray-500 text-3xl rounded-full"
              >
                <HugeiconsIcon icon={ThreadsIcon} />
              </a>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white h-fit w-96 p-1.5 shadow-lg rounded-[40px]">
          <div className="h-48 w-full inline-block relative rounded-[35px] overflow-hidden">
            <img
              src="cover-image.jpg"
              alt="Cover Image"
              className="rounded-[35px] object-cover h-full w-full"
            />
            <div className="bg-gray-200 px-4 py-4 rounded-full flex justify-center items-center absolute top-3 right-3 cursor-pointer hover:bg-gray-300 text-4xl">
              <HugeiconsIcon strokeWidth={2} icon={Add01Icon} />
            </div>
          </div>
          <div className="-mt-16 flex justify-center">
            <div className="p-1 rounded-full border-2 border-white [background:conic-gradient(from_120deg,white_0deg,white_120deg,#ef4444_0deg,#f97316,#eab308,#22c55e,#3b82f6,#a855f7)] z-10">
              <img
                src="https://plus.unsplash.com/premium_photo-1738931679846-7e2c9e298709?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fHByb2ZpbGUlMjBjYXJ0b29ufGVufDB8fDB8fHww"
                alt="Profile"
                className="h-28 w-28 border-2 border-white rounded-full object-cover"
              />
            </div>
          </div>
          {/* Name and Description */}
          <div className="p-1.5 text-center w-70 mx-auto">
            <h2 className="text-3xl font-semibold mt-2">John Doe</h2>
            <p className="text-gray-600 font-normal text-normal mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing.
            </p>
          </div>
          {/* Stats Section */}
          <div className="flex items-center mt-4 justify-evenly bg-gray-50 rounded-[25px] shadow-lg">
            <div className="px-2 py-5">
              <p className="text-center text-gray-800 text-2xl font-bold">
                72.9k
              </p>
              <p className="text-center text-gray-500 font-semibold">Likes</p>
            </div>
            <div className="px-2 py-5">
              <p className="text-center text-gray-800 text-2xl font-bold">
                828
              </p>
              <p className="text-center text-gray-500 font-semibold">Posts</p>
            </div>
            <div className="px-2 py-5">
              <p className="text-center text-gray-800 text-2xl font-bold">
                342.9k
              </p>
              <p className="text-center text-gray-500 font-semibold">Views</p>
            </div>
          </div>
          {/* Social Media Links */}
          <div className="px-0 py-2">
            <ul className="flex justify-center space-x-8">
              <li className="p-2">
                <a
                  href="#"
                  className="text-gray-800 hover:text-gray-500 text-3xl rounded-full"
                >
                  <HugeiconsIcon icon={InstagramIcon} />
                </a>
              </li>
              <li className="p-2">
                <a
                  href="#"
                  className="text-gray-800 hover:text-gray-500 text-3xl rounded-full"
                >
                  <HugeiconsIcon icon={NewTwitterIcon} />
                </a>
              </li>
              <li className="p-2">
                <a
                  href="#"
                  className="text-gray-800 hover:text-gray-500 text-3xl rounded-full"
                >
                  <HugeiconsIcon icon={ThreadsIcon} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
