import RegisterForm from '@components/RegisterForm';
import FormLayout from '@components/FormLayout';
import useRedirect from '@hooks/useRedirect';

const Home = (): JSX.Element => {
  useRedirect();

  return (
    <FormLayout>
      <RegisterForm />
    </FormLayout>
  );
};

export default Home;
