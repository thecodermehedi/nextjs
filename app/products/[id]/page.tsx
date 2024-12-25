type TParams = { [key: string]: string };
type TQuery = { [key: string]: string | string[] | undefined };
type TProps = { params: Promise<TParams>; searchParams: Promise<TQuery> };

const Product = async (props: TProps) => {
  const params = await props.params;
  const queries = await props.searchParams;

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <div className="mx-auto mt-4 w-full max-w-xs rounded-xl border border-green-400 p-2">
        <h2 className="text-lg font-semibold">Params</h2>
        {Object.entries(params).length > 0 ? (
          Object.entries(params).map(([key, value]) => (
            <p key={key}>
              {`params.${key}`}: {value}
            </p>
          ))
        ) : (
          <p>No parameters provided.</p>
        )}
      </div>
      <div className="mx-auto mt-4 w-full max-w-xs rounded-xl border border-yellow-400 p-2 text-left">
        <h2 className="text-lg font-semibold">SearchParams</h2>
        {Object.entries(queries).length > 0 ? (
          Object.entries(queries).map(([key, value]) => (
            <p key={key}>
              {`queries.${key}`}:{" "}
              {Array.isArray(value) ? value.join(", ") : value}
            </p>
          ))
        ) : (
          <p>No query parameters provided.</p>
        )}
      </div>
    </div>
  );
};

export default Product;
