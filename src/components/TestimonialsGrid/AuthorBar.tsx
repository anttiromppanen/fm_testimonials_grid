interface Props {
  authorImg: string;
  author: string;
  verified: string;
}

function AuthorBar({ authorImg, author, verified }: Props) {
  return (
    <div className="flex items-center gap-x-4">
      <img
        src={authorImg}
        alt=""
        className="border-userWhite50Alpha h-8 w-8 rounded-full border-2"
      />
      <div>
        <p className="text-sm tracking-wide opacity-80">{author}</p>
        <p className="-mt-1 text-sm opacity-50">{verified}</p>
      </div>
    </div>
  );
}

export default AuthorBar;
