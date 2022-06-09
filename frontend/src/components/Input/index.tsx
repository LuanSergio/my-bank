import styles from './styles.module.scss';
import { ChangeEvent } from 'react';

interface IInputProps {
  label: string;
  value: string;
  name: string;
  type?: string;
  required?: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({
  value,
  label,
  onChange,
  name,
  type = 'text',
}: IInputProps): JSX.Element => {
  return (
    <div className={styles.container}>
      <input
        required
        onChange={onChange}
        name={name}
        type={type}
        value={value}
        className={styles.input}
      />
      <label
        className={`${styles.label} ${
          value.length > 0 ? styles.labelTransformed : ''
        }`}
        htmlFor={name}
      >
        {label}
      </label>
    </div>
  );
};

export default Input;
