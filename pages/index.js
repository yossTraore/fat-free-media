import Head from "next/head";
import Link from "next/link";
import Header from '../components/header'
import { request } from "../lib/datocms";
import Layout from "../components/layout";
import { renderMetaTags, useQuerySubscription } from "react-datocms";
import { metaTagsFragment, responsiveImageFragment } from "../lib/fragments";
import Container from "../components/container";
import Footer from "../components/footer";
import BigX from "../components/big-x";
import CircleInfinity from "../components/circle-infinity";
import { motion } from "framer-motion"
import { reveal, fade, scaleDown } from "../helpers/transitionHelper"
import { SmoothScrollProvider } from '../contexts/SmoothScroll.context'
// import ReactPlayer from 'react-player'

export default function Index({ data: { home, site } }) {
  const metaTags = home.seo.concat(site.favicon);

  return (
    <SmoothScrollProvider options={{ smooth: true, lerp: 0.13 }}>
      <Layout>
      <Head>{renderMetaTags(metaTags)}</Head>

        <motion.div
          initial="initial"
          animate="enter"
          exit="exit"
        >
          <Header theme="off-black" />
          
          <motion.div variants={fade} className="mb-16 md:mb-20 pt-32 md:pt-48 xl:pt-56 overflow-hidden relative">
            <BigX color="text-white" />
            <Container thin>

              <motion.div
                initial="initial"
                animate="enter"
                exit="exit"
                variants={{
                  enter: { transition: { staggerChildren: 0.1 } }
                }}
                className="w-full mb-12 md:mb-10 xl:mb-0 relative z-10"
              >
                <div className="mb-5">
                  <div className="relative overflow-hidden mb-2" data-scroll data-scroll-speed="1">
                    <div className="flex">
                      <motion.div variants={scaleDown} className="w-5 h-5 bg-off-black rounded-full"></motion.div>
                      <motion.div variants={scaleDown} className="w-5 h-5 -ml-2 bg-transparent border border-off-black rounded-full"></motion.div>
                    </div>
                  </div>
                  <div className="relative overflow-hidden" data-scroll data-scroll-speed="1">
                    <motion.span variants={reveal} className="block font-mono text-lg md:text-xl xl:text-2xl leading-none mb-1">2006—{ new Date().getFullYear() } </motion.span>
                  </div>
                  <div className="relative overflow-hidden" data-scroll data-scroll-speed="1">
                    <motion.span variants={reveal} className="block text-xs uppercase tracking-tighter leading-none">{ home.heroMetaText }</motion.span>
                  </div>
                </div>
                <h1 className="text-5xl md:text-6xl xl:text-7xl leading-none w-full max-w-4xl tracking-tighter pr-12 xl:pr-0" data-scroll data-scroll-speed="1.35">{ home.heroHeading }</h1>
              </motion.div>
            </Container>

            <Container bleed>
              <div className="w-full mb-16 xl:mb-24 relative z-10" data-scroll data-scroll-speed="1.3">
                <div className="relative overflow-hidden mb-4 md:mb-6">
                  <motion.div variants={reveal} className="text-right px-6 md:px-0">
                    <Link href="/work"><a aria-label="Navigate to Our Work" className="underline tracking-tight text-lg inline-block items-center">
                      <div className="flex items-center">
                        <span className="w-3 h-3 mt-px bg-off-black rounded-full mr-1 block"></span>
                        <span className="block">See our work</span>
                      </div>
                    </a></Link>
                  </motion.div>
                </div>

                <div className="relative">
                  <span className="block upright font-mono text-xs absolute top-0 left-0 -ml-5 z-0 uppercase tracking-wide leading-none">Our Showreel</span>
                  <div className="w-full bg-green relative z-10">
                    <motion.button variants={scaleDown} className="text-orange absolute top-0 left-0 mt-8 ml-8 md:ml-16 md:mt-16 xl:ml-24 xl:mt-24 z-20">
                      <span className="absolute top-0 left-0 right-0 bottom-0 text-white flex flex-wrap items-center leading-none tracking-tight text-base xl:text-xl">Watch our showreel</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="block w-24 xl:w-32" viewBox="0 0 85.128 85.499"><path fill="currentColor" d="M15.161 76.238c.132.087.261.181.4.267l.409.256c.542.34 1.054.688 1.472.961a7.266 7.266 0 01.859.59 7.683 7.683 0 00.9.736c.32.215.65.414.985.6.662.393 1.379.685 2.075 1.009l3.62 1.608a6.793 6.793 0 002.108.659l.546.2c.35.118.856.268 1.461.457s1.323.365 2.089.564c.192.047.386.1.585.144l.6.123 1.235.25c.416.072.834.13 1.244.194s.814.134 1.208.167l1.135.117.526.053c.17.013.335.02.493.029l1.528.082c.369.008.581.007.581.007.527.008.607.209 1.36.184.742-.042 1.4-.111 1.991-.163.3-.022.571-.073.833-.108l.738-.111.655-.1c.205-.038.4-.08.58-.117l.982-.2c.591-.109 1.062-.239 1.533-.317s.938-.128 1.5-.2c.293-.033.605-.065.907-.118a2.814 2.814 0 00.839-.254 4.165 4.165 0 011.23-.411c.2-.037.4-.059.6-.084l.591-.085a5.924 5.924 0 001.2-.285 3 3 0 00.61-.309 4.357 4.357 0 00.615-.477 2.863 2.863 0 002.191-.78 3.6 3.6 0 01.633-.335c.215-.1.448-.192.72-.315a9.55 9.55 0 00.961-.5 11.238 11.238 0 001.3-.957q.254-.211.52-.4c.174-.134.348-.269.527-.4.357-.258.725-.5 1.1-.737s.735-.494 1.105-.737l.551-.372.273-.188.262-.2c.388-.3.709-.548.981-.748s.5-.353.678-.493c.368-.272.614-.425.868-.592.127-.083.256-.17.4-.277a5.357 5.357 0 00.507-.407c.193-.173.419-.384.694-.652l.45-.446.256-.258.265-.3c.41-.461.772-.86 1.093-1.207s.577-.669.817-.936.444-.5.628-.7.329-.385.467-.545c.273-.324.482-.579.68-.866a4.727 4.727 0 00.29-.469c.091-.177.185-.375.287-.605a5.692 5.692 0 01.716-1.186c.26-.369.551-.712.857-1.068.152-.178.309-.359.464-.549s.294-.4.439-.611.287-.44.424-.681a5.18 5.18 0 00.375-.783c.124-.319.365-.7.632-1.2a6.226 6.226 0 00.385-.854 9.012 9.012 0 00.332-1.073c0-.009.037-.1.1-.244s.126-.36.215-.611l.3-.855.168-.482.151-.506.3-1 .137-.465.106-.426c.133-.532.229-.9.249-.953a1.8 1.8 0 00.113-.514c.011-.184.009-.374.021-.553a8.185 8.185 0 01.23-1.915c.06-.2.143-.433.261-.844.056-.206.134-.455.2-.769s.132-.692.208-1.151a5.612 5.612 0 00.053-.74c0-.313-.01-.679-.016-1.061 0-.762-.053-1.583 0-2.17.042-.559.068-1.119.072-1.679.2-.262.219-.707-.009-1.416a2.13 2.13 0 01-.047-.16 12.872 12.872 0 00-.445-2.5 2.669 2.669 0 01-.182-1.133 2.524 2.524 0 00-.078-.6 11.52 11.52 0 00-.478-1.616 3.981 3.981 0 01-.055-.165 6.668 6.668 0 00-.1-.909c-.008-.042-.019-.083-.027-.124a2.6 2.6 0 00-.119-.526c-.039-.158-.08-.316-.123-.473-.19-.746-.491-1.46-.753-2.181l-.173-.45a6.24 6.24 0 00-.551-1.778l-.139-.315c-.048-.1-.1-.206-.154-.308l-.313-.6-.093-.241a6.8 6.8 0 00-1.024-1.957l-.246-.526c-.164-.331-.416-.8-.71-1.356s-.677-1.193-1.078-1.876c-.1-.169-.2-.345-.312-.516l-.341-.515-.7-1.05c-.243-.345-.5-.682-.742-1.017s-.481-.671-.737-.972l-.72-.885-.334-.409c-.111-.129-.223-.25-.328-.369l-1.022-1.138a21.722 21.722 0 00-.405-.415c-.367-.379-.281-.577-.831-1.091-.555-.495-1.07-.912-1.524-1.292-.224-.194-.456-.352-.665-.512l-.6-.444-.536-.391c-.172-.119-.338-.224-.492-.327l-.837-.551c-.5-.341-.92-.582-1.308-.86s-.754-.573-1.2-.919c-.231-.184-.474-.382-.725-.558a2.816 2.816 0 00-.773-.413 4.163 4.163 0 01-1.161-.579c-.167-.115-.324-.241-.482-.363l-.478-.358a5.924 5.924 0 00-1.053-.649 3.007 3.007 0 00-.65-.213 4.355 4.355 0 00-.772-.1 2.863 2.863 0 00-2.1-1 3.6 3.6 0 01-.684-.211c-.223-.082-.452-.181-.732-.287a9.584 9.584 0 00-1.031-.328 11.2 11.2 0 00-1.6-.242c-.219-.02-.437-.048-.653-.081s-.437-.056-.654-.092c-.435-.07-.866-.158-1.3-.256s-.869-.17-1.3-.26l-.652-.127-.326-.06-.328-.042c-.489-.06-.889-.114-1.222-.165s-.6-.1-.828-.131c-.453-.068-.734-.134-1.032-.2a8.936 8.936 0 00-.482-.089 5.342 5.342 0 00-.646-.071 23.16 23.16 0 00-.952-.03h-.997l-.4.022c-.616.036-1.154.062-1.627.081s-.881.065-1.239.085-.666.038-.937.05-.5.04-.716.055c-.422.036-.751.068-1.094.132a4.722 4.722 0 00-.536.127c-.19.06-.4.134-.631.225a5.7 5.7 0 01-1.346.332c-.444.077-.893.114-1.361.15-.234.019-.472.035-.716.06s-.489.072-.742.121-.514.108-.782.182a5.192 5.192 0 00-.819.288c-.314.138-.753.237-1.295.4a6.2 6.2 0 00-.876.332 9.045 9.045 0 00-.993.524c-.008 0-.094.043-.24.105s-.344.165-.584.28l-.816.394-.459.222-.465.251-.918.5-.426.232-.377.226c-.47.282-.8.478-.85.5a1.809 1.809 0 00-.443.284c-.138.122-.27.258-.405.376a8.181 8.181 0 01-1.517 1.191c-.183.1-.407.2-.781.412-.185.106-.416.227-.683.405s-.583.4-.961.666a5.583 5.583 0 00-.561.486l-.739.761c-.542.536-1.082 1.157-1.535 1.534a16.312 16.312 0 00-3.765 4.372c-.451.778-.507.774-.673.929a2.519 2.519 0 00-.371.482 11.491 11.491 0 00-.8 1.481 2.655 2.655 0 01-.654.907 5.25 5.25 0 00-.868 1.782 3.539 3.539 0 01-.762 1.48 5.517 5.517 0 00-1.039 1.851l-.125.321c-.04.108-.073.218-.109.327l-.209.656-.206.656-.1.327-.091.331c-.122.441-.251.88-.4 1.315l-.111.326-.1.328q-.107.327-.23.652a6.425 6.425 0 00-.239.8c-.068.272-.1.554-.14.827a70.58 70.58 0 01-.217 1.414q-.088.727-.193 1.481c-.079.5-.125 1.014-.181 1.531l-.086.78-.044.392-.028.395-.122 1.589c-.029.532-.042 1.064-.065 1.595-.008.265-.026.53-.027.794s0 .527 0 .789v.783c0 .26 0 .518.016.774l.076 1.512.021.369.036.364.073.715.075.7.039.34.053.332c.071.44.142.864.215 1.269.039.2.068.4.115.593l.136.559c.09.362.181.7.273 1.019a7.919 7.919 0 00.3.866c.1.261.207.5.31.7a1.518 1.518 0 01.114.458 4.241 4.241 0 00.2.852 4.022 4.022 0 00.267.623 3.4 3.4 0 00.575.778c.378.381.65.595.531 1.263a1.88 1.88 0 00-.015.645 6.33 6.33 0 00.311 1c.085.228.19.5.316.813s.3.674.492 1.1.405.91.692 1.45l.444.872c.08.154.155.317.247.477l.28.5a3.411 3.411 0 00.645.972 2.959 2.959 0 011.023 1.35 14.706 14.706 0 00.895 1.518l.362.547c.133.2.291.394.457.613l.544.7.307.382.349.391c.411.453.755.864 1.08 1.218.28.3.532.563.77.81" data-name="Path 19"/></svg>
                    </motion.button>
                    <video loop={true} playsInline autoPlay="autoplay" muted className="w-full home-video object-cover">
                      <source src={ home.videoRawUrl } type="video/mp4" />
                      
                      Sorry. Your browser does not support the video tag.
                    </video>
                  </div>
                  <div className="h-12 md:h-64 w-64 bg-orange absolute bottom-0 left-0 md:left-auto md:right-0 z-0 -m-5"></div>
                </div>
              </div>
            </Container>

            <Container thin>
              <div className="w-full mb-12 md:mb-16 xl:mb-24 relative z-10" data-scroll data-scroll-speed="1">
                <div className="flex flex-wrap">
                  <div className="w-full md:w-full max-w-sm">
                    <span className="block text-xs uppercase tracking-tighter leading-none">Small but mighty —</span>
                    <h2 className="text-4xl md:text-5xl xl:text-6xl leading-none tracking-tighter">We do three things</h2>
                  </div>

                  <div className="w-full md:w-1/2 max-w-md">
                    <p className="text-lg md:text-xl leading-snug tracking-tight mb-5 md:mb-8">We believe that every moment with a viewer is a privilege, and brands deserve creative bravery without the ego. That’s why you won’t find clickbait or talking heads in our portfolio.</p>

                    <Link href="/contact"><a aria-label="Navigate to Contact us" className="underline tracking-tight text-lg inline-block items-center">Contact us</a></Link>
                  </div>
                </div>
              </div>

              <div className="w-full mb-12 md:mb-16 xl:mb-24 2xl:mb-32 3xl:mb-40 relative z-10">
                <div className="flex flex-wrap">
                  <div className="w-full md:w-1/3 md:px-8">
                    <div className="h-full py-6 md:py-10 border-b md:border-b-0 md:border-l border-dotted border-off-black border-opacity-50 md:px-8">
                      <div className="flex flex-wrap -mx-4 md:mx-0" data-scroll data-scroll-speed="1.25">
                        <div className="text-orange w-full">
                          <CircleInfinity />
                        </div>
                        <div className="flex-1 md:w-full px-2 md:px-0 relative z-10">
                          <h3 className="text-3xl md:text-3xl xl:text-4xl leading-none tracking-tighter">Video<br/>Identity</h3>
                          
                          <p className="font-mono text-sm mb-5 md:mb-8">Video identity is the missing chapter of most brand guideline documents. We help brands articulate how their brand looks, moves, sounds and feels in video.</p>

                          <Link href="/services/video-identity"><a aria-label="Navigate to Video identity" className="underline tracking-tight text-lg inline-block items-center">Learn more</a></Link>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="h-full w-full md:w-1/3 md:px-8">
                    <div className="py-6 md:pb-10 md:pt-64 border-b md:border-b-0 md:border-l border-dotted border-off-black border-opacity-50 md:px-8">
                      <div className="flex flex-wrap -mx-4 md:mx-0" data-scroll data-scroll-speed="2.25">
                        <div className="text-green w-full">
                          <CircleInfinity />
                        </div>
                        <div className="flex-1 md:w-full px-2 md:px-0 relative z-10">
                          <h3 className="text-3xl md:text-3xl xl:text-4xl leading-none tracking-tighter">Content &amp;<br/>Creative</h3>
                          
                          <p className="font-mono text-sm mb-5 md:mb-8">We work best with creatively brave multi-channel campaigns, especially when one creative through-line needs to thrive in different places and durations.</p>

                          <Link href="/services/content-and-creative"><a aria-label="Navigate to Content &amp; Creative" className="underline tracking-tight text-lg inline-block items-center">Learn more</a></Link>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="w-full md:w-1/3 md:px-8">
                    <div className="h-full py-6 md:pb-10 md:pt-32 border-b md:border-b-0 md:border-l md:border-r border-dotted border-off-black border-opacity-50 md:px-8">
                      <div className="flex flex-wrap -mx-4 md:mx-0" data-scroll data-scroll-speed="1.75">
                        <div className="text-purple w-full">
                          <CircleInfinity />
                        </div>
                        <div className="flex-1 md:w-full px-2 md:px-0 relative z-10">
                          <h3 className="text-3xl md:text-3xl xl:text-4xl leading-none tracking-tighter">Strategy &amp;<br/>Consultancy</h3>
                          
                          <p className="font-mono text-sm mb-5 md:mb-8">We help brands plan, create and measure video. We help upskill internal talent to build and grow your video ecosystem like an extension of the team.</p>

                          <Link href="/services/strategy-and-consultancy"><a aria-label="Navigate to Strategy &amp; Consultancy" className="underline tracking-tight text-lg inline-block items-center">Learn more</a></Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Container>

            <Footer />
          </motion.div>
        </motion.div>
      </Layout>
    </SmoothScrollProvider>
  );
}

const HOMEPAGE_QUERY = `
  query HomePage {
    site: _site {
      favicon: faviconMetaTags {
        ...metaTagsFragment
      }
    }
    home {
      seo: _seoMetaTags {
        ...metaTagsFragment
      }
      heroMetaText
      heroHeading
      videoRawUrl
      whatWeDoText
    }
  }
  ${metaTagsFragment}
`

export async function getStaticProps() {
  const data = await request({
    query: HOMEPAGE_QUERY
  })

  return {
    props: {
      data,
    },
  }
}