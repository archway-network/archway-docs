import React from 'react';
import AccordionMenu from './Navigation/AccordionMenu';

export default ({ menu, goTo }) => {
  return menu.map(item => {
    if (item.type === 'category') {
      return <AccordionMenu key={`nav-${item.label}`} label={item.label} items={item.items} goTo={goTo} />;
    }

    return (
      <button className="text-gray dark:text-white hover:no-underline focus:outline-none py-2" onClick={() => goTo(`/${item.href}`)}>
        {item.label}
      </button>
    );
  });
};
