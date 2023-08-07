 // Framer Animations
 
 export const variants = {
   load: {opacity: 1, transition: {duration: 0.5}},
   show: {opacity: 1, transition: {duration: 0}},
   hide: {opacity: 0,transition: {duration: 0.5}}
 };

 export const modalVariants = {
  hide: {opacity: 0,transition: {duration: 0.5, delay: 5}}
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