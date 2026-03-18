interface AISummaryProps {
  summary: string;
  isExpanded?: boolean;
  onToggle?: () => void;
}

export default function AISummary({
  summary,
  isExpanded = false,
  onToggle,
}: AISummaryProps) {
  return (
    <div className="bg-gray-100 border border-gray-200 rounded-lg p-6 mb-8">
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <h3 className="font-bold text-lg mb-3">AI summary</h3>
          <p className="text-gray-700 leading-relaxed">{summary}</p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          {onToggle && (
            <button
              onClick={onToggle}
              className="text-gray-600 hover:text-gray-900 transition-colors"
              aria-label={isExpanded ? "Collapse summary" : "Expand summary"}
            >
              <svg
                className={`w-6 h-6 transition-transform ${
                  isExpanded ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
