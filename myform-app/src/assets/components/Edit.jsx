const Edit = (props) => {
  return (
    <>
      <div className="edit">
        <div className="textedit">
          <p>name={props.name}</p>
          <p>email={props.email}</p>
          <p>password={props.password}</p>
        </div>
        <button onSubmit={props.setSwitcher(true)}>
          Edit your informations
        </button>
      </div>
    </>
  );
};

export default Edit;
