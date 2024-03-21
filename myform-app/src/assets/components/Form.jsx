const Form = (props) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Create account</h2>

        <input
          value={props.name}
          type="text"
          name="name"
          placeholder="Nom"
          onChange={(event) => {
            console.log(event.target.value);
            setName(event.target.value);
          }}
        />

        <input
          value={props.email}
          type="email"
          name="email"
          placeholder="Michel@sardou.fr"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />

        <input
          className={showBorder}
          value={props.password}
          type="password"
          name="password"
          placeholder="Password"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />

        <input
          className={showBorder}
          value={props.confirmpassword}
          type="password"
          name="confirmpassword"
          placeholder="Confirm your password"
          onChange={(event) => {
            setConfirmpassword(event.target.value);
          }}
        />
        <button className="buttonform">Envoyer</button>
        {showError === true && (
          <p style={{ color: "red" }}>Nul tu es NUL !!!</p>
        )}
      </form>
    </>
  );
};

export default Form;
