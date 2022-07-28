import React from 'react';
import { Link } from 'react-router-dom';
import SliderComp from '../components/SliderComp';
import rentCategoryImage from '../assets/jpg/rentCategoryImage.jpg';
import sellCategoryImage from '../assets/jpg/sellCategoryImage.jpg';

const Explore = () => {
  return (
    <div className='explore'>
      <header>
        <p className="pageHeader">Explore</p>
      </header>

      <main>
        <SliderComp/>

        <p className="exploreCategoryHeading">Categories</p>
        <div className="exploreCategories">
          <Link to='/category/rent'>
            <img src={rentCategoryImage} alt="Rent" className='exploreCategoryImg' />
            <p className="exploreCategoryName">Places for rent</p>
          </Link>
          <Link to='/category/sale'>
            <img src={sellCategoryImage} alt="Sale" className='exploreCategoryImg' />
            <p className="exploreCategoryName">Places for sale</p>
          </Link>
        </div>
      </main>
    </div>
  )
}

export default Explore