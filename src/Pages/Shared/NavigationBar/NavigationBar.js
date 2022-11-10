import Tippy from '@tippyjs/react';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';

const NavigationBar = () => {
  const { user, logout } = useContext(AuthContext);
  return (
    <div className='navbar bg-black text-white'>
      <div className='navbar-start'>
        <div className='dropdown'>
          <label tabIndex={0} className='btn btn-ghost lg:hidden'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h8m-8 6h16'
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52'
          >
            <li>
              {user?.uid ? (
                <Link to='/myreviews' className='btn btn-ghost'>
                  Reviews
                </Link>
              ) : (
                ''
              )}
            </li>
            <li>
              {user?.uid ? (
                <Link to='/additem' className='btn btn-ghost'>
                  Add Item
                </Link>
              ) : (
                ''
              )}
            </li>
            <li>
              <Link className='btn btn-ghost'>Blog</Link>
            </li>
            <li>
              {user?.uid ? (
                <Link onClick={logout} className='btn btn-ghost'>
                  Logout
                </Link>
              ) : (
                <Link to='/login' className='btn btn-ghost'>
                  Login
                </Link>
              )}
            </li>
          </ul>
        </div>
        <Link to='/' className='btn btn-ghost normal-case text-xl'>
          <img
            src='https://media-cdn.tripadvisor.com/media/photo-s/17/3b/9a/d2/burger-king.jpg'
            width='30'
            height='10'
            className='d-none d-lg-block align-top rounded-circle text-white mx-1'
            alt=''
          />
          <span className='text-success'>GOOD</span>
          <span>DAY</span>
        </Link>
      </div>
      <div className='navbar-center hidden lg:flex'>
        <ul className='menu menu-horizontal p-0'>
          <li>
            {user?.photoURL ? (
              <Tippy
                className='mx-1 text-white'
                content={user?.email ? user?.email : ' '}
                position='bottom'
              >
                {
                  <h3>
                    <span className='text-success'>Hello,</span>
                    <span>{user?.displayName}</span>
                  </h3>
                }
              </Tippy>
            ) : (
              ' '
            )}
          </li>
          <li>
            {user?.uid ? (
              <Link to='/myreviews' className='btn btn-ghost'>
                Reviews
              </Link>
            ) : (
              <></>
            )}
          </li>
          <li>
            {user?.uid ? (
              <Link to='/additem' className='btn btn-ghost'>
                Add Item
              </Link>
            ) : (
              <></>
            )}
          </li>
          <li>
            <Link to='/blog' className='btn btn-ghost'>
              Blog
            </Link>
          </li>
          <li>
            {user?.uid ? (
              <Link onClick={logout} className='btn btn-ghost'>
                Logout
              </Link>
            ) : (
              <Link to='/login' className='btn btn-ghost'>
                Login
              </Link>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavigationBar;
