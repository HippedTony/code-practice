interface TextInputProps {
  text: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}

function TextInput({ text, value, onChange, placeholder }: TextInputProps) {
  return (
    <div>
      <label
        htmlFor={text}
        className="text-sm font-semibold text-gray-700 block mb-2"
      >
        {text}
      </label>
      <input
        type="text"
        name={text.toLocaleLowerCase()}
        id={text}
        value={value}
        onChange={onChange}
        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
        placeholder={placeholder}
        required
      />
    </div>
  );
}

export default TextInput;
