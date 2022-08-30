import React from 'react';
import clsx from 'clsx';
import Card from '../components/Card';

const CardsList = ({heading, info, items, className}) => (
  <div>
    {heading && <h3 className="title-2">{heading}</h3>}
    {info && <p className="pt-5">{info}</p>}
    <div className={clsx('grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4 md:gap-y-12 pt-8 md:pt-12', className)}>
      {items.map(({name, description, icon, value}, index) => (
        <Card key={`card-${index}`} className="" name={name} description={description} icon={icon} to={value} />
      ))}
    </div>
  </div>
);

export default CardsList;
