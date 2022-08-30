import React, { useState } from 'react';
import clsx from 'clsx';
import NavbarColorModeToggle from '@theme/Navbar/ColorModeToggle';
import NavbarSearch from '@theme/Navbar/Search';
import SearchBar from '@theme/SearchBar';
import { ArchwayLogo, GithubIcon, Link, MenuIcon, MobileMenuModal } from '../../components/Ui';

export default function Navbar() {
  let [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed inset-x-0 bg-white dark:bg-black z-20">
      <div className="container">
        <header className="navbar">
          <div className="h-full flex items-center">
            <Link href="/">
              <span className="sr-only">Archway Docs</span>
              <span className="flex items-end space-x-2">
                <ArchwayLogo />
                <span className="text-gray dark:text-gray-600">Docs</span>
              </span>
            </Link>
          </div>
          <div className="flex-1 flex-shrink-0 flex justify-end items-center space-x-2 md:space-x-6">
            <Link className="hidden md:inline-block" href="https://github.com/archway-network/archway-docs" externalIcon={false}>
              <GithubIcon className="w-6 h-6 text-gray dark:text-white" />
            </Link>
            <div>
              <NavbarColorModeToggle className="color-mode-toggle-button" />
            </div>
            <NavbarSearch className="!relative !right-auto">
              <SearchBar />
            </NavbarSearch>
            <Link className="hidden lg:inline-block" href="https://archway.io" externalIcon={false}>
              Back to Archway
            </Link>
            <button
              className={clsx(
                'lg:hidden w-12 h-12 p-3 inline-flex items-center justify-center',
                'rounded-xl bg-gray-100 hover:bg-gray-100/80 dark:bg-white/10 dark:hover:!bg-white/30',
                'dark:border dark:border-black-warm',
                'focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black-warm',
                'text-black  hover:text-black-warm dark:text-white hover:dark:text-white/80'
              )}
              onClick={() => setIsOpen(true)}
            >
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <MobileMenuModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
        </header>
      </div>
    </div>
  );
}
