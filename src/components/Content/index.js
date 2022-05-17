import React from 'react'
import './content.scss'
import backGroundButton from '../../images/bliki.png'

const values = [
  {
    topText: 'мы',
    number: '1',
    bottomText: 'на рынке',
  },
  {
    topText: 'гарантируем',
    number: '50%',
    bottomText: 'безопастность',
  },
  {
    topText: 'календарик за',
    number: '2001г',
    bottomText: 'в подарок',
  },
  {
    topText: 'путешествие',
    number: '597',
    bottomText: 'дней',
  },
]

export const Content = () => {
  const isTablet = window.innerWidth < 1440

  return (
    <div>
      {
        isTablet &&
        <div className='titleContainer'>
          <div className='title'>Путешествие</div>
          <div className='text'>на красную планету</div>
        </div>
      }
      <div className='content'>

      {
        values.map((item) => {
          return(
            <div className='itemContent'>
              <span className='topText'>{item.topText}</span>
              <span className='number'>{item.number}</span>
              <span className='bottomText'>{item.bottomText}</span>
            </div>
          )
        })
      }

    </div>
      <button className='customBtn'>
        <span className='textBtn'>начать путешествие</span>
        <img src={backGroundButton} className='imgBtn'/>
      </button>
    </div>
  )
}
