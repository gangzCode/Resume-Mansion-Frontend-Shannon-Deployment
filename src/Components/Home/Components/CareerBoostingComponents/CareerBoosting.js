import React from 'react'
import './CareerBoosting.css'
function CareerBoosting() {
    return (
        <div className='continer_main_box'>
            <div className='container'>
                <div className='card_main'>
                    <h1 className='main_topic_boosting'>Boost your career with our services</h1>
                    <p className='para_boosting'>We offer the best career tools in the market to help you navigate your job search more easily</p>
                    <div className='boost_card_container'>
                        <div className='boost_card card_boost_one'>
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M28.3353 4.51763C28.3353 2.48593 26.6905 0.841162 24.6588 0.841162H7.34118C5.30948 0.841162 3.66471 2.48593 3.66471 4.51763V27.4823C3.66471 29.514 5.30948 31.1588 7.34118 31.1588H24.6588C26.6905 31.1588 28.3353 29.514 28.3353 27.4823V4.51763ZM26.2529 27.4823C26.2529 28.3683 25.5448 29.0765 24.6588 29.0765H7.34118C6.45523 29.0765 5.74706 28.3683 5.74706 27.4823V4.51763C5.74706 3.63168 6.45523 2.92352 7.34118 2.92352H24.6588C25.5448 2.92352 26.2529 3.63168 26.2529 4.51763V27.4823Z" fill="#532E07" stroke="#532E07" stroke-width="0.2" />
                                <path d="M22.4033 16.729C22.0276 14.4894 20.6472 12.7038 18.7953 11.8227C19.3271 11.1627 19.6765 10.3269 19.6765 9.31768C19.6765 7.19187 17.9376 5.45298 15.8118 5.45298C13.686 5.45298 11.9471 7.19187 11.9471 9.31768C11.9471 10.2467 12.3035 11.0824 12.8379 11.8233C10.9808 12.79 9.50058 14.5773 9.21849 16.74L9.21765 16.7399V16.753V16.7577C9.21765 16.8956 9.21765 17.0443 9.2428 17.1826C9.26807 17.3216 9.31988 17.4577 9.42811 17.5695C9.63999 17.881 9.95602 17.9824 10.2588 17.9824H21.3647C21.6675 17.9824 21.9835 17.881 22.1954 17.5696C22.4002 17.3601 22.5056 17.0461 22.4033 16.729ZM14.0294 9.4118C14.0294 8.43174 14.8317 7.62945 15.8118 7.62945C16.7918 7.62945 17.5941 8.43174 17.5941 9.4118C17.5941 10.3919 16.7918 11.1942 15.8118 11.1942C14.8317 11.1942 14.0294 10.3919 14.0294 9.4118ZM15.8118 13.2765C17.6013 13.2765 19.2178 14.3198 19.9845 15.9H11.6391C12.4057 14.3198 14.0222 13.2765 15.8118 13.2765ZM23.5294 20.6059H8.4706C8.16552 20.6059 7.90352 20.708 7.71753 20.894C7.53155 21.08 7.42942 21.342 7.42942 21.6471C7.42942 21.9522 7.53155 22.2142 7.71753 22.4002C7.90352 22.5861 8.16552 22.6883 8.4706 22.6883H23.5294C23.8345 22.6883 24.0965 22.5861 24.2825 22.4002C24.4685 22.2142 24.5706 21.9522 24.5706 21.6471C24.5706 21.342 24.4685 21.08 24.2825 20.894C24.0965 20.708 23.8345 20.6059 23.5294 20.6059ZM23.5294 24.3706H8.4706C8.16552 24.3706 7.90352 24.4728 7.71753 24.6587C7.53155 24.8447 7.42942 25.1067 7.42942 25.4118C7.42942 25.7169 7.53155 25.9789 7.71753 26.1649C7.90352 26.3509 8.16552 26.453 8.4706 26.453H23.5294C23.8345 26.453 24.0965 26.3509 24.2825 26.1649C24.4685 25.9789 24.5706 25.7169 24.5706 25.4118C24.5706 25.1067 24.4685 24.8447 24.2825 24.6587C24.0965 24.4728 23.8345 24.3706 23.5294 24.3706Z" fill="#532E07" stroke="#532E07" stroke-width="0.2" />
                            </svg>
                            <p className='boost_card_topic'>Professional Resume Writing </p>
                            <p className='boot_card_pera'>We help you land interviews more efficiently with resumes that tell your story.</p>
                            <button className="boost_card_btn" onClick={() => (window.location.href = '/resumeWriting')}>Learn more</button>
                        </div>


                        <div className='boost_card card_boost_two'>
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M29.12 27.0095V27.0091V8.23052C29.1235 7.69149 29.0188 7.15724 28.8122 6.65938C28.6055 6.16151 28.3011 5.71015 27.9168 5.33204C27.9167 5.33185 27.9165 5.33166 27.9163 5.33148L24.6948 2.10896C24.6945 2.10874 24.6943 2.10851 24.6941 2.10828C24.3155 1.72272 23.8634 1.41711 23.3645 1.20956C22.8655 1.00197 22.3298 0.896723 21.7894 0.900052H6.98002C4.71956 0.900052 2.88002 2.7396 2.88002 5.00005V27.0001C2.88002 29.2605 4.71956 31.1001 6.98002 31.1001H25.02C26.1058 31.1001 27.1472 30.6694 27.9158 29.9025C28.6844 29.1357 29.1175 28.0953 29.12 27.0095ZM23.1313 3.65723L23.1326 3.65847L26.3686 6.89448L26.3701 6.89592C26.7243 7.24295 26.92 7.71586 26.92 8.23105V8.33305H22.596C22.1004 8.33305 21.696 7.92948 21.696 7.43305V3.10005H21.79C22.3034 3.10005 22.7767 3.29624 23.1313 3.65723ZM25.02 28.9001H6.98002C5.93241 28.9001 5.08002 28.0485 5.08002 27.0001V5.00005C5.08002 3.95251 5.93247 3.10005 6.98002 3.10005H19.496V7.43205C19.496 9.14151 20.8866 10.5321 22.596 10.5321H26.92V27.0101C26.92 28.0507 26.0684 28.9001 25.02 28.9001Z" fill="black" stroke="black" stroke-width="0.4" />
                                <path d="M22.338 13.7121H9.66202C9.37029 13.7121 9.0905 13.828 8.88421 14.0343C8.67792 14.2406 8.56202 14.5204 8.56202 14.8121C8.56202 15.1038 8.67792 15.3836 8.88421 15.5899C9.0905 15.7962 9.37029 15.9121 9.66202 15.9121H22.338C22.6298 15.9121 22.9096 15.7962 23.1158 15.5899C23.3221 15.3836 23.438 15.1038 23.438 14.8121C23.438 14.5204 23.3221 14.2406 23.1158 14.0343C22.9096 13.828 22.6298 13.7121 22.338 13.7121ZM22.338 17.4431H9.66202C9.37028 17.4431 9.0905 17.559 8.88421 17.7653C8.67792 17.9716 8.56202 18.2514 8.56202 18.5431C8.56202 18.8348 8.67792 19.1146 8.88421 19.3209C9.0905 19.5272 9.37028 19.6431 9.66202 19.6431H22.338C22.6298 19.6431 22.9096 19.5272 23.1158 19.3209C23.3221 19.1146 23.438 18.8348 23.438 18.5431C23.438 18.2514 23.3221 17.9716 23.1158 17.7653C22.9096 17.559 22.6298 17.4431 22.338 17.4431ZM22.338 23.5201H19.29C18.9983 23.5201 18.7185 23.636 18.5122 23.8423C18.3059 24.0486 18.19 24.3284 18.19 24.6201C18.19 24.9118 18.3059 25.1916 18.5122 25.3979C18.7185 25.6042 18.9983 25.7201 19.29 25.7201H22.338C22.6298 25.7201 22.9096 25.6042 23.1158 25.3979C23.3221 25.1916 23.438 24.9118 23.438 24.6201C23.438 24.3284 23.3221 24.0486 23.1158 23.8423C22.9096 23.636 22.6298 23.5201 22.338 23.5201Z" fill="black" stroke="black" stroke-width="0.4" />
                            </svg>

                            <p className='boost_card_topic'>Professional Cover Letter Writing</p>
                            <p className='boot_card_pera'>Build a compelling cover letter with us and boost your job applications.</p>
                            <button className="boost_card_btn" onClick={() => (window.location.href = '/coverLetter')}>Learn more</button>
                        </div>

                        <div className='boost_card card_boost_three'>
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_415_13458)">
                                    <path d="M10.0005 26.4375H5.6255V12.3125H10.0005V26.4375ZM10.437 7.81225C10.437 6.39794 9.2895 5.25 7.876 5.25C6.457 5.25 5.3125 6.39794 5.3125 7.81225C5.3125 9.22706 6.45706 10.375 7.876 10.375C9.28956 10.375 10.437 9.22706 10.437 7.81225ZM26.375 18.6665C26.375 14.8748 25.574 12.0625 21.1445 12.0625C19.0161 12.0625 17.5874 13.1269 17.0041 14.2339H17V12.3125H12.75V26.4375H17V19.4244C17 17.5876 17.4675 15.8084 19.7441 15.8084C21.9897 15.8084 22.0625 17.9087 22.0625 19.541V26.4375H26.375V18.6665ZM32 28.25V3.75C32 1.68213 30.3179 0 28.25 0H3.75C1.68213 0 0 1.68213 0 3.75V28.25C0 30.3179 1.68213 32 3.75 32H28.25C30.3179 32 32 30.3179 32 28.25ZM28.25 2.5C28.9392 2.5 29.5 3.06081 29.5 3.75V28.25C29.5 28.9392 28.9392 29.5 28.25 29.5H3.75C3.06081 29.5 2.5 28.9392 2.5 28.25V3.75C2.5 3.06081 3.06081 2.5 3.75 2.5H28.25Z" fill="#051D14" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_415_13458">
                                        <rect width="32" height="32" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>

                            <p className='boost_card_topic'>LinkedIn Optimization</p>
                            <p className='boot_card_pera'>Polish your online presence by enhancing your LinkedIn profile with us.</p>
                            <button className="boost_card_btn_thre"onClick={() => (window.location.href = '/linkedInOptimization')}>Learn more</button>
                        </div>

                        <div className='boost_card card_boost_four'>
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_415_13483)">
                                    <path d="M3.95981 27.5538V27.8409L4.19549 27.6769L12.8377 21.6633H25.8756C28.2325 21.6633 30.15 19.7459 30.15 17.3889V4.07768C30.15 1.72032 28.2325 -0.196753 25.8756 -0.196753H4.12444C1.76746 -0.196753 -0.15 1.72032 -0.15 4.07768V17.389C-0.15 19.691 1.67865 21.5734 3.95981 21.6603V27.5538ZM12.2392 19.6056H12.1921L12.1535 19.6325L6.01762 23.9021V19.7555V19.6055H5.86762H4.12444C2.90229 19.6055 1.90781 18.6109 1.90781 17.3889V4.07768C1.90781 2.85539 2.90227 1.86106 4.12444 1.86106H25.8756C27.0977 1.86106 28.0922 2.85539 28.0922 4.07768V17.3889C28.0922 18.6109 27.0977 19.6056 25.8756 19.6056H12.2392Z" fill="white" stroke="white" stroke-width="0.3" />
                                    <path d="M8.02936 6.06431H7.92936V6.16431V7.92212V8.02212H8.02936H21.9706H22.0706V7.92212V6.16431V6.06431H21.9706H8.02936ZM8.02936 9.8143H7.92936V9.9143V11.6721V11.7721H8.02936H21.9706H22.0706V11.6721V9.9143V9.8143H21.9706H8.02936ZM8.02936 13.5643H7.92936V13.6643V15.4221V15.5221H8.02936H21.9706H22.0706V15.4221V13.6643V13.5643H21.9706H8.02936Z" fill="white" stroke="white" stroke-width="0.2" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_415_13483">
                                        <rect width="32" height="32" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>

                            <p className='boost_card_topic'>Career Advice</p>
                            <p className='boot_card_pera'>Dive into 1000+ articles about resume writing, job searching, interview prep, and more</p>
                            <button className="boost_card_btn_last" onClick={() => (window.location.href = '/careerAdvice')}>Learn more</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CareerBoosting
