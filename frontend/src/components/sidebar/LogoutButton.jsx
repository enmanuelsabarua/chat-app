import { BiLogOut } from 'react-icons/bi';
import useLogout from '../../hooks/useLogout';

const LogoutButton = () => {
    const { logout, loading } = useLogout();

    return (
        <div className="mt-auto absolute bottom-4 left-4">
            {!loading ? (
                <BiLogOut className="w-10 h-10 md:w-6 md:h-6 text-white cursor-pointer" onClick={logout} />
            ) : (
                <span className='loading loading-spinner'></span>
            )}
        </div>
    )
}

export default LogoutButton;