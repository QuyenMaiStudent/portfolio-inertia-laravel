function ProgressBar({ label, value }: { label: string; value: number }) {
    return (
        <div className="my-2">
            <div className="mb-1 flex justify-between text-sm">
                <span>{label}</span>
                <span>{value}%</span>
            </div>
            <div className="h-3 w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
                <div className="h-3 bg-blue-500 dark:bg-blue-400" style={{ width: `${Math.max(0, Math.min(100, value))}%` }}></div>
            </div>
        </div>
    );
}

export default ProgressBar;
