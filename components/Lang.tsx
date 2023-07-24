import React from "react";

interface LanguageSwitcherProps {
  languages: string[];
  currentLanguage: string;
  onChangeLanguage: (language: string) => void;
}

type Props = {};

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  languages,
  currentLanguage,
  onChangeLanguage,
}) => {
  return (
    <div>
      <label htmlFor="currentLanguage" className="mr-2">
        {currentLanguage}
      </label>
      <select
        id="currentLanguage"
        value={currentLanguage}
        onChange={(e) => onChangeLanguage(e.target.value)}
        className="border border-gray-300 rounded px-2 py-1"
      >
        {languages.map((language) => (
          <option key={language} value={language}>
            {language}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageSwitcher;
