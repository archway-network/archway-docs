import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';

const Card = ({name, description, icon, to, className}) => (
  <Link className="hover:text-black hover:no-underline" href={to}>
    <div className={clsx('h-full bg-white text-black dark:bg-[#101010] dark:text-white rounded-2xl shadow-card px-6 py-10', className)}>
      <div className="flex flex-col space-y-2.5">
        <div className="flex items-center space-x-2">
          {icon && <span className={clsx(icon, 'icon')}>&nbsp;</span>}
          <b>{name}</b>
        </div>
        {description && <div className="flex-1">{description}</div>}
      </div>
    </div>
  </Link>
);

export default Card;
