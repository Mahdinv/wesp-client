import type React from "react";
import { useEffect, useRef, useState, type ChangeEvent } from "react";
import { FaAngleUp, FaCheck } from "react-icons/fa6";
import { AnimatePresence, motion } from "framer-motion";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";

const ComboBox: React.FC<{
  label?: string;
  placeholder: string;
  searchable?: boolean;
  options: { title: string; value: string | number }[];
  value: string | number;
  error?: string;
  onChange: (value: string | number) => void;
}> = (props) => {
  const [filteredValue, setFilteredValue] = useState(props.options);
  const [showDropdown, setShowDropdown] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);
  const inputElementRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (props.searchable && showDropdown) {
      inputElementRef.current?.focus();
    }
  }, [props.searchable, showDropdown]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setShowDropdown(false);
        if (props.searchable) {
          setFilteredValue(props.options);
        }
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [props.options, props.searchable]);

  function handleSearch(e: ChangeEvent<HTMLInputElement>) {
    setFilteredValue(
      props.options.filter((option) =>
        option.title.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
  }

  function handleChoice(choicedValue: string | number) {
    if (props.value !== choicedValue) {
      props.onChange(choicedValue);
    }
    setShowDropdown(false);
    if (props.searchable) {
      setFilteredValue(props.options);
    }
  }

  return (
    <>
      {props.label && (
        <label className="xs:text-xs sm:text-sm self-start mr-1 text-[#004B1C] mb-2 text-nowrap">
          {props.label}
        </label>
      )}
      <div ref={ref} className="relative flex flex-col w-full items-center">
        <div
          className={`flex flex-row w-full bg-[#F3F3F5] border-2 ${
            showDropdown ? "border-gray-300" : "border-gray-200"
          } rounded-full h-11 px-2`}
          onClick={() => {
            setShowDropdown((prev) => !prev);
            if (props.searchable) {
              setFilteredValue(props.options);
            }
          }}
        >
          <input
            className="w-full h-full p-3 px-4 border-0 bg-transparent outline-none cursor-pointer font-peyda"
            placeholder={props.placeholder}
            value={
              props.options.find((option) => option.value === props.value)
                ?.title
            }
            readOnly
          />
          <motion.span
            initial={{ rotate: 0 }}
            animate={{ rotate: showDropdown ? 180 : 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="w-auto self-center xs:text-xs md:text-base px-2 cursor-pointer"
          >
            <FaAngleUp />
          </motion.span>
        </div>
        <AnimatePresence initial={false}>
          {showDropdown && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: showDropdown ? 1 : 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="w-full bg-[#ECECEC] min-h-10 max-h-40 absolute top-0 translate-y-14 z-20 rounded-2xl shadow-lg flex flex-col gap-0 items-center"
            >
              {props.searchable && (
                <div className="flex flex-row items-center w-full bg-[#F3F3F5] border border-[#E5E7EB] rounded-t-2xl">
                  <span className="w-auto self-center xs:text-xs md:text-base px-2 cursor-default border-e border-e-[#464646]">
                    <HiMiniMagnifyingGlass />
                  </span>
                  <input
                    ref={inputElementRef}
                    className="w-full p-0 h-10 px-4 border-0 bg-transparent outline-none text-xs"
                    placeholder="جستوجو کنید..."
                    onChange={handleSearch}
                  />
                </div>
              )}
              <ul className="flex-grow w-full h-full overflow-y-auto">
                {filteredValue.map((option) => (
                  <li
                    key={option.value}
                    className={`flex flex-row w-full items-center justify-between px-4 py-2 font-peyda font-bold text-[14px] duration-300 hover:bg-[#dfdede] cursor-pointer ${
                      !props.searchable ? "first:rounded-t-xl" : undefined
                    } last:rounded-b-xl`}
                    onClick={() => handleChoice(option.value)}
                  >
                    {option.title}
                    {option.value === props.value && (
                      <span className="text-xs">
                        <FaCheck />
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      {props.error && (
        <small className="text-red-500 self-start font-peyda mr-2 mt-1">
          {props.error}
        </small>
      )}
    </>
  );
};

export default ComboBox;
