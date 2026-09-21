'use client';

import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { BrandMark } from './brand-mark';

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <header className="site-header">
      <Link href="/" className="wordmark" onClick={closeMenu}>
        <BrandMark className="brand-mark" />
        Hardsurance
      </Link>

      <nav
        id="site-navigation"
        className={open ? 'open' : ''}
        aria-label="Main navigation"
      >
        <Link href="/product" onClick={closeMenu}>
          Product
        </Link>

        <Link href="/demo" onClick={closeMenu}>
          Demo
        </Link>

        <Link href="/use-cases/robotics" onClick={closeMenu}>
          Use cases
        </Link>

        <Link href="/insights" onClick={closeMenu}>
          Insights
        </Link>

        <Link href="/company" onClick={closeMenu}>
          Company
        </Link>
      </nav>

      <Link
        href="/#contact"
        className="header-cta"
        onClick={closeMenu}
      >
        Book a review
        <span aria-hidden="true">↗</span>
      </Link>

      <button
        className="menu"
        type="button"
        aria-label={
          open
            ? 'Close navigation menu'
            : 'Open navigation menu'
        }
        aria-expanded={open}
        aria-controls="site-navigation"
        onClick={() => setOpen((current) => !current)}
      >
        {open ? (
          <X aria-hidden="true" />
        ) : (
          <Menu aria-hidden="true" />
        )}
      </button>
    </header>
  );
}
