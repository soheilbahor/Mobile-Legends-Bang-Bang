function Nav() {
  return (
    <>
      <nav className={nav}>
        <p className={mb}>
          <span className="text-orange-600">M</span>obile
          <span className="text-orange-600"> L</span>egend
        </p>
        <div className="flex-grow flex justify-between items-center">
          <a href="#" className={navbars}>
            Pictures
          </a>
          <a href="#" className={navbars}>
            Heroes
          </a>
          <a href="#" className={navbars}>
            Contact
          </a>
          <button className={button}>Download</button>
        </div>
      </nav>
    </>
  );
}
export default Nav;
const button =
  "inline-block text-sm px-4 py-2 leading-none border rounded-md hover:border-transparent hover:text-yellow-300 hover:bg-black duration-200";
const navbars =
  "w-full hover:scale-110 text-white text-center hover:text-black duration-200";
const mb =
  "font-bold text-xl text-yellow-300 duration-200 rounded-lg hover:scale-90 tracking-tight";
const nav = "flex items-center bg-first/90 p-6";
