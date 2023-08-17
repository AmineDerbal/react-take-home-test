import React from 'react';
import PropTypes from 'prop-types';

const Nominee = ({ item }) => (
  <div className="rounded bg-secondary w-1/3 shadow-lg flex flex-col ">
    <h3 className="font-bold text-center text-[24px]">{item.title}</h3>
    <div className="w-4/5 h-[230px] mx-auto flex justify-center mt-5">
      <img className="w-full h-full object-contain" src={item.photoUrL} alt={item.id} />
    </div>
    <button type="button">Click me</button>
  </div>
);

Nominee.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    photoUrL: PropTypes.string.isRequired,
  }).isRequired,
};

export default Nominee;
