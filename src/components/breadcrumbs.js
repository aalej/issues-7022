'use client';
import React, { useMemo, Suspense } from 'react';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';

// Example array of brand menu items
const brandMenuItems = [
  { title: 'Firewire', href: '/search?brand=Firewire' },
  { title: 'JS Industries', href: '/search?brand=JS Industries' },
  { title: 'Channel Island', href: '/search?brand=Channel Island' },
  // Add more brands as needed
];

const sizeMenuItems = [
    { title: 'Knee', href: '/search?size=knee' },
    { title: 'Waist', href: '/search?size=waist' },
    { title: 'Shoulder', href: '/search?size=shoulder' },
    { title: 'Overhead', href: '/search?size=Overhead' },
    // Add more sizes as needed
  ];

const BreadcrumbsContent = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const breadcrumbs = useMemo(() => {
    let crumbs = [{ title: 'Home', href: '/main/home' }];

    if (pathname.includes('/search')) {
      crumbs.push({ title: 'Surfboards', href: '/main/search?category=all' });
    }

    const brand = searchParams.get('brand');
    const size = searchParams.get('size');
    
    if (brand) {
      const brandItem = brandMenuItems.find(item => item.href.includes(`brand=${brand}`));
      if (brandItem) {
        crumbs.push({ title: brandItem.title, href: `/main${brandItem.href}` });
      }
    }

    if (size) {
      const sizeItem = sizeMenuItems.find(item => item.href.includes(`size=${size}`));
      if (sizeItem) {
        crumbs.push({ title: sizeItem.title, href: `/main${sizeItem.href}` });
      }
    }

    return crumbs;
  }, [pathname, searchParams]);

  return (
    <ol className="breadcrumb">
      {breadcrumbs.map((crumb, index) => (
        <li key={index} className={`breadcrumb-item ${index === breadcrumbs.length - 1 ? 'active' : ''}`}>
          {index < breadcrumbs.length - 1 ? (
            <Link href={crumb.href}>
              {crumb.title}
            </Link>
          ) : (
            crumb.title
          )}
        </li>
      ))}
    </ol>
  );
};

const Breadcrumbs = () => {
  return (
    <nav aria-label="breadcrumb">
      <Suspense fallback={<div>Loading...</div>}>
        <BreadcrumbsContent />
      </Suspense>
    </nav>
  );
};

export default Breadcrumbs;