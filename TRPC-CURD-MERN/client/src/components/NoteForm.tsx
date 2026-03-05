import { useState, type ChangeEvent, type FormEvent } from 'react';
import { trpc } from '../trpc';

const initialState = {
  title: '',
  description: '',
};

function NoteForm() {
  const [note, setNote] = useState(initialState);
  const addNote = trpc.note.create.useMutation();
  const utils = trpc.useContext();

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addNote.mutate(note, {
      onSuccess: () => {
        console.log('Success');
        utils.note.get.invalidate();
        setNote(initialState);
      },
    });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-zinc-900 p-10 rounded-md">
      <input
        type="text"
        name="title"
        id="title"
        value={note.title}
        placeholder="Title"
        autoFocus
        onChange={handleChange}
        className="bg-neutral-800 px-3 py-2 w-full block rounded-md mb-3"
      />
      <textarea
        name="description"
        id="description"
        value={note.description}
        placeholder="Description"
        onChange={handleChange}
        className="bg-neutral-800 px-3 py-2 w-full block rounded-md mb-3"
      ></textarea>
      <button
        disabled={note.title === '' || note.description === '' ? true : false}
        className="bg-zinc-500 px-3 py-2 rounded-md text-white disabled:opacity-9"
      >
        Save
      </button>
    </form>
  );
}

export default NoteForm;
