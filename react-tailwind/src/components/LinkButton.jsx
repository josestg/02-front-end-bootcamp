export const LinkButton = (props) => {
  return (
    <div className="rounded-md shadow">
      <a
        href={props.href}
        className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10 focus:outline-none focus:ring focus:ring-violet-300 focus:ring-offset-4"
      >
        {props.label}
      </a>
    </div>
  );
};

export default LinkButton;
