import CustomerTable from '@components/CustomerTable';
import Header from '@components/Header';
import useRedirect from '@hooks/useRedirect';

const Customers = (): JSX.Element => {
  useRedirect();

  return (
    <>
      <Header />
      <main className="h-container">
        <CustomerTable />
      </main>
    </>
  );
};

export default Customers;
