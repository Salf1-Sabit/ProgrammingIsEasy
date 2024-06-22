import React, { useEffect, useState } from "react";

const PistonLanguages = () => {
  const [languages, setLanguages] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLanguages = async () => {
      try {
        const response = await fetch("https://emkc.org/api/v2/piston/versions");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setLanguages(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchLanguages();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Available Languages and Versions</h1>
      <ul>
        {languages.map((language) => (
          <li key={language.name}>
            <strong>{language.name}</strong>: {language.version.join(", ")}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PistonLanguages;
