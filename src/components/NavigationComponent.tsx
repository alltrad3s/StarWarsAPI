import { Link, useLocation, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase/config';

export const Navigation = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/');
    } catch (error) {
      console.error('Logout failed', error);
    }
  };

  return (
    <nav className="flex flex-1 flex-col">
      <ul role="list" className="flex flex-1 flex-col gap-y-7">
        <li>
          <ul role="list" className="-mx-2 space-y-1">
            <li>
              <Link
                to="/dashboard"
                className={`group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 ${
                  location.pathname === '/dashboard'
                    ? 'bg-zinc-700 text-amber-300'
                    : 'text-amber-300 hover:bg-zinc-700 hover:text-white'
                }`}
              >
                <svg className="h-6 w-6 shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg>
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/characters"
                className={`group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 ${
                  location.pathname === '/dashboard/characters'
                    ? 'bg-zinc-700 text-amber-300'
                    : 'text-amber-300 hover:bg-zinc-700 hover:text-white'
                }`}
              >
                <svg className="h-6 w-6 shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                </svg>
                Characters
              </Link>
            </li>
            <li className="pb-4" >
              <Link
                to="/dashboard/favorites"
                className={`group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 ${
                  location.pathname === '/dashboard/favorites'
                    ? 'bg-zinc-700 text-amber-300'
                    : 'text-amber-300 hover:bg-zinc-700 hover:text-white'
                }`}
              >
                <svg className="h-6 w-6 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                </svg>

                My Favorites
              </Link>
            </li>
            {/* Separator and Logout button */}
            
            <li className="mt-auto pt-6 border-t border-zinc-700">
              <button
                onClick={handleLogout}
                className="group flex w-full gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-amber-300 hover:bg-zinc-700 hover:text-white"
              >
                <svg className="h-6 w-6 shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
                </svg>
                Logout
              </button>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};