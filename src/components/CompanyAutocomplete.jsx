import React, { useState, useEffect, useRef } from 'react';
import { FaBuilding, FaChevronDown } from 'react-icons/fa';
import { COMPANY_OPTIONS } from '../data/formdata';
import { db, isFirebaseConfigured } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';
import './CompanyAutocomplete.css';

export default function CompanyAutocomplete({
  id,
  name,
  value = '',
  onChange,
  placeholder = 'Select or type company name',
  disabled = false,
  wrapClassName = '',
  icon: Icon = FaBuilding,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const [allCompanies, setAllCompanies] = useState(COMPANY_OPTIONS);
  const wrapperRef = useRef(null);
  const listRef = useRef(null);

  // Fetch dynamic companies from Firebase collection if configured
  useEffect(() => {
    let isMounted = true;
    async function fetchDynamicCompanies() {
      if (!isFirebaseConfigured || !db) return;
      try {
        const querySnapshot = await getDocs(collection(db, 'companies'));
        const dynamicList = [];
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          if (data && data.name && typeof data.name === 'string') {
            dynamicList.push(data.name.trim());
          }
        });

        if (dynamicList.length > 0 && isMounted) {
          const combined = Array.from(new Set([...COMPANY_OPTIONS, ...dynamicList])).sort((a, b) =>
            a.localeCompare(b)
          );
          setAllCompanies(combined);
        }
      } catch (err) {
        // Silently fallback to static COMPANY_OPTIONS if firestore rules or network restrict reading
        if (err?.code !== 'permission-denied') {
          console.warn('Failed to fetch dynamic companies list:', err);
        }
      }
    }

    fetchDynamicCompanies();
    return () => {
      isMounted = false;
    };
  }, []);

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

  const filteredCompanies = allCompanies.filter((company) => {
    if (!searchValue) return true;
    const itemLower = company.toLowerCase();
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

  const handleSelectCompany = (companyName) => {
    if (onChange) {
      onChange({
        target: {
          name,
          value: companyName,
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
          prev < filteredCompanies.length - 1 ? prev + 1 : 0
        );
      }
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (isOpen) {
        setHighlightedIndex((prev) =>
          prev > 0 ? prev - 1 : filteredCompanies.length - 1
        );
      }
    } else if (e.key === 'Enter') {
      if (isOpen && highlightedIndex >= 0 && highlightedIndex < filteredCompanies.length) {
        e.preventDefault();
        handleSelectCompany(filteredCompanies[highlightedIndex]);
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
    <div className={`company-autocomplete-wrap ${wrapClassName}`} ref={wrapperRef}>
      {Icon && <Icon className="company-autocomplete__icon login-field__icon profile-field__icon" />}
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
        className="company-autocomplete__input"
      />
      <button
        type="button"
        className="company-autocomplete__arrow-btn"
        onClick={() => !disabled && setIsOpen(!isOpen)}
        disabled={disabled}
        tabIndex={-1}
        aria-label="Toggle company dropdown"
      >
        <FaChevronDown
          className={`company-autocomplete__arrow ${isOpen ? 'company-autocomplete__arrow--open' : ''
            }`}
        />
      </button>

      {isOpen && !disabled && filteredCompanies.length > 0 && (
        <ul className="company-autocomplete__dropdown" ref={listRef}>
          {filteredCompanies.map((company, index) => {
            const isSelected = company.toLowerCase() === (value || '').trim().toLowerCase();
            const isHighlighted = index === highlightedIndex;
            return (
              <li
                key={company}
                className={`company-autocomplete__item ${isHighlighted ? 'company-autocomplete__item--highlighted' : ''
                  } ${isSelected ? 'company-autocomplete__item--selected' : ''}`}
                onClick={() => handleSelectCompany(company)}
                onMouseEnter={() => setHighlightedIndex(index)}
              >
                {company}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
