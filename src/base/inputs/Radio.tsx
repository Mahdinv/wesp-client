const Radio: React.FC<{
  label?: string;
  gridColClasses: string;
  options: { title: string; value: string }[];
  value: string;
  onChange: (value: string) => void;
  error?: string;
}> = (props) => {
  return (
    <div className="flex flex-col gap-2 justify-center">
      <label className="xs:text-xs sm:text-sm font-peyda self-start mr-1 text-[#004B1C] mb-2">
        {props.label}
      </label>
      <div className={`grid ${props.gridColClasses} gap-4`}>
        {props.options.map((option) => {
          const selected = props.value === option.value;
          return (
            <label
              key={option.value}
              onClick={() => {
                const finalValue =
                  option.value !== props.value ? option.value : "";
                props.onChange(finalValue);
              }}
              className={`duration-300 transition-all text-center font-peyda rounded-full border-2 border-green-300 backdrop-blur-md py-1 cursor-pointer ${
                selected
                  ? "border-green-400 bg-[#c1f7d4] shadow-[0_4px_30px_rgba(34,197,94,0.2)] font-bold text-black"
                  : "bg-[#effaf3] text-gray-500"
              }`}
            >
              {option.title}
            </label>
          );
        })}
      </div>
      {props.error && (
        <small className="text-red-500 self-start font-peyda mr-2 mt-1">
          {props.error}
        </small>
      )}
    </div>
  );
};

export default Radio;
