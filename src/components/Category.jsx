function Category({ tittle, score, bgColor, textColor, children }) {
  return (
    <div className="category" style={{ background: bgColor }}>
      <div className="category__title">
        {children}
        <p className="category__text" style={{ color: textColor }}>
          {tittle}
        </p>
      </div>
      <p className="category__score">
        {score}
        <span> / 100</span>
      </p>
    </div>
  );
}

export default Category;
