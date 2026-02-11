const Form = () => {
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Form Submitted!");
  };
  return (
    <div className="formContainer">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
      >
        <div className="name">
          <input type="text" name="" placeholder="Enter Name" id="" />
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
