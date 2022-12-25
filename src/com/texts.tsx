import * as React from "react";
import { useState } from "react";

function Texts() {
  const [click, setclick] = useState(false);

  function toggler() {
    setclick(!click);
  }

  return (
    <div className="grid sm:grid-cols-2 m-1 gap-1 lg:grid-cols-3">
      <div
        className="flex flex-col items-center 
      bg-lackedark rounded-sm"
      >
        <img
          src="/legend.jpg"
          className="max-w-full rounded-3xl w-11/12 my-3
        outline outline-lackeyellow/80"
        ></img>
        <div
          className="text-6xl bg-lackered rounded-lg
          flex w-11/12 justify-center py-2
          text-lackeyellow font-raleway"
          onClick={toggler}
        >
          Miya
        </div>
        <h6 className="text-lackewhite text-center w-11/12 my-2">
          Miya, Moonlight Archer, is a hero in Mobile Legends: Bang Bang. She is
          the first hero and the first marksman to be released in the game
          according to sale time.
        </h6>
      </div>
      <div
        className="flex flex-col items-center 
      bg-lackedark rounded-sm"
      >
        <img
          src="/layla.jpg"
          className="max-w-full rounded-3xl w-11/12 my-3
        outline outline-lackeyellow/80"
        ></img>
        <div
          className="text-6xl bg-lackered rounded-lg
          flex w-11/12 justify-center py-2
          text-lackeyellow font-raleway"
        >
          Layla
        </div>
        <h6 className="text-lackewhite text-center w-11/12 my-2">
          In Mobile Legends, you might know the hero Layla. She's known for her
          basic attack range over turrets and can kill people in an instant.
          However, Layla is also known to be the least durable of all heroes,
          and can be a feeder if not used properly.
        </h6>
      </div>
      <div
        className="flex flex-col items-center 
      bg-lackedark rounded-sm"
      >
        <img
          src="/popol.jpg"
          className="max-w-full rounded-3xl w-11/12 my-3
        outline outline-lackeyellow/80"
        ></img>
        <div
          className="text-4xl bg-lackered rounded-lg
          flex w-11/12 justify-center py-2
          text-lackeyellow font-raleway"
        >
          Popol and Kupa
        </div>
        <h6 className="text-lackewhite text-center w-11/12 my-2">
          Popol throws a spear at the target enemy, dealing them 80( +100% Total
          Physical Attack) (Physical Damage), and orders Kupa to lunge at the
          enemy, dealing them 100( +75% Total Physical Attack) (Physical Damage)
          and locking onto them for 3s.
        </h6>
      </div>
      <div
        className="flex flex-col items-center 
      bg-lackedark rounded-sm"
      >
        <img
          src="/saber.jpg"
          className="max-w-full rounded-3xl w-11/12 my-3
        outline outline-lackeyellow/80"
        ></img>
        <div
          className="text-6xl bg-lackered rounded-lg
          flex w-11/12 justify-center py-2
          text-lackeyellow font-raleway"
        >
          Saber
        </div>
        <h6 className="text-lackewhite text-center w-11/12 my-2">
          A swordsman in pursuit of invincibility, used by Laboratory 1718. Once
          called Duanmeng and obsessed by kendo, Saber came to Laboratory 1718
          to transform himself in order to pursue true invincibility, but his
          memory was erased and he became a killing machine.
        </h6>
      </div>
      <div
        className="flex flex-col items-center 
      bg-lackedark rounded-sm"
      >
        <img
          src="/hilda.jpg"
          className="max-w-full rounded-3xl w-11/12 my-3
        outline outline-lackeyellow/80"
        ></img>
        <div
          className="text-6xl bg-lackered rounded-lg
          flex w-11/12 justify-center py-2
          text-lackeyellow font-raleway"
        >
          Hilda
        </div>
        <h6 className="text-lackewhite text-center w-11/12 my-2">
        A versatile Fighter / Tank 
        that can deal single-target burst damage while also 
        regenerating HP in the bush..
        </h6>
      </div>
      <div
        className="flex flex-col items-center 
      bg-lackedark rounded-sm"
      >
        <img
          src="/zilong.jpg"
          className="max-w-full rounded-3xl w-11/12 my-3
        outline outline-lackeyellow/80"
        ></img>
        <div
          className="text-6xl bg-lackered rounded-lg
          flex w-11/12 justify-center py-2
          text-lackeyellow font-raleway"
        >
          Zilong
        </div>
        <h6 className="text-lackewhite text-center w-11/12 my-2">
        The young Zilong was separated from his family in an 
        accident and was later taken in by the Great Dragon, 
        where practiced with Ling in the secret realm of the 
        Dragon Altar, eventually becoming the hair of the Great 
        Dragon, taking on the important task of protecting the 
        Cadia Riverlands.
        </h6>
      </div>
    </div>
  );
}

export default Texts;
