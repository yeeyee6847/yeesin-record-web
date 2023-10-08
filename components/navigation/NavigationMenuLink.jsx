'use client'
import { Menu } from "@headlessui/react";
import React from "react";
import NavigationLink from "./NavigationLink";
import { ChevronDownIcon } from '@heroicons/react/24/solid'
import { Fragment } from 'react'


export default function NavigationMenuLink({ title, menuLinks }) {
    return (
        <div className="flex">
            <Menu>
                <Menu.Button className='flex items-center gap-1 hover:text-slate-600 text-lg'>
                    {title}
                    <ChevronDownIcon className='h-4 w-4' />
                </Menu.Button>

                <Menu.Items className='absolute flex flex-col bg-slate-100 top-12 mt-1 px-3 py-2 gap-2'>
                    {menuLinks.map((link) => (
                        <Menu.Item key={link.href} as={Fragment}>
                            <NavigationLink href={link.href}>{link.title}</NavigationLink>
                        </Menu.Item>
                    ))}
                </Menu.Items>
            </Menu>
        </div>
    )
}