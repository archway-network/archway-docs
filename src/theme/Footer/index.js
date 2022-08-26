import React from 'react';
import { ArchwayLogo, Link } from '../../components/Ui';
import { Navigation } from '../../domain';

const archway = Navigation.archwayResources();
const community = Navigation.communityResources();
const developers = Navigation.developerResources();

const Footer = () => (
  <footer className="border-t dark:border-[#ffffff24]">
    <div className="container py-10 lg:py-20 relative">
      <div>
        <div className="lg:flex">
          <div className="w-full lg:w-1/3 pb-12">
            <ArchwayLogo />
          </div>
          <div className="w-full lg:w-2/3 grid grid-cols-2 md:grid-cols-3 gap-y-8 gap-x-8">
            <div className="flex-shrink-0 flex flex-col space-y-3">
              <h4 className="caption font-bold">Archway</h4>
              {archway.map(({ label, url }) => (
                <div key={`footer-${label}`}>
                  <Link className="caption" href={url}>
                    {label}
                  </Link>
                </div>
              ))}
            </div>
            <div className="flex-shrink-0 flex flex-col space-y-3">
              <h4 className="caption font-bold">Community</h4>
              {community.map(({ label, url }) => (
                <div key={`footer-${label}`}>
                  <Link className="caption" href={url}>
                    {label}
                  </Link>
                </div>
              ))}
            </div>
            <div className="flex-shrink-0 flex flex-col space-y-3">
              <h4 className="caption font-bold">Developers</h4>
              {developers.map(({ label, url }) => (
                <div key={`footer-${label}`}>
                  <Link className="caption" href={url}>
                    {label}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="pt-16 pb-16 lg:pb-4">
        <div className="flex flex-col-reverse space-y-reverse space-y-16">
          <div className="w-full lg:w-1/3 label text-gray dark:text-white/90">&copy; Archway 2022</div>
          <div className="flex flex-col lg:flex-row space-y-4 lg:space-x-6 lg:space-y-0">
            <div>
              <Link className="label text-gray" href="https://archway.io/privacy">
                Privacy Policy
              </Link>
            </div>
            <div>
              <Link className="label text-gray" href="https://archway.io/terms">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-4 border-t border-black/20">
        <p className="label text-gray dark:text-white/90">
          The ARCH tokens will not be offered in the United States or to U.S. persons or to residents of certain other prohibited
          jurisdictions. Learn more here. The information provided in this website is for general informational purposes only. It does not
          constitute, and should not be considered, a formal offer to sell or a solicitation of an offer to buy any security in any
          jurisdiction, legal advice, investment advice, or tax advice. If you are in need of legal advice, investment advice or tax advice,
          please consult with a professional adviser. The Archway protocol is under development and is subject to change. As such, the
          protocol documentation and contents of this website may not reflect the current state of the protocol at any given time. The
          protocol documentation and website content are not final and are subject to change.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
