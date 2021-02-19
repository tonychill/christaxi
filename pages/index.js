import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <header className="fixed top-0 z-50 shadow-md w-full px-8 text-gray-700 bg-white body-font">
          <div className="container flex flex-col flex-wrap items-center justify-between py-5 mx-auto md:flex-row max-w-7xl">
            <a
              href="#_"
              className="flex items-center order-first mb-4 font-medium text-gray-900 lg:order-none lg:w-auto title-font lg:items-center lg:justify-center md:mb-0"
            >
              <span>
                <svg id="outline" height={32} viewBox="0 0 512 512" width={32} xmlns="http://www.w3.org/2000/svg">
                  <path d="m48.54993 335.28882a48.076 48.076 0 0 0 47.44665 40.70581h32a48.07 48.07 0 0 0 47.34632-40.14356l73.25946-.26757a48.07226 48.07226 0 0 0 47.39422 40.41113h32a47.88832 47.88832 0 0 0 35.99634-16.29736 48.32638 48.32638 0 0 0 36.00366 16.29736h32a48.06719 48.06719 0 0 0 47.511-41.21045 24.038 24.038 0 0 0 16.489-22.78955v-64a56.06353 56.06353 0 0 0 -56-56h-52.99414l-41.37844-36.20606a79.97887 79.97887 0 0 0 -52.68066-19.79394h-193.06443a55.63355 55.63355 0 0 0 -39.59815 16.40185l-34.91162 34.91163a31.78928 31.78928 0 0 0 -9.37256 22.62744v86.05908a40.05922 40.05922 0 0 0 32.55335 39.29419zm.31952-16.37451a24.10851 24.10851 0 0 1 -15.53894-15.04431 7.98838 7.98838 0 0 0 4.91314-2.87781l12.00977-15.01219a58.57975 58.57975 0 0 1 91.48633 0l12.00976 15.01221a7.99952 7.99952 0 0 0 6.24707 3.00244h16v15.85376l-32.6842.11938a47.99135 47.99135 0 0 0 -94.44293-1.05346zm15.12713 9.08032a32 32 0 1 1 32 32 32.036 32.036 0 0 1 -32-32zm67.95832 31.74637a47.8461 47.8461 0 0 0 11.3671-23.773l15.68207-.05738a32.07723 32.07723 0 0 1 -27.04917 23.83038zm132.04168-31.74634a32 32 0 1 1 32 32 32.036 32.036 0 0 1 -32-32.00003zm67.95825 31.74634a47.84613 47.84613 0 0 0 11.36231-23.74634h15.66686a32.07881 32.07881 0 0 1 -27.02917 23.74634zm40.9292-14.76514a47.56989 47.56989 0 0 0 2.43311-8.9812h55.66686a31.99507 31.99507 0 0 1 -58.1 8.9812zm63.0708 14.76514a47.84613 47.84613 0 0 0 11.36231-23.74634h15.66686a32.07881 32.07881 0 0 1 -27.02917 23.74634zm36.04175-39.74634h-128.67944a47.989 47.989 0 0 0 -94.56738-.41187l-56.75318.20728v-15.79544h40a7.99949 7.99949 0 0 0 6.24707-3.00244l12.00977-15.01219a58.57975 58.57975 0 0 1 91.48633 0l12.00976 15.01221a7.99952 7.99952 0 0 0 6.24707 3.00244h120v8a8.00917 8.00917 0 0 1 -8 7.99998zm-88-64a16.01834 16.01834 0 0 1 -16-16h24v16zm24-16h71.19507a40.02741 40.02741 0 0 1 .80493 8v8h-72zm32-32a39.96212 39.96212 0 0 1 31.97815 16h-111.97815a7.99977 7.99977 0 0 0 -8 8v8a32.036 32.036 0 0 0 32 32h96v16h-116.15478l-9.60791-12.00977a74.58025 74.58025 0 0 0 -116.47461 0l-9.60791 12.00977h-36.15479v-16a7.99877 7.99877 0 0 0 -2.34326-5.65674l-21.65674-21.65723v-36.686h272zm-147.05322-56a63.98108 63.98108 0 0 1 42.14453 15.835l27.61719 24.165h-71.70264l-41.37844-36.20609c-1.52313-1.33276-3.101-2.58764-4.71-3.79394zm-96 0a63.98108 63.98108 0 0 1 42.14453 15.835l27.61719 24.165h-98.7085v-40zm-44.94678 40h-64.45458l28.57141-40h35.88318zm-115.314 6.62744 34.91162-34.91162a39.69445 39.69445 0 0 1 24.74115-11.55371l-30.84857 43.188a8 8 0 0 0 6.50976 12.6499h80v40a7.99881 7.99881 0 0 0 2.34326 5.65674l21.65674 21.65722v12.686h-12.15474l-9.60791-12.00977a74.58025 74.58025 0 0 0 -116.47461 0l-5.7627 7.20337v-27.1936h8a7.99944 7.99944 0 0 0 6.65625-3.5625l16-24a8 8 0 0 0 -6.65625-12.4375h-24v-6.05908a15.89423 15.89423 0 0 1 4.68604-11.31348zm-4.686 41.37256v-8h9.05176l-5.333 8z" />
                  <circle cx="95.997" cy="327.995" r={8} />
                  <path d="m191.997 231.995h24v16h-24z" />
                  <circle cx="295.997" cy="327.995" r={8} />
                </svg>
              </span>
              <span className="mr-2 text-xl font-black leading-none text-gray-900 select-none logo">
                Chris Taxi Services<span className="text-indigo-600">.</span>
              </span>
            </a>
            <div className="relative flex flex-col md:flex-row">
              <nav className="flex flex-wrap items-center pt-3 pb-5 mb-4 text-base border-b border-gray-200 md:pt-0 md:mb-0 md:border-b-0 md:pr-3 md:mr-3 md:border-r md:pb-0">
                <a href="https://www.google.com" className="mr-6 font-medium leading-6 text-gray-600 hover:text-gray-900">
                  Home
                </a>
                <a href="#_" className="mr-6 font-medium leading-6 text-gray-600 hover:text-gray-900">
                  Vehicles
                </a>
                <a href="#_" className="mr-6 font-medium leading-6 text-gray-600 hover:text-gray-900">
                  Pricing
                </a>
                <a href="#_" className="font-medium leading-6 text-gray-600 md:mr-6 hover:text-gray-900">
                  Packages
                </a>
              </nav>
              <div className="inline-flex items-center justify-center ml-5 space-x-4 md:space-x-10 md:justify-end">
                <span className="inline-flex rounded-md shadow-sm">
                  <a
                    href="#"
                    className="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap transition duration-150 ease-in-out bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700"
                  >
                    Book a taxi
                  </a>
                </span>
              </div>
            </div>
          </div>
        </header>
        <section className="pt-24 pb-32 bg-white">
          <div className="px-8 mx-auto max-w-7xl lg:px-12 xl:px-16">
            <div className="flex flex-col lg:flex-row">
              {/* Left Content */}
              <div className="flex items-center w-full lg:w-1/2 lg:pr-10">
                <div className="relative max-w-lg mx-auto font-sans text-center text-gray-700 border-gray-200 lg:text-left">
                  <h1 className="m-0 text-3xl font-extrabold leading-tight text-left text-blue-900 border-solid sm:text-4xl md:text-6xl">
                    Welcome to the Chris Taxi Experience{" "}
                  </h1>
                  <p className="pr-5 mx-0 my-4 text-base text-left text-gray-500 xl:leading-9 lg:my-8 xl:text-xl">
                    We pride our selfs in providing the best possible service. See what our guests have to say.{" "}
                  </p>
                  <div className="relative flex items-start justify-start block w-full max-w-md text-center lg:mx-0">
                    <a href="#_" className="flex items-center justify-center px-8 font-medium text-white bg-blue-500 rounded-full h-14">
                      Reserve your taxi today!
                    </a>
                  </div>
                  <div className="mt-10 leading-6 text-left border-solid">
                    <p className="m-0 font-sans text-sm font-bold tracking-wider text-gray-400 uppercase lg:text-xs">Recently Featured On</p>
                    <div className="flex mt-5 space-x-4">
                      <svg
                        className="w-auto h-8 text-gray-300 fill-current"
                        viewBox="0 0 1026 240"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                      >
                        <defs>
                          <path d="M.24.125h37.933V74H.24z" />
                        </defs>
                        <g stroke="none" strokeWidth={1} fillRule="evenodd">
                          <g>
                            <path d="M240 120c0 66.274-53.726 120-120 120S0 186.274 0 120 53.726 0 120 0s120 53.726 120 120" />
                            <path
                              d="M136 120h-34V84h34c9.941 0 18 8.06 18 18s-8.059 18-18 18m0-60H78v120h24v-36h34c23.196 0 42-18.803 42-42 0-23.195-18.804-42-42-42"
                              fill="#FFF"
                            />
                            <path d="M366.068 105.332c0-6.6-5.075-10.605-11.666-10.605H336.73v21.09h17.67c6.592 0 11.667-4.005 11.667-10.485zM320 160V80h36.753c17.086 0 26.39 11.546 26.39 25.332 0 13.666-9.42 25.21-26.39 25.21H336.73V160H320z" />
                            <path d="M393.323 160v-58.324h14.957v7.661c4.125-4.95 11.08-9.071 18.15-9.071v14.606c-1.065-.235-2.36-.35-4.125-.35-4.95 0-11.55 2.825-14.025 6.481V160h-14.957z" />
                            <path d="M476.757 130.073c0-8.836-5.19-16.496-14.61-16.496-9.316 0-14.496 7.66-14.496 16.496 0 8.955 5.18 16.611 14.495 16.611 9.421 0 14.611-7.656 14.611-16.61m-44.658 0c0-16.142 11.311-29.808 30.047-29.808 18.851 0 30.162 13.666 30.162 29.807S480.998 160 462.146 160c-18.736 0-30.047-13.786-30.047-29.927" />
                            <path d="M542.655 140.204v-20.146c-2.476-3.77-7.896-6.48-12.846-6.48-8.595 0-14.486 6.714-14.486 16.495 0 9.896 5.891 16.611 14.486 16.611 4.95 0 10.37-2.71 12.846-6.48zm0 19.796v-8.72c-4.48 5.654-10.6 8.72-17.557 8.72-14.255 0-25.21-10.84-25.21-29.927 0-18.496 10.725-29.807 25.21-29.807 6.716 0 13.077 2.825 17.557 8.716V80h15.081v80h-15.08z" />
                            <path d="M611.027 160v-8.601c-3.885 4.241-10.716 8.601-20.02 8.601-12.492 0-18.382-6.835-18.382-17.911v-40.413h14.956v34.522c0 7.896 4.125 10.487 10.486 10.487 5.774 0 10.37-3.181 12.96-6.481v-38.528h14.966V160h-14.966z" />
                            <path d="M637.227 130.073c0-17.436 12.721-29.807 30.163-29.807 11.664 0 18.735 5.065 22.505 10.251l-9.784 9.185c-2.706-4.005-6.832-6.125-12.011-6.125-9.077 0-15.437 6.6-15.437 16.496 0 9.896 6.36 16.611 15.437 16.611 5.18 0 9.305-2.355 12.01-6.246l9.785 9.192c-3.77 5.184-10.84 10.37-22.505 10.37-17.442 0-30.163-12.37-30.163-29.927" />
                            <path d="M702.76 144.33v-29.573h-9.42v-13.08h9.42V86.124h14.967v15.551h11.54v13.081h-11.54v25.567c0 3.65 1.88 6.36 5.18 6.36 2.236 0 4.365-.825 5.18-1.765l3.186 11.426c-2.236 2.005-6.245 3.655-12.491 3.655-10.486 0-16.021-5.42-16.021-15.67" />
                            <path d="M825.111 160v-34.522h-37.117V160h-16.722V80h16.722v30.867h37.117V80h16.846v80z" />
                            <path d="M895.498 160v-8.601c-3.885 4.241-10.716 8.601-20.021 8.601-12.491 0-18.381-6.835-18.381-17.911v-40.413h14.956v34.522c0 7.896 4.125 10.487 10.485 10.487 5.775 0 10.371-3.181 12.961-6.481v-38.528h14.966V160h-14.966z" />
                            <path d="M963.746 160v-35.817c0-7.896-4.115-10.606-10.485-10.606-5.89 0-10.362 3.3-12.96 6.6V160h-14.957v-58.324H940.3v7.306c3.655-4.24 10.725-8.716 19.916-8.716 12.605 0 18.611 7.066 18.611 18.142V160h-15.08z" />
                            <g transform="translate(987 86)">
                              <mask fill="#fff">
                                <use xlinkHref="#path-1" />
                              </mask>
                              <path
                                d="M9.661 58.33V28.756H.241v-13.08h9.42V.124h14.966v15.551h11.541v13.081h-11.54v25.567c0 3.65 1.88 6.36 5.18 6.36 2.235 0 4.365-.825 5.19-1.765l3.175 11.426C35.938 72.35 31.928 74 25.683 74 15.196 74 9.66 68.58 9.66 58.33"
                                mask="url(#mask-2)"
                              />
                            </g>
                          </g>
                        </g>
                      </svg>
                      <svg className="w-auto h-8 text-gray-300 fill-current" viewBox="0 0 2500 829" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M235.978 764.863L129.39 700.954l-64.695-64.62L0 571.714V0h271.862l64.446 64.41 64.444 64.409h291.49c287.02 0 291.506-.034 292.67-2.205.77-1.443 1.179-23.71 1.179-64.41V0h485.617l.295 64.124.294 64.125 63.84.57 63.84.57.301 33.915c.167 18.653.668 33.914 1.115 33.914.447 0 16.234-15.39 35.081-34.2l34.268-34.199h143.507l64.446-64.41L1943.142 0h270.72v62.205c0 40.699.408 62.966 1.18 64.41 1.15 2.146 3.229 2.204 78.95 2.204h77.767l64.12 64.128L2500 257.076v428.76l-106.874 71.49-106.874 71.49-71.487-.022-71.486-.02-.333-34.108c-.183-18.757-.698-34.47-1.143-34.915-.444-.444-22.818 14.904-49.717 34.107l-48.905 34.915h-129.136v-34.2c0-26.69-.315-34.2-1.432-34.2-.788 0-16.815 15.39-35.618 34.2l-34.185 34.2h-229.167l-34.73-34.744c-19.102-19.11-35.13-34.347-35.618-33.858-.487.487-3.7 14.968-7.137 32.179-3.438 17.211-6.526 32.447-6.863 33.857l-.61 2.565h-200.04l-34.185-34.2c-18.802-18.81-34.83-34.2-35.618-34.2-1.117 0-1.432 7.511-1.432 34.2v34.2h-100.32c-55.175 0-100.318-.151-100.318-.338 0-1.795-13.816-68.576-14.285-69.044-.342-.344-16.381 15.128-35.641 34.379l-35.017 35.004H599.65l-34.216-13.68c-18.818-7.523-34.725-13.68-35.347-13.68-.686 0-1.132 5.386-1.132 13.68v13.68H342.567l-106.589-63.91zm106.59-200.568v-78.089l-63.84-.57-63.84-.57V343.707l63.84-.57 63.84-.57V186.39l-63.84-.57-63.84-.57-.57-63.84-.57-63.84H57.57l-.288 242.786-.288 242.785 49.866 49.914 49.867 49.915 92.92-.292 92.92-.292v-78.09zm593.67 28.751l49.861-49.909-.288-178.374-.289-178.374-78.37-.293-78.37-.293-.29 149.631-.289 149.632h-55.86l-.57-149.339-.57-149.338-78.369-.293-78.37-.293-.29 149.631-.289 149.632h-55.86l-.57-149.339-.57-149.338-78.374-.293-78.374-.293v457.152h486.241l49.86-49.909zm263.602-178.66V186.39l-78.374-.293-78.374-.293V642.97l78.374-.293 78.374-.293V414.387zm342.568 149.919v-78.65l-63.555-.295-63.554-.294V343.707l63.554-.294 63.555-.295v-157.28l-63.555-.295-63.554-.294-.57-63.84-.57-63.84h-156.18l-.286 242.81-.289 242.812 49.873 49.882 49.872 49.882h185.259v-78.65zm400.136-.012v-78.66h-92.217c-83.038 0-92.285-.178-92.91-1.801-.903-2.357-.903-136.537 0-138.894.625-1.623 9.872-1.803 92.91-1.803h92.217V185.816h-243.358l-49.32 49.32-49.319 49.32v259.859l49.32 49.32 49.32 49.318h243.357v-78.66zm214.6-70.964l.289-149.624h127.679l.57 149.339.57 149.339h156.178l.289-178.375.288-178.374-49.86-49.909-49.86-49.909h-91.933c-75.52 0-92.159-.273-93.202-1.53-.89-1.074-1.357-20.206-1.564-64.124l-.295-62.595h-156.179l-.292 291.268c-.16 160.197-.049 291.91.249 292.693.426 1.12 17.214 1.425 78.662 1.425h78.122l.288-149.624zM1199.84 92.907v-35.34h-156.178l-.302 34.189c-.167 18.801-.054 34.837.251 35.631.443 1.152 16.374 1.386 78.392 1.153l77.837-.293v-35.34z"
                          fillRule="nonzero"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              {/* Right Image */}
              <div className="relative w-full mt-20 lg:w-1/2 lg:mt-0">
                <div className="relative z-20 grid w-full grid-cols-4 gap-5 mt-4 transform -rotate-6">
                  <div className="flex items-center justify-center w-full h-auto col-span-2 p-3 overflow-hidden transform bg-white rounded-lg shadow-xl -rotate-3">
                    <img src="https://m.media-amazon.com/images/I/71OxAQQEqoL._UY560_.jpg" className="w-full h-auto" />
                  </div>
                  <div className="flex items-center justify-center w-full h-auto col-span-2 p-3 overflow-hidden transform bg-white rounded-lg shadow-xl -rotate-3">
                    <img src="https://bookluxurycar.com/listing_image/original/Lamborghini-HURAC%C3%81N-LP-610-4-car.png" className="w-full h-auto" />
                  </div>
                  <div className="flex items-center justify-center w-full h-auto col-span-2 p-3 overflow-hidden transform bg-white rounded-lg shadow-xl -rotate-3">
                    <img
                      src="https://southernboating.com/wp-content/uploads/2015/08/Nor-Tech-390-Sport-Open-1024x600.jpg"
                      className="w-full h-auto"
                    />
                  </div>
                  <div className="flex items-center justify-center w-full h-auto col-span-2 p-3 overflow-hidden transform bg-white rounded-lg shadow-xl -rotate-3">
                    <img src="https://www.blackfinboats.com/zupload/library/32/-234-800x600-0.jpg" className="w-full h-auto" />
                  </div>
                  <div className="flex items-center justify-center w-full h-auto col-span-2 p-3 overflow-hidden transform bg-white rounded-lg shadow-xl -rotate-3">
                    <img src="https://cnet1.cbsistatic.com/img/6u2kmEm0RJUfcSgupFaBkEsKeK4=/940x0/2020/02/13/ae1b9b28-ac0f-4b16-90c7-1f232b6633e4/press00-model-x-rear-three-quarter-with-doors-open.jpg" className="w-full h-auto" />
                  </div>
                  <div className="flex items-center justify-center w-full h-auto col-span-2 p-3 overflow-hidden transform bg-white rounded-lg shadow-xl -rotate-3">
                    <img src="https://cdn.static-carindigo.com/tr:w-1260,h-630,ow-103.33333333333,oi-carindigo@images@carindigo_logo_white.png,ox-10,oy-10,di-no_image_SJKGShVtN.png/images/news/featured_2021-lucid-air-sedan-price-interior-performance-range-charging-time-features-rivals_1599813839.jpg" className="w-full h-auto" />
                  </div>
                </div>
                <div className="absolute top-0 right-0 z-10 w-full h-full mt-4 -mr-5 transform scale-125 rotate-45">
                  <svg
                    className="absolute top-0 w-full h-full transform opacity-50 fill-current lg:scale-x-150 text-blue-50"
                    viewBox="0 0 200 200"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M37.3,-64.3C51.3,-56.4,67.9,-52.6,76.3,-42.5C84.7,-32.5,84.9,-16.3,80.3,-2.7C75.6,10.9,66.2,21.8,60.2,36.1C54.2,50.3,51.8,67.9,42.3,76.4C32.9,84.9,16.4,84.3,2.4,80.2C-11.7,76.2,-23.4,68.5,-36.8,62.3C-50.1,56,-65,51.1,-73.2,40.9C-81.4,30.7,-82.9,15.4,-78.6,2.5C-74.4,-10.4,-64.3,-20.9,-58.2,-34.6C-52,-48.3,-49.7,-65.3,-40.7,-76C-31.6,-86.8,-15.8,-91.4,-2.1,-87.8C11.6,-84.1,23.2,-72.2,37.3,-64.3Z"
                      transform="translate(100 100)"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="flex items-center justify-center py-20 bg-white min-w-screen">
          <div className="px-16 bg-white">
            <div className="container flex flex-col items-start mx-auto lg:items-center">
              <h2 className="relative flex items-start justify-start w-full max-w-3xl text-5xl font-bold lg:justify-center text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="absolute right-0 hidden w-12 h-12 -mt-2 -mr-16 text-gray-200 lg:inline-block"
                  viewBox="0 0 975.036 975.036"
                >
                  <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                </svg>
                See what our guests have to say about us.
              </h2>
              <div className="block w-full h-1 max-w-lg mt-6 bg-purple-100 rounded-full" />
              <div className="items-center justify-center w-full mt-12 mb-4 lg:flex">
                <div className="flex flex-col items-start justify-start w-full h-auto mb-12 lg:w-1/3 lg:mb-0">
                  <div className="flex items-center justify-center">
                    <div className="w-16 h-16 mr-4 overflow-hidden bg-gray-200 rounded-full">
                      <img
                        src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1700&q=80"
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div className="flex flex-col items-start justify-center">
                      <h4 className="font-bold text-gray-800">John Doe</h4>
                      <p className="text-gray-600">CEO of Something</p>
                    </div>
                  </div>
                  <blockquote className="mt-8 text-lg text-gray-500">
                    "This is a no-brainer if you want to take your business to the next level. If you are looking for the ultimate toolset, this is it!"
                  </blockquote>
                </div>
                <div className="flex flex-col items-start justify-start w-full h-auto px-0 mx-0 mb-12 border-l border-r border-transparent lg:w-1/3 lg:mb-0 lg:px-8 lg:mx-8 lg:border-gray-200">
                  <div className="flex items-center justify-center">
                    <div className="w-16 h-16 mr-4 overflow-hidden bg-gray-200 rounded-full">
                      <img
                        src="https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2547&q=80"
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div className="flex flex-col items-start justify-center">
                      <h4 className="font-bold text-gray-800">Jane Doe</h4>
                      <p className="text-gray-600">CTO of Business</p>
                    </div>
                  </div>
                  <blockquote className="mt-8 text-lg text-gray-500">
                    "Thanks for creating this service. My life is so much easier. Thanks for making such a great product."
                  </blockquote>
                </div>
                <div className="flex flex-col items-start justify-start w-full h-auto lg:w-1/3">
                  <div className="flex items-center justify-center">
                    <div className="w-16 h-16 mr-4 overflow-hidden bg-gray-200 rounded-full">
                      <img
                        src="https://images.unsplash.com/photo-1545167622-3a6ac756afa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1256&q=80"
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div className="flex flex-col items-start justify-center">
                      <h4 className="font-bold text-gray-800">John Smith</h4>
                      <p className="text-gray-600">Creator of Stuff</p>
                    </div>
                  </div>
                  <blockquote className="mt-8 text-lg text-gray-500">
                    "Packed with awesome content and exactly what I was looking for. I would highly recommend this to anyone."
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="py-20 bg-gray-50">
          <div className="flex flex-col items-start justify-between px-12 mx-auto text-left md:px-8 lg:px-16 lg:flex-row max-w-7xl">
            <div className="relative mb-6 space-y-4 md:space-y-1 lg:pr-20 lg:mb-0 lg:text-left lg:space-y-3">
              <p className="flex items-center justify-start text-base font-semibold text-indigo-500">
                Enjoy the islands the way you want to enjoy them.{" "}
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </p>
              <h2 className="font-serif text-4xl font-normal tracking-tight md:text-3xl md:leading-tight xl:text-4xl">
                Join our travel club for amazing things.
              </h2>
              <p className="text-base font-medium text-gray-500 sm:text-sm xl:text-base">
                If you are serious about taking your trip to the next level, then you've got to signup today!
              </p>
            </div>
            <div className="flex w-full rounded-md shadow sm:w-auto xl:inline-flex">
              <a
                href="#_"
                className="inline-flex items-center justify-center w-full px-5 py-3 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md md:w-auto hover:bg-indigo-700"
              >
                Get Started Now
              </a>
            </div>
          </div>
        </section>
        <section className="py-24 bg-white">
          <div className="px-8 mx-auto max-w-7xl lg:px-16">
            <h2 className="mb-4 text-xl font-bold md:text-3xl">Frequently Asked Questions</h2>
            <div className="grid grid-cols-1 gap-0 text-gray-600 md:grid-cols-2 md:gap-16">
              <div>
                <h5 className="mt-10 mb-3 font-semibold text-gray-900">What is Tails</h5>
                <p>Tails is a drag and drop page builder built on Top of TailwindCSS. You can drop components to create a page that you can export.</p>
                <h5 className="mt-10 mb-3 font-semibold text-gray-900">Can I try it for Free?</h5>
                <p>
                  Absolutely, you can try out tails for free; however, if you wish to access all the components and export the page you'll need to upgrade your
                  account.
                </p>
                <h5 className="mt-10 mb-3 font-semibold text-gray-900">Where do I go to upgrade my account?</h5>
                <p>
                  You can upgrade your account by visiting{" "}
                  <a href="https://devdojo.com/pro" className="text-indigo-500 underline">
                    The Pro Upgrade Page
                  </a>
                  . You will also gain access to many other applications and sections of the site.
                  <a href="https://help.hellonext.co/faq/startup-eligibility/" target="_blank">
                    here
                  </a>
                  .
                </p>
                <h5 className="mt-10 mb-3 font-semibold text-gray-900">How long will I have access to Tails</h5>
                <p>
                  You will have unlimited access to all your pre-built pages; however, if you want to be able to download and export your pages, you'll need a
                  pro account.
                  <a href="https://paddle.com" target="_blank">
                    Paddle
                  </a>{" "}
                  for processing payments.
                </p>
              </div>
              <div>
                <h5 className="mt-10 mb-3 font-semibold text-gray-900">How do I implement into my project</h5>
                <p>
                  Implementation in your project is very simple. You can use the exported page as a starting point, or you can copy and paste the HTML into your
                  own page.
                </p>
                <h5 className="mt-10 mb-3 font-semibold text-gray-900">What is the license on the pages?</h5>
                <p>You have unlimited use to the templates used in Tails; however, you cannot re-use the templates to sell for others to use.</p>
                <h5 className="mt-10 mb-3 font-semibold text-gray-900">Can I cancel my account if I not longer need it?</h5>
                <p>
                  Of course, you can feel free to cancel your account at anytime, and you can feel free to come back and upgrade again whenever you're ready.
                </p>
                <h5 className="mt-10 mb-3 font-semibold text-gray-900">What if I need help with my project?</h5>
                <p>
                  If you need assistance implementing the templates into your project you can contact support or you can visit our{" "}
                  <a href="https://devdojo.com/questions" className="text-indigo-500 underline">
                    question section
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </section>
        <footer className="bg-white">
          <div className="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
            <nav className="flex flex-wrap justify-center -mx-5 -my-2">
              <div className="px-5 py-2">
                <a href="#" className="text-base leading-6 text-gray-500 hover:text-gray-900">
                  About
                </a>
              </div>
              <div className="px-5 py-2">
                <a href="#" className="text-base leading-6 text-gray-500 hover:text-gray-900">
                  Blog
                </a>
              </div>
              <div className="px-5 py-2">
                <a href="#" className="text-base leading-6 text-gray-500 hover:text-gray-900">
                  Team
                </a>
              </div>
              <div className="px-5 py-2">
                <a href="#" className="text-base leading-6 text-gray-500 hover:text-gray-900">
                  Pricing
                </a>
              </div>
              <div className="px-5 py-2">
                <a href="#" className="text-base leading-6 text-gray-500 hover:text-gray-900">
                  Contact
                </a>
              </div>
              <div className="px-5 py-2">
                <a href="#" className="text-base leading-6 text-gray-500 hover:text-gray-900">
                  Terms
                </a>
              </div>
            </nav>
            <p href="#" className="text-base leading-6 text-gray-500 hover:text-gray-900 text-center">
              A member of the{" "}
              <a className="text-blue-400" href="https://www.enjoythevi.com">
                @enjoythevi
              </a>{" "}
              family
            </p>
            <div className="flex justify-center mt-8 space-x-6">
              <a href="#" className="text-gray-400 hover:text-blue-600">
                <span className="sr-only">Facebook</span>
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-pink-600 ">
                <span className="sr-only">Instagram</span>
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400">
                <span className="sr-only">Twitter</span>
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
            </div>
            <p className="mt-8 text-base leading-6 text-center text-gray-400">© 2021 Chris Taxi Services, LLC. All rights reserved.</p>
          </div>
        </footer>
      </main>
    </div>
  );
}
