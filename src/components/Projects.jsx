import React from 'react'

export default function Projects() {
  return (
    <div>
      <section className='mt-20'>
      <h1 className='text-center text-4xl font-primaryMedium text-white underline underline-offset-8 decoration-2'>Projects</h1>
      <div className="timeline-items before:h-10 lg:before:h-full">
        <div className="mt-7 lg:mb-8 lg:w-full lg:relative lg:last:mb-8 lg:even:pl-[calc(50%+30px)] lg:odd:pr-[calc(50%+30px)] lg:odd:text-right">
          <div className="timeline-dot"></div>
            <div className="text-center text-white mt-10 lg:timeline-date"><span className='text-2xl'>Malaria Parasite Detection</span> - <span className='text-xl'>December 2022</span> 
              <a href="https://ijritcc.org/index.php/ijritcc/article/view/6647" className='font-primaryMedium text-xl' style={{textDecoration: "none",color: "aqua"}}>&nbsp;&nbsp;&nbsp;&nbsp;[Link]</a>
            </div>
              <div className="timeline-content">
                <div className='text-lg text-white'>Tech Stack: Python​, TensorFlow, Keras​, Deep Learning, Computer Vision, Image Processing, Data Augmentation with GANs
                </div>
                <p className='mt-3'>• Developed a deep learning–based system to classify human blood smear images as 
                  either malaria-parasite–infected or healthy, enabling faster and more objective diagnostic support 
                  compared to manual examination. <br /> <br />
                    • Implemented and evaluated three convolutional neural network architectures (BaseCNN, ResNet50, and VGG19) 
                    on a curated malaria image dataset, comparing them using accuracy and false-positive metrics to identify the 
                    most effective model.
                    <br /> <br />
                    • Demonstrated that VGG19 achieved 92% accuracy with a low loss of 0.23, while BaseCNN delivered approximately 
                    25% faster inference, allowing users to select models based on speed–accuracy trade-offs; VGG19 was ultimately 
                    adopted for assessing model predictability in the project.
                  </p>
              </div> 
        </div>
        <div className="mt-7 lg:mb-8 lg:w-full lg:relative lg:last:mb-8 lg:even:pl-[calc(50%+30px)] lg:odd:pr-[calc(50%+30px)] lg:odd:text-right">
          <div className="timeline-dot"></div>
          <div className="text-center text-white mt-10 lg:timeline-date"><span className='text-2xl'>Image Caption Generato</span> - <span className='text-xl'>November 2022</span> 
          <a href="https://github.com/KushalOO7/NLP/blob/main/nlp_prjct.ipynb" className='font-primaryMedium text-xl' style={{textDecoration: "none",color: "aqua"}}>&nbsp;&nbsp;&nbsp;&nbsp;[Link]</a>
          </div>
              <div className="timeline-content">
              <div className='text-lg text-white'>Tech Stack: Python​, TensorFlow, Keras​, CNN, LSTM, Image Captioning models​, Computer Vision, Natural Language Processing</div>
                            <p className='mt-3'>• Developed an image captioning model using the Flickr 8k dataset to generate accurate and contextually 
                              relevant descriptions for real-world images. <br /> <br />
                              • Architected a hybrid CNN–LSTM pipeline where the CNN extracts high-level visual features and the LSTM decodes them into 
                              natural language captions, achieving approximately 76% accuracy with a low loss of 1.25. <br /> <br />
                              • Designed the system to produce precise, descriptive captions that also support and simplify 
                              Search Engine Optimization (SEO) workflows by improving image discoverability.
                  </p>
              </div>
        </div>

        <div className="mt-7 lg:mb-8 lg:w-full lg:relative lg:last:mb-8 lg:even:pl-[calc(50%+30px)] lg:odd:pr-[calc(50%+30px)] lg:odd:text-right">
          <div className="timeline-dot"></div>
          <div className="text-center text-white mt-10 lg:timeline-date"><span className='text-2xl'>Image-Based Watershed Segmentation </span> - <span className='text-xl'>February 2020</span> 
          <a href="https://github.com/KushalOO7/Image_Processing_Watershed/blob/main/watershed.py" className='font-primaryMedium text-xl' style={{textDecoration: "none",color: "aqua"}}>&nbsp;&nbsp;&nbsp;&nbsp;[Link]</a>
          </div>
              <div className="timeline-content">
              <div className='text-lg text-white'>Tech Stack: Python, OpenCV, scikit-image, scikit-learn, Image Processing, Watershed Segmentation, Region-based Segmentation </div>
                        <p className='mt-3'>• Explored computer vision techniques with a focus on image processing, emphasizing the 
                          critical role of image segmentation in extracting meaningful structure from visual data. <br /> <br />
                        • Implemented a region-based watershed segmentation approach that decomposes images into distinct regions (watersheds)
                         by assigning pixels to boundaries, enabling precise edge detection for applications such as medical data visualization.
                  </p>
              </div>
        </div>
        <div className='hidden lg:block absolute w-[22px] h-[2px] bg-white left-[49%] top-full'></div>
    </div>
    </section>
    </div>
  )
}
