import { useState } from 'react';
import { useSearchParams } from "react-router-dom";

import { Customdropdown, Dropdownheader, Dropdownlist, DropdownItem,SvgDown,DropdownText } from './Dropdown.stuled'
import sprite from '../../icons/sprite.svg'

function Dropdown() {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentQuery = searchParams.get('q');
  console.log(currentQuery)
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('Enter the text');

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSearchParams({ q: option.toLowerCase() });
    setSelectedOption(option);
    setIsOpen(false);
  };

  const options = [
  "Buick",
  "Volvo",
  "HUMMER",
  "Subaru",
  "Mitsubishi",
  "Nissan",
  "Lincoln",
  "GMC",
  "Hyundai",
  "MINI",
  "Bentley",
  "Mercedes-Benz",
  "Aston Martin",
  "Pontiac",
  "Lamborghini",
  "Audi",
  "BMW",
  "Chevrolet",
  "Mercedes-Benz",
  "Chrysler",
  "Kia",
  "Land"];
    
  return (
      <Customdropdown>
      <Dropdownheader onClick={toggleDropdown}>
        <DropdownText>{selectedOption }</DropdownText>
        <SvgDown  active={isOpen ? true : undefined}>
          <use href={sprite  + '#icon-chevron-down'}>
          </use>
        </SvgDown>
      </Dropdownheader>
      {isOpen && (
        <Dropdownlist>
          {options.map((option, index) => (
            <DropdownItem key={index} onClick={() => handleOptionClick(option)}>
              {option}
            </DropdownItem>
          ))}
        </Dropdownlist>
      )}
    </Customdropdown>
  )
}

export default Dropdown
