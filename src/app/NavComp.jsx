"use client";
import Drawer from '@/components/drawer/Drawer';
import Navbar from '@/components/navbar/Navbar';
import NavbarMbl from '@/components/navbar/NavbarMbl';
import React, { useRef } from 'react'

export default function NavComp() {
  const drawerRef = useRef();
  const openDrawer = () => {
    if (drawerRef.current) {
      drawerRef.current.classList.add("open");
      // overlayRef.current.classList.add("visible");
    }
  };
  return (
    <>
      <Navbar className="hidden md:flex" openDrawer={openDrawer} />
      <NavbarMbl className="block md:hidden" openDrawer={openDrawer} />
      <Drawer ref={drawerRef} />
    </>
  )
}
