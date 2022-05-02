import Layout from "../Layout";

const NotFound: React.FC = () => (
  <Layout className='relative bg-[#111111]'>
    <div className='bg-grid absolute inset-0 pointer-events-none' />

    <div className='flex grow justify-center items-center w-full h-full z-10'>
      <h1 className='text-3xl sm:text-5xl md:text-7xl font-black'>
        404 - Not Found
      </h1>
    </div>
  </Layout>
);

export default NotFound;
