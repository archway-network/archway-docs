import React from 'react';
import clsx from 'clsx';
import BaseLink from '@docusaurus/Link';

const Link = ({ className, href, externalIcon = true, children }) => {
  const isExternal = /^(http|https):\/\//.test(href);
  const isInternalRoute = !isExternal;

  return (
    <BaseLink
      className={clsx(
        'text-black dark:text-white hover:text-black-warm hover:no-underline',
        { external: isExternal && externalIcon },
        className
      )}
      href={href}
      external={isExternal.toString()}
    >
      {children}
    </BaseLink>
  );
};

export default Link;
