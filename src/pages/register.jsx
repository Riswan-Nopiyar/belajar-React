import AuthLayout from "../components/layout/AuthLayouts";
import FormRegister from "../components/fragments/FormRegister"; // Pastikan impor FormRegister dari lokasi yang benar

const RegisterPage = () => {
  return (
    <AuthLayout title="Register">
      <FormRegister />
    </AuthLayout>
  );
};

export default RegisterPage;
