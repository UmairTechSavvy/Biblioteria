import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaRegArrowAltCircleDown } from "react-icons/fa";
import B5 from "/src/b5.jpg";
import Footer from '../componenets/footer'
import Ebook from "./Ebook";

const Home = () => {
  const [showReviews, setShowReviews] = useState(true);
  const [showPage, setShowPage] = useState(false);
  const control1 = useAnimation();
  const control2 = useAnimation();
  const control3 = useAnimation();
  const control4 = useAnimation();
  const { ref: textRef1, inView: inView1 } = useInView({ triggerOnce: false, threshold: 0.5 });
  const { ref: textRef2, inView: inView2 } = useInView({ triggerOnce: false, threshold: 0.5 });
  const { ref: textRef3, inView: inView3 } = useInView({ triggerOnce: false, threshold: 0.5 });
  const { ref: textRef4, inView: inView4 } = useInView({ triggerOnce: false, threshold: 0.5 });

  const reviews = [
    {
      id: 1,
      author: "John Doe",
      comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      rating: 4,
    },
    {
      id: 2,
      author: "Jane Smith",
      comment:
        "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
      rating: 5,
    },
    // Add more review objects as needed
  ];

  useEffect(() => {
    const isEbookPage = JSON.parse(sessionStorage.getItem("isEbookPage"));
    if (isEbookPage !== null) {
      setShowPage(isEbookPage);
    }
  }, []);

  const toggleReviews = () => {
    setShowReviews(!showReviews);
  };

  const handleButtonClick = () => {
    setShowPage(!showPage);
    sessionStorage.setItem("isEbookPage", JSON.stringify(!showPage));
  };

  useEffect(() => {
    const handleAnimation = (control, inView) => {
      if (inView) {
        control.start({
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, ease: "easeInOut" },
        });
      } else {
        control.start({
          opacity: 0,
          y: 20,
          transition: { duration: 0.5, ease: "easeInOut" },
        });
      }
    };

    handleAnimation(control1, inView1);
    handleAnimation(control2, inView2);
    handleAnimation(control3, inView3);
    handleAnimation(control4, inView4);
  }, [control1, control2, control3, control4, inView1, inView2, inView3, inView4]);

  return (
    <>
      {!showPage && (
        <div
          style={{
            position: "relative",
            scrollBehavior: "smooth",
            backgroundImage: `url(${B5})`,
            backgroundSize: "cover",
            opacity: 1,
            margin: 0,
            padding: 0,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            height: "500vh",
            width: "100%",
            overflow:"hidden"
          }}
        >
          {/* Light splash animation */}
          <motion.div
  style={{
    position: "absolute",
    width: "50%",
    height: "100%",
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    borderRadius: "50%",
    scale: 0,
    zIndex: 0,
  }}
  initial={{ scale: 0 }}
  animate={{ scale: 1, opacity: 0 }}
  transition={{
    duration: 1,
    ease: "easeInOut",
    repeat: Infinity,
    repeatDelay: 3,
  }}
/>
{[...Array(3)].map((_, index) => (
  <motion.div
    key={index}
    style={{
      position: "absolute",
      width: "50%",
      height: "100%",
      backgroundColor: "rgba(0, 255, 255, 0.5)",
      borderRadius: "50%",
      scale: 0,
      zIndex: 0,
      mixBlendMode: "overlay",
    }}
    initial={{ scale: 0 }}
    animate={{ scale: [0, 1.5], opacity: [1, 0] }}
    transition={{
      duration: 5 + index,
      ease: "easeOut",
      repeat: Infinity,
      repeatDelay: 8,
      delay:  5,
    }}
  />
))}







          {/* Aura effect animation */}
          <div
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              display: "flex",
              left: "2rem",
              top: "4rem",
              zIndex: 0,
            }}
            className="sm:left-10 sm:top-12"
          >
            {[...Array(5)].map((_, index) => (
              <motion.div
                key={index}
                style={{
                  position: "absolute",
                  width: 50 + index * 20, // Increase width with each circle
                  height: 50 + index * 20, // Increase height with each circle
                  borderRadius: "50%",
                  border: "2px solid #00FFFF", // Change border color as needed
                  opacity: 0,
                }}
                animate={{ opacity: 1, scale: [0, 1.5, 0], borderColor: "#00FFFF" }}
                transition={{
                  duration: 2 + index * 0.5,
                  repeat: Infinity,
                  repeatType: "loop",
                  delay: index * 0.3,
                }} // Adjust duration and delay for each circle
              />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0, rotateX: "360deg" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="font-bold text-4xl sm:text-7xl italic"
            style={{ color: "black", opacity: 3, zIndex: 1 }}
          >
            <h1>Biblioteria</h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -800 }}
            animate={{ opacity: 1, x: 100, rotateX: "360deg" }}
            transition={{ duration: 0.5, delay: 0.75 }}
            className="font-bold italic text-2xl sm:text-5xl overscroll"
            style={{ color: "#F5F5DC", zIndex: 1 }}
          >
            <p>Today a reader,<br className="block md:hidden" /> tomorrow a leader</p>
          </motion.div>
          
          <motion.div
            className="absolute right-4 mt-10 sm:left-4 sm:top-40"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <motion.button
              className="rounded-lg shadow-lg text-xl sm:text-5xl italic font-bold border border-gray-800 p-2 sm:p-4"
              onClick={handleButtonClick}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              style={{
                backgroundColor:"white",
                zIndex: 5,
                borderStyle: "inset",
                borderWidth: "2px",
              }}
            >
              Explore
            </motion.button>
          </motion.div>
          
          <div>
            <motion.div
              ref={textRef1}
              id="text-element"
              animate={control1}
              style={{
                marginTop: "20rem",
                textAlign: "center",
                color: "white",
                zIndex: 1,
              }}
            >
              <motion.p className="font-bold italic text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
                Welcome to Biblioteria
              </motion.p>
              <motion.p className="font-bold italic text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
                Your Gateway to
                <br className="block sm:hidden" /> {/* Line break on smaller screens */}
                adventure and Knowledge
              </motion.p>
            </motion.div>
          </div>
          
          <div>
            <motion.div
              ref={textRef2}
              id="text-element"
              animate={control2}
              style={{ color: "white", marginTop: "3rem", padding: "0 1rem" }}
              className="text-center sm:text-left"
            >
              <p className="text-md sm:text-lg">
                Embark on a journey through the realms of imagination,
                enlightenment, and discovery with our vast collection of books.
                Dive into gripping tales, explore new worlds, and enrich your mind
                with the wisdom of the ages. At Biblioteria, we believe in the
                transformative power of literature to inspire, educate, and
                entertain.
              </p>
            </motion.div>
          </div>
          
          <motion.div
            className="border border-gray-300 rounded-lg p-4 bg-gray-100 mt-10 mx-2 sm:mx-0"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={control3}
            transition={{ duration: 0.5, delay: 0.4 }}
            ref={textRef3}
          >
            <button
              onClick={toggleReviews}
              style={{
                cursor: "pointer",
                background: "none",
                border: "none",
                outline: "none",
              }}
            >
              <FaRegArrowAltCircleDown />
            </button>


            <h1 className="font-semibold text-lg text-center">REVIEWS</h1>

            {showReviews ? (
              <motion.div
                className="mt-4 p-4 border border-gray-400 bg-white rounded-md shadow-md divide-y divide-gray-400"
                layout
              >
                {reviews.map((review) => (
                  <div key={review.id} className="py-4">
                    <h3 className="text-xl font-semibold">{review.author}</h3>
                    <p className="text-gray-600">{review.comment}</p>
                    <p className="text-gray-600">Rating: {review.rating}</p>
                  </div>
                ))}
              </motion.div>
            ) : (
              <h1 className="text-center text-gray-600">
                Please click at the top left arrow
              </h1>
            )}
          </motion.div>
          
          <div>
            <motion.div
              ref={textRef4}
              id="text-element"
              animate={control4}
              style={{ color: "white", marginTop: "3rem" }}
              className="text-center text-2xl sm:text-4xl italic"
            >
              <h1>
                <strong>Why Choose Us?</strong>
              </h1>

              <ul className="text-md text-center mt-4 sm:mt-9 italic" style={{ color: "white" }}>
                <li>. Each book in our collection is carefully curated to ensure the highest standards of content and craftsmanship.</li>
                <li>. Browse and enjoy your favorite titles from the comfort of your home, anytime, anywhere.</li>
              </ul>
            </motion.div>
          </div>

          
        </div>
      )}
      <div>
        {showPage && <Ebook showPage={showPage} setShowPage={setShowPage} handleButtonClick={handleButtonClick} />}
      </div>
      <Footer />
    </>
  );
};

export default Home;
