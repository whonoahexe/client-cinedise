'use client';
 
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

import { slugToTitle, capitalizeFirstLetter } from '@/utils';
import Button from '../core/Button';

const WorkPath = () => {
    const router = useRouter();
    const pathname = usePathname();

    const fields = ['Film', 'Post', 'Motion', 'Graphic', 'UI'];

    const [, firstPart, secondPart] = pathname.split('/');
    const firstPath = capitalizeFirstLetter(firstPart);
    const secondPath = secondPart ? capitalizeFirstLetter(secondPart) : '';

    return (
        <>
            <div className="flex justify-between items-center col-span-11 mt-[52px]">
                <div className='flex gap-2 items-center'>
                    <Link href="/" className='text-white-primary text-[28px]'><span className='underline underline-offset-2'>Home</span></Link>
                    <span className='text-white-primary text-[28px]'>{`>`}</span>
                    <Link href="/film" className='text-white-primary text-[28px]'><span className='underline underline-offset-2'>Work</span></Link>
                    <span className='text-white-primary text-[28px]'>{`>`}</span>

                    {/* dynamic routes */}
                    <span 
                        className='text-white-primary text-[28px] cursor-pointer'
                        onClick={() => router.push(`/${firstPath.toLowerCase()}`)}
                    >
                        <span className={`${!secondPart ? 'text-accent-primary underline underline-offset-2' : 'underline underline-offset-2'}`}>
                            {firstPath}
                        </span>
                    </span>
                    {secondPart && (
                        <>
                            <span className='text-white-primary text-[28px]'>{`>`}</span>
                            <span className='text-accent-primary underline underline-offset-2 text-[28px]'>{slugToTitle(secondPath)}</span>
                        </>
                    )}
                </div>

                <div>
                    {fields.map((field, index) => (
                        <Button key={index} isActive={field === firstPath} text={field} onClick={() => router.push(`/${field.toLowerCase()}`)} />
                    ))}
                </div>
            </div>
        </>
    );
}
 
export default WorkPath;
