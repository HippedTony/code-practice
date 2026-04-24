interface NumberInputProps {
  text: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  price?: boolean;
}

function NumberInput({
  text,
  value,
  onChange,
  placeholder,
  price = false,
}: NumberInputProps) {
  return (
    <div>
      <label
        htmlFor={text}
        className="text-sm font-semibold text-gray-700 block mb-2"
      >
        {text}
      </label>
      <div className={`${price ? 'relative rounded-xl' : ''}`}>
        {price && (
          <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-gray-500">
            $
          </span>
        )}
        <input
          type="number"
          name={text.toLocaleLowerCase()}
          id={text}
          value={value}
          onChange={onChange}
          min="0"
          className="w-full px-6 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
          placeholder={placeholder}
          required
        />
      </div>
    </div>
  );
}

export default NumberInput;
