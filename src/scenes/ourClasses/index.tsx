import { ClassType, SelectedPage } from "@/shared/types";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import { motion } from "framer-motion";
import Htext from "@/shared/Htext";
import Class from "./Class";

const classes: ClassType[] = [
  {
    name: "Weight Training Classes",
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem fugiat cum expedita neque, veritatis distinctio consequatur culpa maiores odio sit?`,
    image: image1,
  },
  {
    name: "Yoga Classes",
    image: image2,
  },
  {
    name: "Ab Core Classes",
    description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat deleniti eveniet deserunt natus corporis consectetur fugit quidem, ad suscipit autem et quod, similique vel? Excepturi quaerat non hic possimus fugit?`,
    image: image3,
  },
  {
    name: "Adventure Classes",
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad maxime, pariatur minus sint, consequuntur quibusdam optio adipisci provident dolore ipsam ex unde laborum repudiandae. Magni autem eaque modi laudantium fuga?`,
    image: image4,
  },
  {
    name: "Fitness Classes",
    image: image5,
  },
  {
    name: "Training Classes",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, enim. Omnis molestiae mollitia velit, doloribus dolores debitis, expedita aliquid ad quisquam itaque officiis asperiores. Blanditiis quod deserunt distinctio impedit dolorem?`,
    image: image6,
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

function OurClasses({ setSelectedPage }: Props) {
  return (
    <section
      id={SelectedPage.OurClasses}
      className="py w-full bg-primary-100 py-40"
    >
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -100 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <Htext>OUR CLASSES</Htext>
            <p className="py-5">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis,
              quae numquam quod nihil consequatur eos harum voluptatum
              doloremque nisi nobis!
            </p>
          </div>
        </motion.div>
        <div className="mt-10 h-[22rem] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[175rem] whitespace-nowrap">
            {classes.map((item, index) => (
              <Class
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
}
export default OurClasses;
