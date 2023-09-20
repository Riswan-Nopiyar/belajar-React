import Button from "../elements/Button";
import InputForm from "../elements/input/Index";

const FormLogin = () => {
    return (
        <form action="">
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
        
        < Button variant="bg-blue-600 w-full">login</Button>
      </form>
    );
};

export default FormLogin;