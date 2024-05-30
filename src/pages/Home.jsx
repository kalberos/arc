import { BiMenuAltLeft } from "react-icons/bi";
import { GoDotFill } from "react-icons/go";
import { IoMdSearch } from "react-icons/io";
import { GoDot } from "react-icons/go";

const Home = () => {
  return (
    <>
      <div className="flex">
        <div className="w-[60px] bg-gray-200 h-screen fixed left-0 bg-putih border-r-[1px] border-abu border-opacity-10 shadow-lg">
          <BiMenuAltLeft
            fill="white"
            size={50}
            className="bg-merah w-full h-[50px]"
          />
          <ul className="flex flex-col items-center space-y-3 mt-[280px]">
            <li>
              <GoDotFill />
            </li>
            <li>
              <GoDot />
            </li>
            <li>
              <GoDot />
            </li>
          </ul>
        </div>
        <div className="flex-grow ml-14">
          <header className="flex justify-between pt-5 px-16">
            <h1>Logo</h1>
            <ul className="flex space-x-10 items-center">
              <li>
                <a href="">Beranda</a>
              </li>
              <li>
                <a href="">Tentang</a>
              </li>
              <li>
                <a href="">Gallery</a>
              </li>
              <li>
                <a href="">Contact</a>
              </li>
              <li>
                <IoMdSearch className="fill-merah" size={30} />
              </li>
            </ul>
          </header>
          <div className="flex justify-between px-16 py-40">
            <div>
              <h1 className="text-8xl font-tungsten font-bold">ARC</h1>
              <p className="w-[550px] my-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deleniti neque natus necessitatibus autem rerum incidunt?
                Cupiditate eum quibusdam, voluptas amet eaque sint esse laborum,
                ullam ipsam magnam laboriosam harum deleniti officia, fuga
                maxime consequuntur veniam.
              </p>
              <a href="#" className="bg-merah text-putih px-5 py-3 shadow-md">
                Selengkapnya
              </a>
            </div>
            <div>
              <img
                src="https://source.unsplash.com/random/300x200?sig=1"
                width={350}
                height={350}
                className="rounded-md mr-12"
              />
            </div>
          </div>
          <div className="bg-merah w-[700px] h-[50px] mx-auto"></div>
          <h1 className="font-tungsten text-3xl text-center font-bold mt-3">
            Galer
          </h1>
          <div className="flex justify-center mt-4 mb-14 space-x-4">
            <img
              src="https://source.unsplash.com/random/200x200?sig=1"
              className="rounded-md"
            />
            <img
              src="https://source.unsplash.com/random/200x200?sig=1"
              className="rounded-md"
            />
            <img
              src="https://source.unsplash.com/random/200x200?sig=1"
              className="rounded-md"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
