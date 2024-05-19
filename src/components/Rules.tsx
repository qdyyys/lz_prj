import { MouseEvent } from "react";

interface RulesProps {
  active: boolean;
  setActive: (active: boolean) => void;
}

const Rules: React.FC<RulesProps> = ({ active, setActive }) => {
  const handleClick = () => {
    setActive(true);
  };

  const stopPropagation = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  return (
    <div
      className={`h-screen px-7 fixed top-0 left-0 w-full flex items-center justify-center transition-all ${
        active ? "active" : ""
      }`}
      onClick={handleClick}
    >
      <div
        className="rules_cont border px-20 py-5 rounded-lg bg-black/60 text-white"
        onClick={stopPropagation}
      >
        <div className="text-center text-2xl mb-10">
          <h1>Rules</h1>
          <p>Read the rules, they are important.</p>
        </div>
        <div className="max-w-5xl">
          <ul className="flex flex-col gap-5">
            <li className="border-l-4 border-customBlue pl-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
              asperiores dolor quas deleniti non soluta quisquam impedit illum
              incidunt animi eligendi excepturi quia dolores, omnis repellendus!
              Voluptatibus atque aliquid sint!
            </li>
            <li className="border-l-4 border-customBlue pl-6">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe
              maxime omnis, eos esse in porro? Quis aperiam vitae praesentium
              quo hic perspiciatis. Accusamus beatae cumque possimus natus
              maiores doloribus cupiditate a delectus quam quis. Aperiam tempore
              molestias nostrum ut vero?
            </li>
            <li className="border-l-4 border-customBlue pl-6">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore
              iure assumenda molestiae totam. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Reprehenderit, dicta.
            </li>
            <li className="border-l-4 border-customBlue pl-6">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum
              laboriosam est assumenda molestias at animi debitis tempora optio,
              quae quis, quidem perferendis pariatur provident dolor fuga
              possimus asperiores necessitatibus corrupti architecto fugit, aut
              voluptatibus? Aperiam quae perspiciatis in unde dolore quibusdam
              similique facere neque quidem et corporis numquam harum eum nobis
              magnam dolor, hic, quia eius assumenda optio quos nostrum.
            </li>
            <li className="border-l-4 border-customBlue pl-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              at itaque sunt blanditiis mollitia praesentium, nihil unde
              exercitationem nulla, velit magni eligendi perferendis dignissimos
              officiis ab voluptatum dolore, similique repellat rem nemo placeat
              autem aspernatur tempore obcaecati. Iure, vitae id?
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Rules;
