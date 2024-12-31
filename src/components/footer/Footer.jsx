import { FacebookSvg, InfoSvg, TwitterSvg } from '@/assets'
import React from 'react';

const links = [
    {
        title: 'Company',
        items: [
            { label: 'About Us', href: '/about' },
            { label: 'Careers', href: '/careers' },
            { label: 'Blog', href: '/blog' },
        ],
    },
    {
        title: 'Support',
        items: [
            { label: 'Contact Us', href: '/contact' },
            { label: 'FAQs', href: '/faqs' },
            { label: 'Help Center', href: '/help' },
        ],
    },
    {
        title: 'Legal',
        items: [
            { label: 'Privacy Policy', href: '/privacy' },
            { label: 'Terms of Service', href: '/terms' },
        ],
    },
    {
        title: 'Resources',
        items: [
            { label: 'Docs', href: '/docs' },
            { label: 'API', href: '/api' },
            { label: 'Community', href: '/community' },
        ],
    },
];

const socialMedia = [
    { label: 'Facebook', href: 'https://facebook.com', icon: <FacebookSvg className="fill-white" /> },
    { label: 'Twitter', href: 'https://twitter.com', icon: <TwitterSvg className="fill-white" /> },
];

export default function Footer() {
    return (
        <footer className="bg-gray-800 text-gray-300 py-6">
            <div className="container mx-auto px-4">
                {/* Top Section: Links */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {links.map((section, index) => (
                        <div key={index}>
                            <h3 className="text-lg font-semibold text-white mb-2">
                                {section.title}
                            </h3>
                            <ul className="space-y-2">
                                {section.items.map((item, idx) => (
                                    <li key={idx}>
                                        <a
                                            href={item.href}
                                            className="hover:text-gray-400 transition-colors duration-200"
                                        >
                                            {item.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Divider */}
                <div className="border-t border-gray-700 my-6"></div>

                {/* Bottom Section: Social Media and Copyright */}
                <div className="flex flex-col sm:flex-row justify-between items-center">
                    {/* Social Media */}
                    <div className="flex space-x-4 mb-4 sm:mb-0">
                        {socialMedia.map((media, index) => (
                            <a
                                key={index}
                                href={media.href}
                                className="hover:text-gray-400 transition-colors duration-200"
                                aria-label={media.label}
                            >
                                {media.icon}
                            </a>
                        ))}
                    </div>
                    {/* Copyright */}
                    <p className="text-sm text-gray-500">
                        © {new Date().getFullYear()} {'mizanur hasan'}
                    </p>
                </div>
            </div>
        </footer>

    )
}
