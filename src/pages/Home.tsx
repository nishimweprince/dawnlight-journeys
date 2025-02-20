import Layout from '@/containers/layout/Layout';

const Home = () => {
  return (
    <Layout>
      <main className='w-full h-full min-h-[75vh] flex items-center justify-center'>
          <section className='hero-section uppercase items-center justify-center w-full flex flex-col gap-4 min-h-[70vh]'>
            <h3 className='text-white text-4xl font-bold'>
              Welcome to
            </h3>
            <h1 className='text-white text-6xl font-bold'>
              Dawnlight Journeys
            </h1>
          </section>
      </main>
    </Layout>
  )
}

export default Home;
