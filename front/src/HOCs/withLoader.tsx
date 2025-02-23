// Libraries
import { useEffect, ComponentType } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

// Local
import Account from 'services/account';

const withLoader = (WrappedComponent: ComponentType, checkLogin?: boolean) => {
  return function WithLoader() {
    const navigate = useNavigate();

    useEffect(() => {
      if (checkLogin)
        Account.verifyLogin().then((res) => !res && navigate('/login'));
    }, [navigate]);

    return (
      <motion.div
        key='wrapped'
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.2 }}
        exit={{ opacity: 0 }}
      >
        <WrappedComponent />
      </motion.div>
    );
  };
};

export default withLoader;
