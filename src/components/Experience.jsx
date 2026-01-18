import React from 'react'

export default function Experience() {
  return (
    <div>
        <h1 className='text-center text-4xl font-primaryMedium text-white underline underline-offset-8 decoration-2'>Experience</h1>
        <div className="timeline-items before:h-10 lg:before:h-full">
        <div className="mt-7 lg:mb-8 lg:w-full lg:relative lg:last:mb-8 lg:even:pl-[calc(50%+30px)] lg:odd:pr-[calc(50%+30px)] lg:odd:text-right">
          <div className="timeline-dot"></div>
            <div className="text-center text-white mt-10 lg:timeline-date"><span className='text-2xl'>TECH PARAMOUNT</span> <span className='text-xl'>- AI Developer and Machine Learning Engineer (July 2024 – Sept 2024 )</span> 
            </div>
              <div className="timeline-content">
                    <p className='pl-5 mt-2'>• Developed and deployed a real-time face recognition and tracking system that monitors premises via IP cameras, 
                      leveraging multithreading to optimize frame processing and deliver dynamic, low-latency detection of unauthorized individuals. <br /> <br />
                    • Designed and implemented an AI-powered chatbot using LLMs, LangChain, and OpenAI that interprets natural language queries and 
                    dynamically generates SQL statements to retrieve data from custom databases, delivering real-time, context-aware responses to users. <br /> <br />
                    • Led the end-to-end development of multiple AI modules spanning MLOps pipelines, model architecture design, automated testing frameworks, 
                    and AWS cloud deployment, delivering scalable, production-ready systems optimized for cost-efficiency and performance. <br /> <br />
                    • Collaborated closely with cross-functional teams to gather requirements, design solutions, and implement AI features that align with business goals, 
                    ensuring seamless integration and user-centric experiences. <br /> <br />
                    <span className='text-lg'>Technologies used: Python, TensorFlow, OpenCV, AWS, LangChain, OpenAI</span>
                    </p>
                  </p>
              </div> 
        </div>
        <div className="mt-7 lg:mb-8 lg:w-full lg:relative lg:last:mb-8 lg:even:pl-[calc(50%+30px)] lg:odd:pr-[calc(50%+30px)] lg:odd:text-right">
          <div className="timeline-dot"></div>
          <div className="text-center text-white mt-10 lg:timeline-date"><span className='text-2xl'>LPU LABORATORIES</span> <span className='text-xl'>- Head Postgraduate Researcher (une 2022 – May 2023 )</span> 
            </div>
            <div className="timeline-content">
                        <p className="mt-2">
                        • Collaborated with Professor Nahida Nazir to develop a cost-effective deep learning model for 
                        malaria diagnosis tailored to resource-constrained healthcare settings, addressing critical accessibility 
                        challenges in underserved regions. <br /> <br />
                        • Engineered a novel image preprocessing pipeline combining Median Blur and Otsu's Thresholding (MBOT) to enhance malaria RBC 
                        image quality, and implemented Generative Adversarial Networks (GANs) for data augmentation to improve model accuracy. <br /> <br />
                        • Achieved 98.46% classification precision using VGG architecture with MBOT preprocessing, surpassing all existing models 
                        documented in peer-reviewed literature and published findings in the International Journal of Research and Innovative Technology 
                        in Computational and Communication Engineering (IJRITCC). <br /> <br />
                    </p>
        </div>
        <div className='hidden lg:block absolute w-[22px] h-[2px] bg-white left-[49%] top-full'></div>
    </div>
  </div>
  )
}
