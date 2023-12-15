import Head from 'next/head';
import Image from 'next/image';
import Header from '../components/Header.jsx';
import Dashboard from './Dashboard.jsx'


export default function Home() {
 
  
  return (
    <>
      <Head>
        <title>Dashboard</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=' h-screen'>
     
     <Header />
     <Dashboard />
    
      
      </main>
    </>
  )
}