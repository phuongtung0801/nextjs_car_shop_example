import { footerLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";

const Footer = () => (
    <footer className="bg-gray-100">
        <div className="container mx-auto py-10 px-4 text-center">
            {/* Add mx-auto to horizontally center the content */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                {/* Copyright Section */}
                <div className="col-span-1">
                    <div className="flex flex-col items-center"> {/* Add this flex container */}
                        <Image src="/logo.svg" alt="logo" width={118} height={18} className="object-contain" />
                        <p className="text-base text-gray-700 mt-4">
                            Carhub 2023 <br />
                            All Rights Reserved &copy;
                        </p>
                    </div>
                </div>

                {/* About Section */}
                <div className="col-span-1">
                    <h3 className="text-lg font-semibold mb-4">About</h3>
                    <ul className="text-gray-500">
                        {footerLinks[0].links.map((link) => (
                            <li key={link.title} className="mb-2">
                                <Link href={link.url}>{link.title}</Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Company Section */}
                <div className="col-span-1">
                    <h3 className="text-lg font-semibold mb-4">Company</h3>
                    <ul className="text-gray-500">
                        {footerLinks[1].links.map((link) => (
                            <li key={link.title} className="mb-2">
                                <Link href={link.url}>{link.title}</Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Socials Section */}
                <div className="col-span-1">
                    <h3 className="text-lg font-semibold mb-4">Socials</h3>
                    <ul className="text-gray-500">
                        {footerLinks[2].links.map((link) => (
                            <li key={link.title} className="mb-2">
                                <Link href={link.url}>{link.title}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="border-t border-gray-200 mt-8 pt-6 text-gray-500 text-center">
                <p>@2023 CarHub. All rights reserved</p>
                <div className="mt-4">
                    <Link href="/" className="text-gray-500 mr-4">
                        Privacy & Policy
                    </Link>
                    <Link href="/" className="text-gray-500">
                        Terms & Condition
                    </Link>
                </div>
            </div>
        </div>
    </footer>
);

export default Footer;
