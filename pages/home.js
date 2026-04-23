import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div
      className="page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <h1>Hello Welcome to My Portfolio!</h1>
      <p>Frontend Developer | Designer | Problem Solver</p>
    </motion.div>
  );
}