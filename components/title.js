export const Title = ({ children }) => (
  <>
    <h1 className="title">{children}</h1>
    <style jsx>
      {`
        .title {
          margin: 0;
          line-height: 3.15;
          font-size: 5rem;
          text-align: center;
        }
      `}
    </style>
  </>
);

export const Subtitle = ({ children }) => (
  <>
    <h4 className="subtitle">{children}</h4>
    <style jsx>{`
      .subtitle {
        font-size: 2rem;
        font-weight: 300;
      }
    `}</style>
  </>
);
