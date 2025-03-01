import Layout from '@/containers/layout/Layout';
import SafarisSection from './SafarisSection';

const Home = () => {
  return (
    <Layout>
      <main className="w-full h-full flex flex-col items-center justify-center">
        <section className="hero-section uppercase items-center justify-center w-full flex flex-col gap-4 min-h-[70vh]">
          <h3 className="text-white text-4xl font-bold">Welcome to</h3>
          <h1 className="text-white text-6xl font-bold">Dawnlight Journeys</h1>
        </section>
      </main>
      <SafarisSection />

    </Layout>
  );
}

export default Home;
