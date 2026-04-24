import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { addBook, getBook, updateBook } from '../services/book.service';

import TextInput from '../components/form/TextInput';
import NumberInput from '../components/form/NumberInput';
import TextArea from '../components/form/TextArea';
import FileInput from '../components/form/FileInput';

function AddBook() {
  const navigate = useNavigate();
  const params = useParams();

  const [formData, setFormData] = useState({
    isbn: '',
    title: '',
    author: '',
    description: '',
    category: '',
    price: '',
    quantity: '',
  });

  const [bookCoverFile, setBookCoverFile] = useState<File | null>(null);
  const [bookCoverPreview, setBookCoverPreview] = useState<string>('');

  useEffect(() => {
    if (params.id) {
      getBook(parseInt(params.id))
        .then((res) => {
          setFormData(res.data);
          setBookCoverPreview(res.data.bookCoverUrl);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  function handleFormDataChange(
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
  ): void {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setBookCoverFile(file);

      const reader = new FileReader();
      reader.onload = () => {
        setBookCoverPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.SubmitEvent) => {
    e.preventDefault();

    const submitData = new FormData();

    submitData.append('bookDtoJson', JSON.stringify(formData));

    if (bookCoverFile) {
      submitData.append('file', bookCoverFile);
    }

    if (params.id) {
      updateBook(submitData, parseInt(formData.isbn))
        .then((res) => {
          console.log('Update book res: ', res);
          handleReset();
        })
        .catch((err) => {
          console.error('Error adding a book: ', err);
        });
    } else {
      addBook(submitData)
        .then((res) => {
          console.log('add book res: ', res);
          handleReset();
        })
        .catch((err) => {
          console.error('Error adding a book: ', err);
        });
    }
  };

  const handleReset = () => {
    setFormData({
      isbn: '',
      title: '',
      author: '',
      description: '',
      category: '',
      price: '',
      quantity: '',
    });

    setBookCoverFile(null);
    setBookCoverPreview('');

    navigate('/');
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-50 pt-26 pb-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="bg-linear-to-r from-blue-600 to-indigo-700 px-8 py-6">
            <h1 className="text-3xl font-extrabold text-white text-center">
              Add new book
            </h1>
            <p className="text-blue-100 text-center mt-2">
              Enter the details of the new book to add
            </p>
          </div>

          <form onSubmit={handleSubmit} className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-6">
                {/** ISBN Field */}
                <NumberInput
                  text="ISBN"
                  value={formData.isbn}
                  onChange={handleFormDataChange}
                  placeholder="Enter ISBN"
                />

                {/** Title Field */}
                <TextInput
                  text="Title"
                  value={formData.title}
                  onChange={handleFormDataChange}
                  placeholder="Enter book title"
                />

                {/** Author Field */}
                <TextInput
                  text="Author"
                  value={formData.author}
                  onChange={handleFormDataChange}
                  placeholder="Enter author name"
                />

                {/** Category Field */}
                <TextInput
                  text="Category"
                  value={formData.category}
                  onChange={handleFormDataChange}
                  placeholder="Enter book category"
                />

                {/** Price and Quiantity Fields */}
                <div className="grid grid-cols-2 gap-4">
                  <NumberInput
                    text="Price"
                    value={formData.price}
                    onChange={handleFormDataChange}
                    placeholder="0.00"
                    price={true}
                  />

                  <NumberInput
                    text="Quantity"
                    value={formData.quantity}
                    onChange={handleFormDataChange}
                    placeholder="0"
                  />
                </div>
              </div>

              <div className="space-y-6">
                {/** Description Field */}
                <TextArea
                  text="Description"
                  value={formData.description}
                  onChange={handleFormDataChange}
                  placeholder="Enter book description"
                />

                {/** Book Cover Field */}
                <FileInput
                  text="Book cover"
                  bookCoverPreview={bookCoverPreview}
                  setBookCoverFile={setBookCoverFile}
                  setBookCoverPreview={setBookCoverPreview}
                  handleFileChange={handleFileChange}
                />
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200 flex justify-end space-x-4">
              <button
                type="button"
                onClick={handleReset}
                className="px-6 py-3 border border-gray-300 rounded-xl text-gray-700 font-medium hover:bg-gray-200 transition duration-200 shadow-sm"
              >
                {params.id ? 'Cancel' : 'Reset form'}
              </button>
              <button
                type="submit"
                className="px-8 py-3 bg-linear-to-r from-blue-600 to-indigo-600 rounded-xl text-white font-medium
        hover:from-blue-800 hover:to-indigo-800 transition duration-200 shadow-md"
              >
                {params.id ? 'Update book' : 'Add book'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddBook;
