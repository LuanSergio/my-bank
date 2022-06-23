import { ChangeEvent, ReactNode, useState } from 'react';

import Button from '@components/Button';
import Input from '@components/Input';

import styles from './styles.module.scss';

const EditCustomerForm = (): JSX.Element => {
  const [name, setName] = useState('');
  const [document, setDocument] = useState('');
  const [agency, setAgency] = useState('');
  const [account, setAccount] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  function handleNameChange(event: ChangeEvent<HTMLInputElement>) {
    setName(event.target.value);
  }

  function handleDocumentChange(event: ChangeEvent<HTMLInputElement>) {
    setDocument(event.target.value);
  }

  function handleAgencyChange(event: ChangeEvent<HTMLInputElement>) {
    setAgency(event.target.value);
  }

  function handleAccountChange(event: ChangeEvent<HTMLInputElement>) {
    setAccount(event.target.value);
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Editar</h1>
      <form className={styles.form}>
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
          name="agency"
          label="Agência"
          value={agency}
          type="tel"
          maxLength={4}
          required
          onChange={handleAgencyChange}
        />

        <Input
          name="account"
          label="Conta"
          value={account}
          type="tel"
          maxLength={6}
          required
          onChange={handleAccountChange}
        />

        <Button color="primary" type="submit" isLoading={isLoading}>
          Editar
        </Button>
      </form>
    </div>
  );
};

export default EditCustomerForm;
