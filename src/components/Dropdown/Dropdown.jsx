import { useState, } from 'react';
// import { useSearchParams } from "react-router-dom";

import { Customdropdown, Dropdownheader, Dropdownlist, DropdownItem,SvgDown,DropdownText } from './Dropdown.stuled'
import sprite from '../../icons/sprite.svg'

function Dropdown({arr,value,set,height}) {
  // const [searchParams, setSearchParams] = useSearchParams();
  // const currentQuery = searchParams.get('price');
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (arr) => {
    set(arr)
    setSelectedOption(arr);
    setIsOpen(false);
  };

    
  return (
      <Customdropdown>
      <Dropdownheader onClick={toggleDropdown}>
        <DropdownText>{selectedOption || value }</DropdownText>
        <SvgDown  $active={isOpen ? true : undefined}>
          <use href={sprite  + '#icon-chevron-down'}>
          </use>
        </SvgDown>
      </Dropdownheader>
      {isOpen && (
        <Dropdownlist $heigh={height ? height : undefined}>
          {arr.map((arr, index) => (
            <DropdownItem key={index} onClick={() => handleOptionClick(arr)}>
              {arr}
            </DropdownItem>
          ))}
        </Dropdownlist>
      )}
    </Customdropdown>
  )
}

export default Dropdown
