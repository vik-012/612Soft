import { h, Component } from "preact";
import React from "preact/compat";
import { useCallback, useState } from "preact/hooks";

export default function LangButton(props) {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const toggleDropdown = useCallback(() => {
    setIsDropdownVisible(!isDropdownVisible);
  }, [isDropdownVisible]);

  return (
    <div className="relative flex md:order-2 space-x-1 md:space-x-0 rtl:space-x-reverse">
      <button
        type="button"
        className="client-visible inline-flex items-center font-medium justify-center px-4 py-2 text-sm text-gray-900 dark:text-white rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
        onClick={toggleDropdown}
      >
        English
      </button>
      {/* Dropdown */}
      {isDropdownVisible && (
        <div
          className="flex z-50 my-9 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 absolute"
        >
          <ul className="py-2 font-medium">
            <li>
              <a
                href="#"
                className="block px-4 py-2 mt-1 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                role="menuitem"
              >
                <div className="inline-flex items-center">English (US)</div>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                role="menuitem"
              >
                <div className="inline-flex items-center">Deutsch</div>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                role="menuitem"
              >
                <div className="inline-flex items-center">Italiano</div>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                role="menuitem"
              >
                <div className="inline-flex items-center">中文 (繁體)</div>
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
