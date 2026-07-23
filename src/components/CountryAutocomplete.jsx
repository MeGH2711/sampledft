import React, { useState, useEffect, useRef } from 'react';
import { FaGlobe, FaChevronDown } from 'react-icons/fa';
import { COUNTRIES } from '../data/countryData';
import './CountryAutocomplete.css';

export default function CountryAutocomplete({
  id,
  name,
  value = '',
  onChange,
  placeholder = 'Select or type country',
  disabled = false,
  wrapClassName = '',
  icon: Icon = FaGlobe,
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

  const searchValue = (value || '').trim().toLowerCase();
  const searchClean = searchValue.replace(/[^a-z0-9]/g, '');

  const filteredCountries = COUNTRIES.filter((country) => {
    if (!searchValue) return true;
    const itemLower = country.toLowerCase();
    const itemClean = itemLower.replace(/[^a-z0-9]/g, '');
    return itemLower.includes(searchValue) || (searchClean && itemClean.includes(searchClean));
  }).sort((a, b) => {
    if (a === 'India') return -1;
    if (b === 'India') return 1;

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

  const handleSelectCountry = (countryName) => {
    if (onChange) {
      onChange({
        target: {
          name,
          value: countryName,
        },
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
          prev < filteredCountries.length - 1 ? prev + 1 : 0
        );
      }
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (isOpen) {
        setHighlightedIndex((prev) =>
          prev > 0 ? prev - 1 : filteredCountries.length - 1
        );
      }
    } else if (e.key === 'Enter') {
      if (isOpen && highlightedIndex >= 0 && highlightedIndex < filteredCountries.length) {
        e.preventDefault();
        handleSelectCountry(filteredCountries[highlightedIndex]);
      }
    } else if (e.key === 'Escape') {
      setIsOpen(false);
      setHighlightedIndex(-1);
    }
  };

  // Scroll highlighted item into view
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
        aria-label="Toggle country dropdown"
      >
        <FaChevronDown
          className={`country-autocomplete__arrow ${
            isOpen ? 'country-autocomplete__arrow--open' : ''
          }`}
        />
      </button>

      {isOpen && !disabled && (
        <ul className="country-autocomplete__dropdown" ref={listRef}>
          {filteredCountries.length > 0 ? (
            filteredCountries.map((country, index) => {
              const isSelected = country.toLowerCase() === (value || '').trim().toLowerCase();
              const isHighlighted = index === highlightedIndex;
              return (
                <li
                  key={country}
                  className={`country-autocomplete__item ${
                    isHighlighted ? 'country-autocomplete__item--highlighted' : ''
                  } ${isSelected ? 'country-autocomplete__item--selected' : ''}`}
                  onMouseDown={(e) => {
                    e.preventDefault();
                    handleSelectCountry(country);
                  }}
                  onMouseEnter={() => setHighlightedIndex(index)}
                >
                  {country}
                </li>
              );
            })
          ) : (
            <li className="country-autocomplete__no-results">No countries found</li>
          )}
        </ul>
      )}
    </div>
  );
}
