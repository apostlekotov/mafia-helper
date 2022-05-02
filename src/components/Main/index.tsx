import { Link } from "react-router-dom";
import Image from "../Image";
import Layout from "../Layout";
import { TelegramIcon } from "../../assets/svg";

const Main: React.FC = () => (
  <Layout>
    <section className='relative bg-[#111111] xl:h-[90vh] overflow-clip'>
      <div className='bg-grid absolute inset-0 pointer-events-none' />

      <div className='flex flex-col relative max-w-screen-2xl items-center justify-center text-center w-full h-full px-8 mt-40 xl:mt-0 mx-auto z-10'>
        <h1 className='text-3xl sm:text-5xl md:text-7xl font-black mb-4'>
          The Mafia Helper
        </h1>
        <p className='text-base md:text-xl text-neutral-400 max-w-md md:max-w-2xl mb-8'>
          Your web assistant in running a social, intellectual game{" "}
          <span className='text-rose-300 font-medium'>Mafia</span> for a large
          company and without cards
        </p>
        <div className='flex items-center justify-center flex-wrap gap-4'>
          <Link className='btn-primary' to='play'>
            Getting started
          </Link>
        </div>

        <div className='flex'>
          <div className='my-20 scale-125 md:scale-100 lg:my-0 xl:absolute max-w-sm md:max-w-md 2xl:max-w-lg -left-16 xl:-left-16 -bottom-8'>
            <Image
              src='/img/don-stack.png'
              className='h-full object-contain'
              alt='bot'
            />
          </div>

          <div className='hidden md:block xl:absolute max-w-md 2xl:max-w-lg -right-16 xl:-right-16 -bottom-8'>
            <Image
              src='/img/sheriff-stack.png'
              className='h-full object-contain'
              alt='bot'
            />
          </div>
        </div>
      </div>
    </section>

    <section className='flex items-center min-h-[80vh]'>
      <div className='flex flex-col md:flex-row max-w-screen-2xl items-center justify-between w-full h-full md:gap-16 px-8 m-auto'>
        <div className='flex flex-col items-start max-w-3xl'>
          <h2 className='text-2xl md:text-5xl font-normal mb-4'>
            Introducing The Mafia Helper in Telegram
          </h2>
          <p className='text-base md:text-xl text-neutral-400 max-w-3xl mb-8'>
            Easy-to-use telegram bot{" "}
            <span className='text-sky-300 font-medium'>"Господин Ведущий"</span>{" "}
            is a good alternative to the web version with the ability to save
            the history of your games in the chat
          </p>

          <a
            href='https://google.com'
            className='btn-telegram'
            target='_blank'
            rel='noreferrer'
          >
            <TelegramIcon className='w-5 mr-3 fill-white' />
            Telegram Bot
          </a>
        </div>

        <div className='flex grow min-w-[30vw] h-[80vh] my-16 md:my-12 px-8'>
          <Image
            src='/img/bot-mockup.webp'
            className='h-full mx-auto object-contain drop-shadow-2xl'
            alt='bot'
          />
        </div>
      </div>
    </section>
  </Layout>
);

export default Main;
