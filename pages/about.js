import Head from "next/head";
import Link from "next/link";
import { renderMetaTags, Image } from "react-datocms";
import Layout from "../components/layout";
import { request } from "../lib/datocms";
import { metaTagsFragment, responsiveImageFragment } from "../lib/fragments";
import Container from "../components/container";
import Footer from "../components/footer";

import BigX from "../components/big-x";
import { motion } from "framer-motion"
import { fade } from "../helpers/transitionHelper"
import { useContext } from 'react'
import { SmoothScrollContext, SmoothScrollProvider } from '../contexts/SmoothScroll.context'

export default function About({ data: { site, about, team } }) {
  // const metaTags = about.seo.concat(site.favicon);

  return (
    <SmoothScrollProvider options={{ smooth: true, lerp: 0.13 }}>
      <Layout>
        {/* <Head>{renderMetaTags(metaTags)}</Head> */}
        
        <motion.div
          initial="initial"
          animate="enter"
          exit="exit"
          className="mb-16 md:mb-20"
        >
          <motion.div variants={fade} className="mb-16 md:mb-20 overflow-hidden relative">
            <div className="bg-black text-white pt-40 md:pt-48 xl:pt-56 pb-8 md:pb-32 xl:pb-48 mb-8 md:mb-20 relative">
              <Container thin>
                <div className="relative z-10">
                  <span data-scroll data-scroll-speed="0.4" className="block text-md md:text-lg xl:text-xl uppercase tracking-tighter leading-none mb-2 md:mb-4 xl:mb-8">A small but mighty team</span>

                  <h1 className="text-4xl md:text-5xl xl:text-6xl leading-none w-full max-w-4xl tracking-tighter pr-12 xl:pr-0 mb-10 md:mb-0" data-scroll data-scroll-speed="1.1">Video carries more feeling and uses more senses than any other medium. It has the potential to pull at the hearts and change the minds of those who watch it more than any other format.</h1>
                </div>

                <span data-scroll data-scroll-speed="0.35" className="font-mono text-xs tracking-wide leading-none md:absolute bottom-0 right-0 mb-12 mr-8 z-10">* We don’t say yes to everything, because we want to give our yes’s our everything.</span>

                <video loop={true} playsInline autoPlay="autoplay" muted className="absolute top-0 left-0 right-0 bottom-0 w-full h-full object-cover z-0">
                  <source src="https://test-videos.co.uk/vids/bigbuckbunny/webm/vp9/1080/Big_Buck_Bunny_1080_10s_10MB.webm" type="video/webm" />
                  <source src="https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/1080/Big_Buck_Bunny_1080_10s_10MB.mp4" type="video/mp4" />
                  
                  Sorry. Your browser does not support the video tag.
                </video>
              </Container>
            </div>

            <Container thin>
              <div className="w-full mb-12 md:mb-16 xl:mb-24 relative z-10" data-scroll data-scroll-speed="1">
                <div className="flex flex-wrap">
                  <div className="w-full md:w-full max-w-md">
                    <span className="block text-xs uppercase tracking-tighter leading-none">Information —</span>
                    <h2 className="text-5xl md:text-6xl xl:text-7xl leading-none tracking-tighter">Our Team</h2>
                  </div>

                  <div className="w-full md:w-1/2 max-w-md">
                    <div dangerouslySetInnerHTML={{ __html: about.ourTeamText }} className="text-lg md:text-xl leading-snug tracking-tight md:mt-8"></div>
                  </div>
                </div>
              </div>

              <div className="w-full mb-12 md:mb-16 xl:mb-24 relative z-10">
                <div className="flex flex-wrap">

                  {team.map((team, i) => {
                    let scrollSpeed = 1.5;
                    let spacing = `py-8`
                    
                    if (i === 0) {
                      scrollSpeed = 2.25;
                      spacing = `py-8 md:py-10 md:pt-32`
                    } else if (i === 1) {
                      scrollSpeed = 1.25;
                      spacing = `py-8 md:py-10 md:pt-0`
                    } else if (i === 2) {
                      scrollSpeed = 1.75;
                      spacing = `py-8 md:py-10 md:pt-64`
                    }

                    return (
                      <div className="flex flex-col w-full md:w-1/3" key={i}>
                        <div className={`h-full border-b md:border-b-0 md:border-l border-dotted border-off-black border-opacity-50 md:px-8 lg:px-12 xl:px-16 ${spacing}`}>
                          <div data-scroll data-scroll-speed={scrollSpeed}>
                            <div className="relative mr-5 mb-5">
                              <Image
                                data={{
                                  ...team.image.responsiveImage,
                                  alt: team.image.alt ? team.image.alt : team.image.title,
                                }}
                                className="w-full relative z-0"
                              />
                              <span className="block upright font-mono text-xs absolute top-0 right-0 -mr-5 z-0 uppercase tracking-wide leading-none">{ team.jobTitle }</span>
                            </div>

                            <h3 className="text-3xl md:text-3xl xl:text-4xl leading-none tracking-tighter">{ team.name }</h3>
                              
                            <div dangerouslySetInnerHTML={{ __html: team.shortBio }} className="font-mono text-sm mb-5 md:mb-8"></div>

                            <Link href="/"><a aria-label={`Navigate to ${team.name}'s biography`} className="underline tracking-tight text-lg inline-block items-center">Read bio</a></Link>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </Container>

            <div className="bg-yellow pt-8 pb-16 md:pt-12 md:pb-20 lg:pt-16 lg:pb-24 xl:pt-20 xl:pb-32 overflow-hidden relative">
              <BigX color="text-yellow-dark" />
              <Container>
                <div className="flex flex-wrap items-center md:-mx-12 relative z-20">
                  <div className="w-full md:w-1/2 md:px-12 mb-6 md:mb-0" data-scroll data-scroll-speed="0.25">
                    <Image
                      data={{
                        ...about.calloutImage.responsiveImage,
                        alt: about.calloutImage.alt ? about.calloutImage.alt : about.calloutImage.title,
                      }}
                      className="w-full relative z-0"
                    />
                  </div>
                  <div className="w-full md:w-1/2 md:px-12" data-scroll data-scroll-speed="1.05">
                    { about.calloutMetaText && (
                      <span className="block text-xs uppercase tracking-tighter leading-none mb-6 md:mb-10">{ about.calloutMetaText } —</span>
                    )}
                    <p className="text-3xl md:text-4xl xl:text-5xl leading-none tracking-tighter pr-8 md:pr-8 lg:pr-16 xl:pr-20 mb-6 md:mb-10">{ about.calloutHeading }</p>

                    <Link href="/"><a aria-label="Navigate to Start a project" className="underline tracking-tight text-lg inline-block items-center">Start a project</a></Link>
                  </div>
                </div>
              </Container>
            </div>

            <Footer />
          </motion.div>
        </motion.div>
      </Layout>
    </SmoothScrollProvider>
  );
}

const ABOUT_QUERY = `
  query AboutPage {
    site: _site {
      favicon: faviconMetaTags {
        ...metaTagsFragment
      }
    }
    team: allTeams {
      id
      name
      shortBio
      slug
      jobTitle
      image {
        responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 600, h: 850 }) {
          ...responsiveImageFragment
        }
      }
    }
    about {
      title
      ourTeamText
      calloutImage {
        responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 800, h: 1050 }) {
          ...responsiveImageFragment
        }
        title
        alt
      }
      calloutMetaText
      calloutHeading
    }
  }
  ${metaTagsFragment}
  ${responsiveImageFragment}
`

export async function getStaticProps() {
  const data = await request({
    query: ABOUT_QUERY
  })

  return {
    props: {
      data,
    },
  }
}