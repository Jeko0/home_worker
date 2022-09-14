import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { Links } from '../data/links';
import { slide as Menu } from 'react-burger-menu';

export const Sidebar = () => {
  const sidebarStyle = "items-center gap-3 ml-3 mt-4 flex text-x1 front-extrabold tracking-tight dark:text-white text-slate-900 pl-3 hover:bg-slate-400 hover:rounded-lg"
  return (
    <Menu>
      <div className='flex justify-between items-center'>
        {Links.map((item) => (
          <div key={item.title}>
            <p className='text-black m-3 mt-4'>
              { item.title }
            </p>   

            {item.links.map((link) => (
              <NavLink to={`/${link.name}`} key={link.name} className={sidebarStyle} >
                { link.icon }
                <span className='capitalize'>
                  { link.name }
                </span>
              </NavLink>
             ))}
          </div>
        ))}
      </div>
    </Menu>
  )
}
