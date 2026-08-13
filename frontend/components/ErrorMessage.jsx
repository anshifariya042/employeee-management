export default function ErrorMessage({ message, onRetry }) {
  return (
    <div className="text-center py-10">
      <p className="text-red-500 mb-4">{message}</p>

      {onRetry && (
        <button
          onClick={onRetry}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg"
        >
          Try Again
        </button>
      )}
    </div>
  );
}