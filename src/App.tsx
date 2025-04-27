import { createSignal, type Component, createEffect } from 'solid-js';

import { TextField } from './components/textField/TextField';
import { Container } from './components/container/Container';
import { ThemeProvider } from './components/theme/Theme';

const App: Component = () => {
  const [fieldValue, setFieldValue] = createSignal('')
  createEffect(() => {
    console.log('fieldValue', fieldValue())
  })
  return (
    <ThemeProvider>
      <Container>
        <h1 class="text-3xl font-bold underline">
          Hello world!
        </h1>
        <TextField id='id' title='testLabel' defaultValue={fieldValue()} onChange={setFieldValue} />
      </Container>
    </ThemeProvider>

  );
};

export default App;
