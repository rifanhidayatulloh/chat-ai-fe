import { useState, useEffect, useCallback } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { LogoutIcon } from '@heroicons/react/outline';

// import auth from "../../config/firebase";
import { useAuth } from '../../contexts/AuthContext';
import Logout from '../accounts/Logout';
import ThemeToggler from './ThemeToggler';

const Navbar = () => {
  const location = useLocation();

  const [scrollDirection, setScrollDirection] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [shadow, setShadow] = useState(true);
  const [modal, setModal] = useState(false);

  const { currentUser } = useAuth();

  const isActive = path => {
    return location.pathname === path ? 'text-[#17A39D]' : 'text-[#495057]';
  };

  const changeShadow = useCallback(() => {
    const currentScrollPos = window.scrollY;
    if (currentScrollPos <= 99) {
      setScrollDirection(true);
      setShadow(true);
    } else if (prevScrollPos > currentScrollPos) {
      setScrollDirection(true);
      setShadow(false);
    } else {
      setScrollDirection(false);
      setShadow(false);
    }
    setPrevScrollPos(currentScrollPos);
  }, [prevScrollPos]);

  useEffect(() => {
    window.addEventListener('scroll', changeShadow);

    return () => window.removeEventListener('scroll', changeShadow);
  }, [changeShadow, prevScrollPos, scrollDirection]);

  useEffect(() => {
    const currentScrollPos = window.pageYOffset;
    if (currentScrollPos === 0) {
      setScrollDirection(true);
    } else {
      setScrollDirection(true);
    }
    setPrevScrollPos(currentScrollPos);
  }, []);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const user = auth.currentUser;
  //       const token = user && (await user.getIdToken());

  //       const payloadHeader = {
  //         headers: {
  //           'Content-Type': 'application/json',
  //           Authorization: `Bearer ${token}`
  //         }
  //       };
  //       const res = await fetch('http://localhost:3001', payloadHeader);
  //       console.log(await res.text());
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   };

  //   fetchData();
  // }, []);

  return (
    <>
      <header
        className={`sticky left-0 top-0 z-10 flex w-full items-center bg-white px-0 py-2 duration-500 ease-in-out ${
          scrollDirection ? 'translate-y-0' : '-translate-y-24'
        } ${shadow ? 'border-b-2' : 'shadow-lg'}`}
      >
        <div className="container">
          <div className="relative h-[50px] py-2 flex items-center justify-between">
            <div className="text-[15px]">
              <ul className="flex gap-7 items-center font-semibold">
                <li>
                  <Link className="flex text-[30px] gap-5" to="/">
                    CHAT-AI
                  </Link>
                </li>

                {/* {currentUser && (
                  <li>
                    <Link to="/" className={`${isActive('/')} text-[18px]`}>
                      Beranda
                    </Link>
                  </li>
                )} */}
              </ul>
            </div>

            <div>
              <div className="flex md:order-2">
                <ThemeToggler />

                {currentUser && (
                  <>
                    <button
                      className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none rounded-lg text-sm p-2.5"
                      onClick={() => setModal(true)}
                    >
                      <LogoutIcon className="h-8 w-8" aria-hidden="true" />
                    </button>

                    <Link
                      to="/profile"
                      className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none rounded-full text-sm p-2.5"
                    >
                      <img className="h-8 w-8 rounded-full" src={currentUser.photoURL} alt="" />
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>
      {modal && <Logout modal={modal} setModal={setModal} />}
    </>
  );
};

export default Navbar;
