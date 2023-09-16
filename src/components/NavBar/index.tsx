"use client";

import './style.css'
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input'; // Imported Input from Material-UI
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import AdbIcon from '@mui/icons-material/Adb';


const pages = ['Trang chủ', 'Sản phẩm', 'Liên hệ', 'Blog'];

function ResponsiveAppBar() {
    const handleSearch = () => {
        // Xử lý tìm kiếm ở đây
    };

    return (
        <AppBar position="static" color="default" className="font-sans">
            <Container maxWidth="xl" className='bg-white'>
                <Toolbar className="p-0"> {/* Removed disableGutters */}
                    <Box className="flex-grow"></Box>

                    {/* Thanh tìm kiếm bên trái */}
                    <Box className="flex-grow flex">
                        <Input
                            type="text"
                            placeholder="Tìm kiếm"
                            className="bg-white text-gray-800 px-4 py-2 w-full"
                        />
                        <IconButton onClick={handleSearch} color="inherit">
                            <SearchIcon />
                        </IconButton>
                    </Box>

                    <Box className="flex-grow"></Box>

                    {/* Các nút điều hướng bên phải */}
                    <Box className="flex-grow flex">
                        {pages.map((page) => (
                            <Button
                                key={page}
                                color="inherit"
                                className="text-gray-800 font-thin"
                            >
                                {page}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default ResponsiveAppBar;
