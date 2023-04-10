function Category({ tittle, score, bgColor, textColor, key, children }) {
  return (
    <div className="Category" key={key} style={{ background: bgColor }}>
      <div className="Category__tittle">
        {children}
        <p className="Category__text" style={{ color: textColor }}>
          {tittle}
        </p>
      </div>
      <p className="Category__score">{score} / 100</p>
    </div>
  );
}

export default Category;
