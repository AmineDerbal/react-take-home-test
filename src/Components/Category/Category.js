import React from 'react';
import PropTypes from 'prop-types';
import Nominee from '../Nominee/Nominee';

const Category = ({ category }) => (
  <div className="flex flex-wrap justify-center  gap-5 mt-5">
    {category.map((item) => (
      <Nominee key={item.id} item={item} />
    ))}
  </div>
);

Category.propTypes = {
  category: PropTypes.shape([]).isRequired,
};

export default Category;
