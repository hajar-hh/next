"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();

  return (
    <header>
      <nav>
        <ul>
          <li className={pathname === '/' ? 'active' : ''}>
            <Link href="/">Home</Link>
          </li>
          <li className={pathname === '/support' ? 'active' : ''}>
            <Link href="/support">Support</Link>
          </li>
          <li className={pathname === '/store' ? 'active' : ''}>
            <Link href="/store">Store</Link>
          </li>
          <li className={pathname === '/about' ? 'active' : ''}>
            <Link href="/about">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
