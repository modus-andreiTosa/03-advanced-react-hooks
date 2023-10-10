import { NavLink } from "react-router-dom";
import { basicHooksRoutes } from "../routes";
import { SizableFireSvg } from "./SizableFireSvg";

export const SideBar = () => {
  return (
    <div className="w-[19.5rem] bg-blue-500 p-8">
      <div className="h-12 p-2 mb-8  bg-teal-500 flex items-center text-white rounded-md shadow-lg shadow-indigo-900">
        <h2 className="text-lg">React patterns</h2>
      </div>
      <ul>
        <div className="lg:mb-3 flex items-center">
          <SizableFireSvg width="24" height="24" />
          <h5 className="ml-2 font-semibold text-slate-900 dark:text-slate-200">
            React Hooks
          </h5>
        </div>
        {basicHooksRoutes.map(({ path }) => {
          return (
            <li key={path}>
              <NavLink
                to={path}
                className={({ isActive }) => {
                  const defaultStyle =
                    "block px-4 py-2 mb-2 bg-stone-600 hover:bg-indigo-600 text-white rounded-md shadow-lg shadow-indigo-900";
                  return isActive
                    ? `${defaultStyle} text-teal-300`
                    : `: ${defaultStyle}`;
                }}
              >
                {path}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
