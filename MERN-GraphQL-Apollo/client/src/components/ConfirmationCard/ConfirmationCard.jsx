function ConfirmationCard({ onCancel, onConfirm, type, name }) {
  return (
    <div className="absolute top-0 left-0 flex h-full w-full items-center justify-center bg-black/50">
      <div className="mb-2 h-auto w-1/3 rounded-lg bg-zinc-800 p-4 text-center">
        <h2>Are you sure you want do delete the {type + " " + name}?</h2>
        <div className="mt-4 flex justify-evenly">
          <button className="rounded-lg bg-red-500 px-4 py-2" onClick={onConfirm}>Yes</button>
          <button className="rounded-lg bg-sky-800 px-4 py-2" onClick={onCancel}>Cancel</button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmationCard;
