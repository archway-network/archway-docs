import React from 'react';
import Link from './Buttons/Link';
import AccordionMenu from './Navigation/AccordionMenu';

export default ({ menu }) => {
  return menu.map(item => {
    if (item.type === 'category') {
      return <AccordionMenu key={`nav-${item.label}`} label={item.label} items={item.items} />;
    }

    return (
      <Link className="py-2" href={`/${item.href}`}>
        {item.label}
      </Link>
    );
  });
};
