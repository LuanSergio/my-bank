import {
  ChangeEvent,
  Dispatch,
  FormEvent,
  SetStateAction,
  useEffect,
  useState,
} from 'react';

import Button from '@components/Button';
import Input from '@components/Input';
import useEditCustomer from './useEditCustomer';

import styles from './styles.module.scss';

interface IEditCustomerFormProps {
  customer: ICustomer;
  forceUpdate: Dispatch<SetStateAction<number>>;
}

const EditCustomerForm = ({
  customer,
  forceUpdate,
}: IEditCustomerFormProps): JSX.Element => {
  const [name, setName] = useState('');
  const [document, setDocument] = useState('');
  const [agency, setAgency] = useState('');
  const [account, setAccount] = useState('');
  const [code, setCode] = useState('');
  const [bankName, setBankName] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setName(customer.name);
    setDocument(customer.document);
    setAgency(customer.bank.agency);
    setAccount(customer.bank.account);
    setCode(customer.bank.code);
    setBankName(customer.bank.bankName);
  }, []);

  function handleNameChange(event: ChangeEvent<HTMLInputElement>) {
    setName(event.target.value);
  }

  function handleDocumentChange(event: ChangeEvent<HTMLInputElement>) {
    setDocument(event.target.value);
  }

  function handleBankNameChange(event: ChangeEvent<HTMLInputElement>) {
    setBankName(event.target.value);
  }

  function handleAgencyChange(event: ChangeEvent<HTMLInputElement>) {
    setAgency(event.target.value);
  }

  function handleAccountChange(event: ChangeEvent<HTMLInputElement>) {
    setAccount(event.target.value);
  }

  function handleCodeChange(event: ChangeEvent<HTMLInputElement>) {
    setCode(event.target.value);
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    setIsLoading(true);
    await useEditCustomer({
      name,
      document,
      agency,
      account,
      code,
      bankName,
      id: customer.id,
      forceUpdate,
    });
    setIsLoading(false);
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Editar</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <Input
          name="name"
          label="Nome"
          value={name}
          type="text"
          required
          onChange={handleNameChange}
        />

        <Input
          name="document"
          label="Documento"
          value={document}
          type="tel"
          maxLength={10}
          required
          onChange={handleDocumentChange}
        />

        <Input
          name="bankName"
          label="Nome do banco"
          value={bankName}
          type="string"
          required
          onChange={handleBankNameChange}
        />

        <Input
          name="agency"
          label="Agência"
          value={agency}
          type="tel"
          maxLength={4}
          required
          onChange={handleAgencyChange}
        />

        <div className={styles.inputGroup}>
          <Input
            name="account"
            label="Conta"
            value={account}
            type="tel"
            maxLength={6}
            required
            onChange={handleAccountChange}
          />

          <Input
            name="code"
            label="Código"
            value={code}
            type="tel"
            maxLength={2}
            required
            onChange={handleCodeChange}
          />
        </div>
        <Button color="primary" type="submit" isLoading={isLoading}>
          Editar
        </Button>
      </form>
    </div>
  );
};

export default EditCustomerForm;
