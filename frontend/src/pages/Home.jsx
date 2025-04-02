import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Carousel from "../components/Home/Carousel.jsx";
import Productgrid from "../components/Home/ProductGrid.jsx";

const AnimatedSection = ({ children }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1.5, ease: "easeOut" }} // Slower animation
    >
      {children}
    </motion.div>
  );
};

function Home() {
  return (
    <>
      <Carousel />
      <AnimatedSection>
        <Productgrid />
      </AnimatedSection>
    </>
  );
}

export default Home;
