import { FC, useState } from 'react';
import Input from '@/components/input';

import { Form as Container } from './sign-in.styles';
import Button from '@/components/button';

const Form: FC = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  return (
    <Container onSubmit={handleSubmit}>
      <Input
        width={250}
        placeholder="Usuario"
        style={{ marginTop: 40, marginBottom: 10 }}
      />
      <Input
        width={250}
        placeholder="Senha"
        style={{ marginBottom: 20 }}
        type="password"
      />

      <Button
        text="Entrar"
        loading={loading}
        width={250}
      />
    </Container>
  );
};

export default Form;
