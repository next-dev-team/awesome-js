import { useState } from 'react';
import Select from 'react-tailwindcss-select';

const options = [
  { value: 'fox', label: '🦊 Fox' },
  { value: 'Butterfly', label: '🦋 Butterfly' },
  { value: 'Honeybee', label: '🐝 Honeybee' },
];

export const SelectDemo = () => {
  const [animal, setAnimal] = useState(null);

  const handleChange = (value: any) => {
    console.log('value:', value);
    setAnimal(value);
  };

  return (
    <Select
      value={animal}
      isSearchable
      isClearable
      isMultiple
      onChange={handleChange}
      options={options}
      primaryColor={'red'}
    />
  );
};
