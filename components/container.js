export const Container = ({ children }) => (
  <>
    <div className="container">{children}</div>
    <style jsx>{`
      .container {
        padding: 4rem 0;
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
    `}</style>
  </>
);
