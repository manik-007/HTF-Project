import React from 'react'
import './SearchFeed.css'
import MainHeader from './MainHeader'

const SearchFeed = () => {
  return (
    <div>
        <MainHeader/>
    <div className='feed-container'>
        <div className='Feed'>
            <div className='Feedbox'>
                <div className='image'></div>
                <div className='Details-section'>
                    <div className='Name'>Mukesh Kumar Thakur</div>
                    <div className='job'>Plumber</div>
                    <div className='Rating'>4.9 start rating</div>
                    <div className='Status hired'>Hired</div>
                </div>
            </div>
            <div className='Feedbox'>
                <div className='image'></div>
                <div className='Details-section'>
                    <div className='Name'>Hari ram prasad</div>
                    <div className='job'>Plumber</div>
                    <div className='Rating'>4.9 start rating</div>
                    <div className='Status'>Available</div>
                </div>
            </div>
            <div className='Feedbox'>
                <div className='image'></div>
                <div className='Details-section'>
                    <div className='Name'>Johny Pipes Service</div>
                    <div className='job'>Plumber</div>
                    <div className='Rating'>5 start rating</div>
                    <div className='Status'>Available</div>
                </div>
            </div>
            <hr className='line'/>
            <div className='bottom-text'>See more</div>
        </div>
    </div>
    </div>
  )
}

export default SearchFeed