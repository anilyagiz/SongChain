import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Link as ScrollLink} from 'react-scroll';
import Header from '../../components/header'
import Footer from '../../components/footer'
import Events from '../../components/events'
import groq from 'groq'
import { getClient } from "../../lib/sanity.server"
import Link from 'next/link';

const Event: NextPage < { upcoming: any[], previous : any[] }> = ({ upcoming, previous }) => {


  return (
    <>

      <div className='bg-zinc-50 px-10'>
            <div className="justify-between mx-auto flex min-h-screen max-w-7xl flex-col">
                  
              <Head>
                <title> SongChain | Course </title>
                <link rel="icon" href="/background.png" />
              </Head>
            
              <Header/>
             
              <div id="events" className="flex flex-col gap-5">

  

              </div>

              <Footer/>
              
            </div>
            
          </div>
    </>
    
    
  )
}
export const getStaticProps = async ({ preview = false}) => {

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

export default Event;