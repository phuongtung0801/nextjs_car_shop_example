import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-200 py-4">
            <div className="container mx-auto text-center">
                <p className="text-sm text-gray-600">
                    &copy; {new Date().getFullYear()} Khang Gia Decor
                </p>
                <p className="text-xs text-gray-600">
                    Happy Surfing
                </p>
                <p className="text-xs text-gray-600">
                    <a href="#" className="text-blue-500 hover:underline">Privacy Policy</a>
                    {' | '}
                    <a href="#" className="text-blue-500 hover:underline">Terms of Service</a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
