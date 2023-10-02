interface Props {
  heading: string;
  text: string;
}

function TextSection({ heading, text }: Props) {
  return (
    <div>
      <h1 className="mt-4 text-xl font-semibold opacity-90">{heading}</h1>
      <p className="mt-4 text-sm opacity-70">{text}</p>
    </div>
  );
}

export default TextSection;
