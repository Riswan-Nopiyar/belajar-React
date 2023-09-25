import Button from "../elements/Button";
import InputForm from "../elements/input/Index";

const FormLogin = () => {

  const handleLogin = (event) => {
    event.preventDefault();
    localStorage.setItem('email', event.target.email.value);
    localStorage.setItem('password', event.target.password.value);
    window.location.href = "/products";
  };

    return (
        <form onSubmit={handleLogin}>
        <InputForm
        label="Email"
        type="email"
        placeholder="example@gmail.com"
        name="email"
        />
        <InputForm
        label="Password"
        type="password"
        placeholder="******"
        name="password"
        />
        
        < Button variant="bg-blue-600 w-full" type="submit">login</Button>
      </form>
    );
};

export default FormLogin;