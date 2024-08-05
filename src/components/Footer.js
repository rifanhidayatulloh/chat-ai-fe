import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <>
      <footer className="flex w-full items-center bg-[#343A40] text-white px-0 py-7">
        <div className="container">
          <div className="relative mb-5 h-[80px] py-2 flex items-center justify-between">
            <Link to="/">chat-ai</Link>

            <div className="text-[15px]">
              <ul className="flex gap-7 items-center font-semibold">
                <li>
                  <Link to="/">Home</Link>
                </li>
              </ul>
            </div>

            <div className="text-[15px]">
              <Link to="/">follow me</Link>
            </div>
          </div>
          <p className="text-center">Copyright @ 2024. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
