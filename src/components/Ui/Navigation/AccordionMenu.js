import React from 'react';
import clsx from 'clsx';
import { Disclosure } from '@headlessui/react';
import AccordionMenu from '../Navigation/AccordionMenu';
import ChevronDown from '../Icons/ChevronDown';

export default ({ className, label, items, goTo }) => (
  <Disclosure>
    {({ open }) => (
      <>
        <Disclosure.Button
          className={clsx(
            'group w-full flex justify-between items-center space-x-2 py-4',
            'text-gray dark:text-white hover:no-underline focus:outline-none'
          )}
        >
          <ChevronDown className={clsx('w-6 h-6', { 'rotate-180 transform': !open })} aria-hidden="true" />
          <div className="flex-1 text-left">{label}</div>
        </Disclosure.Button>

        <Disclosure.Panel as="div" className="grid grid-cols-1 pl-8">
          {items.map(item => {
            if (item.type === 'category') {
              return <AccordionMenu key={`accordion-menu-${label}-${item.label}`} className="py-2" label={item.label} items={item.items} />;
            }
            return (
              <div key={`accordion-menu-${label}-${item.label}`} className="py-2">
                <button
                  className="text-left text-gray dark:text-white hover:no-underline focus:outline-none"
                  onClick={() => goTo(`/${item.href}`)}
                >
                  {item.label}
                </button>
              </div>
            );
          })}
        </Disclosure.Panel>
      </>
    )}
  </Disclosure>
);
