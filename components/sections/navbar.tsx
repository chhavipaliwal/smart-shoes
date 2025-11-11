'use client';
import React from 'react';
import { Icon } from '@iconify/react/dist/iconify.js';
import {
  cn,
  Navbar as NextNavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Divider,
  Avatar
} from '@heroui/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { signOut } from 'next-auth/react';

const Navbar = ({ session }: { session: any }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const pathname = usePathname();
  if (pathname.includes('/auth')) return null;

  const menuItems = [
    'About',
    'Blog',
    'Customers',
    'Pricing',
    'Enterprise',
    'Changelog',
    'Documentation',
    'Contact Us'
  ];

  return (
    <NextNavbar
      classNames={{
        base: cn('border-default-100', {
          'bg-default-200/50 dark:bg-default-100/50': isMenuOpen
        }),
        wrapper: 'w-full justify-center',
        item: 'hidden md:flex'
      }}
      height="60px"
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      {/* Left Content */}
      <NavbarBrand>
        <div className="rounded-full bg-foreground text-background">
          <Avatar alt="logo" src="/logo.jpeg" />
        </div>
        <span className="ml-2 text-small font-medium">Devocode</span>
      </NavbarBrand>

      {/* Center Content */}
      <NavbarContent justify="center">
        <NavbarItem>
          <Link className="text-default-500" href="/">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-default-500" href="/dashboard">
            About
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-default-500" href="/contact">
            Product
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-default-500" href="/about">
            Dashboard
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-default-500" href="/integration">
            How It Works
          </Link>
        </NavbarItem>
      </NavbarContent>

      {/* Right Content */}
      {/* <j */}

      <NavbarMenuToggle className="text-default-400 md:hidden" />

      <NavbarMenu
        className="top-[calc(var(--navbar-height)_-_1px)] max-h-fit bg-default-200/50 pb-6 pt-6 shadow-medium backdrop-blur-md backdrop-saturate-150 dark:bg-default-100/50"
        motionProps={{
          initial: { opacity: 0, y: -20 },
          animate: { opacity: 1, y: 0 },
          exit: { opacity: 0, y: -20 },
          transition: {
            ease: 'easeInOut',
            duration: 0.2
          }
        }}
      >
        {session ? (
          <NavbarMenuItem>
            <Button fullWidth variant="faded">
              Logout
            </Button>
          </NavbarMenuItem>
        ) : (
          <>
            <NavbarMenuItem>
              <Button fullWidth as={Link} href="/auth/register" variant="faded">
                Sign In
              </Button>
            </NavbarMenuItem>
            <NavbarMenuItem className="mb-4">
              <Button
                fullWidth
                as={Link}
                className="bg-foreground text-background"
                href="/auth/register"
              >
                Get Started
              </Button>
            </NavbarMenuItem>
          </>
        )}
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link className="mb-2 w-full text-default-500" href="#">
              {item}
            </Link>
            {index < menuItems.length - 1 && <Divider className="opacity-50" />}
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </NextNavbar>
  );
};

export default Navbar;
