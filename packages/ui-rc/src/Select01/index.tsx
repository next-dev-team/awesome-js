import { useState } from 'react';
import Select from 'react-tailwindcss-select';
import country from '../../data/country.json';

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


export const SelectDemo01 = () => {
  const [animal, setAnimal] = useState(null);
  const countryOptions = country.map((item) => ({ value: item.name, label: item.name }));



  const handleChange = (value: any) => {
    console.log('value:', value);
    setAnimal(value);
  };

  return (
    <Select
      value={animal}
      isSearchable
      isClearable
      onChange={handleChange}
      options={countryOptions}
      primaryColor={'red'}
      placeholder='Select a country'
    />
  );
};
