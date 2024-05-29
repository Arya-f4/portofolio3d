import React, { useState } from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full cursor-pointer' onClick={() => onClick({ title, icon })}>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt={title}
          className='w-16 h-16 object-contain'
        />
        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);
const Modal = ({ service, onClose }) => {
  console.log(service)
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-5 rounded-lg">
        <h2>{service.title}</h2>
        <img src={service.icon} alt={service.title} className="w-32 h-32" />
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};
const About = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const handleCardClick = (service) => {
    setSelectedService(service);
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I'm a s̶k̶i̶l̶l̶e̶d̶ Newbie software developer with experience in dart,
        JavaScript, and expertise in frameworks like Flutter, React, Node.js, and
        Three.js .I'm super interested with Ethical Hacking, bug hunting, And web security. I'm a "trying to quick" learner and collaborate closely with clients to
        create efficient, scalable, and user-friendly solutions that solve
        real world problems. Let's work together to bring your ideas to life, And Save The World!
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} onClick={handleCardClick} />
        ))}
      </div>
      {modalVisible && <Modal service={selectedService} onClose={handleCloseModal} />}

    </>
  );
};

export default SectionWrapper(About, "about");
