import { useNavigate } from 'react-router-dom';

import { useAuth } from '../../contexts/AuthContext';

export default function Logout({ modal, setModal }) {
  const navigate = useNavigate();

  const { logout, setError } = useAuth();

  const handleLogout = async () => {
    try {
      // alert('hello');
      setError('');
      await logout();
      setModal(false);
      navigate('/login');
    } catch {
      setError('Failed to logout');
    }
  };

  return (
    <>
      {modal && (
        <section className="fixed inset-0 z-[200] bg-black bg-opacity-50 ">
          <div className="absolute inset-0 ">
            <div className="flex h-full w-full items-center justify-center ">
              <div className="z-[300] w-70% rounded-xl bg-[#F5F5F5] p-5 sm:w-60% md:w-50% md:p-9 lg:w-40% ">
                <div className="mb-5 flex justify-between">
                  <h2 className="text-[18px] font-semibold text-[#202020]">Logging Out</h2>
                  <button onClick={() => setModal(false)} className="p-1 font-semibold text-[#525252] ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="h-6 w-6"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <p className="text-sm mb-10 text-gray-500">Are you sure you want to log out ?</p>
                <div className="w-full flex gap-7 justify-end">
                  <button onClick={() => setModal(false)} className="ring-2 py-3 px-7 rounded-md ring-[#17A39D]">
                    Cancel
                  </button>
                  <button
                    onClick={handleLogout}
                    className="ring-2 text-white py-3 px-7 bg-[#17A39D] rounded-md ring-[#17A39D]"
                  >
                    Logout
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div onClick={() => setModal(false)} className="absolute inset-0">
            <div className="h-full w-full bg-transparent" />
          </div>
        </section>
      )}
    </>
  );
}
