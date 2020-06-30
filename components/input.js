export const Input = ({ ...inputProps }) => (
  <>
    <input {...inputProps} className="input" />
    <style jsx>
      {`
        .input {
          text-align: center;
          padding: 0.5rem;
          border: 1px solid #212122;
          outline: none;
          border-radius: 2px;
        }
      `}
    </style>
  </>
);
