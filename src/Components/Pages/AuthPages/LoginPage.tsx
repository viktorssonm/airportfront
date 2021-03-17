export const LoginPage: React.FC = () => {
  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(e);
  };

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-sm-6 text-center">
          <h1>Please sign in</h1>
          <p>
            Please sign in with username and password to start using this
            fantastic service!
          </p>
        </div>
      </div>
      <div className="row justify-content-center mt-5">
        <div className="col-sm-6 ">
          <form onSubmit={handleOnSubmit}>
            <div className="form-group mb-2">
              <label htmlFor="emailInput" className="form-label">
                Email address
              </label>
              <input type="email" className="form-control" id="emailInput" />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input type="password" className="form-control" id="password" />
            </div>
            <div className="row">
              <div className="col-sm-5">
                <button className="btn btn-outline-primary">Login</button>
              </div>
            </div>
            <div className="row mt-4">
              <p>Don't have an account yet? Signup here</p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
