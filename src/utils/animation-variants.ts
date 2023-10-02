 // Framer Animations
 
 export const variants = {
   load: {opacity: 1, transition: {duration: 0.5}},
   show: {opacity: 1, transition: {duration: 0}},
   hide: {opacity: 0,transition: {duration: 0.5}}
 };

 export const modalVariants = {
    initial: {height: 'auto', overflow: 'none', padding:0, transition: {duration: 0}},
    show: {height: '100dvh' , overflow: 'auto', padding:'0px 0px 80px 0px', transition: {duration: 0}},
    hide: {height: 'auto', overflow: 'auto', padding:0, transition: {duration: 0}}
};

export const sliderVariants = {
  incoming: (direction:number) => ({
    x: direction > 0 ? "100%" : "-100%",
    scale: 1.2,
    opacity: 0
  }),
  active: { x: 0, scale: 1, opacity: 1 },
  exit: (direction:number) => ({
    x: direction > 0 ? "-100%" : "100%",
    scale: 1,
    opacity: 0.2
  })
};

 export const textVariant = {
   initial: {opacity: 1, transition: {duration: 0}},
   show: {opacity: 0,transition: {duration: 0.5}},
   hide: {opacity: 0,transition: {duration: 0.5}}
 };

 export const descriptionVariants = {
   initial: {opacity: 1, transition: {duration: 0}},
   show: {opacity: 0,transition: {duration: 0.5}},
   hide: {opacity: 0,transition: {duration: 0.5}}
 };