import React, { useState } from 'react'
import OutsideClickHandler from 'react-outside-click-handler';
import logo from '../../images/logo.png'
import './header.scss'

const menu = [
  'Главная',
  'технология',
  'График Полётов',
  'Гарантия',
  'О нас',
  'Контакты'
]

export const Header = () => {
  const [headerState, setHeaderState] = useState('Главная')
  const [isOpenMenu, setIsOpenMenu] = useState(false)
  const isMobile = window.innerWidth < 1110

  return (
    <div className='header'>
      <div className='imgContainer'>
        <img src={logo} className='logo'/>
      </div>

      {
        !isMobile ? 
      <div className='buttonContainer'>
        {
          menu.map((item) => {
            return (
              <button 
                className={`button ${item === headerState ? 'active' : ''}`}
                onClick={() => setHeaderState(item)}
                >
                {item}
              </button>
            )
          })
        }
      </div>
      :
      <OutsideClickHandler onOutsideClick={() => setIsOpenMenu(false)}>
      <div className='menuContainer' onClick={() => setIsOpenMenu(!isOpenMenu)}>
        <div className='dots'>
          <div className='dot'/>
          <div className='dot'/>
          <div className='dot'/>
        </div>
        {isOpenMenu &&
        <div className='menu'>
          {
            menu.map((item) => {
            return (
              <button 
                className={`button ${item === headerState ? 'active' : ''}`}
                onClick={() => setHeaderState(item)}
                >
                {item}
              </button>
            )
          })
          }
        </div>
        }
      </div>
      </OutsideClickHandler>
      }
    </div>
  )
}
