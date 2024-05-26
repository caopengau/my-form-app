/* eslint-disable @typescript-eslint/no-explicit-any */
import FormRenderer from '@data-driven-forms/react-form-renderer/form-renderer';
import { componentMapper } from '@data-driven-forms/mui-component-mapper';
import FormTemplate from '@data-driven-forms/mui-component-mapper/form-template';
import formSchema from './formSchema';
import { Container } from '@mui/material';

const BasicForm = () => {
  const handleSubmit = (values:any) => {
    console.log('Form submitted:', values);
    // Handle form submission, e.g., send data to a server
  };

  return (
    <Container>
      <FormRenderer
        FormTemplate={FormTemplate}
        componentMapper={componentMapper}
        schema={formSchema}
        onSubmit={handleSubmit}
      />
    </Container>
  );
};

export default BasicForm;
