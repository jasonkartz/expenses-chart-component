export default function Attribution({ name }) {
  return (
    <p className="attribution">
      Challenge by{" "}
      <a
        href="https://www.frontendmentor.io?ref=challenge"
        target="_blank"
        rel="noreferrer"
      >
        Frontend Mentor
      </a>
      . Coded by{" "}
      <a href="https://jasonkartz.com/" target="_blank" rel="noreferrer">
        {name}
      </a>
      .
    </p>
  );
}
