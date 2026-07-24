import React, { useState, useEffect, useRef } from 'react';
import { FaMapMarkerAlt, FaChevronDown } from 'react-icons/fa';
import { getStatesByCountry } from '../data/stateData';
import './CountryAutocomplete.css';

export default function StateAutocomplete({
  id,
  name,
  value = '',
  onChange,
  country = '',
  placeholder = 'Select or type state',
  disabled = false,
  wrapClassName = '',
  icon: Icon = FaMapMarkerAlt,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const wrapperRef = useRef(null);
  const listRef = useRef(null);

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const availableStates = getStatesByCountry(country);
  const searchValue = (value || '').trim().toLowerCase();
  const searchClean = searchValue.replace(/[^a-z0-9]/g, '');

  const filteredStates = availableStates.filter((st) => {
    if (!searchValue) return true;
    const itemLower = st.toLowerCase();
    const itemClean = itemLower.replace(/[^a-z0-9]/g, '');
    return itemLower.includes(searchValue) || (searchClean && itemClean.includes(searchClean));
  }).sort((a, b) => {
    const aLower = a.toLowerCase();
    const bLower = b.toLowerCase();
    const aClean = aLower.replace(/[^a-z0-9]/g, '');
    const bClean = bLower.replace(/[^a-z0-9]/g, '');

    const aStartsWith = aLower.startsWith(searchValue) || (searchClean && aClean.startsWith(searchClean));
    const bStartsWith = bLower.startsWith(searchValue) || (searchClean && bClean.startsWith(searchClean));

    if (aStartsWith && !bStartsWith) return -1;
    if (!aStartsWith && bStartsWith) return 1;
    return a.localeCompare(b);
  });

  const handleInputChange = (e) => {
    if (onChange) {
      onChange(e);
    }
    setIsOpen(true);
    setHighlightedIndex(-1);
  };

  const handleSelectState = (stateName) => {
    if (onChange) {
      onChange({
        target: {
          name,
          value: stateName,
        },
        isSelect: true,
      });
    }
    setIsOpen(false);
    setHighlightedIndex(-1);
  };

  const handleKeyDown = (e) => {
    if (disabled) return;

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (!isOpen) {
        setIsOpen(true);
        setHighlightedIndex(0);
      } else {
        setHighlightedIndex((prev) =>
          prev < filteredStates.length - 1 ? prev + 1 : 0
        );
      }
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (isOpen) {
        setHighlightedIndex((prev) =>
          prev > 0 ? prev - 1 : filteredStates.length - 1
        );
      }
    } else if (e.key === 'Enter') {
      if (isOpen && highlightedIndex >= 0 && highlightedIndex < filteredStates.length) {
        e.preventDefault();
        handleSelectState(filteredStates[highlightedIndex]);
      }
    } else if (e.key === 'Escape') {
      setIsOpen(false);
      setHighlightedIndex(-1);
    }
  };

  useEffect(() => {
    if (isOpen && listRef.current && highlightedIndex >= 0) {
      const highlightedEl = listRef.current.children[highlightedIndex];
      if (highlightedEl) {
        highlightedEl.scrollIntoView({ block: 'nearest' });
      }
    }
  }, [highlightedIndex, isOpen]);

  return (
    <div className={`country-autocomplete-wrap ${wrapClassName}`} ref={wrapperRef}>
      {Icon && <Icon className="country-autocomplete__icon login-field__icon profile-field__icon" />}
      <input
        id={id}
        type="text"
        name={name}
        value={value}
        onChange={handleInputChange}
        onFocus={() => !disabled && setIsOpen(true)}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        disabled={disabled}
        autoComplete="off"
        className="country-autocomplete__input"
      />
      <button
        type="button"
        className="country-autocomplete__arrow-btn"
        onClick={() => !disabled && setIsOpen(!isOpen)}
        disabled={disabled}
        tabIndex={-1}
        aria-label="Toggle state dropdown"
      >
        <FaChevronDown
          className={`country-autocomplete__arrow ${
            isOpen ? 'country-autocomplete__arrow--open' : ''
          }`}
        />
      </button>

      {isOpen && !disabled && filteredStates.length > 0 && (
        <ul className="country-autocomplete__dropdown" ref={listRef}>
          {filteredStates.map((st, index) => {
            const isSelected = st.toLowerCase() === (value || '').trim().toLowerCase();
            const isHighlighted = index === highlightedIndex;
            return (
              <li
                key={st}
                className={`country-autocomplete__item ${
                  isHighlighted ? 'country-autocomplete__item--highlighted' : ''
                } ${isSelected ? 'country-autocomplete__item--selected' : ''}`}
                onMouseDown={(e) => {
                  e.preventDefault();
                  handleSelectState(st);
                }}
                onMouseEnter={() => setHighlightedIndex(index)}
              >
                {st}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
