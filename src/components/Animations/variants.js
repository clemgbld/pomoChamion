export const pageVariants = {
  initial: {
    opacity: 0,
    x: "100vh",
  },

  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
    },
  },

  exit: {
    opacity: 0,
    x: "-100vh",
    transition: {
      duration: 0.3,
    },
  },
};
