const ErrorFallback = ({ error, resetErrorBoundary }) => (
  <div>
    <h2>Something went wrong:</h2>
    <pre>{error.message}</pre>
    <button onClick={resetErrorBoundary}>Try again</button>
  </div>
);

export default ErrorFallback;