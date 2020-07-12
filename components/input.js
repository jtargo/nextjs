export const Input = ({ ...inputProps }) => (
  <>
    <input {...inputProps} className="input" />
    <style jsx>
      {`
        .input {
          text-align: center;
          padding: 0.7rem;
          border: 1px solid #212826;
          outline: none;
          border-radius: 10px;
        }
        .input:hover:active:focus {
          border: 1px solid #329D8A;
      }
      `}
    </style>
  </>
);
