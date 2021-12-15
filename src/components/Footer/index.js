import React from 'react';

function Footer() {
  const icons = [
    {
      name: "fab fa-github",
      link: "https://github.com/kuyadylan"
    },
    {
      name: "fab fa-linkedin",
      link: "https://www.linkedin.com/in/dylan-dimayuga-35823a215/"
    },
  ]
  
  return (
    <footer className="flex-row px-a1">
      {icons.map(icon => (
          <a href={icon.link} key={icon.name} target="_blank" rel="noopener noreferrer"><i className={icon.name}></i></a>
        ))}
    </footer>
  );
}

export default Footer;