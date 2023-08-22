const Loader = () => {
    return (
      <>
        <div
          className="spinner-grow text-sm text-danger"
          style={{ width: "1rem", height: "1rem" }}
          role="status"
        >
          <span className="sr-only">Loading...</span>
        </div>
        <div
          className="spinner-grow text-sm text-warning"
          style={{ width: "1rem", height: "1rem" }}
          role="status"
        >
          <span className="sr-only">Loading...</span>
        </div>
        <div
          className="spinner-grow text-sm text-success"
          style={{ width: "1rem", height: "1rem" }}
          role="status"
        >
          <span className="sr-only">Loading...</span>
        </div>
        <div
          className="spinner-grow text-sm text-info"
          style={{ width: "1rem", height: "1rem" }}
          role="status"
        >
          <span className="sr-only">Loading...</span>
        </div>
      </>
    );
}
 
export default Loader;