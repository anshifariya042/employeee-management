export default function ErrorMessage({ message, onRetry }) {
  return (
    <div className="text-center py-10">
      <p className="text-red-500 mb-4">{message}</p>

      {onRetry && (
        <button
          onClick={onRetry}
          className="bg-olive-600 text-white px-4 py-2 rounded-lg hover:bg-olive-700 font-medium transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-olive-500 focus:ring-offset-2 cursor-pointer"
        >
          Try Again
        </button>
      )}
    </div>
  );
}