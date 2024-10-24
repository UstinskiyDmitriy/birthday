import './Sun.css';

const Sun = () => {
  return (
    <div className="sun-container">
      <div className="rays">
        {[...Array(12)].map((_, i) => (
          <div key={i} className="ray" />
        ))}
      </div>
      <div className="sun" />
    </div>
  );
};

export default Sun;