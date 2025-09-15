export default function Toast({ message }) {
  return (
    <>
      <div
        style={{ fontFamily: "'Poppins', 'sans-serif'" }}
        className="bg-[#2F251C] text-white fixed bottom-3 right-3 p-3 w-90 rounded-lg border border-black z-90"
      >
        {message}
      </div>
    </>
  );
}
