import React, { Fragment } from 'react';
import clsx from 'clsx';
import { Popover, Transition } from '@headlessui/react';
import NavbarColorModeToggle from '@theme/Navbar/ColorModeToggle';
import SearchBar from '@theme/SearchBar';
import NavbarSearch from '@theme/Navbar/Search';
import DocSidebar from '@theme/DocSidebar';
import { Link, ArchwayLogo, MenuIcon, CloseIcon, GithubIcon } from '../../components/Ui';

import * as sidebar from '../../../sidebars';
import pageSidebar from '../../common/pageSidebar';

export default function Navbar() {
  sidebar.pageSidebar = pageSidebar;

  return (
    <div className="fixed inset-x-0 z-20">
      <div className="container">
        <Popover as="header" className="navbar p-0 border-b border-gray-200">
          <div className="h-full flex items-center">
            <Link href="/">
              <span className="sr-only">Archway Docs</span>
              <span className="flex items-end space-x-2">
                <ArchwayLogo />
                <span className="text-gray dark:text-white">Docs</span>
              </span>
            </Link>
          </div>
          <div className="flex-1 flex-shrink-0 flex justify-end items-center space-x-2 md:space-x-6">
            <Link className="hidden md:inline-block" href="https://github.com/archway-network/archway-docs" externalIcon={false}>
              <GithubIcon className="w-6 h-6 text-gray dark:text-white" />
            </Link>
            <div className="hidden lg:block">
              <NavbarColorModeToggle />
            </div>
            <NavbarSearch className="!relative !right-auto">
              <SearchBar />
            </NavbarSearch>
            <Link className="hidden lg:inline-block" href="https://archway.io" externalIcon={false}>
              Back to Archway
            </Link>
            <Popover.Button
              className={clsx(
                'lg:hidden w-12 h-12 p-3 inline-flex items-center justify-center',
                'rounded-xl bg-gray-100 hover:bg-gray-100/80 dark:bg-white/10 dark:hover:!bg-white/30',
                'dark:border dark:border-black-warm',
                'focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black-warm',
                'text-black  hover:text-black-warm dark:text-white hover:dark:text-white/80'
              )}
            >
              <span className="sr-only">Open menu</span>
              <MenuIcon aria-hidden="true" />
            </Popover.Button>
          </div>

          <Transition
            as={Fragment}
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Popover.Panel className="fixed inset-0 overflow-hidden transition transform origin-top-left lg:block ">
              <div className="absolute inset-0 overflow-hidden">
                <div className="pointer-events-none fixed inset-0 flex max-w-full">
                  <div className="container bg-white dark:bg-black">
                    <div className="pointer-events-auto flex items-center justify-between border-b border-gray-200">
                      <div className="h-24 flex items-center">
                        <Popover.Button as={Link} href="/">
                          <span className="sr-only">Archway Docs</span>
                          <span className="flex items-end space-x-2">
                            <ArchwayLogo />
                            <span className="text-gray dark:text-white">Docs</span>
                          </span>
                        </Popover.Button>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="relative">
                          <NavbarSearch className="!relative !right-auto">
                            <SearchBar />
                          </NavbarSearch>
                        </div>
                        <Popover.Button
                          className={clsx(
                            'w-12 h-12 p-3 inline-flex items-center justify-center',
                            'rounded-xl bg-black dark:bg-white hover:bg-black/80 hover:dark:bg-white/80',
                            'text-white dark:text-black hover:text-white hover:dark:text-black-warm',
                            'focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black-warm-500'
                          )}
                        >
                          <span className="sr-only">Close menu</span>
                          <CloseIcon className="h-6 w-6" aria-hidden="true" />
                        </Popover.Button>
                      </div>
                    </div>
                    <div className="mt-6">
                      <DocSidebar docsSidebars={sidebar} sidebar={sidebar.pageSidebar} sidebarCollapsible={true} />
                    </div>
                  </div>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </Popover>
      </div>
    </div>
  );
}
