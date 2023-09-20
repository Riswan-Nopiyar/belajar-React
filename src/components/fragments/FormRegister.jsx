import Button from "../elements/Button";
import InputForm from "../elements/input/Index";

const FormRegister = () => {
    return (
        <form action="">
        <InputForm
        label="fullname"
        type="text"
        placeholder="insert your name here..."
        name="fullname"
        />
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
        <InputForm
        label="confirm Password"
        type="password"
        placeholder="******"
        name="confirm password"
        />
        < Button variant="bg-blue-600 w-full">Register</Button>
      </form>
    );
};

export default FormRegister;