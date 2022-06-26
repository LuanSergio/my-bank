import LoginForm from '@components/LoginForm';
import FormLayout from '@components/FormLayout';
import useRedirect from '@hooks/useRedirect';

const Login = (): JSX.Element => {
  useRedirect();

  return (
    <FormLayout>
      <LoginForm />
    </FormLayout>
  );
};

export default Login;
