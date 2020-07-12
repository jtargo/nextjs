export const Input = ({ ...inputProps }) => (
  <>
    <input {...inputProps} className="input" />
    <style jsx>
      {`
        .input {
          text-align: center;
          padding: 0.9rem;
          padding-bottom: 1rem;
          border: 1px solid #212826;
          outline: none;
          border-radius: 8px;
          padding: 
        }
        .input:hover:active:focus {
          border: 1px solid #329D8A;
      }
      `}
    </style>
  </>
);
