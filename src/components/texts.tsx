import pargraph from "./paragraphs.json";
import { motion } from "framer-motion";

function Texts() {
  const h6 = "text-first/90 text-center w-11/12 my-2";
  const div =
    "text-4xl bg-first/90 rounded-lg flex w-11/12 justify-center py-2 text-yellow-300 font-raleway";
  const pic = "max-w-full rounded-3xl w-11/12 my-3 outline outline-first";
  const title = "flex flex-col items-center bg-third rounded-lg";

  const hello = pargraph.map((item, key) => (
    <motion.div
      key={key}
      className={title}
      variants={animation}
      initial="hidden"
      animate="visibe"
    >
      <img
        src={`/src/images/${Object.values(item)[0].toLocaleLowerCase()}.jpg`}
        className={pic}
      ></img>
      <div className={div}>{Object.values(item)[0]}</div>
      <h6 className={h6}>{Object.values(item)[1]}</h6>
    </motion.div>
  ));

  return (
    <section className="grid sm:grid-cols-2 m-1 gap-1 lg:grid-cols-3">
      {hello}
    </section>
  );
}
export default Texts;

const animation = {
  hidden: { y: 4, opacity: 0.7, scale: 0.99 },
  visibe: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: { duration: 1 },
  },
};
