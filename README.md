# Fakeyys : Modern Frontend Ecommerce
 A sleak and stylish frontend eccomerce design combining framer-motion and React
##### Note: Application is hosted on heroku, please give the application a few extra seconds to spin up from non-activity mode.

#### View Fakeyys Site : ???
#### View Figma Design : ???

<br />

#### Project Stack :

![react](https://github.com/Typicallunchbox/fakeyys-ecommerce/assets/41709116/aefb55bf-d5b9-4597-802f-e7be54105f3c)
![typescript](https://github.com/Typicallunchbox/fakeyys-ecommerce/assets/41709116/f7b0ef44-1f77-4f11-8ef4-569c47f879c5)
![three](https://github.com/Typicallunchbox/fakeyys-ecommerce/assets/41709116/9b1ff4d0-0b87-48e9-bbe7-89e935c22d4a)
![framer-motion](https://github.com/Typicallunchbox/fakeyys-ecommerce/assets/41709116/1230e2f4-c4b1-4fa6-b56b-04973b5d1644)


## Index


1. [Summary](#summary)
2. [Getting Started](#getting-started)
3. [Project Challenges and Solutions](#project-challenges-and-solutions)

<br />
<br />

## Summary

Fakeyys is a portfolio project which was built to further improve the author's skills. This project can be thought of as a guide to a developer interested in building a React typescript safe site which makes use of framer-motion for a better user experience. This project is only front facing and does not contain any backend components, it is purely frontend focused. The project structure was created using [Vite](https://vitejs.dev/), a powerful frontend project generation tool.

* Main Frontend dependencies:
    * [React](https://react.dev/)
    * [Framer-Motion](https://www.framer.com/motion/)
    * [React router dom](https://reactrouter.com/en/main)
    * [React-three/fiber](https://docs.pmnd.rs/react-three-fiber/getting-started/introduction)
    * [React-three/drei](https://github.com/pmndrs/drei)
    * [Three](https://threejs.org/)
 
<br />
<br />
<br />

 
## Getting Started
If you are interested in cloning and understanding this project you will need the below requirements to get started:

### Requirments
 * [NodeJS](https://nodejs.org/en/download/)
 * [VSCode Editor](https://code.visualstudio.com/) (Recommended)

Once setup with all the necessary requirements, now we can clone the repository. 
<br />
[How to Clone a Github Repo](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository)

Once cloned you will need to run `npm install` command in your terminal in both the root project folder.
Finally, your last step is to run `npm run dev` from the root of the project. Enjoy :)

<br />
<br />
<br />


## Project Challenges and Solutions
During the project journey I ran into many challenges, from both the UI/UX side and the development side. Below I shall talk on
a few of the issues I ran into and how I dealt with them. I of course ran into many roadblocks and challenegs during Fakeyys project journey,
but below are the main ones that stuckout to me:

1) ThreeJS background Implementation
   <br />
   
   Trying to implement a ThreeJS dynamic background stood out to be quite a challenge. I had never implemented threeJs into any of
   my previous projects. My best online resource being codepens with ThreeJs work people had done, helped me find the current effect I implemented. Unfortunately it
   was not as simple and copying and pasting as I was working with a slightly modified ThreeJS like package called React Three Fiber. Along with Typescript,
   it gave me many type headaches. Bit by bit I slowly converted every piece of the codepen example. Below is a link to the awesome author's codepen that helped me
   achieve my effect: [Codepen]([https://nodejs.org/en/download/](https://codepen.io/vaalentin/pen/vLqmwG)). Going through this taught me about a new concept called
   GLSL Shaders.
   
   <br />
   <br />

   
2) Framer Motion Catalogue Popup
   <br />
   
   Adding Animations to a project through a library was quite a new concept to me. I found a great animation library called Framer Motion which
   had me stuck for a while trying to understand the correct implementation approaches. As with anything new it just takes time and practise. With Framer Motion I learnt
   a lot from Youtube videos but the best help was Framer Motion'sDocumentation which was full of examples and code snippets to assist developers. At the end I
   was able to get close to my intended result for my product popup by following a similiar process Framer Motion did on their official devd docs site.

   <br />
   <br />
   
4) Landing Page UI/UX
   <br />
   
   Many times designs for the Landing and Catalogue Product View whould change due to incomplete planning from a UI/UX designs I created.
   As with anything new it just takes time and practise. This ended up delaying me quite a bit with finishing the project. I went back and redesigned parts
   of the landing page, catalogue page, navbar and product view. I also got feedback from peers on improvements I could make. These insights from others was very
   crucial, some critiques were small layout spacing or coloring issues but some mentioned of entire sections feeling wrong. Going back and taking the time to make
   changes ended with a much better final project. 


