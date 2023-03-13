import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Link as ScrollLink} from 'react-scroll';
import Header from '../components/header'
import Footer from '../components/footer'
import Events from '../components/events'
import groq from 'groq'
import { getClient } from "../lib/sanity.server"
import Link from 'next/link';

const Home: NextPage < { upcoming: any[], previous : any[] }> = ({ upcoming, previous }) => {


  return (
    <>

      <div className='bg-zinc-50 px-10'>
            <div className="justify-between mx-auto flex min-h-screen max-w-7xl flex-col">
                  
              <Head>
                <title> SongChain </title>
                <link rel="icon" href="/minilogo.png" />
              </Head>
               <div>
             
               </div>
              <Header/>             

              <main className="flex flex-col w-full flex-1 items-center justify-center px-40 text-center my-40 md:my-60">
                <div className="flex w-full flex-row items-center justify-center">
                  <h1 className="flex flex-col text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-purple-700 pb-3">
                  Next Gen Music Platform
                  </h1>
                  
                </div>
                
                
                <h2 className="text-black pt-3 font-medium">
                  powered by <img className="inline-block" src="/sol.png" alt="Solana Logo" width={150} height={150} />
                </h2>        

                <div>
                <img src="background.jpeg" alt="" />
                </div>
            
              </main>

                
             
              <div id="" className="flex flex-col gap-5">

                  
              

              </div>

              
              <Footer/>
              
            </div>
            
          </div>
    </>
    
    
  )
}
export const getStaticProps = async ({ preview = false }) => {

  const upcoming = await getClient(preview).fetch(groq`
    *[_type == "post" && endDate > now()] | order(startDate asc) {
     _id,
     title,
     host,
     location,
     link,
     startDate,endDate,
     "username": author->username,
     "categories": categories[]->{id, title},
     "authorImage": author->avatar,
     blurb,
     body,
     mainImage,
     slug,
     publishedAt
     }`)
     
  const previous = await getClient(preview).fetch(groq`
    *[_type == "post" && endDate < now()] | order(startDate asc) {
     _id,
     title,
     host,
     location,
     link,
     startDate,endDate,
     "username": author->username,
     "categories": categories[]->{id, title},
     "authorImage": author->avatar,
     blurb,
     body,
     mainImage,
     slug,
     publishedAt
     }`)
  return {
    props: {
      upcoming,
      previous,
    },
    revalidate: 10,
  }
}


export default Home;