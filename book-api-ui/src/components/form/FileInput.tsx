interface FileInputProps {
  text: string;
  bookCoverPreview?: string;
  setBookCoverFile: (bookCoverFile: File | null) => void;
  setBookCoverPreview: (bookCoverFilePreciew: string) => void;
  handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function FileInput({
  text,
  bookCoverPreview,
  setBookCoverFile,
  setBookCoverPreview,
  handleFileChange,
}: FileInputProps) {
  return (
    <div>
      <label
        htmlFor={text}
        className="text-sm font-semibold text-gray-700 block mb-2"
      >
        {text}
      </label>
      <div className="relative border-2 border-dashed border-gray-300 rounded-xl p-6 bg-gray-50">
        {bookCoverPreview ? (
          <div className="flex flex-col items-center">
            <img
              src={bookCoverPreview}
              alt="Book cover preview"
              className="h-40 w-auto object-contain mb-4"
            />
            <button
              type="button"
              onClick={() => {
                setBookCoverFile(null);
                setBookCoverPreview('');
              }}
              className="text-sm text-red-600 hover:text-red-700"
            >
              Remove image
            </button>
          </div>
        ) : (
          <>
            <div className="text-center">
              X
              <p className="mt-1 text-sm text-gray-500">
                Click to upload book cover image
              </p>
              <p className="mt-1 text-sm text-gray-400">PNG up to 5MB</p>
            </div>
            <label className="block text-center mt-4">
              <span className="cursor-pointer inline-block px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50">
                Browse files
              </span>
              <input
                type="file"
                name={text}
                id={text}
                accept="image/*"
                onChange={handleFileChange}
                className="opacity-0"
                required
              />
            </label>
          </>
        )}
      </div>
    </div>
  );
}

export default FileInput;
