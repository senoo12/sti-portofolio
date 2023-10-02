import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.div
      inital = {{ opacity: 0, scale: 0.5}}
      animate = {{ opaciy: 1, scale: 1}}
      transition={{ duration: 9}}
    >
      <nav class="fixed top-0 z-10 content-center w-full p-4">
        <div class="container justify-center rounded-full shadow-sm hover:shadow-2xl backdrop-blur-[10px] bg-[#ffffff33] border-1  border-white w-4/12 h-14 mx-auto flex bg-red ">
          <div class="flex justify-center w-3/4 items-center">
            <ul class="flex bg-whiteGlass text-base text-blue-950 font-figtree font-medium space-x-16">
              <li>
                <a
                  href=""
                  class="opacity-50 hover:text-blue-600 hover:opacity-100"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href=""
                  class="opacity-50 hover:text-blue-600 hover:opacity-100"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href=""
                  class="opacity-50 hover:text-blue-600 hover:opacity-100"
                >
                  Event
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </motion.div>
  );
}
