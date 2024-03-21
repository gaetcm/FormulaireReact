const Form = (props) => {
  return (
    <>
      <form onSubmit={props.handleSubmit}>
        <h2>Create account</h2>

        <input
          value={props.name}
          type="text"
          name="name"
          placeholder="Nom"
          onChange={(event) => {
            //console.log(event.target.value);
            props.setName(event.target.value);
          }}
        />

        <input
          value={props.email}
          type="email"
          name="email"
          placeholder="Michel@sardou.fr"
          onChange={(event) => {
            props.setEmail(event.target.value);
          }}
        />

        <input
          className={props.showBorder}
          value={props.password}
          type="password"
          name="password"
          placeholder="Password"
          onChange={(event) => {
            props.setPassword(event.target.value);
          }}
        />

        <input
          className={props.showBorder}
          value={props.confirmpassword}
          type="password"
          name="confirmpassword"
          placeholder="Confirm your password"
          onChange={(event) => {
            props.setConfirmpassword(event.target.value);
          }}
        />
        <button className="buttonform">Envoyer</button>
        {props.showError === true && (
          <p style={{ color: "red" }}>Your passwords dont match</p>
        )}
      </form>
    </>
  );
};

export default Form;
