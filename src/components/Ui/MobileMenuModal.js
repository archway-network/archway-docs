import React from 'react';
import clsx from 'clsx';
import { Dialog } from '@headlessui/react';
import NavbarSearch from '@theme/Navbar/Search';
import SearchBar from '@theme/SearchBar';
import { ArchwayLogo, CloseIcon, MobileMenu, Link } from '../../components/Ui';

import pageSidebar from '../../common/pageSidebar';

export default ({ isOpen, onClose }) => {
  return (
    <Dialog open={isOpen} onClose={onClose}>
      <Dialog.Panel className="bg-white dark:bg-black absolute inset-0 overflow-hidden transition transform origin-top-left flex flex-col z-50">
        <div className="container flex-1 flex flex-col min-h-0">
          <div className="flex items-center justify-between border-b border-gray-200 dark:!border-[rgba(255,255,255,0.14)]">
            <div className="h-24 flex items-center">
              <Link href="/">
                <span className="sr-only">Archway Docs</span>
                <span className="flex items-end space-x-2">
                  <ArchwayLogo />
                  <span className="text-gray dark:text-gray-600">Docs</span>
                </span>
              </Link>
            </div>
            <div className="flex items-center space-x-2">
              <div className="relative">
                <NavbarSearch className="!relative !right-auto">
                  <SearchBar />
                </NavbarSearch>
              </div>
              <button
                className={clsx(
                  'w-12 h-12 p-3 inline-flex items-center justify-center',
                  'rounded-xl bg-black dark:bg-white hover:bg-black/80 hover:dark:bg-white/80',
                  'text-white dark:text-black hover:text-white hover:dark:text-black-warm',
                  'focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black-warm-500'
                )}
                onClick={onClose}
              >
                <span className="sr-only">Close menu</span>
                <CloseIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
          </div>
          <div className="flex-1 py-6 min-h-0">
            <div className="h-full overflow-y-auto">
              <MobileMenu menu={pageSidebar} />
            </div>
          </div>
        </div>
      </Dialog.Panel>
    </Dialog>
  );
};
