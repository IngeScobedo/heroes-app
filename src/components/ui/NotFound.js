import "./NotFound.css";

export const NotFound = () => {
  return (
    <div className="notfound">
      <div className="info">
        <h1>404 PAGE NOT FOUND</h1>
        <h4 className="dynamic-msg"></h4>
        <p className="text">
          Check that you typed the address correctly, go back to your previous
          page or try using our site search to find something specific.
        </p>
      </div>
      <div className="div">
        <img src="/assets/deadpool.gif"></img>
      </div>
    </div>
  );
};
