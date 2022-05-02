import { Link } from "react-router-dom";
import { GithubIcon, RoseLogo, TelegramIcon } from "../../assets/svg";

const Layout: React.FC<{ className?: string; children?: React.ReactNode }> = ({
  className,
  children
}) => (
  <div className={`flex flex-col min-h-screen ${className}`}>
    <header className='flex items-center justify-between absolute px-6 2xl:px-2 py-12 max-w-screen-2xl mx-auto inset-0 bottom-auto z-20'>
      <Link to='/'>
        <RoseLogo className='fill-white md:hover:scale-105 active:scale-105 duration-150 ease-out cursor-pointer' />
      </Link>

      <div className='flex space-x-6'>
        <a
          href='https://google.com'
          className='fill-white/60 hover:fill-rose-600 transition duration-150 ease-out'
          target='_blank'
          rel='noreferrer'
        >
          <div className='sr-only'>github</div>
          <GithubIcon className='w-7' />
        </a>
        <a
          href='https://google.com'
          className='fill-white/60 hover:fill-rose-600 transition duration-150 ease-out'
          target='_blank'
          rel='noreferrer'
        >
          <div className='sr-only'>telegram bot</div>
          <TelegramIcon className='w-7' />
        </a>
      </div>
    </header>

    {children}

    <footer className='text-sm text-neutral-500 text-center py-4 mt-auto z-10'>
      Copyright © 2022 The Mafia Helper
    </footer>
  </div>
);

export default Layout;
