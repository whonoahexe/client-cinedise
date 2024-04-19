'use client';

import { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Lottie from "lottie-react";
import { Variants, cubicBezier, motion } from "framer-motion";

import logo from "@/public/vector.svg";
import BurgerAnim from "@/app/burger.json";

const Nav = () => {
    const pathname = usePathname();
    const workPaths = ['/film', '/post', '/motion', '/graphic', '/ui'];
    const isWorkPath = workPaths.some(path => pathname.startsWith(path));

    const [active, setActive] = useState(false);
    const animateRef = useRef<any>(null);

    const handleClick = () => {
        setActive(prevActive => !prevActive);
        animateRef.current?.setDirection(active ? -1 : 1);
        animateRef.current?.play();
    };

    const customEase = cubicBezier(0.77, 0, 0.18, 1);

    const containerVariant: Variants = {
        visible: {
            transition: {
                staggerChildren: 0.1,
                staggerDirection: 1
            }
        }
    }

    const itemVariant: Variants = {
        hidden: {
            opacity: 0,
            y: 100,
            transition: {
                duration: 0.8,
                ease: customEase
            }
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: customEase
            }
        }
    }

    return (
        <>
            <div className="fixed top-[69px] left-[69px] cursor-pointer z-50">
                <div className={!isWorkPath ? "block" : "hidden"}><Link href="/"><Image src={logo} alt="logo" width={85} height={85} /></Link></div>
            </div>
            <div className="fixed top-[69px] right-[69px] cursor-pointer z-50">
                <Lottie lottieRef={animateRef} animationData={BurgerAnim} loop={false} autoplay={false} style={{ width: '85px' }} onClick={handleClick} />
            </div>
            
            <motion.nav 
                className="absolute w-full h-full bg-black z-40 rounded-[22px] border-2 border-accent-primary overflow-auto"
                initial={{ x: '101%' }}
                animate={{ x: active ? '20%' : '101%' }}
                transition={{ duration: 0.7, ease: customEase }}
            >
                <motion.div 
                    className="flex flex-col gap-4 items-center justify-center h-full" 
                    variants={containerVariant}
                    initial={false}
                    animate={active ? 'visible' : 'hidden'}
                >
                    <motion.div variants={itemVariant}>
                        <Link href="/" className={`${pathname === '/' ? 'text-4xl font-bold text-accent-primary' : 'text-4xl font-bold text-white-primary hover:text-accent-secondary'}`} onClick={handleClick}>Home</Link>
                    </motion.div>
                    <motion.div variants={itemVariant}>
                        <Link href="/film" className={`${isWorkPath ? 'text-4xl font-bold text-accent-primary' : 'text-4xl font-bold text-white-primary hover:text-accent-secondary'}`} onClick={handleClick}>Work</Link>
                    </motion.div>
                    <motion.div variants={itemVariant}>
                        <Link href="/contact" className={`${pathname === '/contact' ? 'text-4xl font-bold text-accent-primary' : 'text-4xl font-bold text-white-primary hover:text-accent-secondary'}`} onClick={handleClick}>Contact</Link>
                    </motion.div>
                </motion.div>
            </motion.nav>
        </>
    );
}
 
export default Nav;
