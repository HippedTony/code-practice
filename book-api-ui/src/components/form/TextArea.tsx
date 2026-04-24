interface TextAreaProps {
  text: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder: string;
}

function TextArea({ text, value, onChange, placeholder }: TextAreaProps) {
  return (
    <div>
      <label
        htmlFor={text}
        className="text-sm font-semibold text-gray-700 block mb-2"
      >
        {text}
      </label>
      <textarea
        name={text.toLocaleLowerCase()}
        id={text}
        value={value}
        onChange={onChange}
        rows={3}
        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
        placeholder={placeholder}
        required
      ></textarea>
    </div>
  );
}

export default TextArea;
