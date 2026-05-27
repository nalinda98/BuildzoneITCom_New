import Image from 'next/image';
import Link from 'next/link';

const Logo: React.FC = () => {

    return (
        <Link href="/" className="flex items-center">
            <Image
                src="/images/logo/logo.png"
                alt="logo"
                width={60}
                height={50}
                // quality={100}
                className='dark:hidden'
            />
            <Image
                src="/images/footer/footer-logo-white.png"
                alt="logo"
                width={60}
                height={50}
                // quality={100}
                className='dark:block hidden'
            />
            <span className='text-3xl font-bold text-gray-800 dark:text-gray-200 ml-2'>Build<span className='text-primary'>Zone</span></span>
        </Link>
    );
};

export default Logo;
