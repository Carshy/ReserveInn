import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { fetchAbouts } from '../../redux/reducers/aboutSlice';
import './About.scss';

const Abouts = () => {
  const dispatch = useDispatch();
  const abouts = useSelector((state) => state.about.abouts);
  const aboutStatus = useSelector((state) => state.about.status);
  const aboutError = useSelector((state) => state.about.error);

  useEffect(() => {
    if (aboutStatus === 'idle') {
      dispatch(fetchAbouts());
    }
  }, [aboutStatus, dispatch]);

  return (
    <div className="app__abouts">
      <h2 className="app__abouts-title">Destinations</h2>
      <p className="app__hotels-intro">Explore the World with Reserve Inn. Where are you Travelling Next?</p>
      {aboutStatus === 'loading' && <p>Loading...</p>}
      {aboutError && <p>Error: {aboutError}</p>}
      <div className="app__abouts-card">
        {abouts.map((about) => (
          <motion.div
            key={about.id}
            className="app__abouts-cards"
          >
            <motion.div 
              className="app__abouts-details"
              whileInView={{ opacity: [0, 1] }}
              transition={{
                duration: 0.2,
                ease: 'easeInOut',
              }}
            >
              <img src={about.photo} alt="About Photo" />
              <h2>{about.title}</h2>
              <p>{about.description}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Abouts;