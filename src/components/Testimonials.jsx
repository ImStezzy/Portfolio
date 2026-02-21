import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Michael Tan",
    position: "Project Manager",
    company: "Tech Solutions",
    message:
      "Alkhairi is a highly dedicated developer. He consistently delivers quality work and always looks for ways to improve the application.",
    image: "https://i.pravatar.cc/100?img=3",
  },
  {
    name: "Sarah Wijaya",
    position: "Product Owner",
    company: "Digital Startup",
    message:
      "Working with him was a great experience. His analytical thinking as a QA and developer helps ensure the product runs smoothly.",
    image: "https://i.pravatar.cc/100?img=5",
  },
  {
    name: "David Lee",
    position: "Senior Developer",
    company: "Software Company",
    message:
      "He has strong curiosity and always keeps learning. A great teammate and problem solver.",
    image: "https://i.pravatar.cc/100?img=7",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-gray-50 py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">

        <h2 className="text-4xl font-bold mb-4">
          What People Say
        </h2>

        <p className="text-gray-500 mb-12">
          Testimonials from colleagues and clients I have worked with
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8 }}
              className="bg-white rounded-2xl shadow-lg p-6"
            >
              <p className="text-gray-600 mb-6">
                "{item.message}"
              </p>

              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-12 h-12 rounded-full"
                />

                <div className="text-left">
                  <h4 className="font-semibold">
                    {item.name}
                  </h4>
                  <p className="text-sm text-gray-500">
                    {item.position} • {item.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;